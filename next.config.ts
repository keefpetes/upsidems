import type { NextConfig } from "next";

// Baseline security headers on every response. The CSP is deliberately
// minimal (framing/base/form/object rules only) so it can't break the site's
// inline scripts, JSON-LD or styles; a full script-src policy can come later.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // A person opening the raw feed in a browser tab (typed, bookmarked, or
      // the browser's own RSS button) gets the friendly page instead of XML.
      // Only real browser page loads send Sec-Fetch-Dest: document; feed
      // readers fetch without it, so they still receive the XML.
      {
        source: "/feed.xml",
        has: [{ type: "header", key: "sec-fetch-dest", value: "document" }],
        destination: "/stories/follow",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
