const items = ["Design", "Development", "Redesign", "Digital Experience"];

export function ValueStrip() {
  const sequence = [...items, ...items, ...items, ...items];

  return (
    <section aria-label="What we do" className="relative border-y border-border py-6">
      <div className="pointer-events-none absolute inset-0 bg-charcoal/40" />
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee-reverse flex shrink-0 items-center gap-10 pr-10">
          {sequence.map((item, i) => (
            <span
              key={`a-${item}-${i}`}
              className="flex shrink-0 items-center gap-10 text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase transition-colors hover:text-gold sm:text-sm"
            >
              {item}
              <span aria-hidden className="size-1.5 rounded-full bg-gold/70" />
            </span>
          ))}
        </div>
        <div aria-hidden className="animate-marquee-reverse flex shrink-0 items-center gap-10 pr-10">
          {sequence.map((item, i) => (
            <span
              key={`b-${item}-${i}`}
              className="flex shrink-0 items-center gap-10 text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase transition-colors hover:text-gold sm:text-sm"
            >
              {item}
              <span aria-hidden className="size-1.5 rounded-full bg-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
