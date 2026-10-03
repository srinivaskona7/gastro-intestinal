// Cut-away segment of the GI tube wall: end-on section with the tube running back to the right.
const cx = 310, cy = 330;
const f = (n) => Math.round(n * 10) / 10;
const pt = (deg, r) => [f(cx + r * Math.cos((deg * Math.PI) / 180)), f(cy - r * Math.sin((deg * Math.PI) / 180))];
const disc = (r) => `M${cx - r},${cy} a${r},${r} 0 1,1 ${2 * r},0 a${r},${r} 0 1,1 ${-2 * r},0 Z`;
const back = (r) => `M${cx - r},${cy} a${r},${r} 0 1,0 ${2 * r},0 a${r},${r} 0 1,0 ${-2 * r},0 Z`;
const ring = (r1, r2) => disc(r2) + back(r1);
const blob = (deg, r, rx, ry) => { const [x, y] = pt(deg, r); return `M${f(x - rx)},${y} a${rx},${ry} 0 1,1 ${2 * rx},0 a${rx},${ry} 0 1,1 ${-2 * rx},0 Z`; };
const blobs = (degs, r, rx, ry) => degs.map((d) => blob(d, r, rx, ry)).join(' ');
const dots = (r, n, off = 0) => Array.from({ length: n }, (_, i) => { const [x, y] = pt(off + (360 / n) * i, r); return `<circle cx="${x}" cy="${y}" r="1.6"/>`; }).join('');
const ticks = Array.from({ length: 48 }, (_, i) => { const a = pt(i * 7.5, 48), b = pt(i * 7.5, 43); return `M${a[0]},${a[1]} L${b[0]},${b[1]}`; }).join(' ');
const arcs = Array.from({ length: 30 }, (_, i) => { const a = pt(i * 12 + 3, 129), b = pt(i * 12 + 9, 129); return `M${a[0]},${a[1]} L${b[0]},${b[1]}`; }).join(' ');

