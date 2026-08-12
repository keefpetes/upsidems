"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function Parallax({
  children,
  speed = 0.2,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame: number;
    let current = 0;
    const ease = 0.08;

    const update = () => {
      const node = ref.current;
      const target = window.scrollY * speed;
      current += (target - current) * ease;
      if (node) {
        node.style.transform = `translate3d(0, ${current}px, 0)`;
      }
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
