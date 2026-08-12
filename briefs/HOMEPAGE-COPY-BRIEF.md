# Homepage copy retune — Upside MS v2

For Claude Code. Structure and components stay the same — copy only. The manifesto lives on its own `/manifesto` page; **do not** lift manifesto sentences and scatter them across the homepage. Write fresh copy for each slot in the manifesto's register.

## Voice rules (apply to every string written here)

- No em dashes.
- No "not this, but that" constructions.
- No LinkedIn cadence, no rhetorical build-ups, no clever turns.
- Short, declarative sentences. Plain verbs. Sound like someone who believes something, not like marketing.
- Say what is true and concrete. Specific beats clever.

## What NOT to touch

- The four partnership tracks (Advocate / Civic Partner / Community Organization / Corporate Partner) — leave titles and descriptions plain and scannable.
- All placeholder figures (stat band) and placeholder images. Do not invent numbers, case-study details, partner names, or photos. Leave placeholders as placeholders; real data comes from the client.

---

## Copy by slot

Grep for the current string, confirm the element, replace. Don't guess file paths.

### Hero
- **KEEP** H1: "Access is only the beginning."
- **KEEP** eyebrow: "Forging pathways towards a barrier-free Canada"
- **Subhead — rewrite fresh:** "We close the accessibility gap in natural spaces, so people with MS and other mobility challenges can reach them. Participation is the point."

### Three pillars ("what we do": installations / advocacy / observations)
Keep the section. Rewrite each so it states plainly what you do and why it matters. No poeticizing.
- **Accessibility installations** — "We design and build stable pathways that let people of all mobility levels reach natural spaces safely."
- **Advocacy and consultation** — "We work with municipalities and institutions to treat access as infrastructure, not an afterthought."
- **Design observations and case studies** — "We document what we learn on real sites, so better decisions get made the next time."

### Stats band
- Keep placeholder figures.
- Optional framing line above them (plain): "The work, measured." (or leave unlabeled — client's call.)

### Featured work (Beach Access Pathway)
- Keep heading and structure.
- Framing line (plain): "One site. Everything it takes to make a shoreline reachable."

### Four ways to work with us
- **Intro — rewrite fresh:** "Accessibility is a design problem, not a personal one. We work with people and institutions who want to solve it."
- Four tracks below stay exactly as-is.

### Manifesto link (new, quiet)
- Add one restrained link somewhere sensible (end of hero or footer): "Read the manifesto." Points to `/manifesto`. Not a hero placement, not a banner. One quiet line.

---

## Process

- Branch (e.g. `copy/homepage-retune`).
- Grep-first for each current string; replace in place.
- Show the full diff before commit.
- Vercel preview before production.

## Note
Park this until the `/manifesto` page ships if sequencing matters — the manifesto page is the cleaner first win. This retune is independent and can follow.
