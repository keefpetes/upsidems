import type { Metadata } from "next";
import "./globals.css";
import ActivateTouchStates from "@/components/ActivateTouchStates";
import Header from "@/components/Header";
import TiltCards from "@/components/TiltCards";
import Footer from "@/components/Footer";
import { baseUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Upside MS Foundation — Access is only the beginning.",
    template: "%s · Upside MS",
  },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "Upside MS · Stories" }] },
  },
  description:
    "Upside MS exists to close the accessibility gap in natural spaces, restoring the right to move, breathe, and heal for people with MS and other mobility challenges in Canada.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Upside MS Foundation",
    title: "Upside MS Foundation — Access is only the beginning.",
    description:
      "The limits we attribute to people often belong to the environment around them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upside MS Foundation — Access is only the beginning.",
    description:
      "The limits we attribute to people often belong to the environment around them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Upside MS Foundation",
              alternateName: "Upside MS",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              email: "hello@upsidems.org",
              slogan: "Access is only the beginning.",
              description:
                "Upside MS closes the accessibility gap in natural spaces for people with MS and other mobility challenges in Canada.",
              address: { "@type": "PostalAddress", addressLocality: "Vancouver", addressRegion: "BC", addressCountry: "CA" },
            }),
          }}
        />
        <ActivateTouchStates />
        <TiltCards />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
