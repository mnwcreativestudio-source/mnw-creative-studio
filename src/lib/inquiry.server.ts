import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { getSupabase } from "./supabase";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RESEND_API_KEY?: string;
      RESEND_FROM_EMAIL?: string;
      INQUIRY_VERIFICATION_SECRET?: string;
      RAZORPAY_KEY_SECRET?: string;
    }
  }
}

export type SendOtpInput = {
  email: string;
  name?: string;
  isTestPreview?: boolean;
};

export type VerifyOtpInput = {
  email: string;
  otp: string;
};

export type SubmitInquiryServerInput = {
  name: string;
  email: string;
  business?: string | null;
  projectType?: string | null;
  message: string;
  verificationToken: string;
};

type OtpSession = {
  email: string;
  otpHash: string;
  attempts: number;
  maxAttempts: number;
  expiresAt: number;
  lastSentAt: number;
};

// In-memory OTP storage and used tokens tracker for replay attack prevention
const activeOtpSessions = new Map<string, OtpSession>();
const usedNonces = new Set<string>();

// Rate limiting: max 5 OTP requests per hour per email
const hourlySendCounts = new Map<string, { count: number; resetAt: number }>();

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "tempmail.com",
  "temp-mail.org",
  "10minutemail.com",
  "10minutemail.net",
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "trashmail.com",
  "trashmail.net",
  "sharklasers.com",
  "yopmail.com",
  "yopmail.fr",
  "dispostable.com",
  "getairmail.com",
  "throwawaymail.com",
  "burnermail.io",
  "fakeinbox.com",
  "maildrop.cc",
  "inboxkitten.com",
  "tempail.com",
  "generator.email",
]);

function isDisposableEmail(email: string): boolean {
  const parts = email.trim().toLowerCase().split("@");
  if (parts.length !== 2 || !parts[1]) return false;
  return DISPOSABLE_EMAIL_DOMAINS.has(parts[1]);
}

function normalizeEmail(email?: string | null): string {
  return typeof email === "string" ? email.trim().toLowerCase() : "";
}

/**
 * Safely resolves the server-side RESEND_API_KEY from process.env.RESEND_API_KEY.
 * Strictly adheres to reading process.env.RESEND_API_KEY without client-side variables or prefixes.
 * Never exposes or logs the secret key.
 */
function getResendApiKey(env?: unknown): string {
  // 1. Direct process.env.RESEND_API_KEY (Node.js runtime / Vercel Serverless environment)
  if (typeof process !== "undefined" && process.env) {
    // Direct property access
    if (typeof process.env.RESEND_API_KEY === "string" && process.env.RESEND_API_KEY.trim().length > 0) {
      return process.env.RESEND_API_KEY.trim();
    }

    // Bracket property access
    const procEnv = process.env as Record<string, string | undefined>;
    const bracketVal = procEnv["RESEND_API_KEY"];
    if (typeof bracketVal === "string" && bracketVal.trim().length > 0) {
      return bracketVal.trim();
    }

    // Trimmed and case-insensitive check in case of leading/trailing spaces in Vercel UI
    for (const [k, v] of Object.entries(procEnv)) {
      if (k.trim().toUpperCase() === "RESEND_API_KEY" && typeof v === "string" && v.trim().length > 0) {
        return v.trim();
      }
    }
  }

  // 2. Server runtime env parameter (if supplied by host framework context)
  if (env && typeof env === "object") {
    const envObj = env as Record<string, unknown>;
    const val = envObj["RESEND_API_KEY"];
    if (typeof val === "string" && val.trim().length > 0) {
      return val.trim();
    }
    for (const [k, v] of Object.entries(envObj)) {
      if (k.trim().toUpperCase() === "RESEND_API_KEY" && typeof v === "string" && v.trim().length > 0) {
        return v.trim();
      }
    }
  }

  // 3. Local development fallback: parse .env if process.env is not yet populated
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const lines = fs.readFileSync(envPath, "utf-8").split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("#") || !trimmed.includes("=")) continue;
        const [k, ...v] = trimmed.split("=");
        if (k && k.trim().toUpperCase() === "RESEND_API_KEY") {
          const parsed = v.join("=").trim().replace(/^["']|["']$/g, "");
          if (parsed) return parsed;
        }
      }
    }
  } catch {
    // Ignore in non-Node or restricted sandbox
  }

  return "";
}

/**
 * Returns server secrets for Resend and cryptographic verification.
 * Adheres strictly to reading process.env.RESEND_API_KEY.
 */
