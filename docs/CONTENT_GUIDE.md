# Writing a topic

One file per topic: `src/content/topics/<slug>.mdx`. The slug, title, part, group and
`order` come from `data/topics.json`; `npm run check` fails if they disagree.
Reference example: `src/content/topics/mallory-weiss-tear.mdx`.

## Structure (in this order)
1. Frontmatter: `title, part, group, order, summary (<=200 chars), highYield (3-6 bullets), tags`.
2. Imports: `Callout`, `Mermaid`, `Flashcards` from `../../components/`.
3. `##` sections that suit the topic. Pathology topics follow:
   What it is, Causes / risk factors, Pathogenesis, Clinical features,
   Investigations, Management, Complications. Anatomy/physiology topics follow the
   natural concept order. Merge sections that would be a single line.
4. At least one `<Mermaid>` diagram that teaches (mechanism, pathway, algorithm,
   anatomy relationships, comparison), 1-3 for long topics.
5. A comparison `table` wherever two or more entities are contrasted.
6. `<Callout kind="pearl">` for exam points, `kind="warning"` for red flags and traps.
7. `## Self-test` with `<Flashcards>`: 4-8 cards that test understanding, not recall of wording.

## Mermaid rules (a syntax error blanks the diagram)
- Quote every label that has punctuation: `A["Gastric acid (HCl)"]`.
- No `<`, `>`, `&`, `;`, `#` inside labels; write "less than", "and".
- Keep to ~12 nodes, short labels, `flowchart LR` or `TD`; also use `sequenceDiagram`,
  `stateDiagram-v2`, `mindmap` or `graph` when they fit better.
- Pass the source as a template literal: `chart={`flowchart LR ...`}`.

## Voice and accuracy
- Rewrite in your own words for a student: plain, short sentences, define jargon once.
- UK spelling as used in the source (oesophagus, haemorrhage).
- Facts come from the source notes; add only well-established textbook facts needed to
  make a point clear. If the source is wrong or ambiguous, state the standard fact.
- Never copy sentences, layouts, image credits, URLs or product wording.

## Anatomy figures

Human-anatomy SVGs with leader-line labels live in `src/components/anatomy/figures/*.js` (10 figures). Use one in a topic page:

```mdx
import Anatomy from '../../components/anatomy/Anatomy.astro';
<Anatomy figure="anorectal" highlight={['haemorrhoid-internal']} caption="..." />
```

`highlight` lights the named part ids and dims the rest. `npm run check` (check-figures) rejects unknown figures or part ids, label overlap and labels outside the viewBox. Preview one with `node scripts/render-figure.mjs <name> [ids…]` (writes `/tmp/gi-fig/*.png`, needs python playwright).