export default {
  title: 'Layers of the gastrointestinal wall with the mesentery, cut-away view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M310,153 L530,196 C560,250 560,410 530,464 L310,507 Z" fill="#e8d2c4" stroke="#b9a99a" stroke-width="2"/>
    <path d="M310,153 L530,196 M310,507 L530,464" stroke="#c8a996" stroke-width="1.4" fill="none"/>
    <ellipse cx="530" cy="330" rx="22" ry="134" fill="#dcc2b2" stroke="#b9a99a" stroke-width="2"/>
    <path d="M330,190 L520,214 M345,210 L525,236 M350,330 L548,330 M345,450 L525,424 M330,470 L520,446" stroke="#c9a994" stroke-width="1.2" fill="none"/>`,
  parts: [
    { id: 'mesentery', name: 'Mesentery', fill: '#f1dfa8', stroke: '#b59a4f', d: 'M276,500 L344,500 C372,560 410,600 420,648 C380,660 350,644 316,656 C280,664 250,650 204,648 C216,600 254,560 276,500 Z' },
    { id: 'serosa', name: 'Serosa / adventitia', fill: '#f3d9c4', stroke: '#a9846c', d: ring(172, 177) },
    { id: 'longitudinal-muscle', name: 'Outer longitudinal muscle', fill: '#c96a5f', stroke: '#8b3a32', d: ring(149, 172) },
    { id: 'myenteric-plexus', name: 'Myenteric (Auerbach) plexus', fill: '#f2cf3a', stroke: '#9c7f12', d: ring(143, 149) },
    { id: 'circular-muscle', name: 'Inner circular muscle', fill: '#dc8a7a', stroke: '#8b3a32', d: ring(115, 143) },
    { id: 'submucosa', name: 'Submucosa', fill: '#f4e4cf', stroke: '#b59a7a', d: ring(85, 115) },
    { id: 'muscularis-mucosae', name: 'Muscularis mucosae', fill: '#c0504d', stroke: '#7d2a28', d: ring(80, 85) },
    { id: 'lamina-propria', name: 'Lamina propria', fill: '#f8d7d0', stroke: '#c48b80', d: ring(55, 80) },
    { id: 'epithelium', name: 'Epithelium', fill: '#ec9aa4', stroke: '#a9535e', d: ring(48, 55) },
    { id: 'lumen', name: 'Lumen', fill: '#fdf6ee', stroke: '#c9b8a8', d: disc(48) },
    { id: 'meissner-plexus', name: 'Meissner (submucosal) plexus', fill: '#f2cf3a', stroke: '#9c7f12', d: blobs([20, 75, 140, 225, 300, 350], 92, 5, 4) },
    { id: 'ganglia-myenteric', name: 'Myenteric ganglia', fill: '#f2cf3a', stroke: '#9c7f12', d: blobs([10, 20, 55, 95, 135, 175, 215, 255, 295, 330], 146, 6, 5) },
    { id: 'vessels', name: 'Arteries and arterioles', fill: '#c0392b', stroke: '#7d2219', d: blobs([240, 110, 330], 102, 4.5, 4.5) + ' M317,541 a10,10 0 1,1 0.1,0 Z' },
    { id: 'veins', name: 'Veins and venules', fill: '#3b6ea5', stroke: '#1f4268', d: blobs([280, 160], 102, 5.5, 5.5) + ' M296,573 a12,12 0 1,1 0.1,0 Z' },
    { id: 'lymphatic', name: 'Lymphatic vessel', fill: '#e9f2c4', stroke: '#8a9a4a', d: ' M340,540 a7,7 0 1,1 0.1,0 Z' }
  ],
  over: `
    <path d="${ticks}" stroke="#a9535e" stroke-width="1.2" fill="none"/>
    <path d="${arcs}" stroke="#8b3a32" stroke-width="1" fill="none" opacity=".55"/>
    <g fill="#8b3a32" opacity=".6">${dots(160, 72, 2)}</g>
    <path d="M317,531 C318,505 320,490 326,468 M296,561 C300,530 304,500 304,480" stroke="#8b3a32" stroke-width="1.4" fill="none" opacity=".5" stroke-dasharray="3 3"/>
    <path d="M317,551 C312,590 300,620 290,648 M296,585 C290,610 270,630 250,648 M340,547 C352,590 372,620 390,650" stroke="#9a7c2e" stroke-width="1.2" fill="none" opacity=".7"/>`,
  labels: [
    { part: 'lumen', text: 'Lumen', dot: [292, 300], text_at: [95, 215] },
    { part: 'epithelium', text: 'Epithelium', dot: [266, 304], text_at: [95, 255] },
    { part: 'lamina-propria', text: 'Lamina propria', dot: [243, 318], text_at: [95, 295] },
    { part: 'muscularis-mucosae', text: 'Muscularis mucosae', dot: [228, 337], text_at: [95, 335] },
    { part: 'submucosa', text: 'Submucosa', dot: [206, 358], text_at: [95, 375] },
    { part: 'meissner-plexus', text: 'Meissner plexus', dot: [245, 395], text_at: [95, 415] },
    { part: 'vessels', text: 'Submucosal arteriole', dot: [259, 418], text_at: [95, 455] },
    { part: 'serosa', text: 'Serosa / adventitia', dot: [422, 196], text_at: [585, 170] },
    { part: 'longitudinal-muscle', text: 'Outer longitudinal muscle', dot: [441, 238], text_at: [585, 210] },
    { part: 'ganglia-myenteric', text: 'Myenteric (Auerbach) plexus', dot: [447, 280], text_at: [585, 250] },
    { part: 'circular-muscle', text: 'Inner circular muscle', dot: [438, 319], text_at: [585, 290] },
    { part: 'mesentery', text: 'Mesentery', dot: [378, 580], text_at: [585, 520] },
    { part: 'vessels', text: 'Mesenteric artery', dot: [317, 541], text_at: [585, 560] },
    { part: 'lymphatic', text: 'Lymphatic vessel', dot: [340, 540], text_at: [585, 600] },
    { part: 'veins', text: 'Mesenteric vein', dot: [296, 573], text_at: [585, 640] }
  ]
};
