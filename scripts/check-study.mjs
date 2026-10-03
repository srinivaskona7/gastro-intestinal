// Gate for the quiz deck. Builds it with the same extractor the site uses and
// fails on an empty deck or any card without a non-empty q and a.
// STUDY_TOPICS_DIR overrides the source folder (used to prove the gate fails).
// If dist/quiz-data.json exists (after a build) it is checked too.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { extractCards } from '../src/lib/cards.mjs';

const dir = process.env.STUDY_TOPICS_DIR || 'src/content/topics';
const problems = [];
const seen = new Set();
let total = 0;

function checkCards(label, cards) {
  for (const [i, c] of cards.entries()) {
    total++;
    if (typeof c.q !== 'string' || !c.q.trim()) problems.push(`${label} card ${i + 1}: missing q`);
    if (typeof c.a !== 'string' || !c.a.trim()) problems.push(`${label} card ${i + 1}: missing a`);
    if (c.id) { if (seen.has(c.id)) problems.push(`${label} card ${i + 1}: duplicate id ${c.id}`); seen.add(c.id); }
  }
}

for (const f of readdirSync(dir).filter((f) => f.endsWith('.mdx'))) {
  const slug = f.replace(/\.mdx$/, '');
  let cards;
  try { cards = extractCards(readFileSync(`${dir}/${f}`, 'utf8'), slug); }
  catch (e) { problems.push(`${f}: Flashcards block does not parse (${e.message})`); continue; }
  if (!cards.length) problems.push(`${f}: no flashcards`);
  checkCards(f, cards);
}

const built = 'dist/quiz-data.json';
if (!process.env.STUDY_TOPICS_DIR && existsSync(built)) {
  const d = JSON.parse(readFileSync(built, 'utf8'));
  if (!Array.isArray(d.cards) || !d.cards.length) problems.push(`${built}: zero cards`);
  else { const before = total; seen.clear(); checkCards(built, d.cards); total = before; }
}

if (total === 0) problems.push('quiz deck has zero cards');
for (const p of problems) console.error(p);
console.log(`${total} quiz cards checked, ${problems.length} problems`);
process.exit(problems.length ? 1 : 0);
