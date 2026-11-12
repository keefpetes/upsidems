import { ImageResponse } from "next/og";

// Link-preview card for /manifesto, in the manifesto page's own palette.
export const alt =
  "Because a more accessible world is not a concession. It is a larger world. — The Upside Manifesto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tide = "#0E2A33";
const sand = "#EDE6D8";
const seaGlass = "#7FB0A6";

export default function ManifestoOpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: tide,
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 115%, rgba(127,176,166,0.28), rgba(14,42,51,0) 70%)",
          color: sand,
          fontFamily: "Georgia, serif",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: seaGlass,
          }}
        >
          The Upside Manifesto
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 40,
            fontSize: 60,
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            Because a more accessible world
          </div>
          <div style={{ display: "flex" }}>is not a concession.</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 84 }}>
            It is a larger world.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 22,
            color: sand,
            opacity: 0.55,
          }}
        >
          Upside MS Foundation · upsidems.org/manifesto
        </div>
      </div>
    ),
    size
  );
}
