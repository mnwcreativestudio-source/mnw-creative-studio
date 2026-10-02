import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQ as FAQComponent } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";

const title = "Frequently Asked Questions — MNW Creative Studio";
const description =
  "Everything you need to know about our web design process, pricing, timelines, technical deliverables, and client collaboration.";

export const Route = createFileRoute("/faq")({
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
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Questions & Answers"
          title="Frequently Asked"
          titleHighlight="Questions."
          description="Everything you need to know about how we work, including project timelines, technical deliverables, revision cycles, and payment methods."
          badge="Clear Transparency"
        />

        {/* Full FAQ Accordions */}
        <FAQComponent />

        {/* Still Have Questions Box */}
        <section className="relative py-20 sm:py-28 overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-charcoal/30 via-background to-background">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal/40 p-10 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-gold">
                  <HelpCircle className="size-3" />
                  Direct Consultation
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Have a Question Not <span className="text-gold-gradient">Covered Here?</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Every project has unique requirements. Reach out directly and we will provide clarity regarding technical specs, custom integrations, or timeline feasibility.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Contact Us Directly</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="mailto:mnwcreativestudio@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <Mail className="size-4 text-gold" />
                    <span>Send Email</span>
                  </a>
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
