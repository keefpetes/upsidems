"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The final figure is always in the server-rendered HTML, so crawlers, screen
 * readers and no-JS visitors read the real number. The count-up is a visual
 * layer only: once hydrated, a counter that is still off-screen resets to
 * `from` and animates up to `value` when it scrolls into view.
 *
 * An empty or invalid `value` renders nothing (never "0").
 */
export default function StatCounter({
  value,
  from = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number | null | undefined;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const valid = typeof value === "number" && Number.isFinite(value) && value > 0;
  const target = valid ? value : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node || !valid) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at hydration: leave the real number alone rather
    // than flashing it back to the start.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    const start = Math.min(from, target);
    requestAnimationFrame(() => setDisplay(start));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const duration = 2200;
          const t0 = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(Math.max((now - t0) / duration, 0), 1);
            // Quadratic ease-out: settles gently, count stays visible.
            const eased = 1 - Math.pow(1 - progress, 2);
            setDisplay(start + (target - start) * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.9 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [valid, target, from]);

  if (!valid) return null;

  const finalText = `${prefix}${target.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref}>
      <span className="sr-only">{finalText}</span>
      <span aria-hidden="true">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
