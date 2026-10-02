import {
  PenTool,
  Code2,
  RefreshCw,
  Building2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: PenTool,
    title: "Web Design",
    tag: "UI/UX & Visuals",
    text: "Distinctive, bespoke interfaces built on strong typography, brand character, and intuitive hierarchy.",
  },
  {
    icon: Code2,
    title: "Web Development",
    tag: "Clean Code",
    text: "Fast, responsive and scalable modern web builds with clean, maintainable, standards-compliant code.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    tag: "Modernize",
    text: "Transform an outdated site into a modern, high-performing digital experience that converts visitors.",
  },
  {
    icon: Building2,
    title: "Business Websites",
    tag: "Brand Presence",
    text: "Credibility-first websites for service businesses, studios, and professionals seeking qualified inquiries.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Websites",
    tag: "Online Stores",
    text: "Product-led storefronts designed around trust, visual impact, smooth cart experience, and conversion.",
  },
  {
    icon: Sparkles,
    title: "Custom Web Solutions",
    tag: "Tailored Logic",
    text: "Tailored web applications, booking flows, and custom integrations engineered to your exact requirements.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="What We Build"
          description="Everything your business needs to build a modern, high-performing online presence."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <article className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-charcoal/80 via-charcoal/45 to-charcoal/25 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_25px_60px_-15px_oklch(0.79_0.12_85_/_25%)]">
                {/* Ambient card top border highlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent group-hover:via-gold/50 transition-colors duration-500"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-13 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_20px_rgba(212,175,55,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:border-gold/60 group-hover:bg-gold/20">
                      <service.icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.68rem] font-bold text-muted-foreground uppercase tracking-widest backdrop-blur-md group-hover:border-gold/30 group-hover:text-gold transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-muted-foreground transition-colors group-hover:text-gold">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-gold" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
