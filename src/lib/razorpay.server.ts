import crypto from "node:crypto";
import { getSupabase } from "./supabase";
import { ALLOWED_PLANS, type PlanId, type PlanPricing } from "./razorpay-shared";

export type { PlanId, PlanPricing };
export { ALLOWED_PLANS };

/**
 * Resolves server-side environment variables across Vercel, Node, and Edge environments.
 * NEVER exposes secrets to the client.
 */
export function getServerEnvVar(name: string, env?: unknown): string {
  if (typeof process !== "undefined" && process.env && process.env[name]) {
    return process.env[name] as string;
  }
  if (env && typeof env === "object" && name in env) {
    const val = (env as Record<string, unknown>)[name];
    if (typeof val === "string") return val;
  }
  return "";
}

/**
 * Retrieves server-side Razorpay credentials.
 * Throws a descriptive error if missing on the server.
 */
export function getRazorpayServerCredentials(env?: unknown): { keyId: string; keySecret: string } {
  const keyId =
    getServerEnvVar("RAZORPAY_KEY_ID", env) ||
    getServerEnvVar("VITE_RAZORPAY_KEY_ID", env);

  const keySecret = getServerEnvVar("RAZORPAY_KEY_SECRET", env);

  if (!keyId || !keySecret) {
    throw new Error(
      "Razorpay Live credentials (RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET) are not configured on the server. Please verify your Vercel or environment configuration.",
    );
  }

  return { keyId: keyId.trim(), keySecret: keySecret.trim() };
}

/**
 * Normalizes user plan input to authorized PlanId.
 */
export function normalizePlanId(planInput: string): PlanId {
  const clean = (planInput || "").trim().toUpperCase();
  if (clean.includes("STARTER")) return "STARTER";
  if (clean.includes("PROFESSIONAL")) return "PROFESSIONAL";
  if (clean.includes("PREMIUM")) return "PREMIUM";
  throw new Error(`Plan "${planInput}" is not eligible for automated checkout.`);
}

/**
 * Server determines the exact authorized INR amount for the selected plan.
 * Client-provided amounts are never trusted.
 */
export function getAuthorizedPlanAmountINR(planId: PlanId, env?: unknown): number {
  const plan = ALLOWED_PLANS[planId];
  if (!plan) {
    throw new Error(`Unknown plan "${planId}".`);
  }

  let envAmountStr = "";
  if (planId === "STARTER") {
    envAmountStr = getServerEnvVar("RAZORPAY_STARTER_AMOUNT_INR", env);
  } else if (planId === "PROFESSIONAL") {
    envAmountStr = getServerEnvVar("RAZORPAY_PROFESSIONAL_AMOUNT_INR", env);
  } else if (planId === "PREMIUM") {
    envAmountStr = getServerEnvVar("RAZORPAY_PREMIUM_AMOUNT_INR", env);
  }

  if (envAmountStr) {
    const parsed = parseInt(envAmountStr.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }

  return plan.defaultInrAmount;
}

export type CreateOrderInput = {
  planId: string;
  customer: {
    name: string;
    email: string;
    business?: string | null;
    projectType?: string | null;
    message?: string | null;
    phone?: string | null;
  };
};

export type CreateOrderResult = {
  success: boolean;
  orderId: string;
  amount: number; // in paise
  amountINR: number;
  currency: string;
  keyId: string;
  planId: PlanId;
  planName: string;
};

/**
 * Creates a verified Razorpay order server-side.
 * The client only receives the public Key ID and order reference.
 */
export async function createRazorpayOrderOnServer(
  input: CreateOrderInput,
  env?: unknown,
): Promise<CreateOrderResult> {
  const { keyId, keySecret } = getRazorpayServerCredentials(env);
  const planId = normalizePlanId(input.planId);
  const plan = ALLOWED_PLANS[planId];

  const amountINR = getAuthorizedPlanAmountINR(planId, env);
  const amountPaise = amountINR * 100;
  const currency = (getServerEnvVar("RAZORPAY_CURRENCY", env) || "INR").toUpperCase();

  const customerName = (input.customer.name || "").trim().slice(0, 50);
  const customerEmail = (input.customer.email || "").trim().slice(0, 80);
  const businessName = (input.customer.business || "").trim().slice(0, 50) || "N/A";
  const projectType = (input.customer.projectType || plan.name).trim().slice(0, 60);

  const receiptId = `mnw_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`;

  const basicAuth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`,
    },
    body: JSON.stringify({
      amount: amountPaise,
      currency,
      receipt: receiptId,
      notes: {
        studio: "MNW Creative Studio",
        plan_id: planId,
        plan_name: plan.name,
        customer_name: customerName,
        customer_email: customerEmail,
        business_name: businessName,
        project_type: projectType,
      },
    }),
  });

  const responseData = (await response.json()) as {
    id?: string;
    amount?: number;
    currency?: string;
    error?: { description?: string; code?: string };
  };

  if (!response.ok || !responseData.id) {
    const desc = responseData.error?.description || "Failed to create Razorpay order with payment gateway.";
    throw new Error(desc);
  }

  return {
    success: true,
    orderId: responseData.id,
    amount: responseData.amount || amountPaise,
    amountINR,
    currency,
    keyId,
    planId,
    planName: plan.name,
  };
}

export type VerifyPaymentInput = {
  orderId: string;
  paymentId: string;
  signature: string;
  planId: string;
  customer: {
    name: string;
    email: string;
    business?: string | null;
    projectType?: string | null;
    message?: string | null;
  };
};

export type VerifyPaymentResult = {
  success: boolean;
  paymentId: string;
  orderId: string;
  planName: string;
};

/**
 * Validates HMAC SHA-256 signature using RAZORPAY_KEY_SECRET on the server.
 * Records the verified payment in Supabase public.inquiries table.
 */
export async function verifyRazorpayPaymentOnServer(
  input: VerifyPaymentInput,
  env?: unknown,
): Promise<VerifyPaymentResult> {
  const { keySecret } = getRazorpayServerCredentials(env);

  const { orderId, paymentId, signature } = input;
  if (!orderId || !paymentId || !signature) {
    throw new Error("Missing required payment verification details.");
  }

  // Generate expected HMAC SHA-256 signature
  const expectedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  // Constant-time comparison to prevent timing attacks
  const signatureBuffer = Buffer.from(signature, "utf-8");
  const expectedBuffer = Buffer.from(expectedSignature, "utf-8");

  const isValid =
    signatureBuffer.length === expectedBuffer.length &&
    crypto.timingSafeEqual(signatureBuffer, expectedBuffer);

  if (!isValid) {
    throw new Error("Payment signature verification failed. The transaction could not be validated.");
  }

  const planId = normalizePlanId(input.planId);
  const plan = ALLOWED_PLANS[planId];

  // Save the verified paid inquiry to Supabase inquiries table
  try {
    const supabase = getSupabase();
    await supabase.from("inquiries").insert([
      {
        name: input.customer.name.trim(),
        email: input.customer.email.trim().toLowerCase(),
        business_name: input.customer.business?.trim() || null,
        project_type: `${input.customer.projectType || plan.name} [PAID: ${paymentId}]`,
        message: `${input.customer.message || ""}\n\n--- Verified Payment Details ---\nRazorpay Payment ID: ${paymentId}\nRazorpay Order ID: ${orderId}\nStatus: Verified & Confirmed`,
      },
    ]);
  } catch (err) {
    // Log error but do not fail verified payment
    console.error("Failed to record paid inquiry in Supabase:", err);
  }

  return {
    success: true,
    paymentId,
    orderId,
    planName: plan.name,
  };
}
