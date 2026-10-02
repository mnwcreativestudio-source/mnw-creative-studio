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
    <section id="why-us" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/6 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose MNW Creative Studio?"
          description="A considered, quality-first approach to web design and development focused on real outcomes for your business."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="h-full">
              <article className="premium-card group flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]">
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-all duration-300 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/15">
                    <point.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground transition-colors group-hover:text-gold">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
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
