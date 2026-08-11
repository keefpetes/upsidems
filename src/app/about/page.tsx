import Parallax from "@/components/Parallax";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { CrossSectionArt } from "@/components/illustrations";

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

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <span className="text-xs uppercase tracking-wide text-rust">About</span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-10 text-ink">
        Upside MS works at the intersection of accessibility, design, and
        lived experience.
      </h1>

      <Parallax speed={0.12} className="mb-14">
        <PlaceholderMedia
          label="Illustration placeholder — swap for real site photo"
          aspect="aspect-[16/9]"
          art={<CrossSectionArt className="w-full h-full" />}
        />
      </Parallax>

      <div className="prose-none space-y-6 text-ink/85 leading-relaxed">
        <p>
          We focus on structural barriers rather than personal limitations.
          Disability is often framed as an individual problem to overcome. We
          take a different view. When people are excluded from nature,
          movement, or public life, the issue is rarely the body. It is
          almost always the environment.
        </p>
      </div>

      <h2 className="font-display text-2xl mt-16 mb-4 text-forest">
        Our Approach
      </h2>
      <blockquote className="my-8 border-l-2 border-rust pl-6 font-display text-xl md:text-2xl leading-relaxed italic text-ink">
        Accessibility is the infrastructure of participation.
        <br />
        We don&rsquo;t build sidewalks because sidewalks are beautiful.
        <br />
        We build them because they let civilization function.
        <br />
        Accessibility is no different.
      </blockquote>
      <div className="space-y-4 text-ink/85 leading-relaxed">
        <p>Upside MS is grounded in what we call Resilience Design.</p>
        <p>
          Resilience Design treats access as a design responsibility, not a
          charitable gesture. It shows up in practical decisions: shade
          structures along trails for heat-sensitive bodies, seating placed
          at intervals that account for fatigue, surface materials that work
          for wheels, canes, and unsteady gaits.
        </p>
        <p>
          The work begins by identifying where systems break down and asking
          how thoughtful design can restore dignity, movement, and
          participation.
        </p>
        <p>
          Rather than asking people to adapt endlessly to inaccessible
          spaces, we adapt spaces so more people can belong. This includes
          recognizing nature as a vital part of health and wellbeing, not a
          luxury reserved for those without physical limitations.
        </p>
        <p>
          Our work is informed by lived experience, but it is not limited to
          any single diagnosis. Disability is a common part of the human
          condition. Bodies change over time. Designing for access is simply
          designing for reality.
        </p>
      </div>

      <h2 className="font-display text-2xl mt-16 mb-4 text-forest">
        Our Foundation
      </h2>
      <div className="space-y-4 text-ink/85 leading-relaxed">
        <p>
          Upside MS emerged from the multiple sclerosis community, a
          population that has spent decades navigating poorly designed
          access in order to reach the outdoor spaces that support physical
          and mental health.
        </p>
        <p>
          That experience clarified what functional accessibility actually
          requires — not just compliance with codes, but design that accounts
          for fatigue, temperature sensitivity, variable mobility, and the
          cognitive load of constantly working around barriers.
        </p>
        <p>
          We carry that knowledge forward. Our work extends to anyone facing
          access challenges in natural and public spaces.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-rust/40 bg-rust/5 p-6">
        <p className="text-xs uppercase tracking-wide text-rust mb-2">
          Placeholder
        </p>
        <p className="text-sm text-ink/70 leading-relaxed">
          Add a short founder's note here connecting your own MS diagnosis to
          why Upside MS exists — one or two paragraphs, first person. It
          gives About a face, not just a framework.
        </p>
      </div>

      <h2 className="font-display text-2xl mt-16 mb-6 text-forest">
        What We Do
      </h2>
      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        {whatWeDo.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white/50 border border-ink/10 p-6"
          >
            <h3 className="font-display text-lg text-rust mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-ink/75 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <p className="text-ink/85 leading-relaxed">
        Each area supports the others. Installation without advocacy lacks
        durability. Advocacy without lived grounding lacks credibility.
        Insight without both lacks integrity.
      </p>
    </div>
  );
}
