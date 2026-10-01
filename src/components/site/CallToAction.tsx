import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/14 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="premium-card rounded-[2.5rem] px-7 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
              Ready To Build <span className="text-gold-gradient">Something Great?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Let's create a website that makes your business look as good online as it does in real
              life.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:brightness-110"
              >
                Start Your Project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Explore Plans & Pricing
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
