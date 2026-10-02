import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view.
 * Returns a ref to attach and a boolean for the visible state.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.05) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Enable progressive enhancement class on document once client JS is running
    if (typeof document !== "undefined" && !document.documentElement.classList.contains("js-active")) {
      document.documentElement.classList.add("js-active");
    }

    const node = ref.current;
    if (!node) return;

    // If user prefers reduced motion or no IntersectionObserver, display immediately
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    // Immediately display elements already within or near the current viewport
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight + 120 && rect.bottom > -50) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: "120px 0px 120px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
