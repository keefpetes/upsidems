# Build brief: `/manifesto` page — Upside MS v2

For Claude Code. This is a build spec, not content. The manifesto text is already in the repo — use it verbatim. Do not rewrite, tighten, reorder, or "improve" any line. Preserve existing line breaks; they are the pacing.

A standalone reference prototype exists (`manifesto-prototype.html`) demonstrating the reveal behavior, held lines, palette, and reduced-motion handling. Match its feel. Port it into the Next.js component and design system — do not copy the raw markup wholesale.

---

## Page structure

1. **Opening (full-height hero):** the first manifesto line — "The limits we attribute to people often belong to the environment around them." Coral accent on "environment around them," used here and nowhere else on the page.
2. **Body:** reads as a slow scroll. Lines reveal on scroll-in at reading pace, not all at once. Use an IntersectionObserver-style reveal (fade + slight rise), one-shot (don't re-hide on scroll up).
3. **Held lines:** these five each get their own full viewport, centered, alone:
   - "Look again."
   - "We can do better."
   - "They are not inevitable."
   - "Access is only the beginning."
   - "That is the standard."
4. **Short stanzas** (keep grouped, tighter spacing):
   - "Someone made a decision." / "Someone can make a better one."
   - "Place by place." / "Path by path." / "Decision by decision."
5. **Closing (final landing):** "Because a more accessible world is not a concession. It is a larger world." Then a quiet "Upside MS Foundation" mark.

## Visual constraints

- **Palette** (coastal identity): deep tide navy base `#0E2A33`, warm sand text `#EDE6D8`, muted sea-glass accent `#7FB0A6`, coral `#E8785A` used exactly once (opening line).
- **Type:** Fraunces, light weight (300), for manifesto lines. Inter for small utility labels only (eyebrow, footer).
- **Motion:** subtle ambient background only — a slow tidal glow. No spectacle. Lines *arrive*; nothing flies, bounces, or slides in from the side.
- **Held lines** are larger than body lines and centered; give them air (min ~80vh).

## Accessibility — non-negotiable

This is an accessibility organization; the medium must not contradict the message.

- `prefers-reduced-motion: reduce` MUST present the full manifesto static — every line visible, no movement, no transitions. This is not a stripped fallback; it must read as a composed, dignified version. Test it explicitly.
- Visible keyboard focus states.
- Responsive down to mobile (line sizes scale with clamp()).
- Semantic headings; the opening line is the page `<h1>`.
- Sufficient contrast on sand-over-tide text.

## Process

- Work on a branch (e.g. `feat/manifesto-page`).
- Do not invent placeholders, imagery, or copy. If real coastal photography is wanted behind held lines later, that's a follow-up — build clean without it for now.
- Show the full diff before commit.
- Deploy to Vercel preview and review (especially the reduced-motion version) before merging to production.

---

## Reference prototype

The file `manifesto-prototype.html` is the visual/behavioral reference. It contains the full manifesto set exactly, the five held lines, the tidal-glow ambient background, the reveal logic, and a complete reduced-motion path. Treat it as the design target to translate into the component architecture.
