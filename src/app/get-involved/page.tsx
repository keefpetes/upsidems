import ScrollReveal from "@/components/ScrollReveal";
import { ConvergingPaths, PathIcon } from "@/components/getInvolvedArt";
import { paths } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get Involved",
  description:
    "Advocate, civic partner, community organization, or corporate partner: four ways to work with Upside MS on accessibility in natural spaces.",
  path: "/get-involved",
});


export default function GetInvolved() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid md:grid-cols-[1fr_minmax(0,22rem)] gap-10 md:gap-14 items-center mb-16">
        <div>
          <span className="text-xs uppercase tracking-wide text-rust">
            Get Involved
          </span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
            Work with us
          </h1>
          <p className="text-ink/80 leading-relaxed max-w-2xl">
            Upside MS works with people and institutions who understand that
            accessibility is a design issue, not a personal one. There are
            different ways to work with us.
          </p>
        </div>
        <ConvergingPaths className="w-full max-w-sm mx-auto md:max-w-none" />
      </div>

      <ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {paths.map((path, i) => (
            <div
              key={path.slug}
              id={path.slug}
              data-scroll-reveal
              className="card-lift scroll-mt-28 flex flex-col rounded-2xl border border-ink/10 bg-cream/60 p-7 md:p-8"
            >
              <PathIcon slug={path.slug} step={i} />
              <h2 className="font-display text-2xl text-forest mt-5 mb-3">
                {path.title}
              </h2>
              <p className="text-ink/80 leading-relaxed mb-2">
                {path.summary}
              </p>
              <p className="text-ink/80 leading-relaxed mb-7">
                {path.detail}
              </p>
              <a
                href={`/contact?topic=${path.slug}`}
                className="btn-press mt-auto self-start rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-rust hover:text-forest focus-visible:bg-rust focus-visible:text-forest transition-colors"
              >
                {path.cta}
              </a>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
