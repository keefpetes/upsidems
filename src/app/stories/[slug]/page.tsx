import Link from "next/link";
import { notFound } from "next/navigation";
import Parallax from "@/components/Parallax";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import ScrollReveal from "@/components/ScrollReveal";
import { StoryMarkArt } from "@/components/illustrations";
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
        {story.author} · {story.date}
      </p>
      <h1 className="font-display text-4xl md:text-5xl mt-2 mb-8 text-ink">
        {story.title}
      </h1>
      <Parallax speed={0.12} className="mb-10 will-change-transform">
        <PlaceholderMedia label="Story image placeholder" aspect="aspect-[16/9]" art={<StoryMarkArt className="w-full h-full" tone={story.slug === "so-it-looks-like-ms" ? "rust" : "forest"} />} />
      </Parallax>
      <ScrollReveal>
        <p data-scroll-reveal className="text-lg leading-relaxed text-ink/85 font-display">
          {story.excerpt}
        </p>
        <div
          data-scroll-reveal
          className="mt-10 rounded-2xl border border-dashed border-rust/40 bg-rust/5 p-6"
        >
          <p className="text-xs uppercase tracking-wide text-rust mb-2">
            Placeholder
          </p>
          <p className="text-sm text-ink/70 leading-relaxed">
            Drop in the full essay text here. Only the published excerpt was
            carried over from the current site.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
