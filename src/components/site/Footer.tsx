import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Plans", href: "/#plans" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
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
    <footer className="border-t border-border bg-charcoal/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_0.9fr]">
          {/* Col 1: Brand & Bio */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm font-medium text-foreground">
              Modern Websites for Modern Businesses
            </p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Bespoke digital design and high-performance front-end engineering for forward-thinking
              brands worldwide.
            </p>
          </div>

          {/* Col 2: Navigate */}
          <nav aria-label="Footer Navigation">
            <h2 className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
              Navigate
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Legal & Policies */}
          <nav aria-label="Legal & Policies">
            <h2 className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
              Legal & Policies
            </h2>
            <ul className="mt-5 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Connect */}
          <div>
            <h2 className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
              Connect
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm break-all text-muted-foreground transition-colors duration-200 hover:text-gold"
                >
                  <Mail className="size-4 shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mnwcreativestudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                >
                  <Instagram className="size-4 shrink-0" />
                  <span>@mnwcreativestudio</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition-colors duration-200 hover:underline"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="size-3" />
                </a>
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
