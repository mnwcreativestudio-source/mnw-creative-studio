import { ArrowRight, Sparkles, Mail, Clock, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroLaptop from "@/assets/hero-laptop.webp";
import heroLaptopMobile from "@/assets/hero-laptop-mobile.webp";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient background gold glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute top-1/2 left-1/2 size-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[160px]" />
        <div className="absolute top-1/3 -right-20 size-[32rem] rounded-full bg-indigo-950/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-charcoal/95 via-charcoal/80 to-charcoal/50 p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
            {/* Top rim accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-gold">
                  <Sparkles className="size-3" />
                  Initiate Your Project
                </span>

                <h2 className="mt-5 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight">
                  Ready to Build Your{" "}
                  <span className="text-shimmer">Digital Presence?</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                  Turn your ideas into a bespoke, high-performing digital experience. We engineer every project
                  from the ground up with sculptural aesthetics, sub-second speed, and clear commercial focus.
                </p>

                <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-95"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:text-gold active:scale-95"
                  >
                    Explore Selected Work
                  </Link>
                </div>

                {/* Studio Trust Signals */}
                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/[0.08] pt-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="size-3.5 text-gold" />
                    <span>24h Response Time</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="size-3.5 text-gold" />
                    <span>Fixed Scope & Quotes</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="size-3.5 text-gold" />
                    <span>Direct Founder Access</span>
                  </span>
                </div>
              </div>

              {/* High-fidelity Device Visual Preview */}
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-gold/20 via-gold-deep/10 to-transparent blur-2xl opacity-70"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-charcoal/80 p-2.5 shadow-2xl backdrop-blur-xl">
                  {/* Browser Chrome Header */}
                  <div className="mb-2 flex items-center justify-between px-2 py-1">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-500/80" />
                      <span className="size-2 rounded-full bg-amber-500/80" />
                      <span className="size-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/40 px-3 py-0.5 text-[0.62rem] text-muted-foreground font-mono">
                      <span>mnwcreativestudio.in</span>
                    </div>
                    <div className="w-8" />
                  </div>

                  <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.06] bg-black/60">
                    <picture>
                      <source media="(max-width: 640px)" srcSet={heroLaptopMobile} type="image/webp" />
                      <img
                        src={heroLaptop}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={500}
                        alt="Modern website design displayed on laptop screen"
                        className="w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
