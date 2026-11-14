"use client";

import { useEffect } from "react";

// Module-level so it survives the template remounting on each navigation.
// The first page load renders without the enter animation (keeps first
// paint instant); every client-side navigation after that slides in.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const animate = hasNavigated;
  useEffect(() => {
    hasNavigated = true;
  }, []);
  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
