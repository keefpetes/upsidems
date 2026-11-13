import Parallax from "@/components/Parallax";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import ScrollReveal from "@/components/ScrollReveal";
import { BeachPathwayArt, TrailRestArt } from "@/components/illustrations";
import { caseStudies } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work",
  description:
    "Resilience Design, on the ground: accessible pathways, rest intervals, and design observations that help people with MS and other mobility challenges reach natural spaces.",
  path: "/our-work",
});


const measureLayers = [
  {
    title: "A person",
    body: "One passage along a pathway, or one pause at a rest point. Discreet sensors will count it, when it happens and for how long, without identifying anyone.",
  },
  {
    title: "A crossing",
    body: "Where that person meets the design. We look at how each element, from surface to gradient to the spacing of rest points, is actually used.",
  },
  {
    title: "A field",
    body: "The whole site over time: use by time of day and through the seasons, so a busy sunny weekend isn’t mistaken for lasting change.",
  },
  {
    title: "A fabric",
    body: "Every site woven together. Patterns across installations show what works, so each new site starts from what the last one taught us.",
  },
];

/** Small mark that grows with each layer: a dot, a path, an area, a mesh. */
function LayerMark({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-forest" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {step === 0 && <circle cx="24" cy="24" r="5" fill="#F28218" stroke="none" />}
      {step === 1 && (
        <>
          <path d="M6 34 C 18 34, 22 14, 42 14" strokeLinecap="round" />
          <circle cx="24" cy="24" r="4.5" fill="#F28218" stroke="none" />
        </>
      )}
      {step === 2 && (
        <>
          <rect x="6" y="6" width="36" height="36" rx="8" strokeOpacity="0.5" />
          <path d="M10 34 C 20 34, 24 16, 38 16" strokeLinecap="round" />
          <circle cx="16" cy="32" r="2.5" fill="#F28218" stroke="none" />
          <circle cx="25" cy="24" r="2.5" fill="#F28218" stroke="none" />
          <circle cx="33" cy="18" r="2.5" fill="#F28218" stroke="none" />
        </>
      )}
      {step === 3 && (
        <>
          <path d="M6 14 C 18 8, 30 20, 42 14 M6 24 C 18 18, 30 30, 42 24 M6 34 C 18 28, 30 40, 42 34" strokeLinecap="round" />
          <path d="M14 6 V42 M24 6 V42 M34 6 V42" strokeOpacity="0.35" strokeLinecap="round" />
          <circle cx="14" cy="13" r="2.2" fill="#F28218" stroke="none" />
          <circle cx="24" cy="24" r="2.2" fill="#F28218" stroke="none" />
          <circle cx="34" cy="35" r="2.2" fill="#F28218" stroke="none" />
        </>
      )}
    </svg>
  );
}

export default function OurWork() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-xs uppercase tracking-wide text-rust">
        Our Work
      </span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        Resilience Design, on the ground.
      </h1>
      <p className="text-ink/80 leading-relaxed max-w-2xl mb-14">
        Every installation starts with the same question: where does this
        space break down for people managing fatigue, heat sensitivity, or
        variable mobility — and what does the environment need to change,
        rather than the person.
      </p>

      <div className="space-y-20">
        {caseStudies.map((cs, i) => (
          <article
            key={cs.slug}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <Parallax speed={0.12}>
                <PlaceholderMedia art={i === 0 ? <BeachPathwayArt className="w-full h-full" /> : <TrailRestArt className="w-full h-full" />} />
              </Parallax>
            </div>
            <div>
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

      <section className="mt-24 border-t border-ink/10 pt-14">
        <ScrollReveal>
          <div data-scroll-reveal className="max-w-2xl">
            <h2 className="font-display text-3xl text-forest mb-5">
              Measuring what changes
            </h2>
            <p className="text-ink/80 leading-relaxed">
              Every installation we build is designed to prove its own case.
              We think about measurement in four layers, from a single moment
              on a pathway to everything our sites teach us together.
            </p>
          </div>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {measureLayers.map((layer, i) => (
              <li
                key={layer.title}
                data-scroll-reveal
                className="rounded-2xl border border-ink/10 bg-cream/60 p-6"
              >
                <LayerMark step={i} />
                <h3 className="font-display text-xl text-ink mt-4 mb-2">
                  {layer.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed">
                  {layer.body}
                </p>
              </li>
            ))}
          </ol>
          <div data-scroll-reveal className="max-w-2xl mt-10">
            <p className="text-ink/80 leading-relaxed">
              Counts on their own prove very little. Our efficacy model reads
              across all four layers to show whether a space is genuinely
              opening up to more people, and which design choices make the
              difference. Site partners and funders see the evidence.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
