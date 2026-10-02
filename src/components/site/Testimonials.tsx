import { MessageSquareQuote } from "lucide-react";
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

// Ready for verified client testimonials as ongoing projects are completed
const verifiedTestimonials: Testimonial[] = [];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background py-24 sm:py-32 overflow-hidden">
      {/* Ambient lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Real feedback and authentic experiences from businesses we collaborate with."
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
          /* Professional authentic state (No fake testimonials) */
          <Reveal className="mt-14">
            <div className="relative overflow-hidden mx-auto max-w-2xl rounded-[2.5rem] border border-gold/35 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal/40 p-9 sm:p-12 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.12)] backdrop-blur-2xl">
              {/* Subtle top rim light */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              />

              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                <MessageSquareQuote className="size-7" />
              </div>

              <span className="mt-6 inline-block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
                Authentic Partnerships
              </span>

              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                Client Stories Coming Soon
              </h3>

              <p className="mx-auto mt-3.5 max-w-lg text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Real client testimonials and project stories will appear here as completed projects and verified feedback become available.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
