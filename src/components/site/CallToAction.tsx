import { ArrowRight, Sparkles } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient background gold glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="premium-card relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/45 p-8 sm:p-14 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                  <Sparkles className="size-3" />
                  Elevate Your Business
                </span>

                <h2 className="mt-5 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl leading-tight">
                  Ready to Build Your{" "}
                  <span className="text-gold-gradient">Digital Presence?</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Let's turn your ideas into a modern website built for your business. Fast,
                  responsive, and engineered to drive real client inquiries.
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
              </div>

              {/* Laptop visual preview on the side */}
              <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-charcoal/50 p-2 shadow-2xl">
                <img
                  src={heroLaptop}
                  loading="lazy"
                  width={800}
                  height={500}
                  alt="Modern website design displayed on laptop screen"
                  className="w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
