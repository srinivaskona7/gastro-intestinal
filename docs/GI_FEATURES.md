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
- No quiz scoring, accounts or progress tracking (self-test is reveal-on-click).
- Notes are study aids, not clinical guidance.

## On the owner's hands
- Push the repo and enable Pages with source "GitHub Actions".
- Clinical review of the content by a qualified person before wide sharing.
- Decide on licensing: the pages are rewritten from a commercial notes product.

## Anatomy figures
10 original SVG figures (overview, oesophagus, stomach, biliary-pancreas, portal-system, lower-gi, anorectal, gut-wall, villus, abdominal-regions) with leader-line labels, wired into 53 of 56 topics. Not wired: pilonidal sinus, gastroenteritis, parasitic infections (no useful GI anatomy). Stylised teaching drawings, not to scale. See `docs/CONTENT_GUIDE.md`.
