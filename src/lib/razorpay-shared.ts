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
    name: "Starter Plan",
    usdPrice: 200,
    defaultInrAmount: 19250, // ₹19,250
    isFixed: true,
  },
  PROFESSIONAL: {
    id: "PROFESSIONAL",
    name: "Professional Plan",
    usdPrice: 400,
    defaultInrAmount: 38500, // ₹38,500
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
  if (clean.includes("STARTER")) return "₹19,250";
  if (clean.includes("PROFESSIONAL")) return "₹38,500";
  if (clean.includes("PREMIUM")) return "₹67,400";
  return "";
}
