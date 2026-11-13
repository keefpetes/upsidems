import Link from "next/link";
import StoryImage from "@/components/StoryImage";
import ScrollReveal from "@/components/ScrollReveal";
import { stories } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Stories",
  description:
    "Writing from life with MS: where lived constraints meet the built environment, and what it takes to keep moving.",
  path: "/stories",
});


export default function Stories() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-xs uppercase tracking-wide text-rust">
        Stories
      </span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        Observations from the field
      </h1>
      <p className="font-display italic text-forest text-lg max-w-2xl mb-6 leading-relaxed">
        These pieces trace where lived constraints meet the built
        environment. They surface access failure as design problems, not
        personal shortcomings. This is Resilience Design.
      </p>
      <a
        href="/feed.xml"
        className="inline-flex items-center gap-2 mb-14 text-sm text-ink/60 hover:text-forest transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <circle cx="3" cy="13" r="2" />
          <path d="M1 6.5a8.5 8.5 0 0 1 8.5 8.5h-2A6.5 6.5 0 0 0 1 8.5z" />
          <path d="M1 1.5A13.5 13.5 0 0 1 14.5 15h-2A11.5 11.5 0 0 0 1 3.5z" />
        </svg>
        Follow new stories by RSS
      </a>

      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-10">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              data-scroll-reveal
              className="group"
            >
              <StoryImage story={story} />
              <h2 className="font-display text-2xl mt-4 mb-2 group-hover:text-forest transition-colors">
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
      </ScrollReveal>
    </div>
  );
}
