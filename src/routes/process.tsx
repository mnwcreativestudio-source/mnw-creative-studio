import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Code2, PenTool, Rocket, Search, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { Process as ProcessComponent } from "@/components/site/Process";
import { Reveal } from "@/components/site/Reveal";

const title = "Our Process — MNW Creative Studio";
const description =
  "Our clear, four-step path from discovery to launch ensures structured milestones, prompt communication, and dependable website delivery.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: ProcessPage,
});

const phaseDetails = [
  {
    phase: "01",
    title: "Discovery & Technical Alignment",
    icon: Search,
    duration: "2–3 Days",
    objective: "Establish precise project goals, user pathways, and site architecture.",
    deliverables: [
      "Brand & audience brief review",
      "Page hierarchy & sitemap planning",
      "Content & media asset checklist",
      "Technical requirements & third-party integrations scope",
    ],
  },
  {
    phase: "02",
    title: "Bespoke Design & Prototyping",
    icon: PenTool,
    duration: "4–8 Days",
    objective: "Craft custom visual language, typography, and responsive layouts.",
    deliverables: [
      "Custom UI design direction & color system",
      "Desktop & smartphone responsive wireframes",
      "Micro-interaction & animation specifications",
      "Structured client design review & refinement round",
    ],
  },
  {
    phase: "03",
    title: "Frontend Engineering & Build",
    icon: Code2,
    duration: "5–12 Days",
    objective: "Transform the approved design into fast, clean, and accessible code.",
    deliverables: [
      "Component-based React & TypeScript build",
      "Mobile-first responsive optimization",
      "Interactive forms & OTP verification integrations",
      "Payment gateway & API integrations",
    ],
  },
  {
    phase: "04",
    title: "QA, Technical SEO & Production Launch",
    icon: Rocket,
    duration: "2–4 Days",
    objective: "Rigorous quality assurance, cross-browser validation, and live deployment.",
    deliverables: [
      "Core Web Vitals & performance audit",
      "Cross-device & cross-browser verification",
      "Custom domain & SSL certificate binding",
      "Final handover & post-launch warranty support",
    ],
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Workflow & Delivery"
          title="From Concept To"
          titleHighlight="Production Launch."
          description="A structured, collaborative engineering roadmap so you always know exactly what is happening, what milestone is active, and what comes next."
          badge="Structured 4-Phase System"
        />

        {/* High-Level 4 Steps Overview */}
        <ProcessComponent />

        {/* Detailed Breakdown of Each Phase */}
        <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/30 py-24 sm:py-32 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/3 right-1/4 size-[40rem] rounded-full bg-gold/[0.03] blur-[150px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
                <Clock className="size-3" />
                Detailed Milestones
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                Phase-by-Phase <span className="text-gold-gradient">Deliverables.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Every phase concludes with clear deliverables and feedback opportunities before progressing to the next stage.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {phaseDetails.map((item, i) => (
                <Reveal key={item.phase} delay={i * 90}>
                  <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-8 transition-all duration-400 hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-3xl font-extrabold text-gold-gradient">
                            {item.phase}
                          </span>
                          <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                            Phase {item.phase}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                          <Clock className="size-3" />
                          {item.duration}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.objective}
                      </p>

                      <div className="mt-6">
                        <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                          Key Deliverables
                        </span>
                        <ul className="mt-3 space-y-2.5">
                          {item.deliverables.map((del, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90"
                            >
                              <CheckCircle2 className="size-4 shrink-0 text-gold mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="relative py-20 sm:py-28 overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-background via-charcoal/30 to-background">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal/40 p-10 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-gold">
                  <Sparkles className="size-3" />
                  Predictable Execution
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Ready to Start Phase 01? <span className="text-gold-gradient">Let’s Connect.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Reach out with your goals and timeline. We will review your project and outline your discovery milestone within 24 hours.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Initiate Project Consultation</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <span>View Pricing Plans</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
