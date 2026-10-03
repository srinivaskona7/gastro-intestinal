// Parses every Mermaid chart in the MDX files with mermaid's own parser, so a
// syntax error is caught before it silently blanks a diagram in the browser.
import { readFileSync, readdirSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window = dom.window;
globalThis.document = dom.window.document;
const { default: mermaid } = await import('mermaid');
mermaid.initialize({ startOnLoad: false });

const dir = 'src/content/topics';
let bad = 0, total = 0;
for (const f of readdirSync(dir).filter((f) => f.endsWith('.mdx'))) {
  const src = readFileSync(`${dir}/${f}`, 'utf8');
  for (const m of src.matchAll(/chart=\{`([\s\S]*?)`\}/g)) {
    total++;
    try { await mermaid.parse(m[1].trim()); }
    catch (e) { bad++; console.error(`${f}: ${String(e.message ?? e).split('\n').slice(0, 3).join(' | ')}`); }
  }
}
console.log(`${total - bad}/${total} diagrams parse`);
process.exit(bad ? 1 : 0);
