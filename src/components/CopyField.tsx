"use client";

import { useState } from "react";

/** A read-only address with a Copy button (falls back to selecting the text). */
export default function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async (input: HTMLInputElement | null) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      input?.select();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        readOnly
        value={value}
        aria-label="Feed address"
        onFocus={(e) => e.currentTarget.select()}
        className="flex-1 min-w-0 rounded-full border border-ink/20 bg-cream px-5 py-3 text-sm text-ink"
      />
      <button
        type="button"
        onClick={(e) => copy(e.currentTarget.previousElementSibling as HTMLInputElement)}
        className="btn-press rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-rust hover:text-forest focus-visible:bg-rust focus-visible:text-forest transition-colors"
      >
        <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
      </button>
    </div>
  );
}
