// Small-intestinal villus and crypt (left) beside the flattened villus and hyperplastic crypts of coeliac disease (right).
const f = (n) => Math.round(n * 10) / 10;
const bez = (p, t) => {
  const u = 1 - t;
  const x = u ** 3 * p[0][0] + 3 * u * u * t * p[1][0] + 3 * u * t * t * p[2][0] + t ** 3 * p[3][0];
  const y = u ** 3 * p[0][1] + 3 * u * u * t * p[1][1] + 3 * u * t * t * p[2][1] + t ** 3 * p[3][1];
  const dx = 3 * u * u * (p[1][0] - p[0][0]) + 6 * u * t * (p[2][0] - p[1][0]) + 3 * t * t * (p[3][0] - p[2][0]);
  const dy = 3 * u * u * (p[1][1] - p[0][1]) + 6 * u * t * (p[2][1] - p[1][1]) + 3 * t * t * (p[3][1] - p[2][1]);
  const n = Math.hypot(dx, dy) || 1;
  return { x, y, nx: dy / n, ny: -dx / n }; // outward normal for left-to-right travel over the top
};
const tip = [[221, 190], [221, 138], [319, 138], [319, 190]];
let mv = '';
for (let t = 0.02; t < 1; t += 0.045) { const b = bez(tip, t); mv += `M${f(b.x)},${f(b.y)} L${f(b.x + b.nx * 6)},${f(b.y + b.ny * 6)} `; }
for (let y = 196; y < 426; y += 7) mv += `M221,${y} L215,${y} M319,${y} L325,${y} `;
let cells = '';
for (let y = 198; y < 426; y += 15) cells += `M221,${y} L237,${y} M303,${y} L319,${y} `;
const pill = (x, y, w, h) => `M${x},${y + 3} C${x},${y - 1} ${x + w},${y - 1} ${x + w},${y + 3} L${x + w},${y + h} C${x + w},${y + h + 4} ${x},${y + h + 4} ${x},${y + h} Z`;
const circ = (x, y, r) => `M${x - r},${y} a${r},${r} 0 1,1 ${2 * r},0 a${r},${r} 0 1,1 ${-2 * r},0 Z`;

