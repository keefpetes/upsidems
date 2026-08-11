# Upside MS -- new website (Next.js + Tailwind)

Custom rebuild off Squarespace, structured per the redo strategy doc:
Home, About, Our Work (new), Get Involved, Stories, Contact.

## What's real vs. placeholder

- Copy on Home, About, and Get Involved is carried over from the live
  upsidems.org (upsidems.org/about, /join-us).
- Stories carries over the two published post excerpts only -- the full
  essay text needs to be dropped in.
- Our Work has two SAMPLE case studies marked with a "Sample content" tag
  and placeholder paragraphs -- replace with real installations before launch.
- All photography is a placeholder pattern block labeled with what image
  belongs there -- none of the real site photos could be pulled into this
  build. Drop real images into public/ and swap the PlaceholderMedia
  components in src/components/ for next/image.
- Homepage "proof strip" numbers are placeholders for real stats.
- Contact page uses a plain mailto link -- swap for a form handler
  (Formspree, Basin, or a Next.js API route) when ready.

## Run it locally

    npm install
    npm run dev

Then open http://localhost:3000

## Deploy

Deploys cleanly to Vercel, Netlify, or Cloudflare Pages. On Vercel:
npx vercel from this folder, or connect the repo in the Vercel dashboard.

## Structure

- src/app/*        one folder per route
- src/components/  Header, Footer, PlaceholderMedia
- src/lib/site.ts   nav links, the four Get Involved paths, case studies,
  and story data in one place -- edit content here without touching page
  layout code
