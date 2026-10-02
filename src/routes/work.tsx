import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { Work as WorkComponent } from "@/components/site/Work";
import { Reveal } from "@/components/site/Reveal";

const title = "Portfolio & Client Work — MNW Creative Studio";
const description =
  "Explore live client websites and tailored studio concept projects engineered by MNW Creative Studio.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Portfolio"
          title="Curated Work &"
          titleHighlight="Case Studies."
          description="Explore selected live client websites and tailored studio concept projects designed to demonstrate our architectural capabilities, attention to detail, and performance standards."
          badge="Live & Concept Work"
        />

        {/* Full Portfolio Grid & Interactive Case Study Modals */}
        <WorkComponent />

        {/* Call to Action Banner */}
        <section className="relative py-20 sm:py-28 overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-background via-charcoal/30 to-background">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal/40 p-10 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-gold">
                  <Sparkles className="size-3" />
                  Your Vision, Tailored
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Inspired by What You See? <span className="text-gold-gradient">Let’s Build.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Every project is created from the ground up for your specific industry, audience, and commercial goals.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Request a Similar Project</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <span>Explore Services</span>
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
