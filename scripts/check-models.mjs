// Gate for the 3D atlas: the model file the page references exists, is a valid GLB whose
// nodes cover every organ in src/data/atlas-organs.json, every organ maps to real topics,
// and everything under public/models stays inside the size budget.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.env.MODELS_CHECK_ROOT ?? process.cwd();
const cfg = JSON.parse(readFileSync(join(root, 'src/data/atlas-organs.json'), 'utf8'));
const topics = new Set(JSON.parse(readFileSync(join(root, 'data/topics.json'), 'utf8')).map((t) => t.slug));
const dir = join(root, 'public/models');
let bad = 0;
const err = (m) => { bad++; console.error(`check-models: ${m}`); };

// Every model file the page or config references must exist.
const page = readFileSync(join(root, 'src/pages/atlas-3d.astro'), 'utf8');
const refs = new Set([cfg.model, ...[...page.matchAll(/models\/([\w.-]+\.(?:glb|gltf|bin|json))/g)].map((m) => m[1])]);
for (const f of refs) if (!existsSync(join(dir, f))) err(`referenced model public/models/${f} is missing`);

// Total size of everything shipped under public/models.
const files = existsSync(dir) ? readdirSync(dir) : [];
const total = files.reduce((n, f) => n + statSync(join(dir, f)).size, 0);
if (total > cfg.budgetBytes) err(`public/models is ${total} bytes, over the ${cfg.budgetBytes} byte budget`);

// The GLB must parse and contain a node per organ.
const glb = join(dir, cfg.model);
if (existsSync(glb)) {
  const b = readFileSync(glb);
  if (b.length < 20 || b.readUInt32LE(0) !== 0x46546c67) err(`${cfg.model} is not a GLB (bad magic)`);
  else {
    try {
      const json = JSON.parse(b.subarray(20, 20 + b.readUInt32LE(12)).toString('utf8'));
      const names = new Set(json.nodes.map((n) => n.name));
      for (const o of cfg.organs) if (!names.has(o.id)) err(`organ "${o.id}" has no node in ${cfg.model}`);
    } catch (e) { err(`${cfg.model} JSON chunk unreadable: ${e.message}`); }
  }
}

for (const o of cfg.organs) for (const s of o.topics) if (!topics.has(s)) err(`organ "${o.id}" maps to unknown topic slug "${s}"`);

if (bad) process.exit(1);
console.log(`check-models: ok (${cfg.organs.length} organs, ${files.length} file(s), ${(total / 1024).toFixed(0)} KiB of ${(cfg.budgetBytes / 1024).toFixed(0)} KiB)`);
