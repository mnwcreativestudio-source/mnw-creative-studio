import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Compass } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Cinematic ambient background lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute -top-40 left-1/2 size-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-gold/15 via-gold-deep/8 to-transparent blur-[160px]" />
        <div className="absolute top-1/4 -left-20 size-[32rem] rounded-full bg-indigo-950/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-20 size-[34rem] rounded-full bg-gold-deep/10 blur-[150px]" />
        {/* Subtle architectural dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="reveal reveal-in">
            {/* Luxury Floating Capsule Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.22em] text-gold uppercase shadow-[0_0_25px_oklch(0.79_0.12_85_/_18%)] backdrop-blur-xl">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-gold" />
              </span>
              <span>Modern Websites • Creative Design • Real Results</span>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold text-balance sm:text-5xl lg:text-[4rem] tracking-tight">
              Turn Your Ideas Into a{" "}
              <span className="text-shimmer">Digital Experience.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg font-normal">
              We design and develop modern, high-performing websites that elevate brands,
              captivate clients, and build an unforgettable online presence.
            </p>

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
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:text-gold active:scale-95"
              >
                View Selected Work
              </Link>
            </div>

            {/* Premium Metrics Ribbon */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-7">
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                  100%
                </p>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium mt-0.5">
                  Custom Architecture
                </p>
              </div>
              <div className="border-x border-white/[0.08] px-3 sm:px-4">
                <p className="font-display text-xl sm:text-2xl font-extrabold text-gold">
                  &lt; 1.2s
                </p>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium mt-0.5">
                  Core Web Vitals
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                  Bespoke
                </p>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium mt-0.5">
                  Tailored UI / UX
                </p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-in relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
            {/* Multi-layered radiant aura */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-gold/20 via-gold-deep/15 to-transparent blur-3xl opacity-80"
            />

            {/* Floating Luxury Badge 1 (Top Left) */}
            <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-5 z-20 flex items-center gap-3 rounded-2xl border border-gold/40 bg-charcoal/90 px-4 py-2.5 shadow-[var(--shadow-gold)] backdrop-blur-2xl animate-float">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                <Sparkles className="size-4" />
              </span>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gold">
                  Crafted With Intent
                </p>
                <p className="text-xs font-extrabold text-foreground">Bespoke Web Design</p>
              </div>
            </div>

            {/* Floating Luxury Badge 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-5 z-20 flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-charcoal/90 px-4 py-2.5 shadow-2xl backdrop-blur-2xl animate-float-delayed">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                <Zap className="size-4" />
              </span>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Speed & Precision
                </p>
                <p className="text-xs font-extrabold text-foreground">Ultra-Fast Performance</p>
              </div>
            </div>

            {/* Laptop Frame with Beveled Glass & Gold Border */}
            <div className="relative overflow-hidden rounded-[2.25rem] border border-gold/35 bg-gradient-to-b from-white/[0.08] to-transparent p-2.5 shadow-[var(--shadow-premium)] transition-all duration-500 hover:border-gold/60">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.05] bg-black/60">
                <img
                  src={heroLaptop}
                  width={1408}
                  height={1008}
                  alt="Modern dark luxury website designed by MNW Creative Studio"
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

