"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Wraps an illustration so its marked parts draw themselves in when it
 * scrolls into view. Children opt in with classes defined in globals.css:
 *   .dl  stroke traces in like a pen (needs pathLength="1" on the element)
 *   .dp  pops in from a smaller scale
 *   .df  fades and rises into place
 *   .dx  grows sideways from its left edge
 * Stagger with the --d custom property (seconds), e.g. style={d(0.4)}
 * using d() from @/lib/draw.
 * Reduced-motion users see the finished art immediately (CSS gates it).
 * `instant` skips the draw-in entirely: use for art visible on first load,
 * so visitors never see an empty frame.
 */
export default function DrawOnView({
  children,
  className = "",
  onDrawn,
  instant = false,
}: {
  children: ReactNode;
  className?: string;
  onDrawn?: () => void;
  instant?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.setAttribute("data-drawn", "true");
      if (instant) onDrawn?.();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.setAttribute("data-drawn", "true");
          onDrawn?.();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [onDrawn, instant]);

  return (
    <div ref={ref} data-draw={instant ? undefined : ""} className={className}>
      {children}
    </div>
  );
}
