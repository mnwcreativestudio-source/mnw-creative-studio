import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  badge?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

export function PageHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  badge,
  breadcrumbs = [{ label: "Home", to: "/" }],
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.08] bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-background pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Ambient background illumination */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[44rem] rounded-full bg-gold/[0.06] blur-[160px]" />
        <div className="absolute top-1/2 left-1/4 size-[28rem] rounded-full bg-gold/[0.03] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb row */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="transition-colors hover:text-gold"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground/90 font-medium">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="size-3 text-muted-foreground/60" />
              )}
            </div>
          ))}
          <ChevronRight className="size-3 text-muted-foreground/60" />
          <span className="text-gold font-medium">{eyebrow}</span>
        </div>

        <div className="max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.7rem] font-bold tracking-[0.25em] text-gold uppercase shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                <Sparkles className="size-3" />
                {eyebrow}
              </span>

              {badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-charcoal/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}{" "}
              {titleHighlight && (
                <span className="text-gold-gradient">{titleHighlight}</span>
              )}
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
