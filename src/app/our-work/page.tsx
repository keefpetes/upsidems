import Parallax from "@/components/Parallax";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import ScrollReveal from "@/components/ScrollReveal";
import DrawOnView from "@/components/DrawOnView";
import MeasureWeave from "@/components/MeasureWeave";
import { d } from "@/lib/draw";
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

const modelTraits = [
  {
    term: "Spatiotemporal",
    body: "It reads how use moves across a site and shifts through the day and the seasons, separating lasting change from noise.",
  },
  {
    term: "Hierarchical",
    body: "Every site is modelled on its own and as part of the whole, so a new installation borrows strength from everything we’ve already learned, even before it has much data of its own.",
  },
  {
    term: "Causal by design",
    body: "Each site is compared with itself before we built, and with similar places we haven’t touched, so we can show the installation made the difference, not the weather or a busy summer.",
  },
];

/** Small mark that grows with each layer: a dot, a path, an area, a mesh. Draws itself in. */
function LayerMark({ step }: { step: number }) {
  const t = 0.3 + step * 0.25; // cards draw one after another
  const dot = (cx: number, cy: number, r: number, delay: number) => (
    <circle className="dp" style={d(t + delay)} cx={cx} cy={cy} r={r} fill="#F28218" stroke="none" />
  );
  return (
    <DrawOnView className="h-10 w-10">
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-forest" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        {step === 0 && dot(24, 24, 5, 0)}
        {step === 1 && (
          <>
            <path className="dl" style={d(t)} pathLength="1" d="M6 34 C 18 34, 22 14, 42 14" strokeLinecap="round" />
            {dot(24, 24, 4.5, 0.6)}
          </>
        )}
        {step === 2 && (
          <>
            <rect className="dl" style={d(t)} pathLength="1" x="6" y="6" width="36" height="36" rx="8" strokeOpacity="0.5" />
            <path className="dl" style={d(t + 0.3)} pathLength="1" d="M10 34 C 20 34, 24 16, 38 16" strokeLinecap="round" />
            {dot(16, 32, 2.5, 0.8)}
            {dot(25, 24, 2.5, 0.9)}
            {dot(33, 18, 2.5, 1.0)}
          </>
        )}
        {step === 3 && (
          <>
            {[14, 24, 34].map((y, i) => (
              <path key={y} className="dl" style={d(t + i * 0.12)} pathLength="1" d={`M6 ${y} C 18 ${y - 6}, 30 ${y + 6}, 42 ${y}`} strokeLinecap="round" />
            ))}
            {[14, 24, 34].map((x, i) => (
              <path key={x} className="dl" style={d(t + 0.4 + i * 0.12)} pathLength="1" d={`M${x} 6 V42`} strokeOpacity="0.35" strokeLinecap="round" />
            ))}
            {dot(14, 13, 2.2, 1.0)}
            {dot(24, 24, 2.2, 1.1)}
            {dot(34, 35, 2.2, 1.2)}
          </>
        )}
      </svg>
    </DrawOnView>
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
              <p className="text-sm text-ink/60 mb-5">
                {cs.location}
                {cs.concept && <span className="ml-2 inline-block align-middle rounded-full border border-rust/40 px-2 py-0.5 text-[11px] uppercase tracking-wide text-rust">Concept</span>}
              </p>
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
                      {cs.concept ? "The goal" : "The outcome"} —{" "}
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
                className="card-lift rounded-2xl border border-ink/10 bg-cream/60 p-6"
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
          <MeasureWeave />
          <div data-scroll-reveal className="max-w-2xl mt-12">
            <p className="text-ink/80 leading-relaxed">
              Counts on their own prove very little. The efficacy model
              we&apos;re building reads across all four layers, and it&apos;s
              designed to work three ways at once.
            </p>
          </div>
          <dl data-scroll-reveal className="mt-8 grid md:grid-cols-3 gap-8 max-w-5xl">
            {modelTraits.map((t) => (
              <div key={t.term} className="border-l-2 border-rust pl-5">
                <dt className="font-display text-lg text-forest mb-2">{t.term}</dt>
                <dd className="text-sm text-ink/75 leading-relaxed">{t.body}</dd>
              </div>
            ))}
          </dl>
          <div data-scroll-reveal className="max-w-2xl mt-10">
            <p className="text-ink/80 leading-relaxed">
              The result is a clear measure of impact: whether a space is
              genuinely opening up to more people, and which design choices
              make the difference.
            </p>
            <p className="text-ink/80 leading-relaxed mt-4">
              For our government and civic partners, that evidence becomes a
              success story they can stand behind. Instead of a ribbon-cutting
              photo, a municipality or park authority can show residents,
              council, and funders what actually changed, backed by numbers
              rather than anecdotes, in council reports, grant renewals, and
              accessibility plans.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
