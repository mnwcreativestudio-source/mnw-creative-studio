import {
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Eye,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import aboutWorkspace from "@/assets/about-workspace.webp";
import aboutWorkspaceMobile from "@/assets/about-workspace-mobile.webp";
import { Reveal } from "./Reveal";

const values = [
  {
    icon: HeartHandshake,
    title: "Client-Centered Collaboration",
    desc: "Every design choice and architectural decision is shaped around your commercial goals, target audience, and long-term brand equity.",
  },
  {
    icon: Eye,
    title: "Aesthetic Restraint & Polish",
    desc: "Refined typographic hierarchy, balanced contrast, and intentional white space that establishes immediate credibility and visual luxury.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Milestones",
    desc: "Direct communication with the creators building your site. Structured weekly demos, clear revision rounds, and zero jargon.",
  },
  {
    icon: ShieldCheck,
    title: "Enduring Technical Support",
    desc: "We stand firmly behind our code with post-launch verification, performance monitoring, and dependable guidance as your business expands.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-y border-white/[0.06] bg-gradient-to-b from-charcoal/40 via-background to-charcoal/30 py-24 sm:py-32 overflow-hidden">
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.035] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          {/* Left Column: Editorial Studio Story & Values */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                <Sparkles className="size-3" />
                About MNW Creative Studio
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
                Digital Experiences,{" "}
                <span className="text-gold-gradient">Built With Purpose.</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground font-semibold">Our Studio Philosophy: </strong>
                  MNW Creative Studio is an independent web design and engineering practice dedicated to
                  building bespoke, high-performing websites for ambitious businesses and professionals.
                </p>
                <p>
                  We believe modern businesses deserve far better than sluggish, generic page builder themes.
                  By merging sculptural typography and thoughtful UI/UX with modern React & TypeScript engineering,
                  we create digital products that look exceptional and perform effortlessly on every screen.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold transition-colors hover:text-gold-soft"
                >
                  <span>Explore Our Full Studio Profile & Standards</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            {/* 4 Core Values */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((val, i) => (
                <Reveal key={val.title} delay={i * 60}>
                  <div className="rounded-[1.75rem] border border-white/[0.08] bg-charcoal/45 backdrop-blur-xl p-5 transition-all duration-300 hover:border-gold/40 hover:bg-charcoal/70 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/25 shadow-[0_0_12px_rgba(212,175,55,0.12)]">
                        <val.icon className="size-4" />
                      </span>
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {val.title}
                      </h4>
                    </div>
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Workspace Photography with Beveled Glass */}
          <Reveal delay={120} className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-gold/15 via-gold-deep/10 to-transparent blur-3xl opacity-75"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 bg-charcoal/70 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
              {/* Top rim accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              />

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
                  Bespoke Craftsmanship
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
