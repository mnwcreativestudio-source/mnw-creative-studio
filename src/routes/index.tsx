import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code2,
  ShoppingBag,
  Clock,
  ShieldCheck,
  Check,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ValueStrip } from "@/components/site/ValueStrip";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Reveal } from "@/components/site/Reveal";

import workDental from "@/assets/work-dental.webp";
import workDentalMobile from "@/assets/work-dental-mobile.webp";
import workUrbanEats from "@/assets/work-urban-eats.webp";
import workUrbanEatsMobile from "@/assets/work-urban-eats-mobile.webp";
import workLuxuryRealEstate from "@/assets/work-luxury-realestate.webp";
import workLuxuryRealEstateMobile from "@/assets/work-luxury-realestate-mobile.webp";
import workFitZone from "@/assets/work-fitzone.webp";
import workFitZoneMobile from "@/assets/work-fitzone-mobile.webp";
import workTravelExplorer from "@/assets/work-travel-explorer.webp";
import workTravelExplorerMobile from "@/assets/work-travel-explorer-mobile.webp";
import aboutWorkspace from "@/assets/about-workspace.webp";
import aboutWorkspaceMobile from "@/assets/about-workspace-mobile.webp";

const title = "MNW Creative Studio | Modern Web Design & Development";
const description =
  "MNW Creative Studio designs and engineers modern, high-performing websites and digital platforms for forward-thinking businesses.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const featuredProjects = [
  {
    id: "w-dental-clinic",
    name: "W Dental Clinic",
    category: "Healthcare",
    status: "Live Project",
    description:
      "Modern healthcare website with clear service architecture, calm aesthetics, and seamless appointment booking.",
    image: workDental,
    imageMobile: workDentalMobile,
    liveUrl: "https://wi-dental-clinic.vercel.app/",
  },
  {
    id: "urban-eats",
    name: "Urban Eats",
    category: "Restaurant",
    status: "Demo Project",
    description:
      "Artisan culinary showcase featuring sensory food photography, digital menus, and streamlined table reservation flows.",
    image: workUrbanEats,
    imageMobile: workUrbanEatsMobile,
    liveUrl: "https://urban-eats-demo-mnw-three.vercel.app/",
  },
  {
    id: "luxury-real-estate",
    name: "Luxury Real Estate",
    category: "Real Estate",
    status: "Demo Project",
    description:
      "Architectural property showcase with immersive dusk photography, floor plans, and private viewing scheduling.",
    image: workLuxuryRealEstate,
    imageMobile: workLuxuryRealEstateMobile,
    liveUrl: "https://luxury-real-estate-gules.vercel.app/",
  },
  {
    id: "fitzone-gym",
    name: "FitZone Gym",
    category: "Fitness & Club",
    status: "Demo Project",
    description:
      "High-energy fitness club website with interactive membership tiers, trainer spotlights, and real-time class timetables.",
    image: workFitZone,
    imageMobile: workFitZoneMobile,
    liveUrl: "https://fitzone-gym-demo-delta.vercel.app/",
  },
  {
    id: "travel-explorer",
    name: "Travel Explorer",
    category: "Travel & Expeditions",
    status: "Demo Project",
    description:
      "Adventure travel portal showcasing curated global expeditions, multi-day itineraries, and custom tour inquiries.",
    image: workTravelExplorer,
    imageMobile: workTravelExplorerMobile,
    liveUrl: "https://travel-explorer-two-alpha.vercel.app/",
  },
];

const primaryFeaturedProject = featuredProjects[0]!;

const coreCapabilities = [
  {
    icon: Layers,
    title: "Bespoke Web Design",
    desc: "Distinctive, tailor-made visual identities and UI/UX layouts built on strong typography, brand balance, and intuitive hierarchy.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "Fast, responsive web applications built with clean React & TypeScript architecture, delivering sub-second load times.",
  },
  {
    icon: ShoppingBag,
    title: "Commercial & Custom Solutions",
    desc: "From product storefronts to interactive inquiry portals, appointment systems, and verified payment gateway workflows.",
  },
];

