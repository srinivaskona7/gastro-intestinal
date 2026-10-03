# GI Atlas: features and boundaries

## What exists
- Home with start buttons, anatomy cards and pathology grouped by organ.
- Topic pages: breadcrumb, read time, high-yield box, diagrams, tables, callouts,
  self-test, previous/next, sticky on-this-page nav.
- Ctrl K full-text search (Pagefind), dark mode, print stylesheet, skip link, sitemap.
- Content gate in CI: structure, ordering, diagram and self-test presence, length.

## Cost
Static files only. Mermaid (~1 MB chunk) loads only on pages with a diagram.

## Deliberately not done
- No images from the source PDF: diagrams are original Mermaid.
- No accounts, sync or backend: study state never leaves the browser (see Study tools).
- Notes are study aids, not clinical guidance.

## On the owner's hands
- Push the repo and enable Pages with source "GitHub Actions".
- Clinical review of the content by a qualified person before wide sharing.
- Decide on licensing: the pages are rewritten from a commercial notes product.

## Anatomy figures
10 original SVG figures (overview, oesophagus, stomach, biliary-pancreas, portal-system, lower-gi, anorectal, gut-wall, villus, abdominal-regions) with leader-line labels, wired into 55 of 56 topics. Not wired: pilonidal sinus (natal cleft, not GI anatomy). Stylised teaching drawings, not to scale. See `docs/CONTENT_GUIDE.md`.

## Study tools
Client-side only; state lives in `localStorage` under the `gi-atlas:` prefix (`learned`: slug list, `leitner`: card id to box 1-3). All URLs use `import.meta.env.BASE_URL`.
- **Mark as learned** button on every topic page; home and `/topics/` show `n / 56 learned`, a progress bar and a tick on learned topics.
- **`/quiz/`**: deck built at build time from each MDX `<Flashcards cards={[...]} />` block by `src/lib/cards.mjs`, served as `/quiz-data.json` (nothing hand-copied). Filters: part, group, "only topics not learned yet", session size. Reveal (Space), then Got it (1) / Again (2); Leitner boxes 1-3 (Got it moves up, Again resets to box 1, weakest box first); summary with Retry missed. Card ids hash the question, so reordering cards keeps progress.
- **`/revise/`**: every topic's `highYield` bullets grouped by part and group, All / Not learned / Learned filter, Print button (print CSS in `global.css`).
- Header nav is the `navLinks` array in `Base.astro`; add an entry to extend it.
- Gate: `scripts/check-study.mjs` (in `npm run check`) fails on zero cards or any card without `q`/`a`; also checks `dist/quiz-data.json` when a build exists. Set `STUDY_TOPICS_DIR` to point it at other files.
- Quiz and revise pages are `data-pagefind-ignore`, so search results are not polluted.

Deliberately not done: no accounts, no sync across devices, no server; clearing site data erases progress. Spaced repetition is Leitner boxes only (no due dates).
