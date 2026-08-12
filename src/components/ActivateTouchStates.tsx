"use client";

import { useEffect } from "react";

/**
 * iOS Safari only honors the :active CSS pseudo-class on tap when a
 * touchstart listener exists somewhere in the document — otherwise
 * :active styles (like .btn-press's pressed state) never fire on touch.
 * This listener does nothing; its presence alone unlocks :active on iOS.
 */
export default function ActivateTouchStates() {
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  return null;
}
