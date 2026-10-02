import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { Plans as PlansComponent } from "@/components/site/Plans";
import { Reveal } from "@/components/site/Reveal";

const title = "Pricing & Plans — MNW Creative Studio";
const description =
  "Explore transparent pricing plans for modern web design and development. Fixed project investments, clear scopes, and custom quotes.";

export const Route = createFileRoute("/pricing")({
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
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Pricing & Engagements"
          title="Transparent Scopes &"
          titleHighlight="Tailored Investments."
          description="Every business requires a distinct approach. We offer clear fixed-investment packages alongside custom enterprise quotes engineered for performance and measurable return."
          badge="Fixed & Custom Scope"
        />

        {/* Full Plans Suite with Razorpay Live Checkout */}
        <PlansComponent />

        {/* Reassurance Banner */}
        <section className="relative py-16 sm:py-20 border-t border-white/[0.08] bg-gradient-to-b from-charcoal/30 via-background to-background">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    <ShieldCheck className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      Unsure which plan fits your scope?
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      We offer free project consultations to evaluate your requirements and recommend the most effective investment tier.
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                >
                  <span>Talk With Us</span>
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
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
