// Surface anatomy of the abdomen: the nine regions, planes and landmarks over faint bones and organs (anterior view).
// Patient's right is the viewer's left. Planes: subcostal y=445, transtubercular y=535, midclavicular lines x=275 / x=405.
const mir = (d) => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (m, x, y) => `${680 - x},${y}`);
const circ = (x, y, r) => `M${x - r},${y} a${r},${r} 0 1,1 ${2 * r},0 a${r},${r} 0 1,1 ${-2 * r},0 Z`;
const hole = (x, y, rx, ry) => `M${x - rx},${y} a${rx},${ry} 0 1,0 ${2 * rx},0 a${rx},${ry} 0 1,0 ${-2 * rx},0 Z`;
const hip = 'M230,575 C214,560 206,534 214,514 C224,494 262,488 296,506 C290,530 272,556 272,590 C272,624 306,652 337,668 L337,684 C322,694 300,694 284,688 C264,682 252,666 250,648 C238,634 226,606 230,575 Z';
let ribs = '';
for (let i = 0; i < 10; i++) {
  const sy = 208 + i * 9, ey = 236 + i * 21, ex = 195 + i * 1.2;
  const d = `M333,${sy} C300,${sy + 2} ${ex + 8},${ey - 55} ${ex},${ey}`;
  ribs += `<path d="${d}"/><path d="${mir(d)}"/>`;
}
const zone = (id, name, d, c) => ({ id, name, d, fill: c + '55', stroke: '#5b4b43' });

