"use client";

import { useCallback, useEffect, useState } from "react";
import DrawOnView from "./DrawOnView";
import { d } from "@/lib/draw";

const forest = "#003241";
const rust = "#F28218";

/*
 * Four panels, 250 units wide each, centred at x = 125 / 375 / 625 / 875.
 * A person (a dot) → a crossing (a path through it) → a field (many paths
 * in a site) → a fabric (every site's threads woven together).
 */

// A crossing: cubic through (375,110)
const crossing = "M290 160 C 360 160, 390 60, 460 60";

// A field: three paths offset vertically, each through (625, 110 + o)
const fieldOffsets = [-40, 0, 40];
const fieldPath = (o: number) =>
  `M540 ${150 + o} C 600 ${150 + o}, 650 ${70 + o}, 710 ${70 + o}`;

// A fabric: wefts (horizontal) undulate over/under five warps (vertical)
const warpX = [800, 840, 880, 920, 960];
const weftY = [50, 90, 130, 170];
const AMP = 7;
const weftPath = (k: number) => {
  let p = `M780 ${weftY[k]}`;
  warpX.forEach((x, j) => {
    const sign = (j + k) % 2 === 0 ? -1 : 1;
    p += ` Q ${x} ${weftY[k] + sign * AMP} ${x + 20} ${weftY[k]}`;
  });
  return p;
};
// Weft is "over" a warp where its curve bows up (sign -1): break the warp there.
const GAP = 8;
const warpSegments = (j: number) => {
  const segs: [number, number][] = [];
  let start = 30;
  weftY.forEach((y, k) => {
    if ((j + k) % 2 === 0) {
      segs.push([start, y - GAP]);
      start = y + GAP;
    }
  });
  segs.push([start, 190]);
  return segs;
};
const nodes: [number, number][] = [
  [840, 90],
  [920, 50],
  [880, 170],
  [960, 130],
];

const labels = ["A person", "A crossing", "A field", "A fabric"];

export default function MeasureWeave() {
  const [live, setLive] = useState(false);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    setMotionOk(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Start the travelling dots once the strip has finished drawing in.
  const onDrawn = useCallback(() => {
    window.setTimeout(() => setLive(true), 4600);
  }, []);

  return (
    <figure className="mt-12" aria-label="Diagram: a single person on a pathway, then a crossing, then a whole site, then every site woven together.">
      <DrawOnView onDrawn={onDrawn}>
        <svg viewBox="0 0 1000 220" className="w-full h-auto" fill="none" aria-hidden="true">
          {/* panel 1 — a person */}
          <circle className="pulse-ring" style={d(0.6)} cx="125" cy="110" r="10" fill={rust} />
          <circle className="dp" style={d(0)} cx="125" cy="110" r="10" fill={rust} />

          {/* connector */}
          <path className="dl" style={d(0.5)} pathLength="1" d="M178 110 H 262" stroke={forest} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
          <path className="df" style={d(1.1)} d="M256 104 L 263 110 L 256 116" stroke={forest} strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* panel 2 — a crossing */}
          <path id="mw-crossing" className="dl" style={d(0.8)} pathLength="1" d={crossing} stroke={forest} strokeWidth="2.5" strokeLinecap="round" />
          <circle className="dp" style={d(1.3)} cx="375" cy="110" r="8" fill={rust} />

          <path className="dl" style={d(1.6)} pathLength="1" d="M488 110 H 512" stroke={forest} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />

          {/* panel 3 — a field */}
          <rect className="dl" style={d(1.7)} pathLength="1" x="525" y="20" width="200" height="180" rx="22" stroke={forest} strokeOpacity="0.4" strokeWidth="1.5" />
          {fieldOffsets.map((o, i) => (
            <path key={o} id={`mw-field-${i}`} className="dl" style={d(2.0 + i * 0.15)} pathLength="1" d={fieldPath(o)} stroke={forest} strokeWidth="2" strokeLinecap="round" />
          ))}
          {fieldOffsets.map((o, i) => (
            <circle key={o} className="dp" style={d(2.5 + i * 0.12)} cx={600 + i * 25} cy={110 + o + (1 - i) * 18} r="4.5" fill={rust} />
          ))}

          <path className="dl" style={d(2.8)} pathLength="1" d="M738 110 H 768" stroke={forest} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />

          {/* panel 4 — a fabric */}
          {warpX.map((x, j) =>
            warpSegments(j).map(([y1, y2], s) => (
              <path key={`${j}-${s}`} className="dl" style={d(3.0 + j * 0.1)} pathLength="1" d={`M${x} ${y1} V ${y2}`} stroke={forest} strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" />
            ))
          )}
          {weftY.map((_, k) => (
            <path key={k} id={`mw-weft-${k}`} className="dl" style={d(3.4 + k * 0.15)} pathLength="1" d={weftPath(k)} stroke={forest} strokeWidth="2.5" strokeLinecap="round" />
          ))}
          {nodes.map(([cx, cy], i) => (
            <g key={i} className="dp" style={d(4.2 + i * 0.1)}>
              <circle className="node-glow" style={d(i * 0.7)} cx={cx} cy={cy} r="4" fill={rust} />
            </g>
          ))}

          {/* once drawn: dots keep travelling the threads */}
          {live && motionOk && (
            <g fill={rust}>
              <circle r="3.5">
                <animateMotion dur="4.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#mw-crossing" />
                </animateMotion>
              </circle>
              {fieldOffsets.map((_, i) => (
                <circle key={i} r="3">
                  <animateMotion dur={`${5 + i}s`} repeatCount="indefinite">
                    <mpath href={`#mw-field-${i}`} />
                  </animateMotion>
                </circle>
              ))}
              {[0, 2].map((k) => (
                <circle key={k} r="3">
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href={`#mw-weft-${k}`} />
                  </animateMotion>
                </circle>
              ))}
            </g>
          )}
        </svg>
      </DrawOnView>
      <div className="hidden sm:grid grid-cols-4 mt-2 text-center text-xs uppercase tracking-wide text-ink/50">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </figure>
  );
}
