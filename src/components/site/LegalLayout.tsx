import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, FileText, RefreshCw, Layers, Mail, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  activePath: "/privacy-policy" | "/terms" | "/refund-policy" | "/service-policy";
  children: ReactNode;
}

const legalNavLinks = [
  { label: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  { label: "Terms & Conditions", href: "/terms", icon: FileText },
  { label: "Refund & Cancellation", href: "/refund-policy", icon: RefreshCw },
  { label: "Service & Project Policy", href: "/service-policy", icon: Layers },
] as const;

export function LegalLayout({
  title,
  subtitle,
  lastUpdated = "October 2026",
  activePath,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-gold/20 selection:text-gold">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-[#131316]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="MNW Creative Studio — Return to Home" className="py-2">
            <Logo />
          </Link>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-xs font-semibold text-gold transition-all duration-200 hover:border-gold hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to MNW Creative Studio</span>
          </Link>
        </div>
      </header>

      {/* Hero Header */}
      <div className="relative border-b border-border/60 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-background py-16 sm:py-20">
        {/* Ambient glow decoration */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold">
            Legal & Policies
          </span>

          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>

          <p className="mt-4 text-xs font-medium text-gold/80">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Legal Navigation Quick-Tabs */}
      <nav
        aria-label="Legal Documents Navigation"
        className="border-b border-border/60 bg-charcoal/20"
      >
        <div className="mx-auto max-w-4xl px-5 py-3 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {legalNavLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-200",
                    isActive
                      ? "border border-gold/60 bg-gold/15 text-gold font-semibold shadow-sm"
                      : "text-muted-foreground hover:border-border hover:bg-charcoal/50 hover:text-foreground",
                  )}
                >
                  <Icon className="size-3.5 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <article className="rounded-3xl border border-border/80 bg-charcoal/30 p-6 shadow-xl backdrop-blur-sm sm:p-12">
          {children}

          {/* Contact & Business Information Card */}
          <section
            aria-labelledby="legal-contact-heading"
            className="mt-14 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:p-8"
          >
            <h2
              id="legal-contact-heading"
              className="font-display text-lg font-bold text-foreground sm:text-xl"
            >
              Contact & Business Information
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Have a question about our services, policies, project scope, or payments? We are here
              to help and ensure complete clarity.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Business Entity
                </span>
                <p className="mt-1 text-sm font-bold text-foreground">MNW Creative Studio</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Independent Web Design & Development Studio
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Direct Inquiries
                </span>
                <a
                  href="mailto:mnwcreativestudio@gmail.com"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
                >
                  <Mail className="size-3.5" />
                  <span>mnwcreativestudio@gmail.com</span>
                </a>
                <div className="mt-1">
                  <a
                    href="https://www.instagram.com/mnwcreativestudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold"
                  >
                    <Instagram className="size-3" />
                    <span>Instagram: @mnwcreativestudio</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs italic text-muted-foreground">
              Have a question about our services, policies, project scope or payments? Contact us at{" "}
              <a
                href="mailto:mnwcreativestudio@gmail.com"
                className="text-gold underline hover:text-gold/90"
              >
                mnwcreativestudio@gmail.com
              </a>
              .
            </p>
          </section>

          {/* General Policies Disclaimer */}
          <footer className="mt-8 border-t border-border/60 pt-6">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground/80">Notice:</strong> The policies outlined above
              are general business policies governing engagements with MNW Creative Studio and may
              be updated periodically as our business and services evolve.
            </p>
          </footer>
        </article>

        {/* Back Link at Bottom */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-charcoal/40 px-6 py-3 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:border-gold/40 hover:text-gold hover:shadow-sm"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Return to MNW Creative Studio Home</span>
          </Link>
        </div>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