export default {
  title: 'The nine regions of the abdomen with surface landmarks and planes, front view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M310,122 C310,150 305,160 270,172 C210,186 170,200 160,240 L168,330 C175,420 205,500 215,560 C222,610 205,650 200,722 L480,722 C475,650 458,610 465,560 C475,500 505,420 512,330 L520,240 C510,200 470,186 410,172 C375,160 370,150 370,122 Z" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>
    <ellipse cx="340" cy="68" rx="50" ry="60" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>`,
  parts: [
    { id: 'ribcage', name: 'Rib cage and costal margin', fill: '#e9e1d2cc', stroke: '#a39680',
      d: 'M200,200 C180,260 178,350 205,446 C225,440 245,420 262,392 C285,355 312,320 340,300 C368,320 395,355 418,392 C435,420 455,440 475,446 C502,350 500,260 480,200 C440,180 240,180 200,200 Z' },
    { id: 'pelvis', name: 'Pelvis (hip bones and sacrum)', fill: '#e9e1d2cc', stroke: '#a39680',
      d: hip + ' ' + mir(hip) + ' ' + hole(278, 662, 13, 17) + ' ' + hole(402, 662, 13, 17) + ' M300,500 L380,500 C376,540 356,590 340,628 C324,590 304,540 300,500 Z' },
    { id: 'liver', name: 'Liver', fill: '#a85d49aa', stroke: '#6b3528', d: 'M232,345 C250,322 330,318 382,336 C402,346 398,366 384,378 C352,394 306,428 272,442 C246,444 230,402 232,345 Z' },
    { id: 'gallbladder', name: 'Gallbladder', fill: '#7fae6acc', stroke: '#48703a', d: 'M256,394 C256,382 270,378 278,382 L300,368 L306,376 L288,392 C286,404 276,410 266,408 C260,406 256,400 256,394 Z' },
    { id: 'spleen', name: 'Spleen', fill: '#8e5f8aaa', stroke: '#5c3a59', d: 'M444,338 C458,336 466,352 462,374 C458,390 446,388 442,372 C438,358 438,342 444,338 Z' },
    { id: 'stomach', name: 'Stomach', fill: '#e2958aaa', stroke: '#9b4f45', d: 'M352,334 C386,318 438,330 442,366 C446,404 426,442 396,454 C372,464 352,450 358,430 C372,420 386,402 382,384 C374,372 352,362 352,334 Z' },
    { id: 'small-intestine', name: 'Small intestine', d: 'M330,520 C372,520 392,532 380,548 C366,560 318,554 310,570 C304,586 350,590 384,584 C410,580 408,604 384,612 C350,620 316,612 312,630', tube: 10, fill: '#f1b9a099' },
    { id: 'colon', name: 'Large intestine', d: 'M264,648 L264,500 C264,480 272,484 290,500 C330,528 380,532 410,512 C424,502 430,488 428,478 L428,590 C428,620 410,640 390,642', tube: 14, fill: '#d4876f99' },
    zone('r-hypochondrium', 'Right hypochondrium', 'M168,322 L275,322 L275,445 L190,445 Z', '#e57373'),
    zone('epigastrium', 'Epigastrium', 'M275,322 L405,322 L405,445 L275,445 Z', '#ffd54f'),
    zone('l-hypochondrium', 'Left hypochondrium', 'M405,322 L512,322 L490,445 L405,445 Z', '#81c784'),
    zone('r-lumbar', 'Right lumbar region', 'M190,445 L275,445 L275,535 L211,535 Z', '#64b5f6'),
    zone('umbilical-region', 'Umbilical region', 'M275,445 L405,445 L405,535 L275,535 Z', '#ba68c8'),
    zone('l-lumbar', 'Left lumbar region', 'M405,445 L490,445 L469,535 L405,535 Z', '#4db6ac'),
    zone('r-iliac-fossa', 'Right iliac fossa', 'M211,535 L275,535 L275,690 L203,690 Z', '#ff8a65'),
    zone('hypogastrium', 'Hypogastrium (suprapubic region)', 'M275,535 L405,535 L405,690 L275,690 Z', '#f06292'),
    zone('l-iliac-fossa', 'Left iliac fossa', 'M405,535 L469,535 L477,690 L405,690 Z', '#9575cd'),
    { id: 'planes', name: 'Transpyloric plane and midclavicular lines', d: 'M182,392 L498,392 M275,300 L275,690 M405,300 L405,690', tube: 1, fill: '#1d4e89', stroke: '#1d4e89' },
    { id: 'landmarks', name: 'Surface landmarks', fill: '#f59e0b', stroke: '#92400e',
      d: [[340, 301], [340, 485], [230, 575], [450, 575], [340, 678], [266, 545], [265, 392]].map(([x, y]) => circ(x, y, 5)).join(' ') }
  ],
  over: `
    <g fill="none" stroke="#a39680" stroke-width="2.2" stroke-linecap="round">${ribs}</g>
    <path d="M330,195 L350,195 L348,290 L340,302 L332,290 Z" fill="#efe8da" stroke="#a39680" stroke-width="1.6"/>
    <path d="M262,392 C285,355 312,320 340,300 C368,320 395,355 418,392 M205,446 C225,440 245,420 262,392 M475,446 C455,440 435,420 418,392" fill="none" stroke="#7a6a52" stroke-width="2.8"/>
    <ellipse cx="340" cy="485" rx="4" ry="6" fill="#d9a89a" stroke="#8c5e52" stroke-width="1"/>`,
  labels: [
    { part: 'landmarks', text: 'Xiphoid process', dot: [340, 301], text_at: [95, 290] },
    { part: 'r-hypochondrium', text: 'Right hypochondrium', dot: [222, 372], text_at: [95, 335] },
    { part: 'landmarks', text: "Murphy's point", dot: [265, 392], text_at: [95, 375] },
    { part: 'ribcage', text: 'Costal margin', dot: [235, 427], text_at: [95, 415] },
    { part: 'planes', text: 'Midclavicular line', dot: [275, 470], text_at: [95, 455] },
    { part: 'r-lumbar', text: 'Right lumbar region', dot: [232, 490], text_at: [95, 492] },
    { part: 'landmarks', text: "McBurney's point", dot: [266, 545], text_at: [95, 532] },
    { part: 'landmarks', text: 'ASIS', dot: [230, 575], text_at: [95, 570] },
    { part: 'r-iliac-fossa', text: 'Right iliac fossa', dot: [246, 610], text_at: [95, 610] },
    { part: 'landmarks', text: 'Pubic symphysis', dot: [340, 678], text_at: [95, 680] },
    { part: 'ribcage', text: 'Rib cage', dot: [470, 270], text_at: [585, 250] },
    { part: 'epigastrium', text: 'Epigastrium', dot: [340, 350], text_at: [585, 285] },
    { part: 'l-hypochondrium', text: 'Left hypochondrium', dot: [455, 365], text_at: [585, 325] },
    { part: 'planes', text: 'Transpyloric plane (L1)', dot: [490, 392], text_at: [585, 365] },
    { part: 'umbilical-region', text: 'Umbilical region', dot: [375, 470], text_at: [585, 440] },
    { part: 'l-lumbar', text: 'Left lumbar region', dot: [445, 490], text_at: [585, 482] },
    { part: 'landmarks', text: 'Umbilicus', dot: [340, 485], text_at: [585, 525] },
    { part: 'pelvis', text: 'Pelvis (hip bone)', dot: [450, 545], text_at: [585, 557] },
    { part: 'l-iliac-fossa', text: 'Left iliac fossa', dot: [430, 600], text_at: [585, 592] },
    { part: 'hypogastrium', text: 'Hypogastrium (suprapubic)', dot: [340, 625], text_at: [585, 645] }
  ]
};
