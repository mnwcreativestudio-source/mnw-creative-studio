import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { About as AboutComponent } from "@/components/site/About";
import { Reveal } from "@/components/site/Reveal";

const title = "About — MNW Creative Studio";
const description =
  "Learn about MNW Creative Studio, our craftsmanship philosophy, studio environment, and dedication to bespoke web architecture.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const comparisonRows = [
  {
    feature: "Design Approach",
    bespoke: "100% custom interface tailored to your brand voice & goals",
    template: "Pre-made generic theme shared by thousands of sites",
  },
  {
    feature: "Code Architecture",
    bespoke: "Hand-crafted, clean React/TS components with minimal footprint",
    template: "Heavy drag-and-drop page builders with bloated scripts",
  },
  {
    feature: "Speed & Performance",
    bespoke: "Sub-second load times optimized for Core Web Vitals",
    template: "Sluggish performance prone to plugin conflicts",
  },
  {
    feature: "Technical SEO",
    bespoke: "Semantic HTML5 hierarchy and structured metadata built-in",
    template: "Messy DOM structure and generic placeholder tags",
  },
  {
    feature: "Support & Direct Access",
    bespoke: "Direct collaboration with the engineers building your website",
    template: "Anonymous ticket queues and unsupported theme forums",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Studio Profile"
          title="Digital Experiences,"
          titleHighlight="Built With Purpose."
          description="We are an independent digital studio founded on craftsmanship, transparent communication, and clean modern code. We believe forward-thinking businesses deserve websites as distinctive and serious as their work."
          badge="Independent Digital Atelier"
        />

        {/* Full About Story & Workspace Photo */}
        <AboutComponent />

        {/* Comparison Section: Bespoke Studio vs Generic Templates */}
        <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/30 py-24 sm:py-32 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[44rem] rounded-full bg-gold/[0.03] blur-[160px]" />
          </div>

          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
                <Sparkles className="size-3" />
                The Difference
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                Bespoke Engineering <span className="text-gold-gradient">vs. Generic Templates</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Why businesses choose custom studio craftsmanship over generic pre-made WordPress or Wix templates.
              </p>
            </Reveal>

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl shadow-2xl">
              <div className="grid grid-cols-[1fr_1.3fr_1.3fr] border-b border-white/[0.08] bg-black/40 p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <span className="text-muted-foreground">Criterion</span>
                <span className="text-gold flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-gold" />
                  MNW Bespoke Studio
                </span>
                <span className="text-muted-foreground/60 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-white/20" />
                  Generic Templates
                </span>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_1.3fr_1.3fr] p-4 sm:p-6 text-xs sm:text-sm transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="font-semibold text-foreground pr-2">{row.feature}</span>
                    <span className="text-foreground/90 font-medium flex items-start gap-2 pr-3">
                      <Check className="size-4 shrink-0 text-gold mt-0.5" />
                      <span>{row.bespoke}</span>
                    </span>
                    <span className="text-muted-foreground flex items-start gap-2">
                      <X className="size-4 shrink-0 text-muted-foreground/50 mt-0.5" />
                      <span>{row.template}</span>
                    </span>
                  </div>
                ))}
              </div>
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
                  Direct Studio Collaboration
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Let’s Create Something <span className="text-gold-gradient">Distinctive.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Tell us about your brand, requirements, and timeline. We look forward to evaluating your project.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <span>View Our Work</span>
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
