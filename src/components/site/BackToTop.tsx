import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={cn(
        "fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full border border-gold/40 bg-charcoal/90 text-gold shadow-[var(--shadow-gold)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold hover:text-primary-foreground sm:right-8 sm:bottom-8",
        show
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-6 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
