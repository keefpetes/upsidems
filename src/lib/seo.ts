import type { Metadata } from "next";

export const siteName = "Upside MS Foundation";

/**
 * Per-page metadata. Next.js replaces (not merges) the openGraph/twitter
 * objects from the layout, so the shared fields are repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  images = [
    { url: "/opengraph-image", width: 1200, height: 630, alt: "Upside MS Foundation — Access is only the beginning." },
  ],
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: { url: string; width: number; height: number; alt: string }[];
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_CA",
      siteName,
      url: path,
      title: `${title} · Upside MS`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Upside MS`,
      description,
      images: images.map((i) => i.url),
    },
  };
}
