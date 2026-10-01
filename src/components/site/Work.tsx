import { ArrowUpRight } from "lucide-react";
import workDental from "@/assets/work-dental.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const details = [
  { label: "Project", value: "W Dental Clinic" },
  { label: "Type", value: "Website Concept" },
  { label: "Scope", value: "Design & Development" },
];

export function Work() {
  return (
    <section id="work" className="border-y border-border bg-charcoal/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Selected Work"
          description="A closer look at how we translate a business goal into a clear, modern web experience."
        />

        <Reveal className="mt-16">
          <div className="premium-card overflow-hidden rounded-[2rem] p-3 sm:p-5">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={workDental}
                  loading="lazy"
                  width={1408}
                  height={960}
                  alt="Preview of the W Dental Clinic website concept homepage"
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="px-3 pb-6 lg:px-6 lg:pb-0">
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                  W Dental Clinic — Website Concept
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A calm, trust-building website concept for a modern dental practice: clear service
                  structure, prominent appointment booking and a bright, reassuring visual language
                  that works just as well on a phone.
                </p>

                <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                  {details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        {detail.label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold">{detail.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Feature tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Responsive Layout", "High Conversion", "Fast Loading", "Custom Aesthetic"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[0.7rem] font-medium text-gold"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wi-dental-clinic.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:brightness-110 active:scale-95"
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
                  >
                    Request Similar Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
