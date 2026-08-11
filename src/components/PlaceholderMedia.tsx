import { ReactNode } from "react";

export default function PlaceholderMedia({
  label,
  className = "",
  aspect = "aspect-[4/3]",
  art,
}: {
  label: string;
  className?: string;
  aspect?: string;
  art?: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden ${aspect} rounded-2xl border border-forest/15 ${
        art ? "" : "placeholder-media"
      } ${className}`}
    >
      {art && <div className="absolute inset-0">{art}</div>}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs uppercase tracking-wide text-forest/70 bg-cream/85 rounded-full px-3 py-1">
          {label}
        </span>
      </div>
    </div>
  );
}
