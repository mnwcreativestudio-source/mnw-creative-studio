import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, ShieldCheck, CheckCircle2, ExternalLink, Activity } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.webp";
import heroLaptopMobile from "@/assets/hero-laptop-mobile.webp";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-36">
      {/* Cinematic ambient background lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-glow absolute -top-44 left-1/2 size-[24rem] sm:size-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-gold/20 via-gold-deep/10 to-transparent blur-[60px] sm:blur-[160px]" />
        <div className="absolute top-1/4 -left-28 size-[18rem] sm:size-[34rem] rounded-full bg-indigo-950/30 blur-[60px] sm:blur-[150px]" />
        <div className="absolute top-1/3 -right-28 size-[20rem] sm:size-[38rem] rounded-full bg-gold-deep/15 blur-[60px] sm:blur-[160px]" />
        {/* Architectural subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at 50% 20%, black 50%, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_1fr] lg:gap-16">
          {/* Left Column: Authority Headline, Story & Conversion Actions */}
          <div className="reveal reveal-in">
            {/* Studio Identity Capsule */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.24em] text-gold uppercase shadow-[0_0_25px_oklch(0.79_0.12_85_/_20%)] backdrop-blur-xl">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-gold" />
              </span>
              <span>Bespoke Digital Design & High-Performance Engineering</span>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-[4.25rem] tracking-tight text-foreground">
              Turn Visionary Ideas Into an{" "}
              <span className="text-shimmer">Unforgettable Digital Experience.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg font-normal">
              We design and engineer bespoke, high-performing websites that elevate brands,
              command market trust, and convert visitors into high-ticket clients.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:text-gold active:scale-95"
              >
                Explore Selected Work
              </Link>
            </div>

            {/* Authoritative Studio Credentials Strip */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-7">
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  100%
                </p>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">
                  Bespoke Code
                </p>
                <p className="text-[0.62rem] text-muted-foreground/60 hidden sm:block">Zero template bloat</p>
              </div>
              <div className="border-x border-white/[0.08] px-3 sm:px-4">
                <p className="font-display text-xl sm:text-2xl font-extrabold text-gold tracking-tight">
                  &lt; 1.2s
                </p>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">
                  Core Web Vitals
                </p>
                <p className="text-[0.62rem] text-muted-foreground/60 hidden sm:block">Sub-second load times</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  Direct
                </p>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">
                  Founder Craft
                </p>
                <p className="text-[0.62rem] text-muted-foreground/60 hidden sm:block">Senior creators only</p>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Dimensional Agency Centerpiece */}
          <div className="reveal reveal-in relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
            {/* Radiant Ambient Auroral Halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-gold/25 via-gold-deep/15 to-transparent blur-3xl opacity-85"
            />

            {/* Floating Satellite Card 1 (Top Left) */}
            <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 z-20 flex items-center gap-3 rounded-2xl border border-gold/40 bg-charcoal/95 px-4 py-2.5 shadow-[var(--shadow-gold)] backdrop-blur-2xl animate-float">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                <Sparkles className="size-4" />
              </span>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gold">
                  Architecture
                </p>
                <p className="text-xs font-extrabold text-foreground">Bespoke React & TS</p>
              </div>
            </div>

            {/* Floating Satellite Card 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 z-20 flex items-center gap-3 rounded-2xl border border-white/[0.12] bg-charcoal/95 px-4 py-2.5 shadow-2xl backdrop-blur-2xl animate-float-delayed">
              <span className="flex size-8 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-400 border border-emerald-400/30">
                <Activity className="size-4" />
              </span>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider text-emerald-400">
                  Speed Audited
                </p>
                <p className="text-xs font-extrabold text-foreground">99/100 Core Web Vitals</p>
              </div>
            </div>

            {/* Studio Browser Chassis with Window Controls & URL Capsule */}
            <div className="relative overflow-hidden rounded-[2.25rem] border border-gold/40 bg-gradient-to-b from-white/[0.12] via-charcoal/85 to-charcoal/65 p-2.5 sm:p-3.5 shadow-[var(--shadow-premium)] transition-all duration-500 hover:border-gold/65">
              {/* Browser Header Bar */}
              <div className="mb-2.5 flex items-center justify-between rounded-t-xl px-2 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-500/80" />
                  <span className="size-2.5 rounded-full bg-amber-500/80" />
                  <span className="size-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/50 px-3.5 py-0.5 text-[0.65rem] text-muted-foreground font-mono">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  <span>mnwcreativestudio.in/bespoke-work</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[0.62rem] font-bold text-gold tracking-widest uppercase">STUDIO</span>
                </div>
              </div>

              {/* Viewport Image Preview with Ambient Reflection */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-black/90">
                <picture>
                  <source media="(max-width: 640px)" srcSet={heroLaptopMobile} type="image/webp" />
                  <img
                    src={heroLaptop}
                    width={1408}
                    height={1008}
                    alt="Modern dark luxury website designed by MNW Creative Studio"
                    className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
