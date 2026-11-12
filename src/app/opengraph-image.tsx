import { ImageResponse } from "next/og";

// Link-preview card used when the site is shared (texts, email, social).
// Applies to every route that doesn't define its own.
export const alt =
  "Upside MS Foundation — Access is only the beginning.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const forest = "#14313d";
const cream = "#f8f1e1";
const rust = "#e18739";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: forest,
          color: cream,
          padding: "72px 80px",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Low sun */}
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 150,
            width: 220,
            height: 220,
            borderRadius: 9999,
            background: rust,
            opacity: 0.9,
          }}
        />
        {/* Water band covering the lower half of the sun */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 300,
            bottom: 0,
            background: forest,
          }}
        />
        {/* Wave lines */}
        <svg
          width="1200"
          height="200"
          viewBox="0 0 1200 200"
          style={{ position: "absolute", left: 0, top: 290 }}
        >
          <path
            d="M0 20 Q 75 0 150 20 T 300 20 T 450 20 T 600 20 T 750 20 T 900 20 T 1050 20 T 1200 20"
            stroke={cream}
            strokeOpacity="0.35"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M600 60 Q 675 40 750 60 T 900 60 T 1050 60 T 1200 60"
            stroke={cream}
            strokeOpacity="0.2"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <div
          style={{
            display: "flex",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: rust,
          }}
        >
          Upside MS Foundation
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05, maxWidth: 820 }}>
            Access is only the beginning.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 860,
              color: cream,
              opacity: 0.75,
            }}
          >
            The limits we attribute to people often belong to the environment
            around them.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 24,
              color: cream,
              opacity: 0.6,
            }}
          >
            upsidems.org
          </div>
        </div>
      </div>
    ),
    size
  );
}
