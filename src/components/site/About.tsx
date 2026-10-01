import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-y border-border bg-charcoal/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="text-[0.7rem] font-semibold tracking-[0.3em] text-gold uppercase">
              About
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-balance sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
              Digital Experiences, Built With Purpose.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:pt-14">
            <p className="text-lg leading-relaxed text-muted-foreground">
              MNW Creative Studio creates modern websites that combine strong visual design,
              thoughtful user experience and reliable development. Every project is built around the
              unique goals of the business.
            </p>
            <span aria-hidden className="hairline-gold mt-10 block h-px w-full" />
            <p className="mt-8 text-sm tracking-[0.2em] text-gold uppercase">
              A global studio — working with modern businesses anywhere
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
