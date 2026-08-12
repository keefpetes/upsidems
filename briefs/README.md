# Briefs — Upside MS v2

Reference specs for building the manifesto page and retuning homepage copy. These are instructions for Claude Code (or a human dev), not app files. Keep them out of `app/` and `pages/` so nothing here becomes a route.

## Files, in order of use

1. **MANIFESTO-PAGE-BRIEF.md** — build spec for the `/manifesto` page. Ship this first; it's the clean, self-contained win. The manifesto text is already in the repo — use it verbatim, no rewriting. Reduced-motion handling is a non-negotiable requirement, not a fallback.

2. **manifesto-prototype.html** — standalone visual/behavioral reference for the manifesto page (reveal timing, held lines, palette, reduced-motion path). Reference only. Do not ship it or place it where it becomes a route.

3. **HOMEPAGE-COPY-BRIEF.md** — homepage copy retune in the plain manifesto voice. Independent of the manifesto page; park it until that ships if sequencing matters. Leaves the four partnership tracks and all placeholders untouched.

## Voice, in one line

Plain, declarative, conviction. No em dashes, no "not this but that," no marketing cadence. The manifesto lives whole on its own page and is never chopped into homepage pull-quotes.

## Process for any build here

Work on a branch. Grep for current strings before replacing. Invent no placeholders, numbers, or imagery. Show the full diff before committing. Deploy to Vercel preview and review — especially the reduced-motion version of the manifesto page — before merging to production.

## Human check

The homepage copy in the brief is a strong first draft of the voice, but it's the funder-facing surface — give it a human pass before it ships. The manifesto page text is final and client-authored, so it's the safe first ship.
