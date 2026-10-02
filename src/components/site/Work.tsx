import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Layers,
  ArrowRight,
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
};

const projects: Project[] = [
  {
    id: "w-dental-clinic",
    name: "W Dental Clinic",
    category: "Healthcare",
    status: "Live Project",
    description:
      "Modern healthcare website with clear service architecture and seamless online appointment scheduling.",
    image: workDental,
    liveUrl: "https://wi-dental-clinic.vercel.app",
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
    category: "Restaurant",
    status: "Demo Project",
    description:
      "Artisan culinary showcase featuring digital menus, chef specials, and direct table reservations.",
    image: workUrbanEats,
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
    category: "Fitness",
    status: "Demo Project",
    description:
      "Dynamic fitness club website with interactive membership tiers and real-time class timetables.",
    image: workFitZone,
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
    id: "travel-explorer",
    name: "Travel Explorer",
    category: "Travel",
    status: "Demo Project",
    description:
      "Adventure travel platform showcasing curated global expeditions, itineraries, and custom tour booking.",
    image: workTravelExplorer,
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
    id: "luxury-real-estate",
    name: "Luxury Real Estate",
    category: "Real Estate",
    status: "Demo Project",
    description:
      "Architectural luxury real estate showcase with property specifications and private viewing scheduling.",
    image: workLuxuryRealEstate,
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
    id: "autodrive",
    name: "AutoDrive",
    category: "Automotive",
    status: "Demo Project",
    description:
      "High-performance automotive showcase featuring digital vehicle specifications and test-drive scheduling.",
    image: workAutoDrive,
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

  return (
    <section id="work" className="relative border-y border-white/[0.06] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/30 py-24 sm:py-32 overflow-hidden">
      {/* Ambient background illumination */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[42rem] rounded-full bg-gold/[0.04] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Curated Portfolio"
            title="Our Latest Work"
            description="Explore selected live client websites and tailored studio concept projects."
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

        {/* Portfolio Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/[0.08] bg-charcoal/40 backdrop-blur-xl p-3 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_22px_55px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.15)]">
                {/* Subtle top rim light */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex flex-col flex-1">
                  {/* Image container with luxury bevel and rounded frame */}
                  <div className="relative aspect-[16/10.5] overflow-hidden rounded-[1.5rem] bg-charcoal/90 border border-white/[0.05]">
                    <img
                      src={project.image}
                      loading="lazy"
                      width={800}
                      height={525}
                      alt={`Preview of ${project.name} website`}
                      className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />

                    {/* Status Badge */}
                    <div className="absolute top-3.5 right-3.5">
                      {project.status === "Live Project" ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-950/90 border border-emerald-400/60 px-3 py-1 text-[0.68rem] font-extrabold tracking-wider text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.35)] backdrop-blur-md uppercase">
                          <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                          LIVE PROJECT
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal/85 border border-white/[0.08] px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-muted-foreground backdrop-blur-md uppercase">
                          DEMO PROJECT
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3.5">
                      <span className="inline-block rounded-full bg-black/60 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-gold/30 shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-gold line-clamp-1">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 h-[2.75rem] sm:h-[3rem]">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-5 pb-3 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground transition-all duration-300 hover:text-gold group/btn"
                  >
                    <span>Explore Case Study</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 text-gold" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[0.72rem] font-semibold text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-300"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tasteful Disclaimer Note */}
        <div className="mt-12 text-center">
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
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="group inline-flex items-center gap-2 rounded-full bg-gold py-3 px-6 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:brightness-110 active:scale-95"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

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
