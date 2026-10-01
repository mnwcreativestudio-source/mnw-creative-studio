import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    no: "01",
    title: "Discover",
    text: "We clarify your goals, audience and the role the website needs to play.",
  },
  {
    no: "02",
    title: "Design",
    text: "Structure, layout and visual direction come together into a clear design.",
  },
  {
    no: "03",
    title: "Develop",
    text: "The design is built into a fast, responsive and reliable website.",
  },
  {
    no: "04",
    title: "Launch",
    text: "Final checks, refinements and a smooth handover as your site goes live.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Process"
          title="From Idea To Launch"
          description="A clear, four-step path so you always know what is happening and what comes next."
        />

        <div className="relative mt-16">
          <span
            aria-hidden
            className="hairline-gold absolute top-9 right-0 left-0 hidden h-px lg:block"
          />
          <ol className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 90} className="relative">
                <div className="premium-card h-full rounded-3xl p-8 pt-9">
                  <span className="font-display text-4xl font-extrabold text-gold-gradient">
                    {step.no}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