function getServerConfig(env?: unknown) {
  const resendApiKey = getResendApiKey(env);
  const procEnv = (typeof process !== "undefined" && process.env ? process.env : {}) as Record<string, string | undefined>;

  const resendFromEmail =
    procEnv["RESEND_FROM_EMAIL"] ||
    (env && typeof env === "object" && typeof (env as Record<string, unknown>)["RESEND_FROM_EMAIL"] === "string" ? ((env as Record<string, unknown>)["RESEND_FROM_EMAIL"] as string) : "") ||
    "MNW Creative Studio <contact@mnwcreativestudio.in>";

  const serverSecret =
    procEnv["INQUIRY_VERIFICATION_SECRET"] ||
    procEnv["RAZORPAY_KEY_SECRET"] ||
    "mnw-studio-inquiry-secret-salt-2026";

  return { resendApiKey, resendFromEmail, serverSecret };
}

/**
 * Hash the 6-digit OTP with SHA-256 and server secret to prevent plaintext exposure.
 */
function hashOtp(email: string, otp: string, secret: string): string {
  return crypto
    .createHash("sha256")
    .update(`${email}:${otp.trim()}:${secret}`)
    .digest("hex");
}

/**
 * Renders a dark obsidian & gold HTML email for the OTP verification.
 */
function renderOtpEmailHtml(otp: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Verification Code - MNW Creative Studio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0b0c10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f0f2f5;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b0c10; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 520px; background-color: #13151b; border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
          <!-- Top Gold Accent Bar -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #b8860b, #d4af37, #f7e08b, #b8860b);"></td>
          </tr>
          
          <!-- Content Header -->
          <tr>
            <td style="padding: 36px 36px 20px; text-align: center;">
              <span style="display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.25em; color: #d4af37; text-transform: uppercase;">
                MNW CREATIVE STUDIO
              </span>
              <h1 style="margin: 14px 0 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                Verify Your Email Address
              </h1>
              <p style="margin: 12px 0 0; font-size: 14px; line-height: 1.6; color: #9da3af;">
                Please enter the verification code below to verify your email and complete your website project enquiry.
              </p>
            </td>
          </tr>

          <!-- OTP Box -->
          <tr>
            <td align="center" style="padding: 10px 36px 24px;">
              <div style="background-color: #0b0c10; border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 14px; padding: 18px 24px; display: inline-block; box-shadow: 0 0 25px rgba(212, 175, 55, 0.08);">
                <span style="font-family: 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 34px; font-weight: 800; letter-spacing: 0.25em; color: #f7e08b; text-indent: 0.25em; display: block;">
                  ${otp}
                </span>
              </div>
              <p style="margin: 14px 0 0; font-size: 12px; color: #8e95a5;">
                This code expires in <strong style="color: #d4af37;">60 seconds</strong> and can only be used once.
              </p>
            </td>
          </tr>

          <!-- Security Notice -->
          <tr>
            <td style="padding: 0 36px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 20px;">
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #6b7280;">
                If you did not request this code, someone may have entered your email address by mistake. You can safely disregard this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0d0f14; padding: 18px 36px; text-align: center; border-top: 1px solid rgba(255,255,255,0.04);">
              <span style="font-size: 11px; color: #6b7280;">
                &copy; ${new Date().getFullYear()} MNW Creative Studio. All rights reserved.
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Sends a 6-digit OTP code to the requested email via Resend API.
 */
export async function sendInquiryOtp(
  input: SendOtpInput,
  env?: unknown,
): Promise<{
  success: boolean;
  message: string;
  cooldownSeconds: number;
  expiresInSeconds: number;
  isConfigured?: boolean;
  previewOtp?: string;
}> {
  const email = normalizeEmail(input.email);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (isDisposableEmail(email)) {
    throw new Error("Disposable/temporary emails are not accepted. Please use a permanent email address.");
  }

  const { resendApiKey, resendFromEmail, serverSecret } = getServerConfig(env);

  // Safe server-side diagnostics: logs boolean status only, never exposes actual secret
  console.log(`[InquiryServer] sendInquiryOtp request: recipient=${email}, RESEND_API_KEY configured=${Boolean(resendApiKey)}`);

  const now = Date.now();

  // Hourly Rate Limit Check (max 5 requests per hour)
  const hourly = hourlySendCounts.get(email);
  if (hourly) {
    if (now < hourly.resetAt) {
      if (hourly.count >= 5) {
        throw new Error(
          "Too many verification requests for this email. Please wait an hour before trying again.",
        );
      }
      hourly.count += 1;
    } else {
      hourlySendCounts.set(email, { count: 1, resetAt: now + 3600000 });
    }
  } else {
    hourlySendCounts.set(email, { count: 1, resetAt: now + 3600000 });
  }

  // 30-Second Cooldown Check
  const existing = activeOtpSessions.get(email);
  if (existing && now - existing.lastSentAt < 30000) {
    const remaining = Math.ceil((30000 - (now - existing.lastSentAt)) / 1000);
    throw new Error(
      `Please wait ${remaining} second${remaining === 1 ? "" : "s"} before requesting a new code.`,
    );
  }

  // Generate cryptographically secure 6-digit OTP
  const otpNumber = crypto.randomInt(100000, 1000000);
  const otp = otpNumber.toString();

  const otpHash = hashOtp(email, otp, serverSecret);

  // Store in active sessions (strictly 60-second expiry, max 5 attempts)
  activeOtpSessions.set(email, {
    email,
    otpHash,
    attempts: 0,
    maxAttempts: 5,
    expiresAt: now + 60 * 1000,
    lastSentAt: now,
  });

  // Dispatch via Resend API
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [email],
          subject: `Your Verification Code: ${otp} — MNW Creative Studio`,
          text: `Your MNW Creative Studio verification code is: ${otp}\n\nThis code expires in 60 seconds and can only be used once.\n\nIf you did not request this code, you can safely disregard this email.`,
          html: renderOtpEmailHtml(otp),
          headers: {
            "X-Priority": "1",
            "Priority": "urgent",
            "Importance": "high",
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        const resendMsg =
          (errorData as { message?: string }).message ||
          "Failed to dispatch verification email via Resend.";
        throw new Error(`Resend API error: ${resendMsg}`);
      }

      // Record session timestamp immediately after dispatch succeeds so user has full 60s
      const dispatchedAt = Date.now();
      activeOtpSessions.set(email, {
        email,
        otpHash,
        attempts: 0,
        maxAttempts: 5,
        expiresAt: dispatchedAt + 60 * 1000,
        lastSentAt: dispatchedAt,
      });
    } catch (err: unknown) {
      console.error("Failed to send OTP email via Resend:", err);
      const msg = err instanceof Error ? err.message : "Failed to send email";
      throw new Error(msg);
    }
  } else {
    const isProd = typeof process !== "undefined" && process.env && process.env["NODE_ENV"] === "production";
    if (isProd) {
      const proc = typeof process !== "undefined" && process.env ? process.env : {};
      const resendInProc = Object.keys(proc).some((k) => k.trim().toUpperCase() === "RESEND_API_KEY");
      console.error(
        `[InquiryServer] RESEND_API_KEY missing at server runtime. resendKeyFoundInProcessEnv=${resendInProc}, processEnvKeysCount=${Object.keys(proc).length}`,
      );
      throw new Error(
        "Email verification is temporarily unavailable. RESEND_API_KEY server secret is missing.",
      );
    }
    console.warn(
      `\n======================================================\n[DEV / LOCAL NOTICE] RESEND_API_KEY is not configured in .env.\nConfiguration is required for real email delivery.\nIn development fallback, OTP code for ${email} is: ${otp}\n======================================================\n`,
    );
  }

  const isDev = !resendApiKey || (typeof process !== "undefined" && process.env && process.env["NODE_ENV"] !== "production");

  return {
    success: true,
    message: resendApiKey
      ? "A 6-digit verification code has been sent to your email."
      : "RESEND_API_KEY is not configured in .env. Configuration is required for real email delivery. (In development, code was logged to server terminal)",
    cooldownSeconds: 30,
    expiresInSeconds: 60,
    isConfigured: !!resendApiKey,
    ...(isDev && input.isTestPreview ? { previewOtp: otp } : {}),
  };
}

