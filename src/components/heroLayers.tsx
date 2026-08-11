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

/** Sun disc, low in the sky. Parallax layer, transparent background. */
export function HeroSunArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="670" cy="80" r="42" fill={rust} opacity="0.85" />
    </svg>
  );
}

/** Distant hill silhouettes. Parallax layer, transparent background. */
export function HeroMountainsArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 170 L100 120 L210 170 Z" fill={forest} opacity="0.25" />
      <path d="M520 170 L640 110 L760 170 L800 170 Z" fill={forest} opacity="0.2" />
    </svg>
  );
}

/** Ocean wave lines. Parallax layer, transparent background. */
export function HeroWavesArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 205 Q200 188 400 207 T800 200"
        fill="none"
        stroke={oceanWave}
        strokeWidth="4"
        opacity="0.7"
      />
      <path
        d="M0 236 Q200 220 400 238 T800 231"
        fill="none"
        stroke={oceanWave}
        strokeWidth="4"
        opacity="0.5"
      />
    </svg>
  );
}

function PineTree({ cx, scale = 1 }: { cx: number; scale?: number }) {
  const baseY = 500;
  return (
    <g>
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
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* pine trees anchoring the corners */}
      <PineTree cx={30} scale={1} />
      <PineTree cx={85} scale={0.75} />
      <PineTree cx={765} scale={0.9} />

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

      {/* access marker at the head of the path */}
      <g transform="translate(400 245)">
        <circle r="11" fill={rust} />
        <circle r="11" fill="none" stroke={cream} strokeWidth="2" />
      </g>
    </svg>
  );
}
