// Coronal section through the rectum and anal canal, textbook style. Patient's right is the viewer's left.
// Authored in a 680-wide local frame, then enlarged by K about (340,60) so the anal canal reads clearly.
const K = 1.45;
const X = (x) => +(340 + (x - 340) * K).toFixed(1);
const Y = (y) => +(40 + (y - 60) * K).toFixed(1);
const T = (d) => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) => `${X(+x)},${Y(+y)}`);
const R = (s) => s
  .replace(/ d="([^"]*)"/g, (_, d) => ` d="${T(d)}"`)
  .replace(/ cx="([^"]*)"/g, (_, v) => ` cx="${X(+v)}"`)
  .replace(/ cy="([^"]*)"/g, (_, v) => ` cy="${Y(+v)}"`)
  .replace(/ r="([^"]*)"/g, (_, v) => ` r="${+(v * K).toFixed(1)}"`)
  .replace(/stroke-width="([^"]*)"/g, (_, v) => `stroke-width="${+(v * K).toFixed(1)}"`);
// keep leader labels at least 20px apart on each side, in dot order
const spread = (labels) => {
  for (const side of ['L', 'R']) {
    const ls = labels.filter((l) => (side === 'L') === (l.text_at[0] < 300)).sort((a, b) => a.dot[1] - b.dot[1]);
    let last = -1e9;
    for (const l of ls) { l.text_at[1] = Math.max(l.dot[1] + 4, last + 20); last = l.text_at[1]; }
  }
  return labels;
};
const raw = {
  title: 'Coronal section of the rectum and anal canal',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M190,60 L490,60 L490,492 L190,492 Z" fill="#f7eadf" stroke="#dcc3ae" stroke-width="1.6"/>
    <path d="M190,110 L212,110 L214,492 L190,492 Z M490,110 L468,110 L466,492 L490,492 Z" fill="#dc9a8e" stroke="#b9675b" stroke-width="1.4"/>
    <path d="M214,160 L250,262" fill="none" stroke="#d07469" stroke-width="20" stroke-linecap="round"/>
    <path d="M466,160 L430,262" fill="none" stroke="#d07469" stroke-width="20" stroke-linecap="round"/>`,
  parts: [
    { id: 'ischiorectal-fossa', name: 'Ischiorectal fossa (fat)', fill: '#f6e3a3', stroke: '#c9ad5a',
      d: 'M216,262 C230,290 250,324 282,356 L282,486 L216,486 Z M464,262 C450,290 430,324 398,356 L398,486 L464,486 Z' },
    { id: 'intersphincteric-space', name: 'Intersphincteric space', fill: '#f6e7b8', stroke: '#c9ad5a', d: 'M299,340 L303,340 L303,440 L299,440 Z M377,340 L381,340 L381,440 L377,440 Z' },
    { id: 'external-sphincter', name: 'External anal sphincter (deep, superficial, subcutaneous)', fill: '#b24a40', stroke: '#6e241e',
      d: 'M283,336 L299,336 L299,432 L283,432 Z M381,336 L397,336 L397,432 L381,432 Z M287,436 L321,440 C326,456 318,472 306,472 C292,472 286,456 287,436 Z M393,436 L359,440 C354,456 362,472 374,472 C388,472 394,456 393,436 Z' },
    { id: 'rectum', name: 'Rectum (ampulla)', fill: '#e59a8d', stroke: '#9b4f45',
      d: 'M290,80 C254,150 240,235 270,292 C282,314 296,328 302,344 L378,344 C384,328 398,314 410,292 C440,235 426,150 390,80 Z' },
    { id: 'puborectalis', name: 'Puborectalis sling', d: 'M228,266 L297,338 M452,266 L383,338', tube: 22, fill: '#a94438', stroke: '#651d17' },
    { id: 'anal-canal', name: 'Anal canal (mucosa and lumen)', fill: '#efb3a5', stroke: '#9b4f45',
      d: 'M303,340 L377,340 L377,474 L359,492 L321,492 L303,474 Z' },
    { id: 'internal-sphincter', name: 'Internal anal sphincter', fill: '#d9736a', stroke: '#8e3a32',
      d: 'M303,342 L321,342 L321,446 L303,440 Z M377,342 L359,342 L359,446 L377,440 Z' },
    { id: 'perianal-skin', name: 'Perianal skin and anal verge', fill: '#e8c3a0', stroke: '#b58b68',
      d: 'M226,474 C262,478 300,480 322,480 L322,494 L226,494 Z M454,474 C418,478 380,480 358,480 L358,494 L454,494 Z' },
    { id: 'haemorrhoid-internal', name: 'Internal haemorrhoid (vascular cushions above the dentate line)', fill: '#8e2f5c', stroke: '#531438',
      d: 'M321,368 C332,366 339,380 335,396 C331,407 323,405 321,403 Z M359,374 C348,372 341,386 345,400 C349,409 357,407 359,405 Z' },
    { id: 'haemorrhoid-external', name: 'External haemorrhoid (below the dentate line)', fill: '#6f5aa8', stroke: '#3e2e74',
      d: 'M372,450 C394,438 414,452 410,472 C406,488 382,488 372,478 Z' },
    { id: 'dentate-line', name: 'Dentate (pectinate) line', d: 'M321,411 C327,406 331,415 337,409 C343,404 346,414 352,409 C356,406 358,410 359,411', tube: 3, fill: '#fff6dc', stroke: '#5a3a2c' },
    { id: 'fissure', name: 'Anal fissure (posterior midline; schematic)', fill: '#b3171a', stroke: '#6b0b0d', d: 'M359,418 L351,438 L359,466 Z' },
    { id: 'fistula-tract', name: 'Transsphincteric fistula tract', d: 'M322,409 C306,414 294,430 282,448 C272,462 264,474 258,482', tube: 4.5, fill: '#2e9e5b', stroke: '#15502e' }
  ],
  over: `
    <path d="M300,80 C270,150 256,232 282,284 C294,304 308,322 314,344 L366,344 C372,322 386,304 398,284 C424,232 410,150 380,80 Z" fill="#fbe0d6" stroke="#b56d60" stroke-width="1"/>
    <path d="M396,146 C378,146 356,152 346,164 C364,166 384,164 404,160 Z" fill="#e59a8d" stroke="#9b4f45" stroke-width="1.4"/>
    <path d="M284,212 C300,212 322,218 332,230 C314,232 294,230 272,226 Z" fill="#e59a8d" stroke="#9b4f45" stroke-width="1.4"/>
    <path d="M384,266 C366,266 348,272 340,284 C358,286 376,284 398,280 Z" fill="#e59a8d" stroke="#9b4f45" stroke-width="1.4"/>
    <path d="M328,346 L328,408 M336,346 L336,408 M344,346 L344,408 M352,346 L352,408" stroke="#c9736a" stroke-width="2" fill="none"/>
    <path d="M328,408 Q332,402 336,408 M336,408 Q340,402 344,408 M344,408 Q348,402 352,408" stroke="#7a2d26" stroke-width="1.4" fill="none"/>
    <path d="M321,413 L359,413 L359,476 L321,476 Z" fill="#efcfb0" fill-opacity=".85"/>
    <path d="M321,411 C327,406 331,415 337,409 C343,404 346,414 352,409 C356,406 358,410 359,411" fill="none" stroke="#5a3a2c" stroke-width="1.6"/>
    <path d="M283,388 L299,388 M381,388 L397,388 M283,432 L299,432 M381,432 L397,432" stroke="#6e241e" stroke-width="1.2"/>
    <path d="M299.5,340 L299.5,432 M380.5,340 L380.5,432" stroke="#fff" stroke-width="1" stroke-dasharray="2 2"/>
    <circle cx="258" cy="484" r="4.5" fill="#2e9e5b" stroke="#15502e"/>
    <circle cx="322" cy="409" r="3" fill="#15502e"/>`,
  labels: [
    { part: 'rectum', text: 'Rectal valves', dot: [346, 158], text_at: [95, 150] },
    { part: 'rectum', text: 'Rectal ampulla', dot: [262, 215], text_at: [95, 200] },
    { part: 'puborectalis', text: 'Puborectalis sling', dot: [255, 292], text_at: [95, 275] },
    { part: 'puborectalis', text: 'Anorectal junction', dot: [296, 337], text_at: [95, 320] },
    { part: 'internal-sphincter', text: 'Internal anal sphincter', dot: [312, 370], text_at: [95, 360] },
    { part: 'intersphincteric-space', text: 'Intersphincteric space', dot: [301, 396], text_at: [95, 385] },
    { part: 'ischiorectal-fossa', text: 'Ischiorectal fossa', dot: [225, 410], text_at: [95, 410] },
    { part: 'fistula-tract', text: 'Fistula tract', dot: [288, 440], text_at: [95, 445] },
    { part: 'perianal-skin', text: 'Anal verge / perianal skin', dot: [300, 478], text_at: [95, 490] },
    { part: 'anal-canal', text: 'Anal columns', dot: [336, 370], text_at: [575, 330] },
    { part: 'external-sphincter', text: 'Ext. sphincter, deep', dot: [389, 356], text_at: [575, 352] },
    { part: 'haemorrhoid-internal', text: 'Internal haemorrhoid', dot: [352, 390], text_at: [575, 374] },
    { part: 'external-sphincter', text: 'Ext. sphincter, superficial', dot: [389, 412], text_at: [575, 396] },
    { part: 'anal-canal', text: 'Anal valves', dot: [340, 407], text_at: [575, 418] },
    { part: 'dentate-line', text: 'Dentate (pectinate) line', dot: [350, 410], text_at: [575, 440] },
    { part: 'fissure', text: 'Anal fissure', dot: [357, 440], text_at: [575, 462] },
    { part: 'external-sphincter', text: 'Ext. sphincter, subcutaneous', dot: [372, 458], text_at: [575, 484] },
    { part: 'haemorrhoid-external', text: 'External haemorrhoid', dot: [398, 468], text_at: [575, 506] }
  ]
};
export default {
  title: raw.title,
  viewBox: raw.viewBox,
  under: R(raw.under),
  over: R(raw.over),
  parts: raw.parts.map((p) => ({ ...p, d: T(p.d), ...(p.tube ? { tube: +(p.tube * K).toFixed(1) } : {}) })),
  labels: spread(raw.labels.map((l) => ({ ...l, dot: [X(l.dot[0]), Y(l.dot[1])], text_at: [...l.text_at] })))
};
