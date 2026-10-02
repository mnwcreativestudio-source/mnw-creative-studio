import {
  PenTool,
  Code2,
  RefreshCw,
  Building2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const services = [
  {
    icon: PenTool,
    title: "Bespoke Web Design",
    tag: "UI/UX & Visuals",
    text: "Distinctive, tailor-made interfaces built on balanced typography, brand character, intuitive hierarchy, and frictionless user journeys.",
    deliverables: [
      "Custom design systems & Figma prototypes",
      "Sculptural typography & art direction",
      "Micro-interactions & fluid animations",
      "Responsive layouts across all viewports",
    ],
  },
  {
    icon: Code2,
    title: "Web Engineering",
    tag: "Clean Code",
    text: "Fast, responsive and scalable modern web builds with clean, maintainable, standards-compliant React & TypeScript architecture.",
    deliverables: [
      "Sub-second Core Web Vitals optimization",
      "Semantic HTML5 & accessible architecture",
      "Modern serverless & edge deployments",
      "Zero template bloat or sluggish plugins",
    ],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    tag: "Modernize",
    text: "Transform an outdated site into a modern, high-performing digital experience that commands respect and converts visitors.",
    deliverables: [
      "Complete visual & UX modernization",
      "Speed & Core Web Vitals boost",
      "Preserved SEO rankings & URL structure",
      "Mobile-first redesign approach",
    ],
  },
  {
    icon: Building2,
    title: "Business & Studio Websites",
    tag: "Brand Authority",
    text: "Credibility-first websites for service businesses, studios, and professionals seeking qualified high-ticket client inquiries.",
    deliverables: [
      "Conversion-focused landing structures",
      "Structured trust & proof elements",
      "Interactive consultation forms",
      "Google Maps & local business SEO",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    tag: "Online Storefronts",
    text: "Product-led storefronts designed around trust, visual impact, frictionless cart experiences, and high checkout conversion.",
    deliverables: [
      "High-definition product catalogs",
      "Secure payment gateway integration",
      "Seamless cart & checkout flows",
      "Inventory & order notifications",
    ],
  },
  {
    icon: Sparkles,
    title: "Custom Web Applications",
    tag: "Tailored Architecture",
    text: "Tailored web applications, appointment booking flows, and custom API integrations engineered to your exact operational requirements.",
    deliverables: [
      "Custom scheduling & reservation logic",
      "Third-party API & webhook integrations",
      "Verified OTP email verification systems",
      "Secure database & cloud backend setups",
    ],
  },
];

export function Services() {
  const designService = services[0]!;
  const engineeringService = services[1]!;

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/6 blur-[160px]" />
        <div className="absolute bottom-10 right-10 size-[36rem] rounded-full bg-indigo-950/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="What We Build"
            description="Everything your business needs to establish an authoritative, high-performing digital presence."
          />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
          >
            <span>Explore Complete Specifications</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Flagship Card 1: Bespoke Web Design (Col span 7) */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/50 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/60 hover:shadow-[var(--shadow-gold)]">
                {/* Top rim accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      <PenTool className="size-6" />
                    </span>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-gold">
                      Flagship Discipline
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                    {designService.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {designService.text}
                  </p>

                  {/* Visual Token Preview Accent */}
                  <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/40 p-4">
                    <p className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      Design System Blueprint // Typography & Spacing
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-xl border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-display font-bold text-gold">
                        Outfit Display
                      </span>
                      <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-sans text-foreground">
                        Plus Jakarta Sans
                      </span>
                      <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground font-mono">
                        8pt Spatial Grid
                      </span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {designService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-gold">
                  <span>Tailored Visual Craft</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </article>
            </Reveal>
          </div>

          {/* Flagship Card 2: Web Engineering (Col span 5) */}
          <div className="lg:col-span-5">
            <Reveal delay={80} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/[0.1] bg-gradient-to-br from-charcoal/85 via-charcoal/60 to-charcoal/40 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/50 hover:shadow-[0_25px_60px_-15px_rgba(212,175,55,0.18)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-foreground shadow-lg">
                      <Code2 className="size-6 text-gold" />
                    </span>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3 py-1 text-[0.68rem] font-bold text-emerald-300">
                      Sub-1.2s Vitals
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                    {engineeringService.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {engineeringService.text}
                  </p>

                  {/* Code Snippet Accent */}
                  <div className="mt-6 rounded-2xl border border-white/[0.08] bg-black/50 p-4 font-mono text-[0.72rem] text-muted-foreground">
                    <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/[0.06]">
                      <span className="size-2 rounded-full bg-rose-500/80" />
                      <span className="size-2 rounded-full bg-amber-500/80" />
                      <span className="size-2 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[0.62rem] text-muted-foreground/60">architecture.ts</span>
                    </div>
                    <p className="text-emerald-400">const stack = &#123;</p>
                    <p className="pl-4 text-foreground/80">framework: "React + TanStack",</p>
                    <p className="pl-4 text-foreground/80">bundle: "Zero Bloat",</p>
                    <p className="pl-4 text-gold">performance: "Sub-Second"</p>
                    <p className="text-emerald-400">&#125;;</p>
                  </div>

                  {/* Deliverables */}
                  <ul className="mt-6 space-y-2">
                    {engineeringService.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-gold transition-colors">
                  <span>Engineered with Standards</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </article>
            </Reveal>
          </div>

          {/* Cards 3 to 6: 4 Specialized Disciplines in a 4-Column Row */}
          {services.slice(2).map((srv, i) => (
            <div key={srv.title} className="lg:col-span-3 sm:col-span-6">
              <Reveal delay={120 + i * 50} className="h-full">
                <article className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/45 p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-sm">
                        <srv.icon className="size-5" />
                      </span>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[0.65rem] font-bold text-muted-foreground uppercase tracking-wider">
                        {srv.tag}
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-gold">
                      {srv.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {srv.text}
                    </p>

                    <ul className="mt-5 space-y-1.5">
                      {srv.deliverables.slice(0, 2).map((d, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[0.7rem] text-foreground/80">
                          <CheckCircle2 className="size-3 text-gold shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-gold transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
