// Structural gate for anatomy figures (src/components/anatomy/figures/*.js):
// unique part ids, every label points at a real part, labels stay inside the
// viewBox and never stack on top of each other. Looks are checked by eye via
// `node scripts/render-figure.mjs <name> [highlight ids]`.
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const dir = `${process.cwd()}/src/components/anatomy/figures`;
let bad = 0, n = 0;
const err = (f, m) => { bad++; console.error(`${f}: ${m}`); };
for (const file of readdirSync(dir).filter((f) => f.endsWith('.js'))) {
  n++;
  const def = (await import(pathToFileURL(`${dir}/${file}`).href)).default;
  const [vx, vy, vw, vh] = def.viewBox.split(/\s+/).map(Number);
  const ids = new Set();
  for (const p of def.parts) { if (ids.has(p.id)) err(file, `duplicate part id ${p.id}`); ids.add(p.id); if (!p.d || !p.fill || !p.name) err(file, `part ${p.id} needs d, fill, name`); }
  if (def.parts.length < 4) err(file, 'suspiciously few parts');
  if ((def.labels ?? []).length < 5) err(file, 'needs at least 5 labels');
  for (const l of def.labels ?? []) {
    if (!ids.has(l.part)) err(file, `label "${l.text}" points at unknown part ${l.part}`);
    const [tx, ty] = l.text_at, w = l.text.length * 7.4;
    const anchor = l.anchor ?? (tx < l.dot[0] ? 'end' : 'start');
    const x0 = anchor === 'end' ? tx - w : tx, x1 = anchor === 'end' ? tx : tx + w;
    if (x0 < vx || x1 > vx + vw || ty < vy + 10 || ty > vy + vh) err(file, `label "${l.text}" outside viewBox (${Math.round(x0)}..${Math.round(x1)}, y ${ty})`);
  }
  const ls = (def.labels ?? []).map((l) => ({ ...l, side: l.text_at[0] < l.dot[0] ? 'L' : 'R' }));
  for (let i = 0; i < ls.length; i++) for (let j = i + 1; j < ls.length; j++)
    if (ls[i].side === ls[j].side && Math.abs(ls[i].text_at[1] - ls[j].text_at[1]) < 16 && Math.abs(ls[i].text_at[0] - ls[j].text_at[0]) < 160)
      err(file, `labels "${ls[i].text}" and "${ls[j].text}" overlap`);
}
console.log(`${n - bad > 0 && !bad ? 'OK' : 'FAIL'}: ${n} figure(s) checked`);

// Every <Anatomy> in the topic pages must name a real figure and real part ids.
{
  const { readFileSync } = await import('node:fs');
  const defs = {};
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.js')))
    defs[file.replace('.js', '')] = (await import(pathToFileURL(`${dir}/${file}`).href)).default;
  let uses = 0, badUse = 0;
  for (const f of readdirSync('src/content/topics').filter((f) => f.endsWith('.mdx'))) {
    const src = readFileSync(`src/content/topics/${f}`, 'utf8');
    for (const m of src.matchAll(/<Anatomy\s+figure="([^"]+)"(?:\s+highlight=\{\[([^\]]*)\]\})?/g)) {
      uses++;
      const def = defs[m[1]];
      if (!def) { console.error(`${f}: unknown anatomy figure ${m[1]}`); badUse++; continue; }
      const ids = new Set(def.parts.map((p) => p.id));
      for (const h of (m[2] ?? '').match(/'([^']+)'/g) ?? []) if (!ids.has(h.slice(1, -1))) { console.error(`${f}: figure ${m[1]} has no part ${h}`); badUse++; }
    }
  }
  console.log(`${badUse ? 'FAIL' : 'OK'}: ${uses} <Anatomy> use(s) checked`);
  if (badUse) process.exit(1);
}

// Real-plate gate: every plate in plates.json has a file, a public-domain page URL and a caption; every mapped figure exists.
{
  const fs = await import('node:fs');
  const d = JSON.parse(fs.readFileSync('src/data/plates.json', 'utf8'));
  const bad = [];
  for (const [id, p] of Object.entries(d.plates)) {
    if (!fs.existsSync(`public/plates/${p.file}`)) bad.push(`${id}: missing public/plates/${p.file}`);
    if (!/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.page)) bad.push(`${id}: page is not a Commons file URL`);
    if (!p.caption) bad.push(`${id}: no caption`);
  }
  for (const [f, ids] of Object.entries(d.figures)) {
    if (!fs.existsSync(`src/components/anatomy/figures/${f}.js`)) bad.push(`figure ${f} unknown`);
    for (const i of ids) if (!d.plates[i]) bad.push(`figure ${f}: unknown plate ${i}`);
  }
  if (bad.length) { console.error('FAIL plates:\n' + bad.join('\n')); process.exit(1); }
  console.log(`OK: ${Object.keys(d.plates).length} plate(s) checked`);
}
if (bad) process.exit(1);
