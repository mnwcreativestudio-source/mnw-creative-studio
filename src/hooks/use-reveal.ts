import { useEffect, useRef, useState } from "react";

/**
 * Hook for progressive entrance enhancements.
 * CRITICAL RELIABILITY GUARANTEE:
 * Content is ALWAYS visible by default (visible = true).
 * No website content will ever remain hidden if JS takes time, fails,
 * or IntersectionObserver is delayed or unavailable on iOS WebKit.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(_threshold = 0.05) {
  const ref = useRef<T | null>(null);
  // Default to true immediately so SSR and initial client paint are 100% visible
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return { ref, visible };
}
