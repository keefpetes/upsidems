import ScrollReveal from "@/components/ScrollReveal";
import { contactEmail, paths } from "@/lib/site";

export default function GetInvolved() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <span className="text-xs uppercase tracking-wide text-rust">
        Get Involved
      </span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        Work with us
      </h1>
      <p className="text-ink/80 leading-relaxed max-w-2xl mb-16">
        Upside MS works with people and institutions who understand that
        accessibility is a design issue, not a personal one. There are
        different ways to work with us.
      </p>

      <ScrollReveal>
        <div className="space-y-14">
          {paths.map((path) => (
            <div
              key={path.slug}
              id={path.slug}
              data-scroll-reveal
              className="scroll-mt-28 border-t border-ink/10 pt-10"
            >
              <h2 className="font-display text-2xl text-forest mb-3">
                {path.title}
              </h2>
              <p className="text-ink/80 leading-relaxed mb-2 max-w-2xl">
                {path.summary}
              </p>
              <p className="text-ink/80 leading-relaxed mb-6 max-w-2xl">
                {path.detail}
              </p>
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                  `${path.title} — Get Involved`
                )}`}
                className="btn-press inline-block rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-forest-dark transition-colors"
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