const processSteps = [
  { no: "01", title: "Discover", desc: "Clarify business goals, target audience, and architecture." },
  { no: "02", title: "Design", desc: "Custom visual prototypes and responsive wireframes." },
  { no: "03", title: "Develop", desc: "Clean code build with speed optimization and security." },
  { no: "04", title: "Launch", desc: "Rigorous quality checks, technical SEO, and live deploy." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Studio Capabilities Ticker Strip */}
        <ValueStrip />

        {/* 2.5 Strong Editorial Positioning Statement (Inspired by Urban Eats storytelling) */}
        <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[22rem] sm:size-[46rem] rounded-full bg-gold/[0.035] blur-[60px] sm:blur-[160px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Sparkles className="size-3" />
                The Studio Philosophy
              </span>

              <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-balance text-foreground tracking-tight">
                We engineer digital experiences for brands that refuse to look like{" "}
                <span className="text-shimmer">everyone else.</span>
              </h2>

              <p className="mt-7 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal max-w-3xl">
                In a digital landscape crowded with interchangeable templates and sluggish page builders,
                MNW Creative Studio crafts websites from first principles. By harmonizing sculptural typography,
                bespoke UI/UX, and sub-second React engineering, we turn your online presence into an authoritative
                business asset that commands trust and converts visitors into high-value clients.
              </p>
            </Reveal>

            {/* 3 Studio Pillars */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              <Reveal delay={60}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-charcoal/40 p-8 backdrop-blur-xl shadow-lg transition-all duration-400 hover:border-gold/50 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold block">
                      01 / CHARACTER
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                      Bespoke Identity
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Every layout, typeface pairing, and spatial ratio is engineered from scratch for your brand. Zero rigid builder themes.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-[0.72rem] font-semibold text-foreground/80 flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                    <span>100% Tailored Visual Craft</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-charcoal/40 p-8 backdrop-blur-xl shadow-lg transition-all duration-400 hover:border-gold/50 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold block">
                      02 / SPEED
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                      Pure Engineering
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Clean React & TypeScript architecture delivering &lt; 1.2s Core Web Vitals. Zero sluggish plugin bloat or vulnerabilities.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-[0.72rem] font-semibold text-foreground/80 flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                    <span>Sub-Second Google Vitals</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="group relative flex h-full flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-charcoal/40 p-8 backdrop-blur-xl shadow-lg transition-all duration-400 hover:border-gold/50 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold block">
                      03 / CONVERSION
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                      Commercial Intent
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Structured specifically for conversion. Clear client pathways, frictionless inquiry flows, and bank-grade checkout systems.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-[0.72rem] font-semibold text-foreground/80 flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                    <span>Engineered for Inquiries</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Curated Selected Work (Preview) */}
        <section className="relative border-y border-white/[0.06] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/30 py-24 sm:py-32 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[22rem] sm:size-[44rem] rounded-full bg-gold/[0.04] blur-[60px] sm:blur-[160px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                  <Sparkles className="size-3" />
                  Selected Work
                </span>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Crafted Digital <span className="text-gold-gradient">Experiences.</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  A preview of active client websites and custom studio prototypes engineered for high-performance and visual distinction.
                </p>
              </div>

              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
              >
                <span>View All 6 Projects & Case Studies</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Featured Live Spotlight Case: W Dental Clinic */}
            <Reveal className="mt-14">
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/50 p-6 sm:p-10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.12)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/60">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />

                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <div className="overflow-hidden rounded-[1.75rem] border border-gold/30 bg-black/80 shadow-2xl">
                      <div className="flex items-center justify-between border-b border-white/[0.08] bg-charcoal/90 px-4 py-2">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-rose-500/80" />
                          <span className="size-2 rounded-full bg-amber-500/80" />
                          <span className="size-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/40 px-3 py-0.5 text-[0.62rem] text-muted-foreground font-mono">
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                          <span>wi-dental-clinic.vercel.app</span>
                        </div>
                        <div className="w-8" />
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <picture>
                          <source media="(max-width: 640px)" srcSet={primaryFeaturedProject.imageMobile} type="image/webp" />
                          <img
                            src={primaryFeaturedProject.image}
                            loading="lazy"
                            decoding="async"
                            alt="W Dental Clinic healthcare website by MNW Creative Studio"
                            className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-950/90 border border-emerald-400/60 px-3.5 py-1 text-[0.7rem] font-extrabold tracking-wider text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.35)]">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        FEATURED LIVE CLIENT WORK
                      </span>
                      <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                        {primaryFeaturedProject.category}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
                      {primaryFeaturedProject.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {primaryFeaturedProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                      <Link
                        to="/work"
                        className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                      >
                        <span>Inspect Case Study</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      {primaryFeaturedProject.liveUrl && (
                        <a
                          href={primaryFeaturedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-950/40 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-300 hover:border-emerald-400 hover:bg-emerald-950/70 transition-all duration-300 touch-manipulation cursor-pointer"
                        >
                          <span>View Live Demo →</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Alternating Highlights: Urban Eats & Luxury Real Estate */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {featuredProjects.slice(1).map((project, i) => (
                <Reveal key={project.id} delay={i * 80}>
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-charcoal/45 p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-gold/45 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                    <div>
                      <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-black/60">
                        <div className="flex items-center justify-between border-b border-white/[0.06] bg-charcoal/80 px-3 py-1.5">
                          <div className="flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-rose-500/80" />
                            <span className="size-1.5 rounded-full bg-amber-500/80" />
                            <span className="size-1.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[0.6rem] font-mono text-muted-foreground">{project.id}</span>
                          <div className="w-4" />
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <picture>
                            <source media="(max-width: 640px)" srcSet={project.imageMobile} type="image/webp" />
                            <img
                              src={project.image}
                              loading="lazy"
                              decoding="async"
                              alt={`Preview of ${project.name}`}
                              className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-gold">
                            {project.category}
                          </span>
                          <span className="text-[0.62rem] text-muted-foreground uppercase font-semibold">
                            {project.status}
                          </span>
                        </div>
                        <h4 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                          {project.name}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                      <Link
                        to="/work"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-soft transition-colors py-1.5"
                      >
                        <span>View In-Depth Case Study</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-950/40 px-4 py-2 text-xs font-semibold text-emerald-300 hover:border-emerald-400 hover:bg-emerald-950/70 transition-all duration-300 touch-manipulation cursor-pointer"
                        >
                          <span>View Live Demo →</span>
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-gold/10 px-8 py-4 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
              >
                <span>Explore Full Portfolio & All 6 Case Studies</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Core Capabilities — Asymmetric Editorial Bento */}
        <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[22rem] sm:size-[44rem] rounded-full bg-gold/[0.035] blur-[60px] sm:blur-[160px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                  <Sparkles className="size-3" />
                  Disciplines & Scope
                </span>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  What We <span className="text-gold-gradient">Build.</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  We don't build generic pages. We engineer custom digital assets shaped to your exact commercial goals.
                </p>
              </div>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
              >
                <span>View Full Services & Specifications</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Asymmetric Bento Layout */}
            <div className="mt-16 grid gap-6 lg:grid-cols-12">
              {/* Flagship Card 1: Bespoke Web Design (Col span 7) */}
              <div className="lg:col-span-7">
                <Reveal className="h-full">
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/50 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/60">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                    />

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                          <Layers className="size-6" />
                        </span>
                        <span className="rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                          Flagship Discipline
                        </span>
                      </div>

                      <h3 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                        Bespoke Web Design & UI/UX
                      </h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        Distinctive, tailor-made visual identities and UI/UX layouts built on strong typography, brand balance, and intuitive hierarchy.
                      </p>

                      <div className="mt-7 rounded-2xl border border-white/[0.08] bg-black/40 p-4">
                        <p className="text-[0.65rem] font-mono uppercase tracking-wider text-muted-foreground mb-2.5">
                          Studio Design Standards // Typography & Spatial Geometry
                        </p>
                        <div className="flex flex-wrap items-center gap-2.5">
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
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-soft transition-colors"
                      >
                        <span>Explore Design Capabilities</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </div>

              {/* Flagship Card 2: Web Engineering (Col span 5) */}
              <div className="lg:col-span-5">
                <Reveal delay={80} className="h-full">
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/[0.1] bg-gradient-to-br from-charcoal/85 via-charcoal/60 to-charcoal/40 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/50">
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
                        Frontend Engineering
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Fast, responsive web applications built with clean React & TypeScript architecture, delivering sub-second load times.
                      </p>

                      <div className="mt-6 rounded-2xl border border-white/[0.08] bg-black/50 p-4 font-mono text-[0.72rem] text-muted-foreground">
                        <p className="text-emerald-400">const stack = &#123;</p>
                        <p className="pl-4 text-foreground/80">architecture: "React + TanStack",</p>
                        <p className="pl-4 text-foreground/80">cleanCode: true,</p>
                        <p className="pl-4 text-gold">performance: "Sub-Second"</p>
                        <p className="text-emerald-400">&#125;;</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-gold transition-colors"
                      >
                        <span>Inspect Code Standards</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </div>

              {/* Full-Width Feature Strip 3: Commercial & Custom Solutions (Col span 12) */}
              <div className="lg:col-span-12">
                <Reveal delay={120}>
                  <article className="group relative overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-charcoal/50 p-8 sm:p-10 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-gold/45">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                      <div className="flex items-start gap-5">
                        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-md">
                          <ShoppingBag className="size-6" />
                        </span>
                        <div>
                          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.65rem] font-bold text-muted-foreground uppercase tracking-wider">
                            Full-Stack Scope
                          </span>
                          <h4 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-foreground">
                            Commercial & Custom Digital Solutions
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                            From product storefronts to interactive inquiry portals, appointment systems, and verified payment gateway workflows.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/[0.08] bg-black/40 px-3.5 py-1.5 text-xs text-foreground/80">
                          Online Checkout
                        </span>
                        <span className="rounded-full border border-white/[0.08] bg-black/40 px-3.5 py-1.5 text-xs text-foreground/80">
                          OTP Email Verification
                        </span>
                        <span className="rounded-full border border-white/[0.08] bg-black/40 px-3.5 py-1.5 text-xs text-foreground/80">
                          Appointment Scheduling
                        </span>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2 text-xs font-bold text-primary-foreground transition-all hover:brightness-110"
                        >
                          <span>Explore All</span>
                          <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-7 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <span>View Complete Services, Features & Tech Stack →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Studio Ethos / Editorial Section (Preview) */}
        <section className="relative border-b border-white/[0.06] bg-gradient-to-b from-charcoal/30 via-background to-charcoal/40 py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] items-center">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                    <Sparkles className="size-3" />
                    Studio Ethos
                  </span>

                  <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                    Craftsmanship Over Templates.{" "}
                    <span className="text-gold-gradient">Every Time.</span>
                  </h2>

                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    We collaborate with businesses and brands who value craftsmanship, clarity, and dependable execution. Rather than relying on rigid, bloated templates, we craft bespoke web experiences that look exceptional and perform reliably on every device.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/[0.08] bg-charcoal/40 p-4.5 backdrop-blur-md">
                      <span className="text-xs font-bold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-gold" />
                        <span>Tailored UX Architecture</span>
                      </span>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Custom layouts designed around your specific visitor journey and conversion path.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.08] bg-charcoal/40 p-4.5 backdrop-blur-md">
                      <span className="text-xs font-bold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-gold" />
                        <span>Direct Communication</span>
                      </span>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Structured milestones, prompt responses, and direct collaboration with your engineers.
                      </p>
                    </div>
                  </div>

                  <div className="mt-9">
                    <Link
                      to="/about"
                      className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                    >
                      <span>Read About Our Studio & Standards</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Workspace Photography Showcase */}
              <Reveal delay={120} className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-6 -z-10 rounded-[3rem] bg-gold/10 blur-3xl opacity-75"
                />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.1] bg-charcoal/60 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
                  <div className="overflow-hidden rounded-[2rem] bg-charcoal/90 relative">
                    <picture>
                      <source media="(max-width: 640px)" srcSet={aboutWorkspaceMobile} type="image/webp" />
                      <img
                        src={aboutWorkspace}
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={800}
                        alt="MNW Creative Studio modern workspace with web design on monitor and warm ambient lighting"
                        className="w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-gold" />
                      <span>Studio Environment</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-wider text-gold font-bold">
                      <Sparkles className="size-2.5 text-gold" />
                      Bespoke Craft
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6. Pricing & Engagements (Preview) */}
        <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-background via-charcoal/20 to-background">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[22rem] sm:size-[44rem] rounded-full bg-gold/[0.03] blur-[60px] sm:blur-[160px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                <Sparkles className="size-3" />
                Transparent Engagements
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                Pricing & <span className="text-gold-gradient">Plans.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Predictable fixed investments designed around scope, performance, and commercial goals.
              </p>
            </div>

            {/* 2 Featured Preview Cards */}
            <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Starter Plan Preview */}
              <Reveal delay={60}>
                <div className="relative flex flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-8 transition-all duration-400 hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] h-full">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-foreground">
                      STARTER
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold text-gold">For small businesses & individuals</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      A streamlined, high-quality digital foundation built to establish credibility and capture initial inquiries.
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/40 p-4.5">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground block">
                        One-Time Investment
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-display text-3xl font-extrabold text-foreground">$200</span>
                        <span className="text-xs font-bold text-gold uppercase">USD</span>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2 text-foreground/90">
                        <Check className="size-3.5 text-gold shrink-0" />
                        <span>Up to 5 pages with responsive mobile design</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground/90">
                        <Check className="size-3.5 text-gold shrink-0" />
                        <span>WhatsApp & contact form integration</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground/90">
                        <Check className="size-3.5 text-gold shrink-0" />
                        <span>Basic SEO, custom domain & SSL setup</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.06]">
                    <Link
                      to="/pricing"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 py-3.5 text-xs font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
                    >
                      <span>View Plan Details</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Professional Plan Preview (Recommended) */}
              <Reveal delay={120}>
                <div className="relative flex flex-col justify-between rounded-[2.25rem] border-2 border-gold/70 bg-gradient-to-b from-charcoal/95 via-charcoal/70 to-charcoal/45 backdrop-blur-2xl p-8 shadow-[0_25px_65px_-15px_rgba(212,175,55,0.3)] transition-all duration-400 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_30px_75px_-15px_rgba(212,175,55,0.45)] h-full">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-charcoal shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                      <Sparkles className="size-3 fill-current" />
                      RECOMMENDED
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-foreground">
                      PROFESSIONAL
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold text-gold">For growing businesses & brands</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      A comprehensive, custom-designed web platform built to convert visitors into loyal clients.
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/40 p-4.5">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground block">
                        One-Time Investment
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-display text-3xl font-extrabold text-foreground">$400</span>
                        <span className="text-xs font-bold text-gold uppercase">USD</span>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2 text-foreground/90">
                        <Check className="size-3.5 text-gold shrink-0" />
                        <span>Up to 10 pages with bespoke UI/UX design</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground/90">
                        <Check className="size-3.5 text-gold shrink-0" />
                        <span>Email OTP verification & Razorpay payment integration</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground/90">
                        <Check className="size-3.5 text-gold shrink-0" />
                        <span>Advanced SEO, micro-interactions & priority support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.06]">
                    <Link
                      to="/pricing"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110"
                    >
                      <span>Choose Plan & Checkout</span>
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold hover:text-gold-soft transition-colors"
              >
                <span>View Full Comparison, Premium & Custom Scope Options →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. The Process (Preview) */}
        <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-charcoal/30 via-background to-charcoal/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                  <Clock className="size-3" />
                  Roadmap
                </span>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  From Idea To <span className="text-gold-gradient">Launch.</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  A clear, predictable four-step journey ensuring structured progress and dependable execution.
                </p>
              </div>

              <Link
                to="/process"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft w-fit"
              >
                <span>See Complete Process & Milestones</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.no} delay={i * 70}>
                  <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-7 transition-all duration-400 hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]">
                    <div>
                      <span className="font-display text-3xl font-extrabold text-gold-gradient tracking-tight">
                        {step.no}
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-gold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Signature Studio CTA Banner */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-charcoal/30 to-background">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[22rem] sm:size-[44rem] rounded-full bg-gold/[0.04] blur-[60px] sm:blur-[160px]" />
          </div>

          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/95 via-charcoal/65 to-charcoal/45 p-10 sm:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                  <Sparkles className="size-3" />
                  Initiate Your Project
                </span>

                <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                  Let’s Build Something <span className="text-gold-gradient">Exceptional.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Transform your business presence with custom web design, fast modern engineering, and transparent collaboration.
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
                    <span>Explore Selected Work</span>
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
