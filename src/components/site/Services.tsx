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
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="What We Build"
          description="Everything your business needs to build a modern, high-performing online presence."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <article className="premium-card group relative flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-all duration-300 group-hover:scale-105 group-hover:border-gold/50 group-hover:bg-gold/15">
                      <service.icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-[0.68rem] font-semibold text-muted-foreground uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-muted-foreground transition-colors group-hover:text-gold">
                  <span>Explore Service</span>
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 text-gold" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
