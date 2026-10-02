import { useState, useEffect } from "react";
import {
  Mail,
  Send,
  Instagram,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  RefreshCw,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  Lock,
  Edit2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import {
  requestEmailOtp,
  verifyEmailOtp,
  submitVerifiedInquiry,
  isDisposableEmail,
} from "@/lib/inquiry-client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const EMAIL = "mnwcreativestudio@gmail.com";

const planOptions = [
  { value: "Starter Plan", label: "Starter Plan (Up to 5 Pages)" },
  { value: "Professional Plan", label: "Professional Plan — Recommended" },
  { value: "Premium Plan", label: "Premium Plan (Full Custom & E-commerce)" },
  { value: "Web Design", label: "Web Design" },
  { value: "Website Development", label: "Website Development" },
  { value: "Website Redesign", label: "Website Redesign" },
  { value: "Business Website", label: "Business Website" },
  { value: "Portfolio Website", label: "Portfolio Website" },
  { value: "E-commerce Website", label: "E-commerce Website" },
  { value: "Custom Web Solution", label: "Custom Web Solution" },
];

type Fields = {
  name: string;
  email: string;
  business: string;
  projectType: string;
  message: string;
};

const initialFields: Fields = {
  name: "",
  email: "",
  business: "",
  projectType: "",
  message: "",
};

export function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "project">("contact");
  const [fields, setFields] = useState<Fields>(initialFields);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Email Verification State
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationToken, setVerificationToken] = useState<string | null>(null);
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpStatusMessage, setOtpStatusMessage] = useState<string | null>(null);
  const [otpErrorMessage, setOtpErrorMessage] = useState<string | null>(null);

  // Timers
  const [otpExpirySeconds, setOtpExpirySeconds] = useState(0);
  const [resendCooldownSeconds, setResendCooldownSeconds] = useState(0);

  // Form Submission State
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // 60-Second Expiry Countdown
  useEffect(() => {
    if (otpExpirySeconds <= 0) return;
    const interval = setInterval(() => {
      setOtpExpirySeconds((prev) => {
        if (prev <= 1) {
          setOtpErrorMessage("This verification code has expired (valid for 60 seconds). Please request a new code.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [otpExpirySeconds]);

  // 30-Second Resend Cooldown Countdown
  useEffect(() => {
    if (resendCooldownSeconds <= 0) return;
    const interval = setInterval(() => {
      setResendCooldownSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [resendCooldownSeconds]);

  // Synchronize plan selection if user clicked "Get Started" on a pricing card
  useEffect(() => {
    const handlePlanSelect = (e: CustomEvent<string>) => {
      const planName = e.detail;
      if (!planName) return;

      const matchingOption = planOptions.find((opt) =>
        opt.value.toLowerCase().includes(planName.toLowerCase()),
      );

      const targetValue = matchingOption ? matchingOption.value : `${planName} Plan`;

      setSelectedPlan(planName);
      setFields((prev) => ({
        ...prev,
        projectType: targetValue,
        message: prev.message.trim()
          ? prev.message
          : `Hello MNW Studio, I am interested in getting started with the ${planName} Plan for our website project.`,
      }));

      // Scroll smoothly to contact form
      setTimeout(() => {
        const formEl = document.getElementById("contact-form");
        if (formEl) {
          formEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 120);
    };

    window.addEventListener("mnw-select-plan" as never, handlePlanSelect);
    return () => {
      window.removeEventListener("mnw-select-plan" as never, handlePlanSelect);
    };
  }, []);

  const update =
    (key: keyof Fields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setErrorMessage(null);
      setOtpErrorMessage(null);
      const val = event.target.value;

      // If user edits email after being verified, reset verification for security
      if (key === "email" && isEmailVerified && val.trim().toLowerCase() !== verifiedEmail) {
        setIsEmailVerified(false);
        setVerificationToken(null);
        setVerifiedEmail("");
        setOtpSent(false);
        setOtpCode("");
      }

      setFields((prev) => ({ ...prev, [key]: val }));
    };

  const formatTimer = (totalSecs: number) => {
    const s = Math.max(0, totalSecs);
    return `00:${s.toString().padStart(2, "0")}`;
  };

  // Step 1: Send OTP to entered email
  const handleSendOtp = async () => {
    setOtpErrorMessage(null);
    setOtpStatusMessage(null);

    const email = fields.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setOtpErrorMessage("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setOtpErrorMessage("Please enter a valid email format (e.g. name@company.com).");
      return;
    }
    if (isDisposableEmail(email)) {
      setOtpErrorMessage(
        "Please use a permanent business or personal email address (temporary disposable emails are not accepted).",
      );
      return;
    }

    setIsSendingOtp(true);
    try {
      const res = await requestEmailOtp(email);
      setOtpSent(true);
      setOtpCode("");
      setOtpExpirySeconds(res.expiresInSeconds || 60); // strictly 60 seconds
      setResendCooldownSeconds(res.cooldownSeconds || 30); // 30 seconds
      setOtpStatusMessage(res.message || "Verification code sent! Please check your inbox.");
    } catch (err: unknown) {
      setOtpErrorMessage(
        err instanceof Error ? err.message : "Failed to send verification code. Please try again.",
      );
    } finally {
      setIsSendingOtp(false);
    }
  };

  // Step 1: Verify the 6-digit OTP
  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = (codeToVerify ?? otpCode).trim();
    if (!code || code.length !== 6) {
      setOtpErrorMessage("Please enter the complete 6-digit verification code.");
      return;
    }

    setOtpErrorMessage(null);
    setOtpStatusMessage(null);
    setIsVerifyingOtp(true);

    try {
      const res = await verifyEmailOtp(fields.email, code);
      setIsEmailVerified(true);
      setVerificationToken(res.verificationToken);
      setVerifiedEmail(res.email);
      setOtpStatusMessage("Email verified ✓");
      setOtpSent(false);
      setOtpCode("");
    } catch (err: unknown) {
      setOtpErrorMessage(
        err instanceof Error
          ? err.message
          : "Verification failed. Please check the OTP and try again.",
      );
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleOtpChange = (value: string) => {
    setOtpCode(value);
    setOtpErrorMessage(null);
    if (value.length === 6) {
      handleVerifyOtp(value);
    }
  };

  const handleEditEmail = () => {
    setIsEmailVerified(false);
    setVerificationToken(null);
    setVerifiedEmail("");
    setOtpSent(false);
    setOtpCode("");
    setOtpStatusMessage(null);
    setOtpErrorMessage(null);
  };

  const handleNextStep = () => {
    setErrorMessage(null);
    if (!fields.name.trim() || fields.name.trim().length < 2) {
      setErrorMessage("Please enter your name (at least 2 characters).");
      return;
    }
    if (!isEmailVerified || !verificationToken) {
      setErrorMessage("Please verify your email address before continuing.");
      return;
    }
    setActiveTab("project");
  };

  // Step 2: Final Inquiry Submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);

    if (!isEmailVerified || !verificationToken) {
      setErrorMessage("Please verify your email in Step 1 before submitting.");
      setActiveTab("contact");
      return;
    }

    if (!fields.name.trim()) {
      setErrorMessage("Please enter your name in Step 1.");
      setActiveTab("contact");
      return;
    }

    if (!fields.message.trim() || fields.message.trim().length < 5) {
      setErrorMessage("Please enter a short message about your project (at least 5 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitVerifiedInquiry({
        name: fields.name,
        email: fields.email,
        business: fields.business,
        projectType: fields.projectType || selectedPlan || null,
        message: fields.message,
        verificationToken,
      });

      setSent(true);
    } catch (err: unknown) {
      console.error("Inquiry submission error:", err);
      const message =
        err instanceof Error
          ? err.message
          : "Failed to submit your inquiry. Please try again or reach out to us directly via email.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getEmailContent = () => {
    const subject = `New Project Inquiry — ${fields.name.trim() || "Client"}`;
    const body = [
      `Client Name: ${fields.name.trim() || "—"}`,
      `Email Address: ${fields.email.trim() || "—"} [Verified: ✓]`,
      `Business / Brand: ${fields.business.trim() || "—"}`,
      `Selected Plan / Service: ${fields.projectType || selectedPlan || "General Inquiry"}`,
      "",
      "Project Details & Goals:",
      fields.message.trim() || "—",
    ].join("\n");

    return { subject, body };
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyMessage = () => {
    const { subject, body } = getEmailContent();
    const formatted = `Subject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2200);
  };

  const handleReset = () => {
    setFields(initialFields);
    setSelectedPlan(null);
    setIsEmailVerified(false);
    setVerificationToken(null);
    setVerifiedEmail("");
    setOtpSent(false);
    setOtpCode("");
    setActiveTab("contact");
    setSent(false);
    setErrorMessage(null);
    setOtpErrorMessage(null);
    setOtpStatusMessage(null);
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-black/40 px-4.5 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-gold/70 focus:bg-black/60 focus:ring-2 focus:ring-gold/20 shadow-inner";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 border-t border-white/[0.06] bg-gradient-to-b from-charcoal/30 via-background to-charcoal/40">
      {/* Refined ambient gold lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 size-[44rem] -translate-x-1/2 rounded-full bg-gold/[0.04] blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 size-[36rem] rounded-full bg-gold/[0.03] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left Column: Headline, Narrative & Direct Channels */}
          <Reveal className="flex flex-col">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)] w-fit">
              <Sparkles className="size-3" />
              Get In Touch
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Let’s Build <span className="text-gold-gradient">Something Great.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have an idea, redesign, or project in mind? We partner with businesses to turn vision
              into modern, high-performing websites that establish credibility, attract clients, and
              accelerate digital growth.
            </p>

            <span aria-hidden className="hairline-gold my-8 block h-px w-36" />

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card with 1-click copy */}
              <div className="group relative flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-6 transition-all duration-400 hover:border-gold/50 hover:bg-charcoal/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-left">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/20">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <span className="block text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Direct Email
                    </span>
                    <span className="mt-1 block text-sm font-semibold break-all text-foreground transition-colors group-hover:text-gold sm:text-base">
                      {EMAIL}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy studio email address"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-gold/50 hover:text-gold active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-3.5 text-gold" />
                      <span className="font-semibold text-gold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/mnwcreativestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-6 transition-all duration-400 hover:border-gold/50 hover:bg-charcoal/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/20">
                    <Instagram className="size-5" />
                  </span>
                  <div>
                    <span className="block text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Studio Instagram
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-foreground transition-colors group-hover:text-gold sm:text-base">
                      @mnwcreativestudio
                    </span>
                  </div>
                </div>

                <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-background/60 text-muted-foreground transition-all duration-300 group-hover:border-gold/50 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>

              {/* Send Email Direct Action Link */}
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "New project enquiry — MNW Creative Studio",
                )}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/40 bg-gold/5 px-7 py-3.5 text-sm font-semibold text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
              >
                <Mail className="size-4" />
                <span>Send Us an Email</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Tabbed Glassmorphism Inquiry Form */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.1] bg-charcoal/40 p-6 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.08)] backdrop-blur-2xl transition-all duration-400 hover:border-gold/30">
              {/* Subtle top rim light */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
              />

              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                {/* 2-Step Tabs Header */}
                <div className="mb-8 grid grid-cols-2 gap-2 rounded-2xl bg-black/40 p-1.5 border border-white/[0.08] backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setActiveTab("contact")}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-semibold transition-all duration-300",
                      activeTab === "contact"
                        ? "bg-gradient-to-r from-gold via-gold-soft to-gold text-charcoal font-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-black/20 text-[0.65rem] font-bold">
                      {isEmailVerified ? <Check className="size-3 text-emerald-950 stroke-[3]" /> : "1"}
                    </span>
                    <span>1. Verification</span>
                    {isEmailVerified && (
                      <span className="hidden sm:inline-block size-1.5 rounded-full bg-emerald-950 animate-pulse" />
                    )}
                  </button>

                  <button
                    type="button"
                    disabled={!isEmailVerified}
                    onClick={() => isEmailVerified && setActiveTab("project")}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-semibold transition-all duration-300",
                      activeTab === "project"
                        ? "bg-gradient-to-r from-gold via-gold-soft to-gold text-charcoal font-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        : isEmailVerified
                          ? "text-muted-foreground hover:text-foreground cursor-pointer"
                          : "text-muted-foreground/40 cursor-not-allowed",
                    )}
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-black/20 text-[0.65rem] font-bold">
                      2
                    </span>
                    <span>2. Project Scope</span>
                    {!isEmailVerified && (
                      <Lock className="size-3 text-muted-foreground/40 hidden sm:inline-block" />
                    )}
                  </button>
                </div>

                {/* Active Plan Selector Pill */}
                {selectedPlan && (
                  <div className="mb-6 flex items-center justify-between rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                      <Sparkles className="size-4" />
                      <span>
                        Selected Plan:{" "}
                        <strong className="uppercase font-bold tracking-wide">
                          {selectedPlan}
                        </strong>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPlan(null);
                        setFields((prev) => ({ ...prev, projectType: "" }));
                      }}
                      className="text-xs text-muted-foreground underline transition-colors hover:text-gold"
                    >
                      Clear
                    </button>
                  </div>
                )}

                {/* Global Error Banner */}
                {errorMessage && (
                  <div className="mb-6 flex items-center gap-2.5 rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-xs text-destructive-foreground animate-in fade-in duration-200">
                    <AlertCircle className="size-4 shrink-0 text-destructive" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* ======================================================== */}
                {/* TAB 1: IDENTITY & EMAIL OTP VERIFICATION */}
                {/* ======================================================== */}
                {activeTab === "contact" && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={fields.name}
                        onChange={update("name")}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="contact-email"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Email Address <span className="text-gold">*</span>
                        </label>
                        {isEmailVerified && (
                          <span className="inline-flex items-center gap-1 text-[0.7rem] font-bold text-emerald-400">
                            <Check className="size-3" />
                            Verified
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          id="contact-email"
                          type="email"
                          required
                          disabled={isEmailVerified || isSendingOtp}
                          value={fields.email}
                          onChange={update("email")}
                          placeholder="john@company.com"
                          className={cn(
                            inputClass,
                            isEmailVerified && "border-emerald-500/50 bg-emerald-950/20 pr-24 text-emerald-300 font-medium",
                          )}
                        />

                        {isEmailVerified && (
                          <button
                            type="button"
                            onClick={handleEditEmail}
                            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-full border border-border/80 bg-charcoal/80 px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                          >
                            <Edit2 className="size-3" />
                            <span>Change</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Email Verification Component */}
                    <div className="pt-1">
                      {isEmailVerified ? (
                        /* Prominent Email Verified Badge */
                        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4.5 flex items-center justify-between gap-3 shadow-[0_0_20px_oklch(0.72_0.17_153_/_15%)]">
                          <div className="flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 shadow-sm">
                              <Check className="size-5" />
                            </span>
                            <div>
                              <span className="text-sm font-extrabold text-emerald-300 tracking-wide block">
                                Email Verified ✓
                              </span>
                              <span className="text-xs text-muted-foreground">
                                Verified access to <span className="text-foreground">{verifiedEmail}</span>
                              </span>
                            </div>
                          </div>

                          <span className="text-[0.68rem] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2.5 py-0.5">
                            Ready
                          </span>
                        </div>
                      ) : (
                        /* Verification Trigger & OTP Entry Panel */
                        <div className="rounded-2xl border border-border/80 bg-charcoal/60 p-4.5 sm:p-5">
                          {!otpSent ? (
                            /* Trigger Button */
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div>
                                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                  <ShieldCheck className="size-4 text-gold" />
                                  <span>Email Verification Required</span>
                                </span>
                                <p className="text-[0.72rem] text-muted-foreground mt-0.5">
                                  We will send a 6-digit security code to your email.
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={handleSendOtp}
                                disabled={isSendingOtp || !fields.email.trim()}
                                className={cn(
                                  "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95 shrink-0",
                                  (!fields.email.trim() || isSendingOtp) && "opacity-70 cursor-not-allowed",
                                )}
                              >
                                {isSendingOtp ? (
                                  <>
                                    <RefreshCw className="size-3.5 animate-spin" />
                                    <span>Sending Code...</span>
                                  </>
                                ) : (
                                  <>
                                    <span>Verify Email</span>
                                    <ArrowRight className="size-3.5" />
                                  </>
                                )}
                              </button>
                            </div>
                          ) : (
                            /* 6-Digit OTP Input & Timers */
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                  <ShieldCheck className="size-4 text-gold" />
                                  <span>Enter 6-Digit Verification Code</span>
                                </span>
                                <button
                                  type="button"
                                  onClick={handleEditEmail}
                                  className="text-xs text-muted-foreground hover:text-gold underline"
                                >
                                  Edit Email
                                </button>
                              </div>

                              <p className="text-xs text-muted-foreground">
                                We sent a 6-digit code to <strong className="text-foreground">{fields.email}</strong>.
                              </p>

                              {/* 6-Digit Slot Inputs */}
                              <div className="flex justify-center py-2">
                                <InputOTP
                                  maxLength={6}
                                  value={otpCode}
                                  onChange={handleOtpChange}
                                  disabled={isVerifyingOtp}
                                >
                                  <InputOTPGroup className="gap-2 sm:gap-2.5">
                                    <InputOTPSlot index={0} className="size-11 sm:size-12 rounded-xl text-lg font-bold border-border/80 bg-charcoal/80 focus:border-gold" />
                                    <InputOTPSlot index={1} className="size-11 sm:size-12 rounded-xl text-lg font-bold border-border/80 bg-charcoal/80 focus:border-gold" />
                                    <InputOTPSlot index={2} className="size-11 sm:size-12 rounded-xl text-lg font-bold border-border/80 bg-charcoal/80 focus:border-gold" />
                                    <InputOTPSlot index={3} className="size-11 sm:size-12 rounded-xl text-lg font-bold border-border/80 bg-charcoal/80 focus:border-gold" />
                                    <InputOTPSlot index={4} className="size-11 sm:size-12 rounded-xl text-lg font-bold border-border/80 bg-charcoal/80 focus:border-gold" />
                                    <InputOTPSlot index={5} className="size-11 sm:size-12 rounded-xl text-lg font-bold border-border/80 bg-charcoal/80 focus:border-gold" />
                                  </InputOTPGroup>
                                </InputOTP>
                              </div>

                              {/* Timers & Actions */}
                              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-border/40 text-xs">
                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                  <Clock className="size-3.5 text-gold" />
                                  {otpExpirySeconds > 0 ? (
                                    <span>Code expires in <strong className="text-gold font-mono">{formatTimer(otpExpirySeconds)}</strong></span>
                                  ) : (
                                    <span className="text-amber-400 font-medium">Code expired. Please request a new code.</span>
                                  )}
                                </span>

                                <button
                                  type="button"
                                  disabled={resendCooldownSeconds > 0 || isSendingOtp}
                                  onClick={handleSendOtp}
                                  className={cn(
                                    "font-semibold transition-colors",
                                    resendCooldownSeconds > 0
                                      ? "text-muted-foreground/60 cursor-not-allowed"
                                      : "text-gold hover:underline cursor-pointer",
                                  )}
                                >
                                  {resendCooldownSeconds > 0
                                    ? `Resend OTP in ${resendCooldownSeconds}s`
                                    : "Didn't receive code? Resend OTP"}
                                </button>
                              </div>

                              {/* Manual Verify Button */}
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={() => handleVerifyOtp()}
                                  disabled={otpCode.length !== 6 || isVerifyingOtp || otpExpirySeconds <= 0}
                                  className={cn(
                                    "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold py-2.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95",
                                    (otpCode.length !== 6 || isVerifyingOtp || otpExpirySeconds <= 0) && "opacity-60 cursor-not-allowed",
                                  )}
                                >
                                  {isVerifyingOtp ? (
                                    <>
                                      <RefreshCw className="size-3.5 animate-spin" />
                                      <span>Verifying Code...</span>
                                    </>
                                  ) : (
                                    <>
                                      <span>Confirm Code</span>
                                      <Check className="size-3.5" />
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          )}

                          {/* OTP Error Message */}
                          {otpErrorMessage && (
                            <div className="mt-3 flex items-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive-foreground">
                              <AlertCircle className="size-4 shrink-0 text-destructive" />
                              <span>{otpErrorMessage}</span>
                            </div>
                          )}

                          {/* OTP Status Notice */}
                          {otpStatusMessage && (
                            <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                              <Check className="size-4 shrink-0 text-emerald-400" />
                              <span>{otpStatusMessage}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Next Button */}
                    <div className="mt-8 pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span className="text-xs text-muted-foreground">
                        {!isEmailVerified ? (
                          <span className="flex items-center gap-1.5 text-gold/80">
                            <Lock className="size-3.5" />
                            <span>Verify your email above to continue</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-emerald-400">
                            <Check className="size-3.5" />
                            <span>Verification complete</span>
                          </span>
                        )}
                      </span>

                      <button
                        type="button"
                        disabled={!isEmailVerified}
                        onClick={handleNextStep}
                        className={cn(
                          "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all duration-300 sm:w-auto",
                          isEmailVerified
                            ? "bg-gold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 active:scale-95 cursor-pointer"
                            : "bg-charcoal border border-border/60 text-muted-foreground/40 cursor-not-allowed opacity-60",
                        )}
                      >
                        <span>Next: Project Scope</span>
                        <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ======================================================== */}
                {/* TAB 2: PROJECT SCOPE & MESSAGE */}
                {/* ======================================================== */}
                {activeTab === "project" && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Business Name Field */}
                      <div>
                        <label
                          htmlFor="contact-business"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Business Name
                        </label>
                        <input
                          id="contact-business"
                          type="text"
                          disabled={isSubmitting}
                          value={fields.business}
                          onChange={update("business")}
                          placeholder="Your company or studio"
                          className={inputClass}
                        />
                      </div>

                      {/* Project Type / Plan Dropdown */}
                      <div>
                        <label
                          htmlFor="contact-plan"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Project Type / Plan
                        </label>
                        <select
                          id="contact-plan"
                          disabled={isSubmitting}
                          value={fields.projectType}
                          onChange={update("projectType")}
                          className={cn(inputClass, "cursor-pointer")}
                        >
                          <option value="">Select a plan or service</option>
                          <optgroup label="Website Plans">
                            <option value="Starter Plan">Starter Plan (Up to 5 Pages)</option>
                            <option value="Professional Plan">Professional Plan — Recommended</option>
                            <option value="Premium Plan">
                              Premium Plan (Complete Digital Presence)
                            </option>
                          </optgroup>
                          <optgroup label="Custom Web Services">
                            <option value="Web Design">Web Design</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Website Redesign">Website Redesign</option>
                            <option value="Business Website">Business Website</option>
                            <option value="Portfolio Website">Portfolio Website</option>
                            <option value="E-commerce Website">E-commerce Website</option>
                            <option value="Custom Web Solution">Custom Web Solution</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Project Details & Goals <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        disabled={isSubmitting}
                        rows={5}
                        value={fields.message}
                        onChange={update("message")}
                        placeholder="Tell us about your project requirements, target timeline, and goals..."
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>

                    {/* Step 2 Buttons */}
                    <div className="mt-8 pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab("contact")}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-gold transition-colors order-2 sm:order-1"
                      >
                        <ArrowLeft className="size-4" />
                        <span>Back to Contact Info</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-95 sm:w-auto order-1 sm:order-2",
                          isSubmitting && "cursor-not-allowed opacity-80",
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="size-4 animate-spin" />
                            <span>Submitting Verified Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Success State Box */}
                {sent && (
                  <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-6 transition-all duration-300">
                    <div className="flex items-center gap-2.5 text-sm font-bold text-gold">
                      <Check className="size-4 shrink-0" />
                      <span>Inquiry Submitted Successfully!</span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Thank you! Your verified inquiry has been stored securely and dispatched directly to{" "}
                      <span className="font-semibold text-foreground">{EMAIL}</span>. We will review
                      your project goals and respond to <span className="font-semibold text-foreground">{fields.email}</span> within 24 hours.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2.5">
                      {/* Webmail fallback (Gmail) */}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
                          getEmailContent().subject,
                        )}&body=${encodeURIComponent(getEmailContent().body)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:brightness-110"
                      >
                        <ExternalLink className="size-3.5" />
                        <span>Send via Gmail Web</span>
                      </a>

                      {/* Copy inquiry details */}
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-charcoal/60 px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-gold/40 hover:text-gold"
                      >
                        {copiedMessage ? (
                          <>
                            <Check className="size-3.5 text-gold" />
                            <span className="text-gold font-semibold">Details Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span>Copy Inquiry Details</span>
                          </>
                        )}
                      </button>

                      {/* Reset form button */}
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 rounded-full border border-transparent px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <RefreshCw className="size-3" />
                        <span>New Inquiry</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
