export const DISPOSABLE_EMAIL_DOMAINS = new Set([
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

/**
 * Checks if an email address belongs to a known temporary/disposable provider.
 * Does NOT reject legitimate custom company or personal domains.
 */
export function isDisposableEmail(email: string): boolean {
  const parts = email.trim().toLowerCase().split("@");
  if (parts.length !== 2) return false;
  const domain = parts[1];
  return DISPOSABLE_EMAIL_DOMAINS.has(domain);
}

export type RequestOtpResponse = {
  success: boolean;
  message: string;
  cooldownSeconds: number;
  expiresInSeconds?: number;
  isConfigured?: boolean;
};

export type VerifyOtpResponse = {
  success: boolean;
  verificationToken: string;
  email: string;
};

export type SubmitInquiryData = {
  name: string;
  email: string;
  business?: string | null;
  projectType?: string | null;
  message: string;
  verificationToken: string;
};

/**
 * Requests a 6-digit OTP code to be sent to the given email address.
 */
export async function requestEmailOtp(email: string): Promise<RequestOtpResponse> {
  const normalized = email.trim().toLowerCase();
  const res = await fetch("/api/inquiry/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: normalized }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Failed to send verification code. Please try again.");
  }

  return data as RequestOtpResponse;
}

/**
 * Verifies the 6-digit OTP code against the server and receives a signed verification token.
 */
export async function verifyEmailOtp(email: string, otp: string): Promise<VerifyOtpResponse> {
  const normalized = email.trim().toLowerCase();
  const res = await fetch("/api/inquiry/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: normalized, otp: otp.trim() }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Verification failed. Please check the code and try again.");
  }

  return data as VerifyOtpResponse;
}

/**
 * Submits the completed enquiry with the verified token to the server.
 */
export async function submitVerifiedInquiry(data: SubmitInquiryData): Promise<{ success: boolean }> {
  const res = await fetch("/api/inquiry/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(result.error || "Failed to submit enquiry. Please try again.");
  }

  return result as { success: boolean };
}
