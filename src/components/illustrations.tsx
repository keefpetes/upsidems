type Props = { className?: string };

const forest = "#1F4B43";
const forestDark = "#16352F";
const rust = "#B5602A";
const cream = "#F5F1E8";
const creamDark = "#ECE4D2";

/** Coastal pathway scene — used for the hero and beach case study. */
export function BeachPathwayArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="500" fill={cream} />
      {/* sky */}
      <rect width="800" height="170" fill="#E7EEEA" />
      <circle cx="670" cy="80" r="42" fill={rust} opacity="0.85" />
      {/* distant hills, low and pushed back */}
      <path d="M0 170 L100 120 L210 170 Z" fill={forest} opacity="0.25" />
      <path d="M520 170 L640 110 L760 170 L800 170 L800 170 Z" fill={forest} opacity="0.2" />
      {/* ocean */}
      <rect y="170" width="800" height="110" fill="#C9DAD3" />
      <path d="M0 195 Q200 178 400 197 T800 190 V200 Q600 216 400 202 T0 210 Z" fill="#AFC7BE" />
      {/* sand */}
      <rect y="280" width="800" height="220" fill="#E4D9C0" />
      <path d="M0 280 Q400 300 800 280 V500 H0 Z" fill={creamDark} />
      {/* driftwood, placed on the sand */}
      <rect x="90" y="360" width="130" height="15" rx="7" fill="#8C7355" opacity="0.55" transform="rotate(-4 90 360)" />
      <rect x="580" y="410" width="150" height="16" rx="8" fill="#8C7355" opacity="0.5" transform="rotate(3 580 410)" />
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

/** Layered cross-section of an accessible pathway — used on About. */
export function CrossSectionArt({ className = "" }: Props) {
  const layers = [
    { h: 60, color: "#DCEAE3", label: "Surface" },
    { h: 50, color: "#B7D6C7", label: "Bedding" },
    { h: 90, color: forest, label: "Stabilized base" },
    { h: 55, color: forestDark, label: "Sub-base" },
    { h: 65, color: rust, label: "Foundation" },
  ];
  let y = 40;
  const rows = layers.map((layer) => {
    const row = { ...layer, y };
    y += layer.h;
    return row;
  });
  return (
    <svg
      viewBox="0 0 800 450"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="450" fill={cream} />
      <g transform="translate(60 15)">
        {rows.map((layer) => (
          <rect
            key={layer.label}
            x={0}
            y={layer.y}
            width={520}
            height={layer.h}
            fill={layer.color}
          />
        ))}
        {/* surface texture strokes on top layer */}
        <g stroke={forestDark} strokeWidth="2" opacity="0.25">
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={i} x1={20 + i * 44} y1={68} x2={8 + i * 44} y2={68} />
          ))}
        </g>
        {/* dimension bracket */}
        <g stroke={forestDark} strokeWidth="2" opacity="0.55" fill="none">
          <line x1={-22} y1={40} x2={-22} y2={y} />
          <line x1={-30} y1={40} x2={-14} y2={40} />
          <line x1={-30} y1={y} x2={-14} y2={y} />
        </g>
        {/* layer divider lines + labels */}
        {rows.map((layer) => (
          <g key={layer.label}>
            <line
              x1={0}
              y1={layer.y}
              x2={520}
              y2={layer.y}
              stroke={cream}
              strokeWidth="2"
              opacity="0.5"
            />
            <text
              x={540}
              y={layer.y + layer.h / 2 + 5}
              fontFamily="Georgia, serif"
              fontSize="19"
              fill={forestDark}
              opacity="0.75"
            >
              {layer.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Forest trail with a rest point — used for the trail case study. */
export function TrailRestArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="500" fill={cream} />
      <rect width="800" height="500" fill={creamDark} opacity="0.5" />
      {/* tree canopy shapes */}
      {[
        [90, 90, 70],
        [200, 60, 55],
        [700, 80, 65],
        [610, 50, 45],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={forest} opacity="0.3" />
      ))}
      {/* trail */}
      <path
        d="M-20 500 C 200 420, 260 380, 400 340 C 540 300, 620 260, 820 220"
        fill="none"
        stroke={forest}
        strokeWidth="46"
        opacity="0.18"
      />
      <path
        d="M-20 500 C 200 420, 260 380, 400 340 C 540 300, 620 260, 820 220"
        fill="none"
        stroke={forest}
        strokeWidth="4"
        strokeDasharray="2 14"
      />
      {/* bench / rest point */}
      <g transform="translate(400 300)">
        <rect x="-40" y="0" width="80" height="10" rx="3" fill={rust} />
        <rect x="-34" y="12" width="8" height="20" fill={forestDark} />
        <rect x="26" y="12" width="8" height="20" fill={forestDark} />
        <rect x="-40" y="-26" width="80" height="8" rx="3" fill={rust} opacity="0.85" />
      </g>
      {/* shade structure */}
      <path d="M340 260 L460 260 L430 220 L370 220 Z" fill={forestDark} opacity="0.25" />
    </svg>
  );
}

/** Abstract editorial mark for story/essay cards. */
export function StoryMarkArt({ className = "", tone = "forest" }: Props & { tone?: "forest" | "rust" }) {
  const color = tone === "rust" ? rust : forest;
  return (
    <svg
      viewBox="0 0 800 450"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="450" fill={cream} />
      <g opacity="0.15" stroke={color} strokeWidth="2" fill="none">
        <path d="M0 340 Q200 300 400 340 T800 330" />
        <path d="M0 380 Q200 350 400 380 T800 372" />
      </g>
      <text
        x="400"
        y="255"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="180"
        fill={color}
        opacity="0.85"
      >
        &ldquo;
      </text>
    </svg>
  );
}
