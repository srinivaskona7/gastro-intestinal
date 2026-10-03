// Extracts the `{ q, a }` cards from a topic's <Flashcards cards={[ ... ]} /> block.
// Shared by the quiz-data endpoint and scripts/check-study.mjs so the gate tests
// exactly what the site ships. Topic files are trusted repo content, so the array
// literal is evaluated rather than regex-scraped (handles escaped quotes).
import { createHash } from 'node:crypto';

const BLOCK = /<Flashcards\s+cards=\{(\[[\s\S]*?\])\}\s*\/>/g;

export function extractCards(body, slug) {
  const cards = [];
  for (const m of body.matchAll(BLOCK)) {
    const arr = new Function(`return ${m[1]}`)();
    for (const c of arr) {
      const q = typeof c?.q === 'string' ? c.q : '';
      const a = typeof c?.a === 'string' ? c.a : '';
      // Id is derived from the question so reordering cards keeps saved progress.
      const id = `${slug}:${createHash('sha1').update(q).digest('hex').slice(0, 8)}`;
      cards.push({ id, q, a });
    }
  }
  return cards;
}