export default {
  title: 'Small-intestinal villus and crypt, normal and in coeliac disease',
  viewBox: '-110 0 900 760',
  under: `
    <rect x="110" y="70" width="245" height="520" rx="10" fill="#faf5ef" stroke="#e3dbd2"/>
    <rect x="365" y="70" width="205" height="520" rx="10" fill="#faf5ef" stroke="#e3dbd2"/>
    <text x="232" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">NORMAL</text>
    <text x="467" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#9b2c2c">COELIAC DISEASE</text>
    <text x="232" y="615" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">tall villi, villus : crypt about 3-5 : 1</text>
    <text x="467" y="615" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">villous atrophy, crypt hyperplasia, IELs</text>`,
  parts: [
    { id: 'villus', name: 'Villus', fill: '#f8d7d0', stroke: '#a9535e', d: 'M221,432 L221,190 C221,138 319,138 319,190 L319,432 Z' },
    { id: 'enterocytes', name: 'Enterocytes with brush border', fill: '#ec9aa4', stroke: '#a9535e',
      d: 'M221,432 L221,190 C221,138 319,138 319,190 L319,432 Z M237,432 L303,432 L303,192 C303,156 237,156 237,192 Z M120,426 L145,426 L145,434 L120,434 Z M177,426 L221,426 L221,434 L177,434 Z' },
    { id: 'lamina-propria', name: 'Lamina propria', fill: '#f8d7d0', stroke: '#c48b80',
      d: 'M237,440 L237,192 C237,156 303,156 303,192 L303,440 Z M120,434 L345,434 L345,566 L120,566 Z M372,434 L560,434 L560,566 L372,566 Z' },
    { id: 'muscularis-mucosae', name: 'Muscularis mucosae', fill: '#c0504d', stroke: '#7d2a28', d: 'M120,566 L345,566 L345,578 L120,578 Z M372,566 L560,566 L560,578 L372,578 Z' },
    { id: 'crypt', name: 'Crypt of Lieberkuhn', fill: '#ec9aa4', stroke: '#a9535e',
      d: 'M145,432 L145,500 C145,538 177,538 177,500 L177,432 Z M392,434 L392,536 C392,564 416,564 416,536 L416,434 Z M522,434 L522,536 C522,564 546,564 546,536 L546,434 Z' },
    { id: 'paneth-cells', name: 'Paneth cells', fill: '#d95f72', stroke: '#8c2f3f', d: `M147,505 a7,10 0 1,1 14,0 a7,10 0 1,1 -14,0 Z M161,505 a7,10 0 1,1 14,0 a7,10 0 1,1 -14,0 Z` },
    { id: 'stem-cells', name: 'Crypt stem cells', fill: '#5a8fd0', stroke: '#2d4f80', d: circ(161, 527, 6) },
    { id: 'goblet-cell', name: 'Goblet cells', fill: '#8db8d9', stroke: '#416e8f', d: pill(223, 244, 12, 28) + ' ' + pill(305, 282, 12, 28) + ' ' + pill(223, 350, 12, 28) },
    { id: 'lacteal', name: 'Central lacteal', fill: '#f6efb0', stroke: '#a39a3e', tube: 14, d: 'M270,440 L270,180' },
    { id: 'capillaries', name: 'Capillary network', fill: '#c0392b', stroke: '#7d2219', tube: 5, d: 'M255,440 L255,192 C255,170 285,170 285,192 L285,440' },
    { id: 'atrophic-villus', name: 'Atrophic (flattened) villus', fill: '#ec9aa4', stroke: '#a9535e', d: 'M416,434 C430,382 506,382 522,434 Z' },
    { id: 'iel', name: 'Intraepithelial lymphocytes', fill: '#4b2e83', stroke: '#2a1850',
      d: [[436, 405], [452, 398], [468, 396], [484, 398], [500, 405]].map(([x, y]) => circ(x, y, 3.6)).join(' ') }
  ],
  over: `
    <path d="M237,440 L237,192 C237,156 303,156 303,192 L303,440" fill="none" stroke="#c48b80" stroke-width="1"/>
    <path d="M285,440 L285,192" stroke="#3b6ea5" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M255,230 C246,236 246,246 255,252 M255,300 C246,306 246,316 255,322 M255,380 C246,386 246,396 255,402 M285,250 C294,256 294,266 285,272 M285,330 C294,336 294,346 285,352" stroke="#b5485c" stroke-width="2" fill="none"/>
    <path d="${cells}" stroke="#a9535e" stroke-width="1" fill="none"/>
    <path d="${mv}" stroke="#a9535e" stroke-width="1.3" fill="none"/>
    <path d="M120,430 L145,430 M177,430 L221,430" stroke="#a9535e" stroke-width="2" fill="none"/>
    <path d="M155,432 L155,490 C155,504 167,504 167,490 L167,432 Z" fill="#fdf6ee"/>
    <path d="M402,434 L402,528 C402,540 406,540 406,528 L406,434 Z M532,434 L532,528 C532,540 536,540 536,528 L536,434 Z" fill="#fdf6ee"/>
    <path d="M426,434 C440,400 498,400 512,434 Z" fill="#f8d7d0" stroke="#c48b80" stroke-width="1"/>
    <g fill="#d95f72" opacity=".85"><circle cx="151" cy="500" r="1.5"/><circle cx="157" cy="508" r="1.5"/><circle cx="165" cy="500" r="1.5"/><circle cx="171" cy="508" r="1.5"/></g>
    <g fill="#6a4a9a" opacity=".8"><circle cx="440" cy="452" r="2.4"/><circle cx="462" cy="470" r="2.4"/><circle cx="484" cy="450" r="2.4"/><circle cx="500" cy="480" r="2.4"/><circle cx="430" cy="490" r="2.4"/><circle cx="470" cy="510" r="2.4"/><circle cx="505" cy="520" r="2.4"/><circle cx="452" cy="535" r="2.4"/><circle cx="366" cy="0" r="0"/><circle cx="140" cy="470" r="0"/></g>
    <path d="M372,430 L392,430 M546,430 L560,430" stroke="#a9535e" stroke-width="2" fill="none"/>`,
  labels: [
    { part: 'villus', text: 'Villus', dot: [270, 152], text_at: [95, 150] },
    { part: 'enterocytes', text: 'Enterocytes (brush border)', dot: [229, 212], text_at: [95, 190] },
    { part: 'goblet-cell', text: 'Goblet cell', dot: [229, 262], text_at: [95, 230] },
    { part: 'lacteal', text: 'Central lacteal', dot: [270, 300], text_at: [95, 270] },
    { part: 'capillaries', text: 'Capillary network', dot: [255, 340], text_at: [95, 310] },
    { part: 'lamina-propria', text: 'Lamina propria', dot: [125, 455], text_at: [95, 395] },
    { part: 'crypt', text: 'Crypt of Lieberkuhn', dot: [147, 470], text_at: [95, 435] },
    { part: 'paneth-cells', text: 'Paneth cells', dot: [154, 508], text_at: [95, 475] },
    { part: 'stem-cells', text: 'Crypt stem cells', dot: [161, 527], text_at: [95, 515] },
    { part: 'muscularis-mucosae', text: 'Muscularis mucosae', dot: [130, 572], text_at: [95, 555] },
    { part: 'iel', text: 'Intraepithelial lymphocytes', dot: [468, 396], text_at: [585, 355] },
    { part: 'atrophic-villus', text: 'Atrophic villus (flattened)', dot: [509, 418], text_at: [585, 400] },
    { part: 'crypt', text: 'Crypt hyperplasia', dot: [534, 500], text_at: [585, 450] },
    { part: 'lamina-propria', text: 'Inflamed lamina propria', dot: [480, 480], text_at: [585, 495] }
  ]
};
