import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Cpu, Gauge, Lock, Search, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { PageHeader } from "@/components/site/PageHeader";
import { Services as ServicesComponent } from "@/components/site/Services";
import { Reveal } from "@/components/site/Reveal";

const title = "Services & Web Engineering — MNW Creative Studio";
const description =
  "Explore our comprehensive web design, custom frontend development, website redesign, and high-performance digital engineering services.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

const engineeringPillars = [
  {
    icon: Gauge,
    title: "Sub-Second Performance",
    desc: "Lightweight bundle footprints, optimized asset delivery, and sub-1.2s Core Web Vitals to keep bounce rates minimal.",
  },
  {
    icon: Search,
    title: "Technical SEO Foundation",
    desc: "Semantic HTML5, automated meta tags, Open Graph cards, structured schema, and search engine discoverability built from day one.",
  },
  {
    icon: Lock,
    title: "Security & Reliability",
    desc: "Standard SSL/HTTPS configurations, secure serverless endpoints, and reliable integration with trusted payment providers.",
  },
  {
    icon: Cpu,
    title: "Clean Modern Architecture",
    desc: "Component-driven codebases built on modern React and TypeScript without heavy, fragile third-party page builder bloat.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Services"
          title="Bespoke Design &"
          titleHighlight="Digital Engineering."
          description="We combine aesthetic sophistication with robust engineering. Every site is custom crafted around your business objectives to attract clients, build credibility, and convert traffic."
          badge="6 Core Capabilities"
        />

        {/* Core Services Section */}
        <ServicesComponent />

        {/* Technical Architecture & Engineering Standards Section */}
        <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/20 py-24 sm:py-32 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 right-1/4 size-[40rem] rounded-full bg-gold/[0.03] blur-[150px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
                <Code2 className="size-3" />
                Engineering Standard
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                How We Build for <span className="text-gold-gradient">Longevity.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                A great website is not merely an attractive picture. It is a reliable business asset that loads instantly, protects user data, and functions seamlessly across every device.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringPillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 80}>
                  <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-7 transition-all duration-400 hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]">
                    <div>
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_12px_rgba(212,175,55,0.12)] transition-transform duration-300 group-hover:scale-110">
                        <pillar.icon className="size-5" />
                      </span>
                      <h3 className="mt-6 font-display text-lg font-bold text-foreground transition-colors group-hover:text-gold">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>
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
                  Tailored To Your Brand
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Ready to Discuss Your <span className="text-gold-gradient">Website?</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Whether you require a focused Starter build, a custom Professional platform, or an advanced digital web application, we are ready to bring your vision to life.
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
                    to="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
                  >
                    <span>View Pricing & Plans</span>
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
