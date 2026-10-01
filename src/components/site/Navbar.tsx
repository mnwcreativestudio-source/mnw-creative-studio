import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-[#131316] shadow-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="MNW Creative Studio — home" className="py-2">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-gold/50 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)] sm:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold lg:hidden active:scale-95"
          >
            {open ? <X className="size-5 text-gold" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Solid, isolated mobile navigation panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-50 flex flex-col bg-[#131316] border-t border-border/80 lg:hidden overflow-y-auto overscroll-contain transition-all duration-300 shadow-2xl",
          open
            ? "visible opacity-100 translate-y-0 pointer-events-auto"
            : "invisible opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <nav
          aria-label="Mobile Links"
          className="flex flex-col px-6 py-6 divide-y divide-border/40"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-gold active:text-gold"
            >
              <span>{link.label}</span>
              <span className="text-xs font-sans font-semibold tracking-wider uppercase text-gold/60">
                Explore →
              </span>
            </a>
          ))}
          <div className="pt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-gold py-4 text-center font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
