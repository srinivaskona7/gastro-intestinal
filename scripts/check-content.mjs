// Content gate: every topic in data/topics.json must exist as an MDX file with
// the required structure. Run via `npm run check` (also runs in CI).
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const topics = JSON.parse(readFileSync('data/topics.json', 'utf8'));
const dir = 'src/content/topics';
const errors = [];
const err = (slug, msg) => errors.push(`${slug}: ${msg}`);

const files = readdirSync(dir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''));
for (const f of files) if (!topics.some((t) => t.slug === f)) err(f, 'file not listed in data/topics.json');

// Words that would indicate text copied from the source product rather than rewritten
const banned = existsSync('.banned') ? readFileSync('.banned', 'utf8').split('\n').map((s) => s.trim()).filter(Boolean) : [];

for (const t of topics) {
  const path = `${dir}/${t.slug}.mdx`;
  if (!existsSync(path)) { err(t.slug, 'missing'); continue; }
  const src = readFileSync(path, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1]?.trim();
  if (get('title') === undefined) err(t.slug, 'no title');
  if (get('part') !== t.part) err(t.slug, `part should be ${t.part}`);
  if (get('group')?.replace(/^["']|["']$/g, '') !== t.group) err(t.slug, `group should be ${t.group}`);
  if (Number(get('order')) !== t.order) err(t.slug, `order should be ${t.order}`);
  if (!/^summary:/m.test(fm)) err(t.slug, 'no summary');
  if ((fm.match(/^\s+- /gm) ?? []).length < 3) err(t.slug, 'highYield needs 3+ bullets');
  if (!/<Mermaid[\s\S]*?chart=\{`/.test(src)) err(t.slug, 'needs at least one <Mermaid> diagram');
  if (!/<Flashcards/.test(src)) err(t.slug, 'needs <Flashcards>');
  const cards = (src.match(/\{\s*q:/g) ?? []).length;
  if (cards < 4) err(t.slug, `needs 4+ flashcards (has ${cards})`);
  if (!/^## Self-test/m.test(src)) err(t.slug, 'needs a "## Self-test" heading');
  if (src.split(/\s+/).length < 250) err(t.slug, 'suspiciously short (<250 words)');
  if (/slideplayer|wikimedia|openstax|canva|pre-summarized|fourth edition/i.test(src)) err(t.slug, 'contains source/attribution boilerplate');
  for (const b of banned) if (src.toLowerCase().includes(b.toLowerCase())) err(t.slug, `banned term "${b}"`);
}

if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problem(s)`); process.exit(1); }
console.log(`OK: ${topics.length} topics validated`);
