import type { CreateOrderResult } from "./payment-server";

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
    escape?: boolean;
    backdropclose?: boolean;
  };
  handler?: (response: RazorpayPaymentSuccessResponse) => void;
};

export type RazorpayPaymentSuccessResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export type RazorpayInstance = {
  open: () => void;
  on: (event: string, handler: (data: unknown) => void) => void;
  close: () => void;
};

/**
 * Dynamically loads the Razorpay checkout script if not already present in the DOM.
 */
export function loadRazorpayCheckoutScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector('script[src*="checkout.razorpay.com"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export type LaunchRazorpayParams = {
  order: CreateOrderResult;
  customer: {
    name: string;
    email: string;
    business?: string | null;
    projectType?: string | null;
    message?: string | null;
    phone?: string | null;
  };
  onSuccess: (response: RazorpayPaymentSuccessResponse) => void;
  onDismiss: () => void;
  onError: (error: string) => void;
};

/**
 * Initializes and opens the client-side Razorpay modal.
 */
export async function launchRazorpayModal({
  order,
  customer,
  onSuccess,
  onDismiss,
  onError,
}: LaunchRazorpayParams): Promise<void> {
  const loaded = await loadRazorpayCheckoutScript();
  if (!loaded || !window.Razorpay) {
    throw new Error("Unable to load secure Razorpay Checkout. Please check your internet connection.");
  }

  const options: RazorpayOptions = {
    key: order.keyId,
    amount: order.amount,
    currency: order.currency || "INR",
    name: "MNW Creative Studio",
    description: `${order.planName} Plan — Website Project`,
    image: "/mnw-square-favicon.png",
    order_id: order.orderId,
    prefill: {
      name: customer.name || "",
      email: customer.email || "",
      contact: customer.phone || "",
    },
    theme: {
      color: "#D4AF37", // MNW Studio signature gold
    },
    modal: {
      ondismiss: () => {
        onDismiss();
      },
      escape: true,
      backdropclose: false,
    },
    handler: (response) => {
      onSuccess(response);
    },
  };

  try {
    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", (res: unknown) => {
      const failed = res as { error?: { description?: string; code?: string } };
      const msg = failed.error?.description || "Payment failed. Please try a different card or UPI method.";
      onError(msg);
    });

    rzp.open();
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to open payment gateway.";
    onError(msg);
  }
}
