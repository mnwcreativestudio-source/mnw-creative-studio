import { Search, PenTool, Code2, Rocket, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const steps = [
  {
    no: "01",
    phase: "Discovery & Strategy",
    icon: Search,
    title: "Discovery & Alignment",
    tagline: "Clarifying Vision & Architecture",
    text: "We map your commercial goals, target audience profiles, conversion pathways, and functional requirements into a detailed architectural blueprint.",
    deliverables: [
      "Target audience & competitor analysis",
      "Information architecture & sitemap",
      "Technical requirements & tech stack scoping",
      "Clear milestone timeline & fixed quote",
    ],
  },
  {
    no: "02",
    phase: "Bespoke Design",
    icon: PenTool,
    title: "Bespoke UI/UX Design",
    tagline: "Sculpting Visual Distinction",
    text: "We craft custom design systems, typography hierarchy, responsive wireframes, and interactive prototypes tailored to your brand personality.",
    deliverables: [
      "Custom responsive design concepts",
      "Design system tokens (type, color, spacing)",
      "Interactive desktop & mobile wireframes",
      "Collaborative feedback & revision rounds",
    ],
  },
  {
    no: "03",
    phase: "Engineering",
    icon: Code2,
    title: "Full-Stack Development",
    tagline: "High-Performance Code",
    text: "We engineer your approved design into a lightning-fast, secure, and responsive web application with clean modern code and zero template bloat.",
    deliverables: [
      "Clean React & TypeScript codebase",
      "Sub-second Core Web Vitals optimization",
      "Secure API integrations & form workflows",
      "Mobile-first responsive optimization",
    ],
  },
  {
    no: "04",
    phase: "Quality & Launch",
    icon: Rocket,
    title: "Deployment & Verification",
    tagline: "Going Live With Confidence",
    text: "Rigorous cross-browser testing, technical SEO verification, analytics setup, and high-availability cloud deployment to launch your brand.",
    deliverables: [
      "Cross-browser & mobile stress testing",
      "On-page & technical SEO verification",
      "Domain DNS, SSL & CDN configuration",
      "Post-launch monitoring & client handover",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.035] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Workflow & Delivery"
            title="The Creative Journey"
            description="A transparent, four-phase delivery methodology ensuring your project progresses smoothly from concept to live deployment."
          />
          <Link
            to="/process"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
          >
            <span>Read Complete Methodology</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Visual Journey Connector Bar */}
        <div className="mt-16 relative">
          {/* Luminous Connector Line for Large Screens */}
          <div
            aria-hidden
            className="absolute top-16 left-16 right-16 hidden h-[2px] bg-gradient-to-r from-gold/20 via-gold to-gold/20 lg:block"
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 80} className="relative h-full">
                <article className="group relative flex h-full flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-charcoal/50 backdrop-blur-2xl p-7 pt-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.15)]">
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
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/20">
                        <step.icon className="size-5" />
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                        {step.phase}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-gold">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {step.text}
                      </p>
                    </div>

                    {/* Milestones / Deliverables list */}
                    <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                      {step.deliverables.slice(0, 3).map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[0.72rem] text-foreground/80">
                          <CheckCircle2 className="size-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[0.72rem] font-semibold text-muted-foreground group-hover:text-gold transition-colors">
                    <span>Phase 0{i + 1} Deliverable</span>
                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Tailored Scope Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-charcoal/60 px-6 py-3 text-xs text-muted-foreground/90 backdrop-blur-md shadow-sm">
            <Sparkles className="size-3.5 text-gold" />
            <span>Every project features direct founder involvement, transparent weekly milestones, and no surprise costs.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
