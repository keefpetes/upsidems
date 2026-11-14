"use client";

import { useEffect } from "react";

/**
 * Feeds pointer position into any `.card-lift` element as --rx/--ry so it
 * tilts a few degrees toward the cursor on hover. Mouse/trackpad only;
 * skipped entirely for touch and reduced-motion users.
 */
export default function TiltCards() {
  useEffect(() => {
    const ok = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    if (!ok.matches) return;

    const MAX = 4; // degrees
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".card-lift");
      if (!el) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--ry", `${(x * MAX * 2).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${(-y * MAX * 2).toFixed(2)}deg`);
      });
    };
    const onOut = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".card-lift");
      if (el && !el.contains(e.relatedTarget as Node | null)) {
        el.style.removeProperty("--rx");
        el.style.removeProperty("--ry");
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return null;
}