/**
 * Validates the entered OTP and generates a secure HMAC-signed verification token.
 */
export async function verifyInquiryOtp(
  input: VerifyOtpInput,
  env?: unknown,
): Promise<{ success: boolean; verificationToken: string; email: string }> {
  const email = normalizeEmail(input.email);
  const enteredOtp = (input.otp || "").trim();

  if (!email || !enteredOtp) {
    throw new Error("Email and 6-digit code are required.");
  }

  if (enteredOtp.length !== 6 || !/^\d{6}$/.test(enteredOtp)) {
    throw new Error("Please enter a valid 6-digit numeric code.");
  }

  const { serverSecret } = getServerConfig(env);

  const session = activeOtpSessions.get(email);
  if (!session) {
    throw new Error("No active verification code found for this email. Please request a new code.");
  }

  const now = Date.now();

  // Check Expiry (strictly 60 seconds)
  if (now > session.expiresAt) {
    activeOtpSessions.delete(email);
    throw new Error("This verification code has expired (valid for 60 seconds). Please request a new code.");
  }

  // Check Attempt Limits (max 5)
  if (session.attempts >= session.maxAttempts) {
    activeOtpSessions.delete(email);
    throw new Error("Too many incorrect attempts. Please request a new code.");
  }

  session.attempts += 1;

  // Constant-time hash verification to prevent timing attacks
  const expectedHash = session.otpHash;
  const actualHash = hashOtp(email, enteredOtp, serverSecret);

  const expectedBuf = Buffer.from(expectedHash, "hex");
  const actualBuf = Buffer.from(actualHash, "hex");

  const isValid =
    expectedBuf.length === actualBuf.length &&
    crypto.timingSafeEqual(expectedBuf, actualBuf);

  if (!isValid) {
    const remaining = session.maxAttempts - session.attempts;
    if (remaining <= 0) {
      activeOtpSessions.delete(email);
      throw new Error("Too many incorrect attempts. Please request a new code.");
    }
    throw new Error(
      `Verification failed. Please check the OTP and try again (${remaining} attempt${remaining === 1 ? "" : "s"} remaining).`,
    );
  }

  // Correct OTP -> remove active session to ensure single-use
  activeOtpSessions.delete(email);

  // Generate cryptographically signed verification token
  const nonce = crypto.randomBytes(16).toString("hex");
  const payload = {
    email,
    verifiedAt: now,
    expiresAt: now + 45 * 60 * 1000, // Token valid for 45 minutes to finish filling Tab 2
    nonce,
  };

  const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", serverSecret)
    .update(payloadEncoded)
    .digest("base64url");

  const verificationToken = `${payloadEncoded}.${signature}`;

  return {
    success: true,
    verificationToken,
    email,
  };
}

