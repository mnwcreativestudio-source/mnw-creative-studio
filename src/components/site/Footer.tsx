import { useState } from "react";
import { Instagram, Mail, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/work" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Bespoke Web Design", to: "/services" },
  { label: "Frontend Engineering", to: "/services" },
  { label: "Website Redesign & Modernize", to: "/services" },
  { label: "Authority Business Websites", to: "/services" },
  { label: "E-Commerce Solutions", to: "/services" },
  { label: "Custom Web Applications", to: "/services" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
  { label: "Service & Project Policy", href: "/service-policy" },
];

const EMAIL = "mnwcreativestudio@gmail.com";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-charcoal/50 overflow-hidden pt-20 pb-12">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-gold/[0.04] to-transparent" />

      {/* Large Architectural Agency Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none overflow-hidden whitespace-nowrap text-center font-display text-[5.5rem] sm:text-[9rem] lg:text-[13rem] font-black tracking-tighter text-white/[0.02] leading-none"
      >
        MNW STUDIO
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        {/* Top Studio Status Bar */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/[0.06] pb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-950/50 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Studio Status: Accepting Select Client Projects for 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs text-muted-foreground transition-all hover:border-gold hover:text-gold active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-gold" />
                  <span className="text-gold font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="size-3" />
                  <span>Copy Studio Email</span>
                </>
              )}
            </button>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110"
            >
              <span>Start Project</span>
              <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 4-Column Agency Directory Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.1fr_0.9fr]">
          {/* Col 1: Brand & Purpose */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-display text-sm font-bold text-foreground">
              Bespoke Digital Design & Engineering
            </p>
            <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-muted-foreground">
              We design and develop high-performing websites and digital platforms that command market authority, build trust, and accelerate commercial growth.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/mnwcreativestudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MNW Creative Studio on Instagram"
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-gold hover:text-gold hover:scale-105"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Direct studio email"
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-gold hover:text-gold hover:scale-105"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <nav aria-label="Footer Navigation">
            <h3 className="text-[0.68rem] font-bold tracking-[0.25em] text-gold uppercase">
              Directory
            </h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Disciplines */}
          <nav aria-label="Core Disciplines">
            <h3 className="text-[0.68rem] font-bold tracking-[0.25em] text-gold uppercase">
              Disciplines
            </h3>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Legal & Policies */}
          <nav aria-label="Legal & Policies">
            <h3 className="text-[0.68rem] font-bold tracking-[0.25em] text-gold uppercase">
              Legal & Policies
            </h3>
            <ul className="mt-5 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Baseline Copyright & Disclaimer */}
        <div className="mt-16 border-t border-white/[0.06] pt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© 2026 MNW Creative Studio. All rights reserved.</p>
          <p className="text-[0.72rem] text-muted-foreground/75">
            Bespoke Architecture • Sub-Second Performance • Direct Senior Craft
          </p>
        </div>
      </div>
    </footer>
  );
}
