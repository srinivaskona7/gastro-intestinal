// Preview a figure: node scripts/render-figure.mjs <name> [highlightId ...]  -> /tmp/gi-fig/<name>.png
import { mkdirSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { renderFigure } from '../src/components/anatomy/render.js';
import { spawnSync } from 'node:child_process';

const [name, ...hl] = process.argv.slice(2);
const def = (await import(pathToFileURL(`${process.cwd()}/src/components/anatomy/figures/${name}.js`).href)).default;
const css = `.part path{transition:none}.part.dim path{opacity:.38}.part.hl path{stroke:#e05a47;stroke-width:2.6}
.lbl polyline{stroke:#64748b;stroke-width:1;fill:none}.lbl circle{fill:#115e59;stroke:#fff}.lbl text{font:600 13px sans-serif;fill:#1e293b}.lbl.dim{opacity:.45}.lbl.hl text{fill:#b4321f}`;
const html = `<body style="margin:0;background:#fbfaf7"><style>${css}svg{width:760px;display:block}</style>${renderFigure(def, { highlight: hl })}</body>`;
mkdirSync('/tmp/gi-fig', { recursive: true });
const stem = `/tmp/gi-fig/${name}${hl.length ? '-' + hl.join('_') : ''}`;
writeFileSync(`${stem}.html`, html);
// python playwright is what works on this machine (see memory: playwright-python-png-export-setup)
const py = `from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':760,'height':900})
    pg.goto('file://${stem}.html'); pg.locator('svg').screenshot(path='${stem}.png'); b.close()`;
const r = spawnSync('python3', ['-c', py], { encoding: 'utf8' });
if (r.status) { console.error(r.stderr); process.exit(1); }
console.log(`${stem}.png`);