/**
 * Server-side verified submission into Supabase public.inquiries table.
 * Strictly verifies the cryptographically signed verification token before database insert.
 */
export async function submitVerifiedInquiryOnServer(
  input: SubmitInquiryServerInput,
  env?: unknown,
): Promise<{ success: boolean; id?: string }> {
  const { name, email, business, projectType, message, verificationToken } = input;

  const normalizedEmail = normalizeEmail(email);

  // Field Validations
  if (!name || name.trim().length < 2) {
    throw new Error("Please enter your name (at least 2 characters).");
  }
  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error("Please enter a valid email address.");
  }
  if (!message || message.trim().length < 5) {
    throw new Error("Please enter a short message about your project (at least 5 characters).");
  }

  if (!verificationToken || typeof verificationToken !== "string") {
    throw new Error("Email verification is required before submitting your enquiry.");
  }

  const { serverSecret } = getServerConfig(env);

  // Parse and verify token signature
  const parts = verificationToken.split(".");
  const payloadEncoded = parts[0];
  const signature = parts[1];
  if (parts.length !== 2 || !payloadEncoded || !signature) {
    throw new Error("Invalid verification token format. Please re-verify your email.");
  }

  const expectedSignature = crypto
    .createHmac("sha256", serverSecret)
    .update(payloadEncoded)
    .digest("base64url");

  const sigBuf = Buffer.from(signature);
  const expectedSigBuf = Buffer.from(expectedSignature);

  const isSigValid =
    sigBuf.length === expectedSigBuf.length &&
    crypto.timingSafeEqual(sigBuf, expectedSigBuf);

  if (!isSigValid) {
    throw new Error("Verification token signature is invalid. Please re-verify your email.");
  }

  let payload: { email: string; verifiedAt: number; expiresAt: number; nonce: string };
  try {
    payload = JSON.parse(Buffer.from(payloadEncoded, "base64url").toString("utf8"));
  } catch {
    throw new Error("Corrupted verification token. Please re-verify your email.");
  }

  // Token Email Matching Check
  if (payload.email !== normalizedEmail) {
    throw new Error(
      "The submitted email address does not match the verified email. Please re-verify.",
    );
  }

  // Token Expiration Check
  if (Date.now() > payload.expiresAt) {
    throw new Error("Verification session expired. Please verify your email again.");
  }

  // Single-use Replay Protection Check
  if (usedNonces.has(payload.nonce)) {
    throw new Error("This verification token has already been used. Please submit a new inquiry.");
  }

  usedNonces.add(payload.nonce);

  // Insert verified enquiry into Supabase
  const supabase = getSupabase();

  // Try insert with email_verified column first
  const { data, error } = await supabase.from("inquiries").insert([
    {
      name: name.trim(),
      email: normalizedEmail,
      business_name: business?.trim() || null,
      project_type: projectType?.trim() || null,
      message: message.trim(),
      email_verified: true,
    },
  ]);

  if (error) {
    // If the email_verified column doesn't exist yet in user's database, fallback gracefully
    if (error.message?.includes("email_verified") || error.code === "42703") {
      const fallbackResult = await supabase.from("inquiries").insert([
        {
          name: name.trim(),
          email: normalizedEmail,
          business_name: business?.trim() || null,
          project_type: projectType?.trim() || null,
          message: message.trim(),
        },
      ]);
      if (fallbackResult.error) {
        console.error("Supabase fallback insert error:", fallbackResult.error);
        throw new Error(fallbackResult.error.message || "Failed to store inquiry in database.");
      }
    } else {
      console.error("Supabase verified inquiry insert error:", error);
      throw new Error(error.message || "Failed to store inquiry in database.");
    }
  }

  return { success: true };
}
