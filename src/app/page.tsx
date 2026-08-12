import Link from "next/link";
import Parallax from "@/components/Parallax";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { BeachPathwayArt, StoryMarkArt } from "@/components/illustrations";
import {
  HeroBaseArt,
  HeroForegroundArt,
  HeroMountainsArt,
  HeroSunArt,
  HeroWavesArt,
} from "@/components/heroLayers";
import { caseStudies, paths, stories } from "@/lib/site";

const whatWeDo = [
  {
    title: "Accessibility installations",
    body: "Designing and supporting physical pathways that enable meaningful access to natural spaces.",
  },
  {
    title: "Advocacy and consultation",
    body: "Working with municipalities, organizations, and institutions to address accessibility as infrastructure rather than an afterthought.",
  },
  {
    title: "Design observations and case studies",
    body: "Sharing practical insights and frameworks that reframe disability and access through clarity instead of sentiment.",
  },
];

export default function Home() {
  const featured = caseStudies[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PlaceholderMedia
          label="Illustration placeholder — swap for real installation photo"
          aspect="aspect-[16/10] md:aspect-[21/9]"
          className="rounded-none border-0"
          art={
            <>
              <HeroBaseArt className="absolute inset-0 w-full h-full" />
              <Parallax
                speed={0.15}
                className="absolute -inset-x-[35%] -top-[35%] h-[170%] will-change-transform"
              >
                <HeroSunArt className="w-full h-full" />
              </Parallax>
              <Parallax
                speed={0.25}
                className="absolute -inset-x-[35%] -top-[35%] h-[170%] will-change-transform"
              >
                <HeroMountainsArt className="w-full h-full" />
              </Parallax>
              <Parallax
                speed={0.35}
                className="absolute -inset-x-[35%] -top-[35%] h-[170%] will-change-transform"
              >
                <HeroWavesArt className="w-full h-full" />
              </Parallax>
              <Parallax
                speed={0.5}
                className="absolute -inset-x-[35%] -top-[35%] h-[170%] will-change-transform"
              >
                <HeroForegroundArt className="w-full h-full" />
              </Parallax>
            </>
          }
        />
        <div className="mx-auto max-w-6xl px-6">
          <Parallax speed={-0.1} className="-mt-24 md:-mt-32 relative bg-cream rounded-3xl border border-ink/10 shadow-sm px-8 py-10 md:px-14 md:py-14 max-w-3xl">
            <p className="font-display italic text-rust mb-4">
              Forging pathways towards a barrier-free Canada
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
              Access is only the beginning.
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-forest-dark transition-colors"
              >
                Get involved
              </Link>
              <Link
                href="/our-work"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm hover:border-forest hover:text-forest transition-colors"
              >
                See our work
              </Link>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Mission line */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-4 text-center">
        <p className="font-display text-2xl md:text-3xl leading-snug text-forest">
          Upside MS closes the accessibility gap in natural spaces —
          restoring the right to move, breathe, and heal for people with MS
          and other mobility challenges across Canada.
        </p>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {whatWeDo.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/50 border border-ink/10 p-8"
            >
              <h3 className="font-display text-xl text-rust mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs uppercase tracking-wide text-cream/50 mb-6 text-center">
            Placeholder — swap in real figures and partner logos before launch
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["#", "installations completed"],
              ["#", "communities served"],
              ["#", "civic partners"],
              ["#", "people reached"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-4xl mb-1">{stat}</div>
                <div className="text-xs uppercase tracking-wide text-cream/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Parallax speed={0.15} className="will-change-transform">
            <PlaceholderMedia label={`Illustration — ${featured.title}`} art={<BeachPathwayArt className="w-full h-full" />} />
          </Parallax>
          <div>
            <span className="text-xs uppercase tracking-wide text-rust">
              Featured work
            </span>
            <h2 className="font-display text-3xl mt-2 mb-4 text-ink">
              {featured.title}
            </h2>
            <p className="text-sm text-ink/70 mb-2">{featured.location}</p>
            <p className="text-sm leading-relaxed text-ink/80 mb-6">
              {featured.response}
            </p>
            <Link
              href="/our-work"
              className="text-sm text-forest underline underline-offset-4 hover:text-forest-dark"
            >
              See all our work →
            </Link>
          </div>
        </div>
      </section>

      {/* Get involved paths */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl text-ink mb-3">
              Four ways to work with us
            </h2>
            <p className="text-sm text-ink/70">
              Upside MS works with people and institutions who understand
              that accessibility is a design issue, not a personal one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {paths.map((path) => (
              <Link
                key={path.slug}
                href={`/get-involved#${path.slug}`}
                className="block rounded-2xl bg-cream border border-ink/10 p-7 hover:border-forest transition-colors"
              >
                <h3 className="font-display text-xl text-forest mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed">
                  {path.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stories highlight */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ink">From Stories</h2>
          <Link
            href="/stories"
            className="text-sm text-forest underline underline-offset-4 hover:text-forest-dark"
          >
            All stories →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group"
            >
              <PlaceholderMedia
                label="Story image placeholder"
                aspect="aspect-[16/9]"
                art={<StoryMarkArt className="w-full h-full" tone={story.slug === "so-it-looks-like-ms" ? "rust" : "forest"} />}
              />
              <p className="text-xs text-ink/50 mt-4">
                {story.author} · {story.date}
              </p>
              <h3 className="font-display text-xl mt-1 group-hover:text-forest transition-colors">
                {story.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Manifesto link */}
      <section className="mx-auto max-w-6xl px-6 pb-4 text-center">
        <Link
          href="/manifesto"
          className="text-sm text-ink/50 underline underline-offset-4 hover:text-ink/80"
        >
          Read our manifesto
        </Link>
      </section>

      {/* Contact strip */}
      <section className="bg-rust text-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-display text-2xl md:text-3xl">
            Reach out to connect, collaborate, or support the movement.
          </h2>
          <Link
            href="/contact"
            className="rounded-full bg-cream text-rust px-6 py-3 text-sm whitespace-nowrap hover:bg-white transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
