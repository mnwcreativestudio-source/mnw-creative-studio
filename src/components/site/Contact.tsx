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
} from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { submitInquiry } from "@/lib/supabase";

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
  const [fields, setFields] = useState<Fields>(initialFields);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Synchronize plan selection if the user clicked "Get Started" on a plan card
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

      // Smoothly scroll and focus the form
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
      setFields((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const getEmailContent = () => {
    const subject = `New Project Inquiry — ${fields.name.trim() || "Client"}`;
    const body = [
      `Client Name: ${fields.name.trim() || "—"}`,
      `Email Address: ${fields.email.trim() || "—"}`,
      `Business / Brand: ${fields.business.trim() || "—"}`,
      `Selected Plan / Service: ${fields.projectType || selectedPlan || "General Inquiry"}`,
      "",
      "Project Details & Goals:",
      fields.message.trim() || "—",
    ].join("\n");

    return { subject, body };
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);

    // Form validation
    if (!fields.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!fields.email.trim() || !/^\S+@\S+\.\S+$/.test(fields.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!fields.message.trim()) {
      setErrorMessage("Please enter a short message about your project.");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitInquiry({
        name: fields.name,
        email: fields.email,
        business: fields.business,
        projectType: fields.projectType || selectedPlan || null,
        message: fields.message,
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
    setSent(false);
    setErrorMessage(null);
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full rounded-2xl border border-input/80 bg-charcoal/40 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-gold/60 focus:bg-charcoal/70 focus:ring-2 focus:ring-gold/15";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Refined ambient gold lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 size-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 size-[32rem] rounded-full bg-gold/4 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left Column: Headline, Narrative & Direct Channels */}
          <Reveal className="flex flex-col">
            <span className="text-[0.7rem] font-semibold tracking-[0.3em] text-gold uppercase">
              Get In Touch
            </span>

            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
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
              <div className="premium-card group relative flex items-center justify-between gap-4 rounded-3xl p-6 transition-all duration-300">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-left">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15">
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
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-background/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-gold/50 hover:text-gold active:scale-95"
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
                className="premium-card group flex items-center justify-between gap-4 rounded-3xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15">
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

                <span className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-gold/50 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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

          {/* Right Column: Premium Glassmorphism Inquiry Form */}
          <Reveal delay={120}>
            <div className="rounded-[2.25rem] border border-border/80 bg-charcoal/50 p-7 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-gold/30 sm:p-10">
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
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

                {/* Inline Error State */}
                {errorMessage && (
                  <div className="mb-6 flex items-center gap-2.5 rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-xs text-destructive-foreground">
                    <AlertCircle className="size-4 shrink-0 text-destructive" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={fields.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                      className={cn(inputClass, isSubmitting && "opacity-70 cursor-not-allowed")}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={fields.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className={cn(inputClass, isSubmitting && "opacity-70 cursor-not-allowed")}
                    />
                  </div>

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
                      className={cn(inputClass, isSubmitting && "opacity-70 cursor-not-allowed")}
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
                      className={cn(inputClass, "cursor-pointer", isSubmitting && "opacity-70 cursor-not-allowed")}
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
                <div className="mt-5">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    disabled={isSubmitting}
                    rows={5}
                    value={fields.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project requirements, target timeline, and goals..."
                    className={cn(inputClass, "resize-none", isSubmitting && "opacity-70 cursor-not-allowed")}
                  />
                </div>

                {/* Submit Inquiry Button */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:brightness-110 active:scale-95 sm:w-auto",
                      isSubmitting && "cursor-not-allowed opacity-80",
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="size-4 animate-spin" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <span className="text-xs text-muted-foreground">Direct reply to {EMAIL}</span>
                </div>

                {/* Success State Box */}
                {sent && (
                  <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-6 transition-all duration-300">
                    <div className="flex items-center gap-2.5 text-sm font-bold text-gold">
                      <Check className="size-4 shrink-0" />
                      <span>Inquiry Submitted Successfully!</span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Thank you! Your project inquiry has been delivered directly to{" "}
                      <span className="font-semibold text-foreground">{EMAIL}</span>. We will review
                      your project goals and respond via email within 24 hours.
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
