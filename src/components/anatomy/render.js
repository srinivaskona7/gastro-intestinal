// Renders an anatomy figure definition to an SVG string (used by Anatomy.astro and
// scripts/render-figure.mjs, so figures can be previewed without the site).
//
// Figure definition (src/components/anatomy/figures/<name>.js, default export):
//   title     accessible name
//   viewBox   "0 0 W H"
//   under     raw SVG drawn first (body outline, ribs, dashed context)
//   parts     [{ id, name, d, fill, stroke?, link? }]   organs, drawn in order
//   over      raw SVG drawn after parts (folds, vessels, texture lines)
//   labels    [{ part, text, dot:[x,y], text_at:[x,y], anchor:'start'|'end' }]
//             leader line runs from the dot (on the organ) to the text.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function renderFigure(def, { highlight = [], show = null, base = '/' } = {}) {
  const hl = new Set(highlight);
  const focus = hl.size > 0;
  const shown = show ? new Set(show) : null;
  const parts = def.parts
    .map((p) => {
      const on = hl.has(p.id);
      const cls = `part${on ? ' hl' : ''}${focus && !on ? ' dim' : ''}`;
      const stroke = p.stroke ?? '#7a4a3c';
      // tube: the path is a centre-line drawn as a round-capped band of that width (bowel, ducts, vessels)
      const body = p.tube
        ? `<path d="${p.d}" fill="none" stroke="${stroke}" stroke-width="${p.tube + 3}" stroke-linecap="round" stroke-linejoin="round"/>` +
          `<path d="${p.d}" fill="none" stroke="${p.fill}" stroke-width="${p.tube}" stroke-linecap="round" stroke-linejoin="round" class="core"/>`
        : `<path d="${p.d}" fill="${p.fill}" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"/>`;
      return `<g class="${cls}" data-part="${p.id}"><title>${esc(p.name)}</title>${body}</g>`;
    })
    .join('');
  const labels = (def.labels ?? [])
    .filter((l) => !shown || shown.has(l.part))
    .map((l) => {
      const on = hl.has(l.part);
      const [dx, dy] = l.dot;
      const [tx, ty] = l.text_at;
      const anchor = l.anchor ?? (tx < dx ? 'end' : 'start');
      return `<g class="lbl${on ? ' hl' : ''}${focus && !on ? ' dim' : ''}">` +
        `<polyline points="${tx + (anchor === 'end' ? 4 : -4)},${ty - 4} ${dx},${dy}" fill="none"/>` +
        `<circle cx="${dx}" cy="${dy}" r="3.2"/>` +
        `<text x="${tx}" y="${ty}" text-anchor="${anchor}">${esc(l.text)}</text></g>`;
    })
    .join('');
  return `<svg class="anatomy-svg" viewBox="${def.viewBox}" role="img" aria-label="${esc(def.title)}" xmlns="http://www.w3.org/2000/svg">` +
    `<g class="under">${def.under ?? ''}</g>${parts}<g class="over">${def.over ?? ''}</g>${labels}</svg>`;
}
