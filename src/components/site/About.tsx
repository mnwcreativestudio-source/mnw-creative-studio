import { CheckCircle2, Sparkles, HeartHandshake, Eye, MessageSquare, ShieldCheck } from "lucide-react";
import aboutWorkspace from "@/assets/about-workspace.jpg";
import { Reveal } from "./Reveal";

const values = [
  {
    icon: HeartHandshake,
    title: "Client-Focused Approach",
    desc: "Every design decision is shaped around your unique business goals, target audience, and market position.",
  },
  {
    icon: Eye,
    title: "Modern & Clean Design",
    desc: "Refined aesthetic sensibilities, balanced typography, and clean visual hierarchy that instills immediate trust.",
  },
  {
    icon: MessageSquare,
    title: "Reliable Communication",
    desc: "Transparent timelines, structured milestones, and proactive updates so you're always informed.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    desc: "We stand behind our code with ongoing assistance, technical updates, and guidance as your business grows.",
  },
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-charcoal/30 py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          {/* Left Column: Story & Values */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-[0.7rem] font-medium tracking-[0.25em] text-gold uppercase">
                <Sparkles className="size-3" />
                About MNW Creative Studio
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Digital Experiences,{" "}
                <span className="text-gold-gradient">Built With Purpose.</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground font-semibold">Who We Are: </strong>
                  MNW Creative Studio is an independent web design and development studio focused on
                  creating modern, responsive and purposeful digital experiences for businesses.
                </p>
                <p>
                  We collaborate with businesses, brands, and service professionals who value craftsmanship,
                  clarity, and dependable execution. Rather than relying on generic templates, we craft bespoke
                  web solutions that look exceptional and perform reliably on every device.
                </p>
              </div>
            </Reveal>

            {/* 4 Core Values */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((val, i) => (
                <Reveal key={val.title} delay={i * 60}>
                  <div className="rounded-2xl border border-border/70 bg-charcoal/50 p-4 transition-all hover:border-gold/40 hover:bg-charcoal/80">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/25">
                        <val.icon className="size-4" />
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {val.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Workspace Photography */}
          <Reveal delay={120} className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold/10 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-charcoal/60 p-2.5 shadow-[var(--shadow-premium)]">
              <img
                src={aboutWorkspace}
                loading="lazy"
                width={1200}
                height={800}
                alt="MNW Creative Studio modern workspace with web design on monitor and warm ambient lighting"
                className="w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 pointer-events-none" />

              <div className="p-4 sm:p-5 flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-gold" />
                  <span>Studio Environment</span>
                </span>
                <span className="text-[0.7rem] uppercase tracking-wider text-gold font-bold">
                  Bespoke Craft
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
