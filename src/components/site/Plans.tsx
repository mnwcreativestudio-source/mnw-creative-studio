import { useState, useEffect } from "react";
import {
  Check,
  Sparkles,
  ArrowRight,
  X,
  ShieldCheck,
  CheckCircle2,
  Copy,
  ArrowLeft,
  Send,
  AlertCircle,
  Lock,
  CreditCard,
  Wallet,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { createRazorpayOrder, verifyRazorpayPayment } from "@/lib/payment-server";
import { launchRazorpayModal } from "@/lib/razorpay-checkout";
import { getPlanDisplayINR } from "@/lib/razorpay-shared";
import { submitInquiry } from "@/lib/supabase";

const STUDIO_EMAIL = "mnwcreativestudio@gmail.com";

type Plan = {
  name: string;
  badge?: string;
  audience: string;
  description: string;
  priceUSD: string;
  modalDisplayPrice: string;
  isCustomPriced?: boolean;
  priceType?: string;
  priceSubtext: string;
  defaultProjectType: string;
  features: string[];
  highlighted?: boolean;
  footerNote?: string;
};

const pricingPlans: Plan[] = [
  {
    name: "STARTER",
    audience: "For small businesses and individuals.",
    description:
      "A streamlined, high-quality digital foundation built to establish credibility and capture initial inquiries.",
    priceUSD: "$200",
    modalDisplayPrice: "Starter — $200 USD",
    isCustomPriced: false,
    priceType: "One-time investment",
    priceSubtext: "Fixed project investment",
    defaultProjectType: "Starter Website (Up to 5 Pages)",
    features: [
      "Professional responsive website",
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
      "Performance optimization",
    ],
    highlighted: false,
  },
  {
    name: "PROFESSIONAL",
    badge: "RECOMMENDED",
    audience: "For growing businesses.",
    description:
      "A comprehensive, custom-designed web experience built to convert visitors into loyal clients.",
    priceUSD: "$400",
    modalDisplayPrice: "Professional — $400 USD",
    isCustomPriced: false,
    priceType: "One-time investment",
    priceSubtext: "Most popular choice for brands",
    defaultProjectType: "Professional Custom Website (Up to 10 Pages)",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Premium custom design",
      "Advanced SEO setup",
      "WhatsApp and social integration",
      "Conversion-focused sections",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "PREMIUM",
    audience: "For businesses requiring advanced functionality.",
    description:
      "An advanced, fully tailored web platform equipped with custom functionality and integrations.",
    priceUSD: "$700+",
    modalDisplayPrice: "Premium — Starting at $700+ USD",
    isCustomPriced: true,
    priceType: "Starting at $700+",
    priceSubtext: "Scales with project requirements",
    defaultProjectType: "Premium Custom Website & Integrations",
    footerNote: "Premium starts at $700. Final pricing depends on project requirements.",
    features: [
      "Everything in Professional",
      "Advanced custom website",
      "Custom functionality",
      "Advanced performance optimization",
      "Custom integrations",
      "Priority support",
    ],
    highlighted: false,
  },
];

const advancedProjectPlan: Plan = {
  name: "ADVANCED PROJECTS",
  audience: "For complex websites and custom digital solutions.",
  description:
    "End-to-end bespoke digital platforms, web applications, and feature-rich digital infrastructure.",
  priceUSD: "$1,200–$2,500+",
  modalDisplayPrice: "Advanced Projects — $1,200–$2,500+ USD",
  isCustomPriced: true,
  priceType: "Custom Scope",
  priceSubtext: "Scoped to project complexity",
  defaultProjectType: "Advanced Custom Platform / Web Application",
  footerNote:
    "Complex projects are quoted based on scope, features, integrations, and development requirements.",
  features: [
    "E-commerce websites",
    "Advanced booking and appointment systems",
    "Online payment integrations",
    "Custom dashboards and web applications",
    "Advanced third-party integrations",
    "Complex custom functionality",
  ],
  highlighted: false,
};

type InquiryForm = {
  name: string;
  email: string;
  business: string;
  projectType: string;
  message: string;
};

const initialInquiryForm: InquiryForm = {
  name: "",
  email: "",
  business: "",
  projectType: "",
  message: "",
};

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [inquiryData, setInquiryData] = useState<InquiryForm>(initialInquiryForm);
  const [modalStep, setModalStep] = useState<1 | 2 | 3>(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedDetails, setCopiedDetails] = useState(false);

  // Razorpay Payment States
  type PaymentStatus = "idle" | "creating_order" | "verifying" | "success" | "failed" | "cancelled";
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [verifiedPayment, setVerifiedPayment] = useState<{
    paymentId: string;
    orderId: string;
    amountINR: number;
    planName: string;
  } | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (selectedPlan) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan]);

  const openInquiryModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setInquiryData({
      ...initialInquiryForm,
      projectType: plan.defaultProjectType,
    });
    setModalStep(1);
    setErrorMessage(null);
    setCopiedDetails(false);
    setPaymentStatus("idle");
    setPaymentError(null);
    setVerifiedPayment(null);
    setCopiedReceipt(false);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setModalStep(1);
    setErrorMessage(null);
    setCopiedDetails(false);
    setPaymentStatus("idle");
    setPaymentError(null);
    setVerifiedPayment(null);
    setCopiedReceipt(false);
  };

  const handleProceedToPayment = () => {
    setModalStep(3);
    setPaymentStatus("idle");
    setPaymentError(null);

    // Record inquiry lead in Supabase
    submitInquiry({
      name: inquiryData.name,
      email: inquiryData.email,
      business: inquiryData.business,
      projectType: `${inquiryData.projectType} [Checkout Initiated]`,
      message: inquiryData.message,
    }).catch((err) => {
      console.warn("Initial lead capture note:", err);
    });
  };

  const handlePayWithRazorpay = async () => {
    if (!selectedPlan) return;
    setPaymentStatus("creating_order");
    setPaymentError(null);

    try {
      // 1. Create order on server (client-provided amounts are never trusted)
      const order = await createRazorpayOrder({
        planId: selectedPlan.name,
        customer: {
          name: inquiryData.name,
          email: inquiryData.email,
          business: inquiryData.business,
          projectType: inquiryData.projectType,
          message: inquiryData.message,
        },
      });

      // 2. Open Razorpay Checkout modal on the client using the public Key ID
      await launchRazorpayModal({
        order,
        customer: {
          name: inquiryData.name,
          email: inquiryData.email,
          business: inquiryData.business,
          projectType: inquiryData.projectType,
          message: inquiryData.message,
        },
        onSuccess: async (response) => {
          // 3. User paid in modal, now verify HMAC signature server-side
          setPaymentStatus("verifying");
          try {
            const verification = await verifyRazorpayPayment({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              planId: selectedPlan.name,
              customer: {
                name: inquiryData.name,
                email: inquiryData.email,
                business: inquiryData.business,
                projectType: inquiryData.projectType,
                message: inquiryData.message,
              },
            });

            if (verification.success) {
              setVerifiedPayment({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                amountINR: order.amountINR,
                planName: selectedPlan.name,
              });
              setPaymentStatus("success");
            } else {
              setPaymentStatus("failed");
              setPaymentError("Payment verification could not be validated with the server.");
            }
          } catch (err: unknown) {
            setPaymentStatus("failed");
            const msg = err instanceof Error ? err.message : "Payment verification failed.";
            setPaymentError(msg);
          }
        },
        onDismiss: () => {
          setPaymentStatus("cancelled");
        },
        onError: (errorMsg) => {
          setPaymentStatus("failed");
          setPaymentError(errorMsg);
        },
      });
    } catch (err: unknown) {
      setPaymentStatus("failed");
      const msg = err instanceof Error ? err.message : "Failed to initialize payment gateway.";
      setPaymentError(msg);
    }
  };

  const handleCopyReceipt = () => {
    if (!verifiedPayment) return;
    const text = [
      "MNW Creative Studio — Payment Confirmation",
      "------------------------------------------",
      `Plan: ${verifiedPayment.planName}`,
      `Amount Paid: ₹${verifiedPayment.amountINR.toLocaleString("en-IN")} INR`,
      `Razorpay Payment ID: ${verifiedPayment.paymentId}`,
      `Razorpay Order ID: ${verifiedPayment.orderId}`,
      `Client: ${inquiryData.name} (${inquiryData.email})`,
      `Date: ${new Date().toLocaleString()}`,
      "Status: Verified & Confirmed",
    ].join("\n");

    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2200);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!inquiryData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!inquiryData.email.trim() || !/^\S+@\S+\.\S+$/.test(inquiryData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!inquiryData.message.trim()) {
      setErrorMessage("Please share a brief summary of your project requirements.");
      return;
    }

    // Advance to Step 2 (Review)
    setModalStep(2);
  };

  const generateMailDetails = () => {
    if (!selectedPlan) return { subject: "", body: "" };

    const subject = `New Inquiry: ${selectedPlan.name} Plan — ${inquiryData.name.trim()}`;
    const body = [
      `Selected Plan: ${selectedPlan.modalDisplayPrice}`,
      `Customer Name: ${inquiryData.name.trim()}`,
      `Email Address: ${inquiryData.email.trim()}`,
      `Business / Brand: ${inquiryData.business.trim() || "Not specified"}`,
      `Project Type: ${inquiryData.projectType.trim() || selectedPlan.defaultProjectType}`,
      "",
      "Project Requirements & Message:",
      inquiryData.message.trim(),
    ].join("\n");

    return { subject, body };
  };

  const handleSendEmail = () => {
    const { subject, body } = generateMailDetails();
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyInquiry = () => {
    const { subject, body } = generateMailDetails();
    navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    setCopiedDetails(true);
    setTimeout(() => setCopiedDetails(false), 2200);
  };

  const handleContactStudio = () => {
    closeModal();
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <section id="plans" className="relative py-24 sm:py-32">
      <div id="pricing" className="absolute -top-20" />
      {/* Background ambient lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing & Plans"
          title="Transparent, Tailored Plans"
          description="Every business has distinct requirements. We provide flexible, custom-scoped engagements engineered for performance, aesthetic refinement, and growth."
        />

        {/* 3 Main Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="flex h-full">
              <article
                className={cn(
                  "relative flex w-full flex-col justify-between rounded-3xl p-7 transition-all duration-300 sm:p-9",
                  plan.highlighted
                    ? "border-2 border-gold/80 bg-gradient-to-b from-charcoal/90 via-charcoal/65 to-charcoal/45 shadow-[var(--shadow-gold)] hover:-translate-y-2 hover:border-gold hover:shadow-[0_25px_60px_-15px_oklch(0.79_0.12_85_/_45%)]"
                    : "border border-border/80 bg-charcoal/30 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                )}
              >
                {/* Recommended Badge for Professional */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-gold)]">
                      <Sparkles className="size-3 fill-current" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Audience */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold tracking-wide text-foreground">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm font-medium text-gold">{plan.audience}</p>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-5">
                    <div className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {plan.name === "PREMIUM" ? "Starting at" : plan.priceType}
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                        {plan.priceUSD}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                        USD
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{plan.priceSubtext}</p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      What's Included
                    </p>
                    <ul className="mt-4 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span
                            className={cn(
                              "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
                              plan.highlighted ? "bg-gold/20 text-gold" : "bg-gold/10 text-gold/90",
                            )}
                          >
                            <Check className="size-3.5 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note below Premium plan */}
                  {plan.footerNote && (
                    <div className="mt-6 rounded-xl border border-gold/25 bg-gold/5 p-3.5">
                      <p className="text-xs leading-relaxed text-gold/90">{plan.footerNote}</p>
                    </div>
                  )}
                </div>

                {/* Choose Plan CTA Button */}
                <div className="mt-9 border-t border-border/50 pt-6">
                  <button
                    type="button"
                    onClick={() => openInquiryModal(plan)}
                    className={cn(
                      "group inline-flex w-full items-center justify-center gap-2 rounded-full py-4 px-6 text-sm font-semibold transition-all duration-300 active:scale-95",
                      plan.highlighted
                        ? "bg-gold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110"
                        : "border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]",
                    )}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Separate Advanced Projects Section */}
        <Reveal delay={200} className="mt-12 sm:mt-16">
          <div className="premium-card relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-charcoal/90 via-charcoal/65 to-charcoal/40 p-7 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-11">
            {/* Ambient gold glow decoration */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-gold/10 blur-3xl"
            />

            <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold">
                  <Sparkles className="size-3" />
                  Enterprise & Custom Scope
                </span>

                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-wide text-foreground sm:text-3xl lg:text-4xl">
                  ADVANCED PROJECTS
                </h3>

                <div className="mt-3 flex items-baseline gap-2.5">
                  <span className="font-display text-3xl font-extrabold text-gold sm:text-4xl">
                    $1,200–$2,500+
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    USD
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium text-foreground/90">
                  For complex websites and custom digital solutions.
                </p>

                <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground italic">
                  “Complex projects are quoted based on scope, features, integrations, and
                  development requirements.”
                </p>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => openInquiryModal(advancedProjectPlan)}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 py-4 px-8 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)] active:scale-95"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="rounded-3xl border border-border/80 bg-background/50 p-6 sm:p-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  Capabilities & Included Scope
                </p>
                <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
                  {advancedProjectPlan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                        <Check className="size-3.5 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug text-foreground/90 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project Details Transparency Section */}
        <Reveal delay={250} className="mt-12 sm:mt-16">
          <div className="rounded-3xl border border-border/70 bg-charcoal/40 p-6 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/50 pb-5">
              <div>
                <span className="text-xs font-semibold tracking-wider text-gold uppercase">
                  Project Engagement Details
                </span>
                <h4 className="mt-1 text-lg sm:text-xl font-bold text-foreground">
                  Clear, Transparent Working Standards
                </h4>
              </div>
              <span className="text-xs text-muted-foreground">
                No hidden costs • Tailored to your scope
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                <h5 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Domain & Hosting
                </h5>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Discussed and configured based on your infrastructure preferences and project requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                <h5 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Delivery Timelines
                </h5>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Project completion timelines depend directly on your total page scope and functional requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                <h5 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Revision Policy
                </h5>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Structured design reviews and iterative refinements are included according to your selected plan.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                <h5 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Maintenance & Support
                </h5>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Ongoing maintenance, technical updates, and support packages are available post-launch.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/40 p-4 sm:col-span-2 lg:col-span-2">
                <h5 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Client Assets & Content
                </h5>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Timely provision of brand assets, copy, and media helps ensure all planned milestones are met on schedule.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Functional Premium Project Inquiry / Checkout Modal */}
      {selectedPlan && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-inquiry-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop with luxury blur */}
          <div
            onClick={closeModal}
            aria-hidden="true"
            className="fixed inset-0 bg-background/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
          />

          {/* Modal Container */}
          <div className="relative z-10 max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[2.25rem] border border-gold/40 bg-charcoal/95 p-5 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-all duration-300 sm:p-8">
            {/* Close 'X' Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold active:scale-95"
            >
              <X className="size-4" />
            </button>

            {/* STEP 1: Customer Inquiry Form */}
            {modalStep === 1 && (
              <div>
                {/* Header: Selected Plan & Pricing Display */}
                <div className="pr-8">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                    {selectedPlan.name === "ADVANCED PROJECTS"
                      ? "Custom Quote Request"
                      : "Project Inquiry"}
                  </span>
                  <h3
                    id="modal-inquiry-title"
                    className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl"
                  >
                    {selectedPlan.modalDisplayPrice}
                  </h3>
                </div>

                {/* Sub-header pricing / requirements note */}
                {selectedPlan.name === "ADVANCED PROJECTS" ? (
                  <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                        <Sparkles className="size-3.5" />
                        Custom Quote
                      </span>
                      <span className="text-[0.7rem] font-semibold text-muted-foreground">
                        Tailored Scope
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-foreground/90 border-t border-gold/20 pt-2">
                      Final pricing depends on project scope, features, integrations and development
                      requirements.
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gold">
                        Selected Plan: {selectedPlan.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[0.7rem] text-muted-foreground">
                        <ShieldCheck className="size-3.5 text-gold" />
                        Direct Inquiry
                      </span>
                    </div>
                    {selectedPlan.isCustomPriced && (
                      <p className="mt-2 text-xs font-medium text-foreground/90 border-t border-gold/20 pt-2">
                        Final pricing depends on project requirements.
                      </p>
                    )}
                  </div>
                )}

                {/* Inline Error State */}
                {errorMessage && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-destructive/50 bg-destructive/10 p-3 text-xs text-destructive-foreground">
                    <AlertCircle className="size-4 shrink-0 text-destructive" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Fields */}
                <form onSubmit={handleContinue} className="mt-5 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => {
                        setErrorMessage(null);
                        setInquiryData((prev) => ({ ...prev, name: e.target.value }));
                      }}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-input/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => {
                        setErrorMessage(null);
                        setInquiryData((prev) => ({ ...prev, email: e.target.value }));
                      }}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-input/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  {/* Business / Brand */}
                  <div>
                    <label
                      htmlFor="inquiry-business"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Business / Brand
                    </label>
                    <input
                      id="inquiry-business"
                      type="text"
                      value={inquiryData.business}
                      onChange={(e) =>
                        setInquiryData((prev) => ({ ...prev, business: e.target.value }))
                      }
                      placeholder="Your brand, business, or company"
                      className="w-full rounded-xl border border-input/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="inquiry-project-type"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Project Type <span className="text-gold">*</span>
                    </label>
                    <input
                      id="inquiry-project-type"
                      type="text"
                      required
                      value={inquiryData.projectType}
                      onChange={(e) =>
                        setInquiryData((prev) => ({
                          ...prev,
                          projectType: e.target.value,
                        }))
                      }
                      placeholder="e.g. Portfolio Website, E-commerce, Web Platform"
                      className="w-full rounded-xl border border-input/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  {/* Requirements / Message */}
                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Requirements / Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      required
                      rows={4}
                      value={inquiryData.message}
                      onChange={(e) => {
                        setErrorMessage(null);
                        setInquiryData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }));
                      }}
                      placeholder="Share details on your vision, scope, preferred timeline, or reference websites..."
                      className="w-full rounded-xl border border-input/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20 resize-none"
                    />
                  </div>

                  {/* Actions: Close & Continue */}
                  <div className="pt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex w-full items-center justify-center rounded-full border border-border/80 bg-background/40 py-3.5 px-6 text-sm font-semibold text-muted-foreground transition-all hover:border-gold/40 hover:text-foreground active:scale-95 sm:w-auto"
                    >
                      Close
                    </button>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 px-8 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95 sm:w-auto"
                    >
                      <span>Continue</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 2: Review Screen */}
            {modalStep === 2 && (
              <div className="py-2 animate-in zoom-in-95 duration-200">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[var(--shadow-gold)]">
                  <CheckCircle2 className="size-8" />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    {selectedPlan.name === "ADVANCED PROJECTS" ? "Custom Quote" : "Inquiry Review"}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                    {selectedPlan.name === "ADVANCED PROJECTS"
                      ? "Review Custom Quote Request"
                      : "Review Plan & Inquiry"}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                    Please review your details for{" "}
                    <strong className="text-gold">{selectedPlan.name}</strong> before proceeding.
                  </p>
                </div>

                {/* Custom Quote Notice for Advanced Projects */}
                {selectedPlan.name === "ADVANCED PROJECTS" && (
                  <div className="mt-5 rounded-2xl border border-gold/35 bg-gold/10 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider">
                      <Sparkles className="size-3.5" />
                      <span>Custom Quote</span>
                    </div>
                    <p className="mt-1.5 text-xs font-medium leading-relaxed text-foreground/90">
                      Final pricing depends on project scope, features, integrations and development
                      requirements.
                    </p>
                  </div>
                )}

                {/* Summary Card */}
                <div className="mt-5 rounded-2xl border border-border/80 bg-background/50 p-5 text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Selected Plan</span>
                    <span className="font-bold text-foreground">
                      {selectedPlan.modalDisplayPrice}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 py-2">
                    <span className="text-muted-foreground">Full Name</span>
                    <span className="font-semibold text-foreground">{inquiryData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 py-2">
                    <span className="text-muted-foreground">Email Address</span>
                    <span className="font-semibold text-foreground">{inquiryData.email}</span>
                  </div>
                  {inquiryData.business && (
                    <div className="flex justify-between border-b border-border/50 py-2">
                      <span className="text-muted-foreground">Business / Brand</span>
                      <span className="font-semibold text-foreground">{inquiryData.business}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-border/50 py-2">
                    <span className="text-muted-foreground">Project Type</span>
                    <span className="font-semibold text-foreground">{inquiryData.projectType}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-muted-foreground block mb-1">Requirements / Message</span>
                    <p className="text-foreground/90 bg-charcoal/50 p-2.5 rounded-xl leading-relaxed whitespace-pre-wrap">
                      {inquiryData.message}
                    </p>
                  </div>
                </div>

                {/* Actions based on plan */}
                {selectedPlan.name === "ADVANCED PROJECTS" ? (
                  /* ADVANCED PROJECTS: Custom Quote Email Submission (No fixed payment button) */
                  <div className="mt-7 space-y-3">
                    <div className="flex flex-col gap-2.5 sm:flex-row">
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3.5 px-6 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                      >
                        <Send className="size-4" />
                        <span>Send to {STUDIO_EMAIL}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyInquiry}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/50 py-3.5 px-5 text-sm font-semibold text-foreground transition-all hover:border-gold/40 hover:text-gold active:scale-95"
                      >
                        {copiedDetails ? (
                          <>
                            <Check className="size-4 text-gold" />
                            <span className="text-gold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-4" />
                            <span>Copy Details</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setModalStep(1)}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
                      >
                        <ArrowLeft className="size-3.5" />
                        <span>Back to Edit Fields</span>
                      </button>

                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground underline transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  /* STARTER, PROFESSIONAL, PREMIUM: Continue to Payment */
                  <div className="mt-7 space-y-3">
                    <button
                      type="button"
                      onClick={handleProceedToPayment}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 px-8 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                    >
                      <span>Continue to Payment</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setModalStep(1)}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
                      >
                        <ArrowLeft className="size-3.5" />
                        <span>Back to Edit Fields</span>
                      </button>

                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground underline transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: Razorpay Secure Payment Screen */}
            {modalStep === 3 && (
              <div className="py-2 animate-in zoom-in-95 duration-200">
                {/* 1. PAYMENT SUCCESS STATE */}
                {paymentStatus === "success" && verifiedPayment ? (
                  <div className="text-center py-4">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-gold/40 bg-gold/20 text-gold shadow-[var(--shadow-gold)]">
                      <CheckCircle2 className="size-9 stroke-[2.2]" />
                    </div>

                    <span className="mt-4 inline-block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-gold">
                      Payment Verified & Confirmed
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                      Payment Successful!
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                      Thank you! Your payment for the{" "}
                      <strong className="text-gold font-semibold">{verifiedPayment.planName}</strong> has
                      been securely verified. Our studio has received your project details and will
                      reach out via email within 24 hours.
                    </p>

                    {/* Receipt Details Card */}
                    <div className="mt-6 rounded-2xl border border-gold/30 bg-background/60 p-5 text-left text-xs space-y-2.5">
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="text-muted-foreground">Selected Plan</span>
                        <span className="font-bold text-foreground">{verifiedPayment.planName}</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 py-2">
                        <span className="text-muted-foreground">Amount Paid</span>
                        <span className="font-bold text-gold">
                          ₹{verifiedPayment.amountINR.toLocaleString("en-IN")} INR
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 py-2">
                        <span className="text-muted-foreground">Razorpay Payment ID</span>
                        <span className="font-mono font-medium text-foreground select-all break-all">
                          {verifiedPayment.paymentId}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 py-2">
                        <span className="text-muted-foreground">Order Reference</span>
                        <span className="font-mono text-muted-foreground select-all break-all">
                          {verifiedPayment.orderId}
                        </span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-muted-foreground">Client Name</span>
                        <span className="font-semibold text-foreground">{inquiryData.name}</span>
                      </div>
                    </div>

                    {/* Actions: Copy & Done */}
                    <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                      <button
                        type="button"
                        onClick={handleCopyReceipt}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border/80 bg-background/50 py-3.5 px-5 text-xs font-semibold text-foreground transition-all hover:border-gold/40 hover:text-gold active:scale-95"
                      >
                        {copiedReceipt ? (
                          <>
                            <Check className="size-4 text-gold" />
                            <span className="text-gold">Receipt Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-4" />
                            <span>Copy Receipt Details</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3.5 px-6 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                      >
                        <span>Finish & Close</span>
                      </button>
                    </div>
                  </div>
                ) : paymentStatus === "verifying" ? (
                  /* 2. VERIFYING PAYMENT SIGNATURE STATE */
                  <div className="text-center py-8">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[var(--shadow-gold)]">
                      <RefreshCw className="size-8 animate-spin" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                      Verifying Payment...
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                      Please wait while we validate your payment signature with Razorpay and secure
                      your order. Do not close or refresh this window.
                    </p>
                  </div>
                ) : (
                  /* 3. CHECKOUT PREVIEW & PAYMENT SELECTION */
                  <div>
                    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[var(--shadow-gold)]">
                      <ShieldCheck className="size-8" />
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                        Secure Checkout
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                        Complete Your Order
                      </h3>
                      <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                        Review your plan investment and proceed with secure live checkout.
                      </p>
                    </div>

                    {/* Plan & Amount Summary */}
                    <div className="mt-6 rounded-2xl border border-gold/30 bg-background/60 p-5">
                      <div className="flex items-center justify-between border-b border-border/50 pb-3">
                        <span className="text-xs text-muted-foreground">Selected Plan</span>
                        <span className="font-display text-base font-bold text-foreground">
                          {selectedPlan.name}
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between pt-3">
                        <span className="text-xs text-muted-foreground">USD Price</span>
                        <div className="flex items-baseline gap-2 text-right">
                          <span className="font-display text-2xl sm:text-3xl font-extrabold text-gold">
                            {selectedPlan.priceUSD}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            USD
                          </span>
                        </div>
                      </div>

                      {/* Display fixed INR conversion amount for India & Razorpay */}
                      {getPlanDisplayINR(selectedPlan.name) && (
                        <div className="mt-3 flex items-center justify-between rounded-xl bg-charcoal/60 px-3.5 py-2.5 border border-border/60">
                          <span className="text-xs font-medium text-muted-foreground">
                            Razorpay INR Amount
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-foreground">
                            {getPlanDisplayINR(selectedPlan.name)} INR
                            {selectedPlan.isCustomPriced ? " starting amount" : ""}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Error Notice (if failed) */}
                    {paymentStatus === "failed" && paymentError && (
                      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-destructive/50 bg-destructive/10 p-3.5 text-xs text-destructive-foreground">
                        <AlertCircle className="size-4 shrink-0 text-destructive mt-0.5" />
                        <div>
                          <strong className="block font-semibold">Payment Unsuccessful</strong>
                          <span className="mt-0.5 block text-muted-foreground">{paymentError}</span>
                        </div>
                      </div>
                    )}

                    {/* Cancellation Notice (if user closed popup) */}
                    {paymentStatus === "cancelled" && (
                      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-gold/30 bg-gold/10 p-3.5 text-xs text-foreground/90">
                        <AlertCircle className="size-4 shrink-0 text-gold mt-0.5" />
                        <div>
                          <strong className="block font-semibold text-gold">
                            Payment Cancelled
                          </strong>
                          <span className="mt-0.5 block text-muted-foreground">
                            The Razorpay window was closed. No funds were debited. You can retry
                            whenever you are ready.
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Payment Method Cards */}
                    <div className="mt-5 space-y-3">
                      {/* RAZORPAY LIVE CARD */}
                      <div className="relative rounded-2xl border-2 border-gold/70 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50 p-4 shadow-[var(--shadow-gold)] transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30 shadow-[0_0_15px_oklch(0.79_0.12_85_/_25%)]">
                              <CreditCard className="size-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-foreground">Razorpay</h4>
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-400">
                                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  Live Payment
                                </span>
                              </div>
                              <p className="text-[0.72rem] text-muted-foreground mt-0.5">
                                UPI, Credit/Debit Cards, NetBanking & Wallets
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Pay with Razorpay Button */}
                        <div className="mt-4">
                          <button
                            type="button"
                            disabled={paymentStatus === "creating_order"}
                            onClick={handlePayWithRazorpay}
                            className={cn(
                              "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 px-6 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-95",
                              paymentStatus === "creating_order" && "opacity-80 cursor-wait",
                            )}
                          >
                            {paymentStatus === "creating_order" ? (
                              <>
                                <RefreshCw className="size-4 animate-spin" />
                                <span>Opening Secure Checkout...</span>
                              </>
                            ) : (
                              <>
                                <span>
                                  Pay with Razorpay{" "}
                                  {getPlanDisplayINR(selectedPlan.name)
                                    ? `(${getPlanDisplayINR(selectedPlan.name)})`
                                    : ""}
                                </span>
                                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* PAYPAL CARD (Secondary / Coming Soon) */}
                      <div className="relative rounded-2xl border border-border/60 bg-charcoal/30 p-4 transition-all opacity-75">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-background/50 text-muted-foreground border border-border/60">
                              <Wallet className="size-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-foreground">PayPal</h4>
                              <p className="text-[0.72rem] text-muted-foreground">
                                International PayPal Balance & Cards
                              </p>
                            </div>
                          </div>
                          <span className="rounded-full bg-charcoal border border-border/80 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground">
                            Upon Request
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="mt-4 rounded-xl border border-border/60 bg-charcoal/30 p-3 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-foreground/90">
                        <Lock className="size-3.5 text-gold" />
                        <span>256-Bit SSL Encrypted • Powered by Razorpay</span>
                      </div>
                    </div>

                    {/* Secondary Option: Discuss First */}
                    <div className="mt-4 rounded-2xl border border-dashed border-border/80 bg-background/40 p-3.5 text-center">
                      <p className="text-xs text-muted-foreground">Prefer to discuss first?</p>
                      <button
                        type="button"
                        onClick={handleContactStudio}
                        className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline transition-all active:scale-95"
                      >
                        <MessageSquare className="size-3.5" />
                        <span>Contact MNW Creative Studio</span>
                      </button>
                    </div>

                    {/* Navigation: Back to Review & Close */}
                    <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                      <button
                        type="button"
                        disabled={paymentStatus === "creating_order"}
                        onClick={() => {
                          setPaymentStatus("idle");
                          setPaymentError(null);
                          setModalStep(2);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors disabled:opacity-50"
                      >
                        <ArrowLeft className="size-3.5" />
                        <span>Back to Review</span>
                      </button>

                      <button
                        type="button"
                        disabled={paymentStatus === "creating_order"}
                        onClick={closeModal}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground underline transition-colors disabled:opacity-50"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
