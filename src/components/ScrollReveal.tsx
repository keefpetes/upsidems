"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Sitewide sibling of ManifestoReveal.tsx. Kept as a separate component
 * targeting a different attribute ([data-scroll-reveal] vs [data-reveal])
 * so its CSS rule in globals.css never competes in specificity with
 * manifesto.module.css's [data-revealed] rules on the same element.
 */
export default function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const targets = node.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
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
