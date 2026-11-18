import { ReactNode } from "react";
import DrawOnView from "./DrawOnView";

export default function PlaceholderMedia({
  label,
  className = "",
  aspect = "aspect-[4/3]",
  art,
  instant = false,
}: {
  label?: string;
  className?: string;
  aspect?: string;
  art?: ReactNode;
  /** Art visible on first load: show it finished, no draw-in. */
  instant?: boolean;
}) {
  const box = (
    <div
      className={`relative overflow-hidden ${aspect} rounded-2xl border border-forest/15 ${
        art ? "" : "placeholder-media"
      } ${className}`}
    >
      {art && <DrawOnView instant={instant} className="absolute inset-0">{art}</DrawOnView>}
      {label && (
        // over the art from sm up; on phones it would wrap and cover the art
        <div className="absolute bottom-4 left-4 hidden sm:block">
          <span className="text-xs uppercase tracking-wide text-forest/70 bg-cream/85 rounded-full px-3 py-1">
            {label}
          </span>
        </div>
      )}
    </div>
  );
  if (!label) return box;
  return (
    <figure>
      {box}
      <figcaption className="sm:hidden mt-3 text-xs uppercase tracking-wide text-forest/70">
        {label}
      </figcaption>
    </figure>
  );
}
