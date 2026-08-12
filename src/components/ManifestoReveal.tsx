"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Reveals [data-reveal] descendants (fade + rise) as they scroll into view,
 * one-shot. Mirrors the reduced-motion check in Parallax.tsx: skip entirely
 * when the OS prefers reduced motion, leaving the CSS static-fallback rules
 * (see manifesto.module.css) to show everything at full opacity.
 */
export default function ManifestoReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const targets = node.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
