import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <span className="text-[0.7rem] font-semibold tracking-[0.3em] text-gold uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      <span
        aria-hidden
        className={cn("hairline-gold mt-8 block h-px w-40", align === "center" && "mx-auto")}
      />
    </Reveal>
  );
}
