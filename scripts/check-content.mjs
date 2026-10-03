// Content gate: every topic in data/topics.json must exist as an MDX file with
// the required structure. Run via `npm run check` (also runs in CI).
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';

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
  // Mirror the Astro schema with a real YAML parse (a "word: word" bullet silently becomes an object)
  let data = {};
  try { data = parseYaml(fm) ?? {}; } catch (e) { err(t.slug, `frontmatter is not valid YAML: ${e.message.split('\n')[0]}`); }
  if (typeof data.title !== 'string') err(t.slug, 'title must be a string');
  if (typeof data.summary !== 'string' || data.summary.length > 220) err(t.slug, 'summary must be a string of 220 chars or fewer');
  if (!Array.isArray(data.highYield) || data.highYield.length < 3 || data.highYield.length > 6 || data.highYield.some((x) => typeof x !== 'string')) err(t.slug, 'highYield must be 3-6 plain strings (quote any bullet containing ": ")');
  if (data.tags !== undefined && (!Array.isArray(data.tags) || data.tags.some((x) => typeof x !== 'string'))) err(t.slug, 'tags must be strings');
  if (get('part') !== t.part) err(t.slug, `part should be ${t.part}`);
  if (get('group')?.replace(/^["']|["']$/g, '') !== t.group) err(t.slug, `group should be ${t.group}`);
  if (Number(get('order')) !== t.order) err(t.slug, `order should be ${t.order}`);
  if (!/<Mermaid[\s\S]*?chart=\{`/.test(src)) err(t.slug, 'needs at least one <Mermaid> diagram');
  if (!/<Flashcards/.test(src)) err(t.slug, 'needs <Flashcards>');
  const cards = (src.match(/\{\s*q:/g) ?? []).length;
  if (cards < 4) err(t.slug, `needs 4+ flashcards (has ${cards})`);
  if (!/^## Self-test/m.test(src)) err(t.slug, 'needs a "## Self-test" heading');
  if (src.split(/\s+/).length < 250) err(t.slug, 'suspiciously short (<250 words)');
  if (/slideplayer|wikimedia|openstax|canva|pre-summarized|fourth edition/i.test(src)) err(t.slug, 'contains source/attribution boilerplate');
  const meta = src.match(/\b(the source|source notes|the notes|these notes|original notes|in the source|source's|notes (say|list|state|call|attribute|give|describe))\b/i);
  if (meta) err(t.slug, `refers to its source material ("${meta[0]}"): state the fact directly`);
  for (const b of banned) if (src.toLowerCase().includes(b.toLowerCase())) err(t.slug, `banned term "${b}"`);
}

if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problem(s)`); process.exit(1); }
console.log(`OK: ${topics.length} topics validated`);
