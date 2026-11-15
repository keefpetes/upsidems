import type React from "react";

type Props = { className?: string };

const forest = "#1F4B43";
const forestDark = "#16352F";
const rust = "#B5602A";
const cream = "#F5F1E8";
const sky = "#E7EEEA";
const oceanBand = "#C9DAD3";
const oceanWave = "#AFC7BE";
const sand = "#E4D9C0";
const driftwood = "#8C7355";

/*
 * Motion (globals.css, "Living hero"): each layer gets an outer <g> that
 * builds in once on load (hero-in-*) and an inner element that keeps a slow
 * ambient loop (hero-amb-*). Kept on separate elements so the two transforms
 * never fight. All of it is off for prefers-reduced-motion.
 */

/** Static backdrop for the layered hero scene — sky, ocean, and sand bands. No motion. */
export function HeroBaseArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="170" fill={sky} />
      <rect y="170" width="800" height="110" fill={oceanBand} />
      <rect y="280" width="800" height="220" fill={sand} />
    </svg>
  );
}

/**
 * Parallax layers use a viewBox grown proportionally to their oversized CSS box
 * (matching the 170% w/h overscan on the Parallax wrapper) so preserveAspectRatio
 * scales them identically to the static base layer instead of zooming in from
 * center, keeping every layer aligned with the base layer at rest.
 */
const layerViewBox = "-280 -175 1360 850";

/** Soft drifting clouds, high in the sky. Parallax layer, transparent background. */
export function HeroCloudsArt({ className = "" }: Props) {
  return (
    <svg
      viewBox={layerViewBox}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-in-fade" style={{ "--d": "0.1s" } as React.CSSProperties}>
        <ellipse className="hero-amb-cloud" style={{ "--dur": "38s" } as React.CSSProperties} cx="120" cy="95" rx="95" ry="24" fill={oceanBand} opacity="0.5" />
        <ellipse className="hero-amb-cloud" style={{ "--dur": "52s", "--delay": "-20s" } as React.CSSProperties} cx="420" cy="75" rx="115" ry="26" fill={oceanBand} opacity="0.38" />
        <ellipse className="hero-amb-cloud" style={{ "--dur": "44s", "--delay": "-9s" } as React.CSSProperties} cx="690" cy="110" rx="85" ry="22" fill={oceanBand} opacity="0.45" />
      </g>
    </svg>
  );
}

/** Sun disc, low in the sky. Parallax layer, transparent background. */
export function HeroSunArt({ className = "" }: Props) {
  return (
    <svg
      viewBox={layerViewBox}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-in-sun">
        <circle className="hero-amb-halo" cx="670" cy="80" r="42" fill={rust} opacity="0.18" />
        <circle className="hero-amb-sun" cx="670" cy="80" r="42" fill={rust} opacity="0.85" />
      </g>
    </svg>
  );
}

/** Distant hill silhouettes. Parallax layer, transparent background. */
export function HeroMountainsArt({ className = "" }: Props) {
  return (
    <svg
      viewBox={layerViewBox}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-in-rise" style={{ "--d": "0.5s", "--rise": "18px" } as React.CSSProperties}>
        <path d="M0 170 L100 120 L210 170 Z" fill={forest} opacity="0.25" />
        <path d="M520 170 L640 110 L760 170 L800 170 Z" fill={forest} opacity="0.2" />
      </g>
    </svg>
  );
}

/** Ocean wave lines. Parallax layer, transparent background. */
export function HeroWavesArt({ className = "" }: Props) {
  return (
    <svg
      viewBox={layerViewBox}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-in-fade" style={{ "--d": "0.8s" } as React.CSSProperties}>
        <path
          className="hero-amb-wave"
          style={{ "--dur": "7s" } as React.CSSProperties}
          d="M-40 205 Q160 188 360 207 T760 200 T1160 207"
          fill="none"
          stroke={oceanWave}
          strokeWidth="4"
          opacity="0.7"
        />
        <path
          className="hero-amb-wave"
          style={{ "--dur": "9s", "--delay": "-3s", "--sway": "-16px" } as React.CSSProperties}
          d="M-40 236 Q160 220 360 238 T760 231 T1160 238"
          fill="none"
          stroke={oceanWave}
          strokeWidth="4"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

function PineTree({ cx, scale = 1, delay = "0s" }: { cx: number; scale?: number; delay?: string }) {
  const baseY = 500;
  return (
    <g className="hero-amb-tree" style={{ "--delay": delay } as React.CSSProperties}>
      <rect
        x={cx - 6 * scale}
        y={baseY - 26 * scale}
        width={12 * scale}
        height={26 * scale}
        fill={forestDark}
      />
      <polygon
        points={`${cx - 46 * scale},${baseY - 24 * scale} ${cx + 46 * scale},${baseY - 24 * scale} ${cx},${baseY - 86 * scale}`}
        fill={forest}
      />
      <polygon
        points={`${cx - 37 * scale},${baseY - 64 * scale} ${cx + 37 * scale},${baseY - 64 * scale} ${cx},${baseY - 120 * scale}`}
        fill={forest}
      />
      <polygon
        points={`${cx - 27 * scale},${baseY - 104 * scale} ${cx + 27 * scale},${baseY - 104 * scale} ${cx},${baseY - 154 * scale}`}
        fill={forest}
      />
    </g>
  );
}

/** Trees, driftwood, and the boardwalk pathway. Parallax layer, transparent background. */
export function HeroForegroundArt({ className = "" }: Props) {
  return (
    <svg
      viewBox={layerViewBox}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* pine trees anchoring the corners */}
      <g className="hero-in-rise" style={{ "--d": "1.0s", "--rise": "40px" } as React.CSSProperties}>
      <PineTree cx={30} scale={1} />
      <PineTree cx={85} scale={0.75} delay="-2.2s" />
      <PineTree cx={765} scale={0.9} delay="-4.1s" />

      {/* driftwood on the sand */}
      <rect x="90" y="360" width="130" height="15" rx="7" fill={driftwood} opacity="0.55" transform="rotate(-4 90 360)" />
      <rect x="580" y="410" width="150" height="16" rx="8" fill={driftwood} opacity="0.5" transform="rotate(3 580 410)" />

      {/* accessible boardwalk pathway, widening toward the viewer */}
      <polygon points="378,260 422,260 470,500 330,500" fill={forest} />
      <polygon
        points="378,260 422,260 470,500 330,500"
        fill="none"
        stroke={forestDark}
        strokeWidth="3"
      />
      {[300, 340, 380, 420, 460].map((y, i) => {
        const spread = 8 + i * 7;
        return (
          <line
            key={i}
            x1={400 - spread}
            y1={y}
            x2={400 + spread}
            y2={y}
            stroke={cream}
            strokeWidth="3"
            opacity="0.55"
          />
        );
      })}

      </g>

      {/* access marker at the head of the path — lands last, then pulses */}
      <g transform="translate(400 245)">
        <g className="hero-in-pop">
          <circle className="hero-amb-ping" r="11" fill="none" stroke={rust} strokeWidth="2" />
          <circle r="11" fill={forestDark} />
          <circle r="11" fill="none" stroke={cream} strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}
