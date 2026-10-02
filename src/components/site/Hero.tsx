import { ArrowRight, Sparkles, Zap, Compass } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      {/* Ambient premium lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute -top-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-gold/12 blur-[150px]" />
        <div className="animate-glow absolute top-1/3 -right-24 size-[30rem] rounded-full bg-gold-deep/12 blur-[130px]" />
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="reveal reveal-in">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.2em] text-gold uppercase shadow-[0_0_15px_oklch(0.79_0.12_85_/_10%)]">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              Modern Websites • Creative Design • Real Results
            </span>

            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-balance sm:text-5xl lg:text-[3.9rem]">
              Turn Your Ideas Into a{" "}
              <span className="text-gold-gradient">Digital Experience.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design and develop modern, high-performing websites that help businesses grow,
              attract more customers, and build a strong online presence.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background/50 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold active:scale-95"
              >
                View Our Work
              </a>
            </div>

            <p className="mt-8 flex items-center gap-2 text-xs tracking-wider text-muted-foreground uppercase">
              <Compass className="size-3.5 text-gold" />
              <span>Independent Web Design & Development Studio</span>
            </p>
          </div>

          <div className="reveal reveal-in relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
            {/* Subtle premium glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-gold/15 via-gold-deep/10 to-transparent blur-2xl opacity-70"
            />

            {/* Floating luxury badge 1 */}
            <div className="absolute -top-3.5 -left-2.5 sm:-top-5 sm:-left-4 z-20 flex items-center gap-3 rounded-2xl border border-gold/40 bg-charcoal/90 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[var(--shadow-gold)] backdrop-blur-xl animate-float">
              <span className="flex size-7 sm:size-8 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Sparkles className="size-3.5 sm:size-4" />
              </span>
              <div>
                <p className="text-[0.6rem] sm:text-[0.62rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Crafted With Intent
                </p>
                <p className="text-[0.75rem] sm:text-xs font-bold text-foreground">Bespoke Web Design</p>
              </div>
            </div>

            {/* Floating luxury badge 2 */}
            <div className="absolute -bottom-3.5 -right-2.5 sm:-bottom-5 sm:-right-4 z-20 flex items-center gap-3 rounded-2xl border border-border/80 bg-charcoal/90 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-2xl backdrop-blur-xl animate-float-delayed">
              <span className="flex size-7 sm:size-8 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Zap className="size-3.5 sm:size-4" />
              </span>
              <div>
                <p className="text-[0.6rem] sm:text-[0.62rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Speed & Precision
                </p>
                <p className="text-[0.75rem] sm:text-xs font-bold text-foreground">Ultra-Fast Performance</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-charcoal/50 p-2 sm:p-2.5 shadow-[var(--shadow-premium)] transition-all duration-500 hover:border-gold/50">
              <img
                src={heroLaptop}
                width={1408}
                height={1008}
                alt="Laptop displaying modern dark website designed by MNW Creative Studio"
                className="w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
