import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  createRazorpayOrderOnServer,
  verifyRazorpayPaymentOnServer,
  type CreateOrderInput,
  type VerifyPaymentInput,
} from "./lib/razorpay.server";
import {
  sendInquiryOtp,
  verifyInquiryOtp,
  submitVerifiedInquiryOnServer,
  type SendOtpInput,
  type VerifyOtpInput,
  type SubmitInquiryServerInput,
} from "./lib/inquiry.server";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function jsonResponse(data: unknown, status = 200): Response {
  return Response.json(data, {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname.replace(/\/+$/, "") || "/";

      // CORS preflight for API routes
      if (pathname.startsWith("/api/")) {
        if (request.method === "OPTIONS") {
          return new Response(null, { status: 204, headers: corsHeaders });
        }
      }

      // Email Verification & Inquiry Endpoints
      if (pathname === "/api/inquiry/send-otp" && request.method === "POST") {
        try {
          const body = (await request.json()) as SendOtpInput;
          const result = await sendInquiryOtp(body, env);
          return jsonResponse(result);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to send verification code";
          return jsonResponse({ error: message }, 400);
        }
      }

      if (pathname === "/api/inquiry/verify-otp" && request.method === "POST") {
        try {
          const body = (await request.json()) as VerifyOtpInput;
          const result = await verifyInquiryOtp(body, env);
          return jsonResponse(result);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Verification failed";
          return jsonResponse({ error: message }, 400);
        }
      }

      if (pathname === "/api/inquiry/submit" && request.method === "POST") {
        try {
          const body = (await request.json()) as SubmitInquiryServerInput;
          const result = await submitVerifiedInquiryOnServer(body, env);
          return jsonResponse(result);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to submit inquiry";
          return jsonResponse({ error: message }, 400);
        }
      }

      // Dedicated Razorpay Server Endpoints
      if (pathname === "/api/razorpay/create-order" && request.method === "POST") {
        try {
          const body = (await request.json()) as CreateOrderInput;
          const result = await createRazorpayOrderOnServer(body, env);
          return jsonResponse(result);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to create order";
          return jsonResponse({ error: message }, 400);
        }
      }

      if (pathname === "/api/razorpay/verify-payment" && request.method === "POST") {
        try {
          const body = (await request.json()) as VerifyPaymentInput;
          const result = await verifyRazorpayPaymentOnServer(body, env);
          return jsonResponse(result);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to verify payment";
          return jsonResponse({ error: message }, 400);
        }
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
