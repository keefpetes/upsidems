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
      // Old Squarespace addresses Google still has indexed (Search Console,
      // Nov 2026). Permanent so their search standing passes to the new pages.
      { source: "/home", destination: "/", permanent: true },
      { source: "/join-us", destination: "/get-involved", permanent: true },
      { source: "/blog", destination: "/stories", permanent: true },
      { source: "/blog/:slug", destination: "/stories/:slug", permanent: true },
      { source: "/blog-upsidems", destination: "/stories", permanent: true },
      { source: "/blog-upsidems/:slug", destination: "/stories/:slug", permanent: true },
      { source: "/terms-of-service-upsidems", destination: "/terms", permanent: true },
      { source: "/privacy-policy-for-upsidems", destination: "/privacy-policy", permanent: true },

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
