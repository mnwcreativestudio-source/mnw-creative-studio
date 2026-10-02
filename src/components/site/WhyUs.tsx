import {
  Layers,
  Smartphone,
  Gauge,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    icon: Layers,
    badge: "100% Bespoke",
    title: "Tailored Architecture, Zero Templates",
    text: "We never force your brand into bloated, generic WordPress or builder themes. Every component is engineered bespoke to reflect your distinct aesthetic and market positioning.",
    highlight: "Custom code without plugin bloat",
  },
  {
    icon: Gauge,
    badge: "Sub-1.2s Vitals",
    title: "Speed & Performance Focused",
    text: "Every millisecond counts for visitor conversion. Our codebases are engineered with asset compression, serverless edge routing, and clean markup to pass Google Core Web Vitals with flying colors.",
    highlight: "Optimal mobile Google Lighthouse scores",
  },
  {
    icon: Smartphone,
    badge: "Mobile-First",
    title: "Intuitive Touch & Mobile UX",
    text: "More than 70% of modern visitors browse on smartphones. We design every interaction, menu, and form for seamless thumb reach and fluid gesture response before scaling to wide screens.",
    highlight: "Engineered specifically for handheld conversion",
  },
  {
    icon: Sparkles,
    badge: "Search Authority",
    title: "Technical SEO & Semantic Markup",
    text: "Built with structured schema markup, clean heading hierarchy, OpenGraph social cards, and sitemaps so your business is easily indexed and ranked by major search engines.",
    highlight: "Clean semantic HTML5 structure",
  },
  {
    icon: MessageSquare,
    badge: "Founder-Direct",
    title: "Direct & Proactive Communication",
    text: "You collaborate directly with senior creators, not account managers or ticketing queues. Enjoy weekly milestone demos, transparent timeframes, and rapid response times.",
    highlight: "No middlemen or communication delays",
  },
  {
    icon: ShieldCheck,
    badge: "Production Grade",
    title: "Secure, Scalable & Reliable",
    text: "Integrated with enterprise-grade SSL, modern authentication, verified payment gateways, and automated cloud backups for total peace of mind.",
    highlight: "Bank-grade checkout & modern data security",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="The Studio Standard"
            title="Why Choose MNW Creative Studio?"
            description="A considered, quality-first approach to web design and development focused on real outcomes for your business."
          />
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
          >
            <span>Learn About Our Studio Ethos</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 High-Impact Advantage Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="h-full">
              <article className="group relative flex h-full flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-charcoal/45 backdrop-blur-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.12)]">
                {/* Subtle top rim light */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/20">
                      <point.icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-gold/25 bg-gold/[0.08] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                      {point.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-gold">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                  <span>{point.highlight}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
