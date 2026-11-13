import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import StoryImage from "@/components/StoryImage";
import StoryBody from "@/components/StoryBody";
import { notFound } from "next/navigation";
import Parallax from "@/components/Parallax";
import ScrollReveal from "@/components/ScrollReveal";
import { baseUrl, stories } from "@/lib/site";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return {};
  const title = story.title.replace(/[“”"]/g, "");
  return {
    ...pageMetadata({
      title,
      description: story.excerpt,
      path: `/stories/${story.slug}`,
      type: "article",
      images: [{ url: story.image.src, width: 1600, height: 900, alt: story.image.alt }],
    }),
    authors: [{ name: "Keith Peterson" }],
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: story.title.replace(/[“”"]/g, ""),
            description: story.excerpt,
            image: `${baseUrl}${story.image.src}`,
            author: { "@type": "Person", name: "Keith Peterson" },
            publisher: { "@type": "NGO", name: "Upside MS Foundation", url: baseUrl, logo: `${baseUrl}/logo.png` },
            mainEntityOfPage: `${baseUrl}/stories/${story.slug}`,
          }),
        }}
      />
      <Link
        href="/stories"
        className="text-sm text-forest underline underline-offset-4"
      >
        ← All stories
      </Link>
      <h1 className="font-display text-4xl md:text-5xl mt-8 mb-8 text-ink">
        {story.title}
      </h1>
      {story.contentWarning && (
        <p className="mb-8 rounded-xl border border-rust/30 bg-rust/5 px-5 py-4 text-sm leading-relaxed text-ink/75">
          <span className="font-medium text-ink">Content warning:</span> {story.contentWarning}
        </p>
      )}
      <Parallax speed={0.12} className="mb-10 will-change-transform">
        <StoryImage story={story} sizes="(min-width: 768px) 720px, 100vw" preload />
        <p className="mt-2 text-xs text-ink/40">
          Photo:{" "}
          <a href={story.image.creditUrl} className="underline underline-offset-2 hover:text-ink/70" target="_blank" rel="noopener noreferrer">
            {story.image.credit}
          </a>{" "}
          / Unsplash
        </p>
      </Parallax>
      <ScrollReveal>
        <StoryBody blocks={story.body ?? [story.excerpt]} />
        <p data-scroll-reveal className="mt-10 font-display text-lg text-ink/70">
          — {story.author}
        </p>
        {story.footnote && (
          <p data-scroll-reveal className="mt-10 pt-6 border-t border-ink/10 text-sm italic leading-relaxed text-ink/60">
            {story.footnote}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}
