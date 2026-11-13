import Link from "next/link";
import StoryImage from "@/components/StoryImage";
import { notFound } from "next/navigation";
import Parallax from "@/components/Parallax";
import ScrollReveal from "@/components/ScrollReveal";
import { stories } from "@/lib/site";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
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
      <Link
        href="/stories"
        className="text-sm text-forest underline underline-offset-4"
      >
        ← All stories
      </Link>
      <p className="text-xs text-ink/50 mt-8">
        {story.date}
      </p>
      <h1 className="font-display text-4xl md:text-5xl mt-2 mb-8 text-ink">
        {story.title}
      </h1>
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
        <p data-scroll-reveal className="text-lg leading-relaxed text-ink/85 font-display">
          {story.excerpt}
        </p>
        <p data-scroll-reveal className="mt-8 font-display text-lg text-ink/70">
          — {story.author}
        </p>
      </ScrollReveal>
    </div>
  );
}
