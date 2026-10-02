import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Layers,
  ArrowRight,
  Code2,
  Compass,
} from "lucide-react";
import workDental from "@/assets/work-dental.jpg";
import workUrbanEats from "@/assets/work-urban-eats.jpg";
import workFitZone from "@/assets/work-fitzone.jpg";
import workTravelExplorer from "@/assets/work-travel-explorer.jpg";
import workLuxuryRealEstate from "@/assets/work-luxury-realestate.jpg";
import workAutoDrive from "@/assets/work-autodrive.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export type Project = {
  id: string;
  name: string;
  category: string;
  status: "Live Project" | "Demo Project";
  description: string;
  image: string;
  liveUrl?: string;
  overview: string;
  approach: string;
  features: string[];
  responsiveNotes: string;
  purposeNote: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "w-dental-clinic",
    name: "W Dental Clinic",
    category: "Healthcare & Wellness",
    status: "Live Project",
    description:
      "A calm, modern healthcare website with clear service architecture, doctor credentials, and seamless online appointment scheduling.",
    image: workDental,
    liveUrl: "https://wi-dental-clinic.vercel.app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Appointment Engine", "Vercel Edge"],
    overview:
      "W Dental Clinic needed a clean, welcoming digital front door that communicates professional expertise, alleviates patient anxiety, and makes appointment requests seamless.",
    approach:
      "We utilized soft natural lighting, a calming palette, high-contrast typography, and intuitive patient pathways so visitors can quickly explore services, doctors, and book consultations.",
    features: [
      "Prominent online appointment scheduling",
      "Comprehensive patient service directory",
      "Doctor credentials and practice background",
      "Mobile-optimized tap-to-call & clinic directions",
    ],
    responsiveNotes:
      "Engineered for instant loading on mobile devices, ensuring patients can book appointments on the move.",
    purposeNote:
      "Active production website created and deployed to demonstrate specialized healthcare web design standards.",
  },
  {
    id: "urban-eats",
    name: "Urban Eats",
    category: "Restaurant & Hospitality",
    status: "Demo Project",
    description:
      "Artisan culinary showcase featuring sensory photography, categorized digital menus, chef specials, and direct table reservations.",
    image: workUrbanEats,
    liveUrl: "https://urban-eats-demo-mnw-three.vercel.app",
    technologies: ["React", "Sensory UI", "Digital Menu System", "Table Booking Flow"],
    overview:
      "Urban Eats is an artisan bistro concept designed to elevate dining reservations through sensory culinary visuals and minimal layout design.",
    approach:
      "We adopted a rich dark obsidian aesthetic that highlights high-definition food photography, accented by warm gold typography and clean interactive menu cards.",
    features: [
      "Interactive digital menu with dietary tags and pricing",
      "Streamlined table reservation booking flow",
      "Private dining and event catering inquiry",
      "Integrated location map, operating hours, and social media",
    ],
    responsiveNotes:
      "Touch-friendly menu browsing and reservation inputs engineered specifically for mobile phone diners.",
    purposeNote:
      "This is a concept project created by MNW Creative Studio to demonstrate our design and development capabilities.",
  },
  {
    id: "fitzone-gym",
    name: "FitZone Gym",
    category: "Fitness & Athletic Club",
    status: "Demo Project",
    description:
      "High-energy fitness club website with interactive membership tiers, trainer spotlights, and real-time class timetables.",
    image: workFitZone,
    technologies: ["React", "Dynamic Timetable", "Tiered Membership", "Conversion Funnel"],
    overview:
      "FitZone Gym is a dynamic fitness club concept engineered to convert active visitors into recurring gym members through strong branding and clear pricing.",
    approach:
      "Bold display typography, high-contrast athletic photography, and clear membership comparison cards designed to drive immediate sign-ups.",
    features: [
      "Interactive multi-tier membership comparison",
      "Real-time filterable weekly class schedule",
      "Certified personal trainer spotlight profiles",
      "Free day-pass registration form",
    ],
    responsiveNotes:
      "Fully responsive timetable grid that adapts into an intuitive daily accordion on smartphone screens.",
    purposeNote:
      "This is a concept project created by MNW Creative Studio to demonstrate our design and development capabilities.",
  },
  {
    id: "luxury-real-estate",
    name: "Luxury Real Estate",
    category: "Architectural & Real Estate",
    status: "Demo Project",
    description:
      "Architectural residential showcase with property specifications, high-resolution dusk imagery, and private viewing scheduling.",
    image: workLuxuryRealEstate,
    technologies: ["React", "Architectural Specs Grid", "Private Scheduler", "Editorial Typography"],
    overview:
      "A high-end architectural real estate concept tailored for premier residential estates, luxury villas, and exclusive coastal residences.",
    approach:
      "Sophisticated editorial layout with generous breathing room, refined serif typography, and immersive dusk architectural photography.",
    features: [
      "Comprehensive architectural specs & floor plans",
      "Private viewing scheduler and agent liaison",
      "High-resolution property gallery showcase",
      "Neighborhood insights and lifestyle amenities",
    ],
    responsiveNotes:
      "Touch-enabled swipe galleries and clean vertical property specification cards for mobile house-hunters.",
    purposeNote:
      "This is a concept project created by MNW Creative Studio to demonstrate our design and development capabilities.",
  },
  {
    id: "travel-explorer",
    name: "Travel Explorer",
    category: "Travel & Expeditions",
    status: "Demo Project",
    description:
      "Adventure travel portal showcasing curated global expeditions, multi-day itineraries, and custom tour inquiries.",
    image: workTravelExplorer,
    technologies: ["React", "Itinerary Engine", "Cinematic Media", "Fast Adaptive Delivery"],
    overview:
      "Travel Explorer is a luxury adventure travel portal built to inspire wanderlust and simplify guided tour discovery across global destinations.",
    approach:
      "We emphasized full-width landscape vistas, cinematic photography, minimal search interfaces, and clear itinerary storytelling.",
    features: [
      "Destination search with date and guest filters",
      "Curated multi-day expedition itineraries",
      "Transparent expedition pricing and inclusions",
      "Travel guide and preparation resources",
    ],
    responsiveNotes:
      "Optimized picture elements and adaptive image delivery for smooth, fast browsing across all mobile screens.",
    purposeNote:
      "This is a concept project created by MNW Creative Studio to demonstrate our design and development capabilities.",
  },
  {
    id: "autodrive",
    name: "AutoDrive",
    category: "Automotive & Electric Mobility",
    status: "Demo Project",
    description:
      "High-performance automotive showcase featuring digital vehicle specifications, 0-60 performance metrics, and test-drive booking.",
    image: workAutoDrive,
    technologies: ["React", "Stealth Dark UI", "Vehicle Metrics Explorer", "Test-Drive Booking"],
    overview:
      "AutoDrive is a high-performance electric automotive concept created to exhibit cutting-edge vehicle specs and digital test-drive bookings.",
    approach:
      "Stealth dark-mode styling, metallic textures, precision performance metrics, and futuristic vehicle presentation.",
    features: [
      "Interactive key performance metrics (0-60 mph, top speed, range)",
      "Digital vehicle model explorer and feature list",
      "Test drive booking and showroom locator",
      "Brochure download and contact inquiry",
    ],
    responsiveNotes:
      "Fluid responsive spec grids and touch-optimized buttons that feel like a native mobile experience.",
    purposeNote:
      "This is a concept project created by MNW Creative Studio to demonstrate our design and development capabilities.",
  },
];

