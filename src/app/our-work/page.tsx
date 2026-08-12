import Parallax from "@/components/Parallax";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import ScrollReveal from "@/components/ScrollReveal";
import { BeachPathwayArt, TrailRestArt } from "@/components/illustrations";
import { caseStudies } from "@/lib/site";

export default function OurWork() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-xs uppercase tracking-wide text-rust">
        Our Work
      </span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        Resilience Design, on the ground.
      </h1>
      <p className="text-ink/80 leading-relaxed max-w-2xl mb-6">
        Every installation starts with the same question: where does this
        space break down for people managing fatigue, heat sensitivity, or
        variable mobility — and what does the environment need to change,
        rather than the person.
      </p>

      <div className="mb-14 rounded-2xl border border-dashed border-rust/40 bg-rust/5 p-6">
        <p className="text-xs uppercase tracking-wide text-rust mb-2">
          Placeholder page
        </p>
        <p className="text-sm text-ink/70 leading-relaxed">
          The two case studies below are sample content, structured the way
          real projects should be documented. Replace the details, photos,
          and outcomes with your actual installations before launch.
        </p>
      </div>

      <div className="space-y-20">
        {caseStudies.map((cs, i) => (
          <article
            key={cs.slug}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <Parallax speed={0.12}>
                <PlaceholderMedia label={`Illustration — ${cs.title}`} art={i === 0 ? <BeachPathwayArt className="w-full h-full" /> : <TrailRestArt className="w-full h-full" />} />
              </Parallax>
            </div>
            <div>
              {cs.sample && (
                <span className="inline-block text-[10px] uppercase tracking-wide bg-rust/10 text-rust rounded-full px-3 py-1 mb-3">
                  Sample content
                </span>
              )}
              <h2 className="font-display text-2xl text-ink mb-1">
                {cs.title}
              </h2>
              <p className="text-sm text-ink/60 mb-5">{cs.location}</p>
              <ScrollReveal>
                <div
                  data-scroll-reveal
                  className="space-y-4 text-sm text-ink/80 leading-relaxed"
                >
                  <p>
                    <span className="font-semibold text-forest">
                      The problem —{" "}
                    </span>
                    {cs.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-forest">
                      The response —{" "}
                    </span>
                    {cs.response}
                  </p>
                  <p>
                    <span className="font-semibold text-forest">
                      The outcome —{" "}
                    </span>
                    {cs.outcome}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
