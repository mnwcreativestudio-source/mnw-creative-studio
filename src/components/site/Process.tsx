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
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Workflow & Delivery"
          title="From Idea To Launch"
          description="A clear, four-step path so you always know what is happening and what comes next."
        />

        <div className="relative mt-16">
          {/* Connected timeline line for desktop */}
          <div
            aria-hidden
            className="absolute top-14 left-12 right-12 hidden h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 90} className="relative h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-8 pt-9 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_22px_55px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.12)]">
                  {/* Subtle top rim light */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div>
                    {/* Header with step number and icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-display text-4xl font-extrabold text-gold-gradient tracking-tight">
                        {step.no}
                      </span>
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/20">
                        <step.icon className="size-5" />
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-gold">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-charcoal/50 px-5 py-2.5 text-xs text-muted-foreground/90 backdrop-blur-md shadow-sm">
            <Sparkles className="size-3.5 text-gold" />
            <span>Every project is tailored to its goals, scope and requirements.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
