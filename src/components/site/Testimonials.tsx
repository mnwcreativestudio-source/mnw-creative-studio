import { ShieldCheck, BarChart3, Users2, Sparkles, ArrowRight, Lock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export type Testimonial = {
  id: string;
  clientName: string;
  roleOrCompany: string;
  projectType: string;
  feedback: string;
  rating?: number;
};

// Ready for verified client testimonials as ongoing projects reach publication milestones
const verifiedTestimonials: Testimonial[] = [];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background py-24 sm:py-32 overflow-hidden">
      {/* Ambient lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.035] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Partnerships"
          title="Verified Client Stories"
          description="We prioritize authentic outcomes and client confidentiality over unverified testimonials."
        />

        {verifiedTestimonials.length > 0 ? (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verifiedTestimonials.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <article className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <p className="text-sm leading-relaxed text-foreground/90 italic">
                    “{item.feedback}”
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <h4 className="font-display text-sm font-bold text-foreground">{item.clientName}</h4>
                    <p className="text-xs text-muted-foreground">{item.roleOrCompany}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Prestigious, intentional verification & confidentiality showcase */
          <div className="mt-16">
            <Reveal>
              <div className="relative overflow-hidden mx-auto max-w-4xl rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/50 p-8 sm:p-12 lg:p-14 text-center shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.12)] backdrop-blur-2xl">
                {/* Top rim accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />

                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                  <ShieldCheck className="size-7" />
                </div>

                <span className="mt-6 inline-block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
                  Client Confidentiality & Verified Outcomes
                </span>

                <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground">
                  In-Depth Client Case Studies in Progress
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  We treat client commercial goals with the highest level of professionalism and confidentiality.
                  Detailed post-launch case studies, conversion metrics, and verified feedback from our active
                  client cohort are compiled and published only after formal post-launch review.
                </p>

                {/* 3 Pillars of Client Integrity */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
                  <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5 backdrop-blur-md">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20 mb-3">
                      <Lock className="size-4" />
                    </span>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-foreground">
                      Strict NDA & Privacy
                    </h4>
                    <p className="mt-1.5 text-[0.72rem] text-muted-foreground leading-relaxed">
                      Commercial launch timelines and sensitive business logic remain completely confidential.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5 backdrop-blur-md">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20 mb-3">
                      <BarChart3 className="size-4" />
                    </span>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-foreground">
                      Audited Performance
                    </h4>
                    <p className="mt-1.5 text-[0.72rem] text-muted-foreground leading-relaxed">
                      We publish real telemetry, Core Web Vitals, and measurable business inquiries, not vanity quotes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5 backdrop-blur-md">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20 mb-3">
                      <Users2 className="size-4" />
                    </span>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-foreground">
                      Direct Senior Craft
                    </h4>
                    <p className="mt-1.5 text-[0.72rem] text-muted-foreground leading-relaxed">
                      Every project is led directly by studio founders with dedicated communication and care.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Discuss Your Project With Us</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <span>Inspect Our Work Showcase</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
