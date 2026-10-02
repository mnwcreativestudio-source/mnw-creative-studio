export type PlanId = "STARTER" | "PROFESSIONAL" | "PREMIUM";

export type PlanPricing = {
  id: PlanId;
  name: string;
  usdPrice: number;
  defaultInrAmount: number;
  isFixed: boolean;
};

export const ALLOWED_PLANS: Record<PlanId, PlanPricing> = {
  STARTER: {
    id: "STARTER",
    name: "Starter Website",
    usdPrice: 200,
    defaultInrAmount: 15000, // ₹15,000
    isFixed: true,
  },
  PROFESSIONAL: {
    id: "PROFESSIONAL",
    name: "Professional Website",
    usdPrice: 400,
    defaultInrAmount: 32000, // ₹32,000
    isFixed: true,
  },
  PREMIUM: {
    id: "PREMIUM",
    name: "Premium Plan",
    usdPrice: 700,
    defaultInrAmount: 67400, // ₹67,400 (Base starting deposit)
    isFixed: false,
  },
};

export function getPlanDisplayINR(planId: string): string {
  const clean = (planId || "").toUpperCase();
  if (clean.includes("STARTER")) return "₹15,000";
  if (clean.includes("PROFESSIONAL")) return "₹32,000";
  if (clean.includes("PREMIUM")) return "₹67,400";
  return "";
}

export function getPlanCheckoutTitle(planId: string): string {
  const clean = (planId || "").toUpperCase();
  if (clean.includes("STARTER")) return "Starter Website";
  if (clean.includes("PROFESSIONAL")) return "Professional Website";
  if (clean.includes("PREMIUM")) return "Premium Plan";
  return planId;
}

