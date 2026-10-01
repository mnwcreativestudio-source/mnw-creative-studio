import { MonitorSmartphone, Target, Gauge, Smartphone, Layers, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    icon: MonitorSmartphone,
    title: "Modern & responsive design",
    text: "Layouts that stay composed and considered on every screen size.",
  },
  {
    icon: Target,
    title: "Conversion-focused layouts",
    text: "Clear structure and calls to action that guide visitors toward enquiry.",
  },
  {
    icon: Gauge,
    title: "Fast and scalable development",
    text: "Lightweight builds that stay quick as your content and pages grow.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first experience",
    text: "Designed for the small screen first, then scaled up with intent.",
  },
  {
    icon: Layers,
    title: "Clean premium UI",
    text: "Refined spacing, typography and detail that signals quality.",
  },
  {
    icon: Wrench,
    title: "Custom solutions",
    text: "No rigid templates — each build is shaped around your goals.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/6 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why MNW"
          title="Built For Businesses That Want To Stand Out."
          description="A considered approach to design and build, focused on how your website actually performs for the people using it."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="h-full">
              <article className="premium-card group flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-300">
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/8 text-gold transition-all duration-300 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/15">
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
