import { PenTool, Code2, RefreshCw, Building2, ShoppingBag, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: PenTool,
    title: "Web Design",
    text: "Distinctive interfaces built on strong typography, hierarchy and brand character.",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Fast, scalable front-end builds with clean, maintainable, standards-based code.",
  },
  {
    icon: RefreshCw,
    title: "Redesign",
    text: "Modernise an outdated site into a sharper, faster, more persuasive experience.",
  },
  {
    icon: Building2,
    title: "Business Websites",
    text: "Credibility-first websites for service businesses, studios and professionals.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    text: "Product-led storefronts designed around clarity, trust and smooth checkout.",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    text: "Bespoke web experiences and portfolio sites shaped around specific goals.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What We Build"
          description="Every engagement is scoped around what your business actually needs to grow online."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <article className="premium-card group h-full rounded-3xl p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/8 text-gold transition-transform duration-300 group-hover:-translate-y-1">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
