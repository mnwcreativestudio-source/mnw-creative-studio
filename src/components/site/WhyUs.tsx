import {
  Layers,
  Smartphone,
  Gauge,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    icon: Layers,
    title: "Custom Design",
    text: "Tailored layouts created from the ground up for your brand, avoiding rigid templates.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    text: "Engineered for smartphones first, then scaled seamlessly to tablets and wide desktops.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    text: "Lightweight, fast-loading code architecture optimized for speed and Core Web Vitals.",
  },
  {
    icon: Sparkles,
    title: "SEO Ready",
    text: "Semantic markup, clean heading hierarchy, and meta structures built for search discovery.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Transparent milestones, proactive progress updates, and responsive support at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "Clean, reliable modern code standards and seamless integration with trusted payment providers.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Studio Standard"
          title="Why Choose MNW Creative Studio?"
          description="A considered, quality-first approach to web design and development focused on real outcomes for your business."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="h-full">
              <article className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_22px_55px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.12)]">
                {/* Subtle top rim light */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/20">
                    <point.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg sm:text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-gold">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
