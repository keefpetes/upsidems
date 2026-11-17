import DrawOnView from "./DrawOnView";

const forest = "#003241";
const rust = "#F28218";
const cream = "#f8f1e1";

/*
 * Contact: a note travelling a winding path to us. Shown finished on load
 * (it sits above the fold); the envelope loops along the path (SMIL, hidden
 * for reduced motion via .weave-shuttle in globals.css).
 */
export function MessagePathArt({ className = "" }: { className?: string }) {
  const route = "M24 70 C 90 18, 150 118, 214 66 S 300 40, 330 66";
  return (
    <DrawOnView instant className={className}>
      <svg viewBox="0 0 360 120" className="w-full h-auto" fill="none" aria-hidden="true">
        <path id="contact-route" d={route} stroke={forest} strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 9" />
        <circle cx="24" cy="70" r="6" fill={cream} stroke={forest} strokeWidth="2" />
        <circle className="pulse-ring" cx="330" cy="66" r="9" fill={rust} />
        <circle cx="330" cy="66" r="9" fill={rust} />
        <g className="weave-shuttle">
          <g>
            <rect x="-13" y="-9" width="26" height="18" rx="3" fill={cream} stroke={forest} strokeWidth="2" />
            <path d="M-12 -7 L0 2 L12 -7" stroke={forest} strokeWidth="2" strokeLinejoin="round" />
            <animateMotion dur="5.5s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.45 0 0.55 1">
              <mpath href="#contact-route" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="5.5s" repeatCount="indefinite" />
          </g>
        </g>
      </svg>
    </DrawOnView>
  );
}

/*
 * 404: a boardwalk that stops short. Someone rolls to the end, pauses,
 * and heads back. Shown finished on load; only the traveller moves.
 */
export function DeadEndBoardwalkArt({ className = "" }: { className?: string }) {
  const deck = 236;
  return (
    <DrawOnView instant className={className}>
      <svg viewBox="0 0 360 140" className="w-full h-auto" fill="none" aria-hidden="true">
        {/* ground on both sides of the gap */}
        <path d="M0 118 H 250" stroke={forest} strokeOpacity="0.25" strokeWidth="2" />
        <path d="M300 118 H 360" stroke={forest} strokeOpacity="0.25" strokeWidth="2" />
        {/* deck and posts */}
        <path d={`M20 92 H ${deck}`} stroke={forest} strokeWidth="5" strokeLinecap="round" />
        {[40, 100, 160, 220].map((x) => (
          <path key={x} d={`M${x} 95 V 118`} stroke={forest} strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
        ))}
        {/* the missing section */}
        <path d={`M${deck + 14} 92 H 330`} stroke={forest} strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 8" />
        <path id="deadend-run" d={`M34 80 H ${deck - 8}`} />
        <g className="weave-shuttle">
          <g>
            <circle cy="-1" r="7" fill="none" stroke={rust} strokeWidth="3" />
            <circle cy="-16" r="4" fill={rust} />
            <animateMotion dur="7s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1;0" keyTimes="0;0.42;0.58;1" keySplines="0.45 0 0.55 1;0 0 1 1;0.45 0 0.55 1">
              <mpath href="#deadend-run" />
            </animateMotion>
          </g>
        </g>
      </svg>
    </DrawOnView>
  );
}
