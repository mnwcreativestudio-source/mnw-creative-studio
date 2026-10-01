import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2.5 leading-none select-none", className)}>
      <span className="font-display text-2xl sm:text-[1.7rem] font-extrabold tracking-[0.13em] text-gold-gradient">
        MNW
      </span>
      <span className="text-[0.68rem] sm:text-[0.75rem] font-semibold tracking-[0.32em] text-muted-foreground uppercase">
        Creative Studio
      </span>
    </span>
  );
}
