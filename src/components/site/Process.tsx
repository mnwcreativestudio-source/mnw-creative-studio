import { Search, PenTool, Code2, Rocket, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    no: "01",
    icon: Search,
    title: "Discover",
    text: "We clarify your business goals, target audience, and the exact role your website needs to play.",
  },
  {
    no: "02",
    icon: PenTool,
    title: "Design",
    text: "Layout architecture, aesthetic direction, and responsive wireframes come together into a custom design.",
  },
  {
    no: "03",
    icon: Code2,
    title: "Develop",
    text: "The approved design is crafted into a fast, responsive, and secure website with clean modern code.",
  },
  {
    no: "04",
    icon: Rocket,
    title: "Launch",
    text: "Final quality checks, SEO verification, and a smooth deployment as your website goes live.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From Idea To Launch"
          description="A clear, four-step path so you always know what is happening and what comes next."
        />

        <div className="relative mt-16">
          {/* Connected timeline line for desktop */}
          <div
            aria-hidden
            className="absolute top-12 left-10 right-10 hidden h-[2px] bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 lg:block"
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 90} className="relative h-full">
                <div className="premium-card group relative flex h-full flex-col justify-between rounded-3xl p-7 pt-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]">
                  <div>
                    {/* Header with step number and icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-extrabold text-gold-gradient">
                        {step.no}
                      </span>
                      <span className="flex size-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20">
                        <step.icon className="size-5" />
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Tailored Scope Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-charcoal/50 px-4 py-2 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-gold" />
            <span>Every project is tailored to its goals, scope and requirements.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
