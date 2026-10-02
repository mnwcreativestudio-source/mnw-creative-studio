import { Instagram, Mail, ArrowUpRight } from "lucide-react";
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

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
  { label: "Service & Project Policy", href: "/service-policy" },
];

const EMAIL = "mnwcreativestudio@gmail.com";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-charcoal/50 overflow-hidden">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold/[0.03] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_0.9fr]">
          {/* Col 1: Brand & Bio */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-display text-sm font-bold text-foreground">
              Modern Websites for Modern Businesses
            </p>
            <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Bespoke digital design and high-performance front-end engineering for forward-thinking
              brands worldwide.
            </p>
          </div>

          {/* Col 2: Navigate */}
          <nav aria-label="Footer Navigation">
            <h2 className="text-[0.68rem] font-bold tracking-[0.25em] text-gold uppercase">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs sm:text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Legal & Policies */}
          <nav aria-label="Legal & Policies">
            <h2 className="text-[0.68rem] font-bold tracking-[0.25em] text-gold uppercase">
              Legal & Policies
            </h2>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Connect */}
          <div>
            <h2 className="text-[0.68rem] font-bold tracking-[0.25em] text-gold uppercase">
              Connect
            </h2>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm break-all text-muted-foreground transition-colors duration-200 hover:text-gold group"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/20 transition-transform group-hover:scale-110">
                    <Mail className="size-3.5 shrink-0" />
                  </span>
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mnwcreativestudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground transition-colors duration-200 hover:text-gold group"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/20 transition-transform group-hover:scale-110">
                    <Instagram className="size-3.5 shrink-0" />
                  </span>
                  <span>@mnwcreativestudio</span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-xs font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <span aria-hidden className="hairline-gold mt-14 block h-px w-full" />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© 2026 MNW Creative Studio. All rights reserved.</p>
          <p className="text-[0.72rem] text-muted-foreground/80">
            Policies are general business policies and may be updated as the business evolves.
          </p>
        </div>
      </div>
    </footer>
  );
}