export function Work() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featuredLiveProject = projects[0]; // W Dental Clinic
  const alternatingProjects = projects.slice(1);

  return (
    <section id="work" className="relative border-y border-white/[0.06] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/30 py-24 sm:py-32 overflow-hidden">
      {/* Ambient background illumination */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[48rem] rounded-full bg-gold/[0.04] blur-[160px]" />
        <div className="absolute bottom-1/4 right-10 size-[36rem] rounded-full bg-indigo-950/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Curated Portfolio"
            title="Our Latest Work"
            description="Explore selected live client websites and tailored studio concept projects built for performance and distinction."
          />
          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)] backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              Live Project
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-charcoal/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
              <Sparkles className="size-3 text-gold" />
              Demo Projects
            </span>
          </div>
        </div>

        {/* 1. HERO FEATURED CASE STUDY: W Dental Clinic (Live Project) */}
        <Reveal className="mt-16">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/50 p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.12)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/60">
            {/* Top rim accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column: Visual Mockup */}
              <div className="order-2 lg:order-1">
                {/* Browser Viewport Chrome */}
                <div className="overflow-hidden rounded-[1.75rem] border border-gold/30 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] bg-charcoal/90 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-rose-500/80" />
                      <span className="size-2.5 rounded-full bg-amber-500/80" />
                      <span className="size-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/50 px-3.5 py-1 text-[0.68rem] text-muted-foreground font-mono">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      <span>wi-dental-clinic.vercel.app</span>
                    </div>
                    <div className="w-12 text-right">
                      <span className="text-[0.65rem] font-bold text-emerald-400">ACTIVE</span>
                    </div>
                  </div>

                  {/* Mockup Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={featuredLiveProject.image}
                      alt="W Dental Clinic healthcare website by MNW Creative Studio"
                      className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* Right Column: Case Story */}
              <div className="order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-950/90 border border-emerald-400/60 px-3.5 py-1 text-[0.7rem] font-extrabold tracking-wider text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.35)]">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    FEATURED LIVE CLIENT WORK
                  </span>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                    {featuredLiveProject.category}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                  {featuredLiveProject.name}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {featuredLiveProject.description}
                </p>

                {/* Key Deliverables Pills */}
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {featuredLiveProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-foreground/90">
                      <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredLiveProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.68rem] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-6 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(featuredLiveProject)}
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>Inspect Full Case Study</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {featuredLiveProject.liveUrl && (
                    <a
                      href={featuredLiveProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-950/40 px-6 py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:border-emerald-400 hover:bg-emerald-950/70 transition-all duration-300"
                    >
                      <span>Launch Live Website</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. ALTERNATING CASE STUDY SHOWCASES (Projects 2 to 6) */}
        <div className="mt-20 space-y-16 sm:space-y-24">
          {alternatingProjects.map((project, i) => {
            const isImageLeft = i % 2 === 0;

            return (
              <Reveal key={project.id} delay={i * 60}>
                <article className="group relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/30 p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/45 hover:shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.12)]">
                  {/* Subtle top rim light */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    {/* Visual Mockup Column */}
                    <div
                      className={`lg:col-span-7 ${
                        isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
                      }`}
                    >
                      <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-black/80 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                        {/* Browser Chrome Header */}
                        <div className="flex items-center justify-between border-b border-white/[0.08] bg-charcoal/90 px-4 py-2">
                          <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-rose-500/80" />
                            <span className="size-2 rounded-full bg-amber-500/80" />
                            <span className="size-2 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/40 px-3 py-0.5 text-[0.65rem] text-muted-foreground font-mono">
                            <span>studio-concept // {project.id}</span>
                          </div>
                          <div className="w-8" />
                        </div>

                        {/* Screenshot */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={project.image}
                            alt={`Preview of ${project.name} website design`}
                            loading="lazy"
                            className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isImageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight transition-colors group-hover:text-gold">
                        {project.name}
                      </h3>

                      <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Deliverables snippet */}
                      <ul className="mt-5 space-y-2">
                        {project.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-foreground/85">
                            <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack pills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[0.65rem] font-mono text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Case Study Trigger Button */}
                      <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="group/btn inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                          >
                            <span>Launch Live Site</span>
                            <ExternalLink className="size-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Tasteful Disclaimer Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-charcoal/50 px-5 py-2.5 text-xs text-muted-foreground/90 backdrop-blur-md shadow-sm">
            <Sparkles className="size-3.5 text-gold shrink-0" />
            <span>
              Demo projects are concept work created by MNW Creative Studio to showcase design and development capabilities.
            </span>
          </div>
        </div>
      </div>

      {/* Case Study Style Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/85 backdrop-blur-xl transition-opacity"
            onClick={() => setActiveModalProject(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl rounded-[2.5rem] border border-gold/40 bg-charcoal/95 p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
            {/* Top rim accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"
            />

            {/* Close Button */}
            <button
              type="button"
              aria-label="Close case study modal"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 z-20 flex size-9 items-center justify-center rounded-full border border-white/10 bg-background/60 text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold active:scale-95"
            >
              <X className="size-4" />
            </button>

            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-semibold tracking-wider text-gold uppercase">
                  {activeModalProject.category}
                </span>
                <span className="text-muted-foreground">•</span>
                {activeModalProject.status === "Live Project" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-950/95 border border-emerald-400/60 px-3 py-1 text-[0.7rem] font-extrabold tracking-wider text-emerald-300 shadow-[0_0_12px_oklch(0.72_0.17_153_/_35%)]">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    LIVE PROJECT
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal border border-border/80 px-2.5 py-1 text-[0.68rem] font-semibold tracking-wider text-muted-foreground uppercase">
                    DEMO PROJECT
                  </span>
                )}
              </div>

              <h2
                id="case-study-title"
                className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-foreground"
              >
                {activeModalProject.name}
              </h2>
            </div>

            {/* Image Preview */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl">
              <img
                src={activeModalProject.image}
                alt={`Preview of ${activeModalProject.name}`}
                className="w-full object-cover max-h-[380px]"
              />
            </div>

            {/* Case Study Content */}
            <div className="mt-8 space-y-6 text-sm">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                  <Layers className="size-3.5" />
                  <span>Project Overview</span>
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {activeModalProject.overview}
                </p>
              </div>

              {/* Design Approach */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>Design Approach</span>
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {activeModalProject.approach}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                  Key Architectural Features
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {activeModalProject.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl bg-charcoal/60 border border-white/[0.08] p-3 text-xs text-foreground/90 transition-colors hover:border-gold/30"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-gold mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsive Design */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                  <Smartphone className="size-3.5" />
                  <span>Responsive Engineering</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeModalProject.responsiveNotes}
                </p>
              </div>

              {/* Result / Purpose Note */}
              <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-4.5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-gold block">
                  Project Purpose
                </span>
                <p className="mt-1 text-xs text-foreground/90 leading-relaxed italic">
                  {activeModalProject.purposeNote}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <Link
                to="/contact"
                onClick={() => setActiveModalProject(null)}
                className="group inline-flex items-center gap-2 rounded-full bg-gold py-3 px-6 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 py-2.5 px-4 text-xs font-semibold text-emerald-400 transition-all hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300"
                  >
                    <span>View Live Website</span>
                    <ArrowUpRight className="size-3.5 text-emerald-400" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground underline transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
