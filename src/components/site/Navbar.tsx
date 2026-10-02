import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/[0.08] bg-charcoal/85 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="MNW Creative Studio — Home" className="py-2">
          <Logo />
        </Link>

        <nav aria-label="Main Navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative text-xs xl:text-sm font-medium transition-colors duration-200 py-1",
                  isActive
                    ? "text-gold font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden rounded-full bg-gold px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-95 sm:inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-background/60 text-foreground transition-colors hover:border-gold/50 hover:text-gold lg:hidden active:scale-95"
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
          "fixed inset-x-0 top-[72px] bottom-0 z-50 flex flex-col bg-[#131316] border-t border-white/[0.08] lg:hidden overflow-y-auto overscroll-contain transition-all duration-300 shadow-2xl",
          open
            ? "visible opacity-100 translate-y-0 pointer-events-auto"
            : "invisible opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <nav
          aria-label="Mobile Links"
          className="flex flex-col px-6 py-6 divide-y divide-white/[0.06]"
        >
          {navLinks.map((link) => {
            const isActive =
              link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between py-4 font-display text-xl font-bold tracking-tight transition-colors",
                  isActive ? "text-gold" : "text-foreground hover:text-gold",
                )}
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans font-semibold tracking-wider uppercase text-gold/60">
                  Open →
                </span>
              </Link>
            );
          })}
          <div className="pt-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-center font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
