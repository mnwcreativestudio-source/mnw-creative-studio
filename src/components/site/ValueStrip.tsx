const items = [
  "Bespoke Web Design",
  "High-Performance Frontends",
  "Conversion Architecture",
  "Custom Web Applications",
  "E-Commerce Solutions",
  "Award-Grade UI/UX",
];

export function ValueStrip() {
  const sequence = [...items, ...items, ...items];

  return (
    <section aria-label="Our core craft" className="relative border-y border-white/[0.08] py-5 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/40 to-transparent" />
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee-reverse flex shrink-0 items-center gap-12 pr-12">
          {sequence.map((item, i) => (
            <span
              key={`a-${item}-${i}`}
              className="flex shrink-0 items-center gap-12 text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase transition-colors duration-300 hover:text-gold sm:text-sm"
            >
              <span>{item}</span>
              <span aria-hidden className="size-1.5 rounded-full bg-gold/80 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            </span>
          ))}
        </div>
        <div aria-hidden className="animate-marquee-reverse flex shrink-0 items-center gap-12 pr-12">
          {sequence.map((item, i) => (
            <span
              key={`b-${item}-${i}`}
              className="flex shrink-0 items-center gap-12 text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase transition-colors duration-300 hover:text-gold sm:text-sm"
            >
              <span>{item}</span>
              <span aria-hidden className="size-1.5 rounded-full bg-gold/80 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
