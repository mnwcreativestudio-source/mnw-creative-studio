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
    <section id="testimonials" className="border-t border-border bg-charcoal/30 py-20 sm:py-28">
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
                <article className="premium-card flex h-full flex-col justify-between rounded-3xl p-7">
                  <p className="text-sm leading-relaxed text-foreground/90 italic">
                    “{item.feedback}”
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <h4 className="text-sm font-bold text-foreground">{item.clientName}</h4>
                    <p className="text-xs text-muted-foreground">{item.roleOrCompany}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Professional authentic state (No fake testimonials) */
          <Reveal className="mt-12">
            <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-gold/30 bg-gradient-to-b from-charcoal/80 to-charcoal/40 p-8 sm:p-11 text-center shadow-[var(--shadow-gold)] backdrop-blur-xl">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[0_0_20px_oklch(0.79_0.12_85_/_20%)]">
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
