import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto — Upside MS Foundation",
  description:
    "The limits we attribute to people often belong to the environment around them. Read the Upside MS manifesto.",
};

const manifesto = [
  "The limits we attribute to people often belong to the environment around them.",
  "That belief sits at the heart of Upside MS.",
  "For generations, disability has been understood primarily through the body. We have measured what a person can reach, how far they can walk, how long they can stand, what they can see, hear or process. When the world becomes difficult to navigate, we have been remarkably comfortable locating the problem in the person navigating it.",
  "Look again.",
  "A flight of stairs is not a problem for everyone. Neither is a narrow doorway, an inaccessible trail, a badly designed website, a kilometre between an event and its pickup point, or a system that requires someone to ask for special treatment simply to participate.",
  "The body matters. Of course it does.",
  "But so does everything we build around it.",
  "Human beings change. Our environments should be capable of changing with us.",
  "Disability is not an edge case in the human experience. Bodies age. Mobility changes. Illness arrives. Accidents happen. Energy fluctuates. The circumstances of our lives change, sometimes gradually and sometimes in an instant..",
  "A society designed around one narrow idea of physical ability will eventually exclude almost everyone.",
  "We can do better.",
  "Upside MS began with multiple sclerosis because that is where we learned to see the problem clearly. Living with changes in mobility reveals things about the built world that can otherwise remain invisible. A small distance becomes significant. A missing bench changes a decision. A curb changes a route. An inaccessible entrance changes whether you enter at all.",
  "Once you see those barriers, it becomes difficult to accept them as inevitable.",
  "They are not inevitable.",
  "Someone made a decision.",
  "Someone can make a better one.",
  "That is why our work extends beyond any single diagnosis.",
  "We care about trails and parks because nature belongs to everyone.",
  "We care about public spaces because public life belongs to everyone.",
  "We care about design, transportation, technology, policy and culture because each of them determines, in ways large and small, who gets to participate.",
  "And participation is ultimately what this is about.",
  "Access is only the beginning.",
  "A ramp is useful because of where it allows someone to go.",
  "An accessible trail matters because of the morning someone gets to spend beside the ocean.",
  "Good transportation matters because people should be able to arrive and leave on their own terms.",
  "Accessible technology matters because information, work and community increasingly live inside it.",
  "The measure of accessibility is not the accommodation itself.",
  "It is what becomes possible because the accommodation is no longer necessary.",
  "We want people to participate without having to explain themselves first.",
  "To make plans without conducting a feasibility study.",
  "To arrive without rehearsing contingencies.",
  "To contribute without being treated as remarkable for having made it into the room.",
  "To experience the ordinary freedom of changing their mind.",
  "That is the standard.",
  "There is enormous human potential sitting behind barriers that never needed to exist.",
  "Human potential is distributed far more equally than access.",
  "We intend to change that.",
  "Not by asking people to become better at overcoming barriers.",
  "By removing the barriers.",
  "Not someday, when accessibility becomes convenient.",
  "Now.",
  "Place by place.",
  " Path by path.",
  " Decision by decision.",
  "Until accessibility stops being something added for a few people and becomes something expected for all of us.",
  "Because a more accessible world is not a concession.",
  "It is a larger world.",
];

export default function Manifesto() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <span className="text-xs uppercase tracking-wide text-rust">
        Manifesto
      </span>
      <div className="mt-10 space-y-7 font-display text-xl md:text-2xl leading-relaxed text-ink">
        {manifesto.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
