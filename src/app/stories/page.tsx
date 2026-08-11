import Link from "next/link";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { StoryMarkArt } from "@/components/illustrations";
import { stories } from "@/lib/site";

export default function Stories() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-xs uppercase tracking-wide text-rust">
        Stories
      </span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        Observations from the field
      </h1>
      <p className="font-display italic text-forest text-lg max-w-2xl mb-16 leading-relaxed">
        These pieces trace where lived constraints meet the built
        environment. They surface access failure as design problems, not
        personal shortcomings. This is Resilience Design.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {stories.map((story) => (
          <Link key={story.slug} href={`/stories/${story.slug}`} className="group">
            <PlaceholderMedia label="Story image placeholder" aspect="aspect-[16/9]" art={<StoryMarkArt className="w-full h-full" tone={story.slug === "so-it-looks-like-ms" ? "rust" : "forest"} />} />
            <p className="text-xs text-ink/50 mt-4">
              {story.author} · {story.date}
            </p>
            <h2 className="font-display text-2xl mt-1 mb-2 group-hover:text-forest transition-colors">
              {story.title}
            </h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              {story.excerpt}
            </p>
            <span className="text-sm text-forest underline underline-offset-4 mt-3 inline-block">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
