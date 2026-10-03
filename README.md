# GI Atlas

Free, diagram-rich study notes on the gastrointestinal system for medical students:
7 anatomy and physiology topics and 49 pathology topics, each with a 30-second
high-yield summary, Mermaid diagrams, tables and a self-test.

## Stack

| Concern | Choice |
|---|---|
| Framework | Astro 5 (static output), MDX content collection |
| Styling | Tailwind 4 + typography, self-hosted Newsreader and Inter |
| Design | Tokens from a Stitch design (`docs/design/`) |
| Diagrams | Mermaid, lazy-loaded only on pages that have one |
| Search | Pagefind (built into `dist/`, no server) |
| Hosting | GitHub Pages via `.github/workflows/pages.yml` |

## Run it

```bash
npm install          # .npmrc pins the public registry
npm run dev          # http://localhost:4321
npm run check        # content gate
npm run build        # site + search index into dist/
npm run preview      # search only works on a built site
```

## Layout

```
data/topics.json          topic list: slug, title, group, order (source of truth)
src/content/topics/*.mdx  one file per topic
src/components/           Callout, Mermaid, Flashcards
src/layouts, src/pages    shell, home, topic index, topic page
scripts/check-content.mjs structure gate, also run in CI
docs/CONTENT_GUIDE.md     how to write a topic
docs/GI_FEATURES.md       what exists, what it does not do
```

## Deploy

1. Push to GitHub, then **Settings > Pages > Source: GitHub Actions** (enable this once by hand,
   the workflow token cannot).
2. Every push to `main` validates, builds and deploys; pull requests only validate and build.
3. The workflow sets the base path from the repository name. For a `<user>.github.io`
   repository, set `ASTRO_BASE: /` in the workflow.

Add a topic: add it to `data/topics.json`, create the MDX file, run `npm run check`.
