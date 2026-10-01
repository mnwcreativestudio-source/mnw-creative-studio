import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pb-28">
      {/* Ambient premium lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-gold/12 blur-[140px]" />
        <div className="animate-glow absolute top-1/3 -right-24 size-[28rem] rounded-full bg-gold-deep/12 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="reveal reveal-in">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
              <span className="size-1.5 rounded-full bg-gold" />
              Global Web Design Studio
            </span>

            <h1 className="mt-7 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-[4.1rem]">
              Turn Your Ideas Into a{" "}
              <span className="text-gold-gradient">Powerful Digital Experience.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design and develop modern, high-performing websites that help businesses build
              credibility, attract customers and grow online.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:brightness-110"
              >
                Start Your Project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                View Our Work
              </a>
            </div>

            <p className="mt-9 text-sm tracking-wide text-muted-foreground">
              Modern Websites for Modern Businesses
            </p>
          </div>

          <div className="reveal reveal-in relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold/15 blur-3xl animate-pulse-gold"
            />

            {/* Floating luxury badge 1 */}
            <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 z-20 flex items-center gap-3 rounded-2xl border border-gold/30 bg-charcoal/90 px-4 py-2.5 shadow-[var(--shadow-gold)] backdrop-blur-xl animate-float">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Sparkles className="size-4" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Crafted With Intent
                </p>
                <p className="text-xs font-bold text-foreground">Bespoke Design</p>
              </div>
            </div>

            {/* Floating luxury badge 2 */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 z-20 flex items-center gap-3 rounded-2xl border border-border/80 bg-charcoal/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl animate-float-delayed">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Zap className="size-4" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Architecture
                </p>
                <p className="text-xs font-bold text-foreground">Ultra-Fast Performance</p>
              </div>
            </div>

            <img
              src={heroLaptop}
              width={1408}
              height={1008}
              alt="Laptop displaying a modern dark website designed by MNW Creative Studio"
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-premium)] transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
