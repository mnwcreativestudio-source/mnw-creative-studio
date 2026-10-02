import { createServerFn } from "@tanstack/react-start";
import {
  createRazorpayOrderOnServer,
  verifyRazorpayPaymentOnServer,
  type CreateOrderInput,
  type CreateOrderResult,
  type VerifyPaymentInput,
  type VerifyPaymentResult,
} from "./razorpay.server";

export type { CreateOrderInput, CreateOrderResult, VerifyPaymentInput, VerifyPaymentResult };

/**
 * TanStack Start Server Function: Create Razorpay Order
 * Executes strictly on the server with server-side credentials.
 */
export const createRazorpayOrderFn = createServerFn({ method: "POST" })
  .validator((data: CreateOrderInput) => data)
  .handler(async ({ data }) => {
    return await createRazorpayOrderOnServer(data);
  });

/**
 * TanStack Start Server Function: Verify Payment Signature
 * Computes HMAC-SHA256 with RAZORPAY_KEY_SECRET strictly on the server.
 */
export const verifyRazorpayPaymentFn = createServerFn({ method: "POST" })
  .validator((data: VerifyPaymentInput) => data)
  .handler(async ({ data }) => {
    return await verifyRazorpayPaymentOnServer(data);
  });

/**
 * Universal client helper to create Razorpay Order.
 * Attempts createServerFn first, falls back to REST API.
 */
export async function createRazorpayOrder(input: CreateOrderInput): Promise<CreateOrderResult> {
  try {
    const result = await createRazorpayOrderFn({ data: input });
    if (result && result.orderId) {
      return result;
    }
  } catch (err) {
    // If running in an environment without serverFn RPC active, fallback to REST route
    console.info("Using REST endpoint fallback for order creation:", err);
  }

  const res = await fetch("/api/razorpay/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = (await res.json()) as CreateOrderResult & { error?: string };
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Failed to initialize payment order.");
  }

  return data;
}

/**
 * Universal client helper to verify Razorpay signature server-side.
 * Attempts createServerFn first, falls back to REST API.
 */
export async function verifyRazorpayPayment(input: VerifyPaymentInput): Promise<VerifyPaymentResult> {
  try {
    const result = await verifyRazorpayPaymentFn({ data: input });
    if (result && result.success) {
      return result;
    }
  } catch (err) {
    console.info("Using REST endpoint fallback for payment verification:", err);
  }

  const res = await fetch("/api/razorpay/verify-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = (await res.json()) as VerifyPaymentResult & { error?: string };
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Payment signature verification failed.");
  }

  return data;
}
