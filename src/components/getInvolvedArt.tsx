import DrawOnView from "./DrawOnView";
import { d } from "@/lib/draw";

const forest = "#003241";
const rust = "#F28218";

/*
 * Four pathways that start apart and meet at one point, then carry on as a
 * single path: four ways in, one goal. Draws itself in (DrawOnView), then a
 * dot keeps travelling each path (SMIL, hidden for reduced motion via
 * .weave-shuttle in globals.css).
 */
const MEET: [number, number] = [250, 120];
const starts = [30, 90, 150, 210];
const pathD = (y: number) => {
  const pull = Math.abs(y - MEET[1]) > 60 ? 120 : 110;
  return `M20 ${y} C ${pull} ${y}, ${MEET[0] - 85} ${MEET[1]}, ${MEET[0]} ${MEET[1]}`;
};

export function ConvergingPaths({ className = "" }: { className?: string }) {
  return (
    <DrawOnView className={className}>
      <svg viewBox="0 0 360 240" className="w-full h-auto" fill="none" aria-hidden="true">
        {starts.map((y, i) => (
          <path
            key={y}
            id={`gi-path-${i}`}
            className="dl"
            style={d(0.2 + i * 0.18)}
            pathLength="1"
            d={pathD(y)}
            stroke={forest}
            strokeOpacity="0.55"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
        {starts.map((y, i) => (
          <circle key={y} className="dp" style={d(0.1 + i * 0.18)} cx="20" cy={y} r="6" fill="#f8f1e1" stroke={forest} strokeWidth="2" />
        ))}

        {/* the shared path forward */}
        <path className="dl" style={d(1.5)} pathLength="1" d={`M${MEET[0]} ${MEET[1]} H 336`} stroke={forest} strokeWidth="4" strokeLinecap="round" />
        <path className="df" style={d(2.2)} d="M326 110 L 338 120 L 326 130" stroke={forest} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        {/* the meeting point */}
        <circle className="pulse-ring" style={d(1.8)} cx={MEET[0]} cy={MEET[1]} r="10" fill={rust} />
        <circle className="dp" style={d(1.4)} cx={MEET[0]} cy={MEET[1]} r="10" fill={rust} />

        {/* once drawn, someone is always on their way in */}
        <g fill={rust}>
          {starts.map((_, i) => (
            <circle key={i} className="weave-shuttle" r="4">
              <animateMotion dur={`${4.6 + i * 0.7}s`} begin={`${i * 0.9}s`} repeatCount="indefinite" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.45 0 0.55 1">
                <mpath href={`#gi-path-${i}`} />
              </animateMotion>
            </circle>
          ))}
        </g>
      </svg>
    </DrawOnView>
  );
}

/** Line icon for each way to get involved. Draws in, staggered by card. */
export function PathIcon({ slug, step }: { slug: string; step: number }) {
  const t = 0.2 + step * 0.2;
  const dot = (cx: number, cy: number, r: number, delay: number) => (
    <circle className="dp" style={d(t + delay)} cx={cx} cy={cy} r={r} fill={rust} stroke="none" />
  );
  return (
    <DrawOnView className="h-12 w-12">
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-forest" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {slug === "advocate" && (
          <>
            <path className="dl" style={d(t)} pathLength="1" d="M10 10 H38 A4 4 0 0 1 42 14 V28 A4 4 0 0 1 38 32 H22 L13 39 V32 H10 A4 4 0 0 1 6 28 V14 A4 4 0 0 1 10 10 Z" />
            {dot(16, 21, 2.2, 0.7)}
            {dot(24, 21, 2.2, 0.8)}
            {dot(32, 21, 2.2, 0.9)}
          </>
        )}
        {slug === "civic-partner" && (
          <>
            <path className="dl" style={d(t)} pathLength="1" d="M6 17 L24 7 L42 17 Z" />
            {[12, 20, 28, 36].map((x, i) => (
              <path key={x} className="dl" style={d(t + 0.3 + i * 0.08)} pathLength="1" d={`M${x} 21 V35`} />
            ))}
            <path className="dl" style={d(t + 0.6)} pathLength="1" d="M8 38 H40 M5 42 H43" />
            {dot(24, 13, 2.2, 0.9)}
          </>
        )}
        {slug === "community-organization" && (
          <>
            <circle className="dl" style={d(t)} pathLength="1" cx="12" cy="19" r="4.5" />
            <circle className="dl" style={d(t + 0.25)} pathLength="1" cx="36" cy="19" r="4.5" />
            <path className="dl" style={d(t + 0.2)} pathLength="1" d="M4 38 A8 8 0 0 1 20 38" />
            <path className="dl" style={d(t + 0.45)} pathLength="1" d="M28 38 A8 8 0 0 1 44 38" />
            <path className="dl" style={d(t + 0.35)} pathLength="1" d="M15 33 A9 9 0 0 1 33 33" />
            {dot(24, 16, 5, 0.6)}
          </>
        )}
        {slug === "corporate-partner" && (
          <>
            <circle className="dl" style={d(t)} pathLength="1" cx="18" cy="24" r="10" />
            <circle className="dl" style={d(t + 0.3)} pathLength="1" cx="30" cy="24" r="10" />
            {dot(24, 16, 2.4, 0.9)}
            {dot(24, 32, 2.4, 1.0)}
          </>
        )}
      </svg>
    </DrawOnView>
  );
}
