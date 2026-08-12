import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ReactNode } from "react";
import ManifestoReveal from "@/components/ManifestoReveal";
import styles from "./manifesto.module.css";

export const metadata: Metadata = {
  title: "Manifesto — Upside MS Foundation",
  description:
    "The limits we attribute to people often belong to the environment around them. Read the Upside MS manifesto.",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-inter",
});

function Line({ children, dim = false }: { children: ReactNode; dim?: boolean }) {
  return (
    <p data-reveal className={`${styles.line} ${dim ? styles.dim : ""}`}>
      {children}
    </p>
  );
}

function Held({ children, glass = false }: { children: ReactNode; glass?: boolean }) {
  return (
    <div className={styles.held}>
      <p data-reveal className={`${styles.heldText} ${glass ? styles.glass : ""}`}>
        {children}
      </p>
    </div>
  );
}

export default function Manifesto() {
  return (
    <div className={`${styles.page} ${fraunces.variable} ${inter.variable}`}>
      <div className={styles.horizon} />
      <div className={styles.grain} />

      <main className={styles.main}>
        {/* OPENING */}
        <section className={styles.open}>
          <div className={styles.utility}>Upside MS · Manifesto</div>
          <h1 className={styles.h1}>
            The limits we attribute to people often belong to the{" "}
            <span className={styles.accent}>environment around them.</span>
          </h1>
          <div className={styles.scrollcue}>
            <span className={styles.scrollcueLine} />
            Read
          </div>
        </section>

        <ManifestoReveal>
          <section className={styles.read}>
            <Line>That belief sits at the heart of Upside MS.</Line>
            <Line>
              For generations, disability has been understood primarily through the body. We
              have measured what a person can reach, how far they can walk, how long they can
              stand, what they can see, hear or process. When the world becomes difficult to
              navigate, we have been remarkably comfortable locating the problem in the person
              navigating it.
            </Line>
          </section>

          <Held>Look again.</Held>

          <section className={styles.read}>
            <Line>
              A flight of stairs is not a problem for everyone. Neither is a narrow doorway, an
              inaccessible trail, a badly designed website, a kilometre between an event and its
              pickup point, or a system that requires someone to ask for special treatment simply
              to participate.
            </Line>
            <Line dim>The body matters. Of course it does.</Line>
            <Line>But so does everything we build around it.</Line>
            <Line>Human beings change. Our environments should be capable of changing with us.</Line>
            <Line>
              Disability is not an edge case in the human experience. Bodies age. Mobility
              changes. Illness arrives. Accidents happen. Energy fluctuates. The circumstances of
              our lives change, sometimes gradually and sometimes in an instant..
            </Line>
            <Line>
              A society designed around one narrow idea of physical ability will eventually
              exclude almost everyone.
            </Line>
          </section>

          <Held glass>We can do better.</Held>

          <section className={styles.read}>
            <Line>
              Upside MS began with multiple sclerosis because that is where we learned to see the
              problem clearly. Living with changes in mobility reveals things about the built
              world that can otherwise remain invisible. A small distance becomes significant. A
              missing bench changes a decision. A curb changes a route. An inaccessible entrance
              changes whether you enter at all.
            </Line>
            <Line>
              Once you see those barriers, it becomes difficult to accept them as inevitable.
            </Line>
          </section>

          <Held>They are not inevitable.</Held>

          <section className={styles.stanza}>
            <Line>Someone made a decision.</Line>
            <Line>Someone can make a better one.</Line>
          </section>

          <section className={styles.read}>
            <Line>That is why our work extends beyond any single diagnosis.</Line>
            <Line>We care about trails and parks because nature belongs to everyone.</Line>
            <Line>We care about public spaces because public life belongs to everyone.</Line>
            <Line>
              We care about design, transportation, technology, policy and culture because each
              of them determines, in ways large and small, who gets to participate.
            </Line>
            <Line>And participation is ultimately what this is about.</Line>
          </section>

          <Held glass>Access is only the beginning.</Held>

          <section className={styles.read}>
            <Line>A ramp is useful because of where it allows someone to go.</Line>
            <Line>
              An accessible trail matters because of the morning someone gets to spend beside the
              ocean.
            </Line>
            <Line>
              Good transportation matters because people should be able to arrive and leave on
              their own terms.
            </Line>
            <Line>
              Accessible technology matters because information, work and community increasingly
              live inside it.
            </Line>
            <Line>The measure of accessibility is not the accommodation itself.</Line>
            <Line>It is what becomes possible because the accommodation is no longer necessary.</Line>
          </section>

          <section className={styles.read}>
            <Line>We want people to participate without having to explain themselves first.</Line>
            <Line>To make plans without conducting a feasibility study.</Line>
            <Line>To arrive without rehearsing contingencies.</Line>
            <Line>
              To contribute without being treated as remarkable for having made it into the room.
            </Line>
            <Line>To experience the ordinary freedom of changing their mind.</Line>
          </section>

          <Held>That is the standard.</Held>

          <section className={styles.read}>
            <Line>
              There is enormous human potential sitting behind barriers that never needed to
              exist.
            </Line>
            <Line>Human potential is distributed far more equally than access.</Line>
            <Line>We intend to change that.</Line>
            <Line dim>Not by asking people to become better at overcoming barriers.</Line>
            <Line>By removing the barriers.</Line>
            <Line dim>Not someday, when accessibility becomes convenient.</Line>
            <Line>Now.</Line>
          </section>

          <section className={styles.stanza}>
            <Line>Place by place.</Line>
            <Line> Path by path.</Line>
            <Line> Decision by decision.</Line>
          </section>

          <section className={styles.read}>
            <Line>
              Until accessibility stops being something added for a few people and becomes
              something expected for all of us.
            </Line>
          </section>

          {/* CLOSE */}
          <section className={styles.close}>
            <p data-reveal className={styles.big}>
              Because a more accessible world is not a concession.
            </p>
            <p data-reveal className={`${styles.big} ${styles.glass}`}>
              It is a larger world.
            </p>
            <div data-reveal className={styles.sig}>
              <span className={styles.mark}>Upside MS Foundation</span>
            </div>
          </section>
        </ManifestoReveal>
      </main>
    </div>
  );
}
