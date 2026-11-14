import type { CSSProperties } from "react";

/** Stagger helper for DrawOnView classes: style={d(0.4)} delays by 0.4s. */
export const d = (seconds: number) =>
  ({ "--d": `${seconds}s` }) as CSSProperties;
