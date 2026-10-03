// Small and large bowel segments, anterior view. Patient's right is the viewer's left.
const ASC = 'M254,600 L254,425';
const HEP = 'M254,432 C254,396 272,392 292,400';
const TRA = 'M288,400 C312,428 384,436 420,394';
const SPL = 'M416,398 C432,370 454,384 448,420';
const DES = 'M448,408 L448,590';
const SIG = 'M448,580 C446,650 410,666 392,642 C378,620 345,634 352,664';
const haustra = (d, w) => `<path d="${d}" fill="none" stroke="#9c5540" stroke-opacity=".55" stroke-width="${w}" stroke-dasharray="1.6 9"/>`;
const tenia = (d) => `<path d="${d}" fill="none" stroke="#b9674f" stroke-opacity=".7" stroke-width="1.4" transform="translate(-3,0)"/>`;
export default {
  title: 'Small and large bowel, front view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M310,122 C310,150 305,160 270,172 C210,186 170,200 160,240 L168,330 C175,420 205,500 215,560 C222,610 205,650 200,722 L480,722 C475,650 458,610 465,560 C475,500 505,420 512,330 L520,240 C510,200 470,186 410,172 C375,160 370,150 370,122 Z" fill="#f6f1ec" stroke="#d6cabe" stroke-width="1.6"/>
    <path d="M214,335 C260,300 420,300 466,335" fill="none" stroke="#d3dde3" stroke-width="2" stroke-dasharray="7 5"/>
    <circle cx="340" cy="520" r="4" fill="none" stroke="#b9a99a" stroke-width="1.4"/>
    <circle cx="206" cy="596" r="3" fill="#b9a99a"/>
    <path d="M206,596 L340,520" stroke="#b9a99a" stroke-width="1.2" stroke-dasharray="4 4"/>`,
  parts: [
    { id: 'duodenojejunal-flexure', name: 'Duodenojejunal flexure', d: 'M300,430 C320,414 352,420 370,438', tube: 14, fill: '#e9a56f' },
    { id: 'jejunum', name: 'Jejunum', d: 'M370,438 C388,430 410,438 408,462 C406,482 350,476 328,492 C308,508 350,520 396,510', tube: 15, fill: '#f0a58e' },
    { id: 'ileum', name: 'Ileum', d: 'M396,510 C420,528 392,544 340,544 C296,552 300,578 342,580 C392,582 416,596 394,612 C366,628 326,608 296,618 L276,622', tube: 13, fill: '#f4c0a8' },
    { id: 'meckels-site', name: "Meckel's diverticulum (about 60 cm from the ileocaecal valve)", d: 'M338,584 C330,596 334,606 344,604 C354,602 352,590 348,582 Z', fill: '#d9603f', stroke: '#8c3a24' },
    { id: 'caecum', name: 'Caecum', d: 'M232,598 C226,628 230,654 252,658 C274,660 282,634 276,598 Z', fill: '#d4876f' },
    { id: 'appendix', name: 'Appendix', d: 'M258,656 C256,680 274,694 290,684 C300,676 294,668 290,672', tube: 7, fill: '#c9735b' },
    { id: 'ascending-colon', name: 'Ascending colon', d: ASC, tube: 25, fill: '#d4876f' },
    { id: 'hepatic-flexure', name: 'Hepatic flexure', d: HEP, tube: 25, fill: '#d4876f' },
    { id: 'transverse-colon', name: 'Transverse colon', d: TRA, tube: 25, fill: '#d4876f' },
    { id: 'splenic-flexure', name: 'Splenic flexure', d: SPL, tube: 25, fill: '#d4876f' },
    { id: 'descending-colon', name: 'Descending colon', d: DES, tube: 25, fill: '#d4876f' },
    { id: 'sigmoid-colon', name: 'Sigmoid colon', d: SIG, tube: 23, fill: '#d4876f' },
    { id: 'rectum', name: 'Rectum', d: 'M352,660 C356,690 346,702 346,724', tube: 21, fill: '#c97a62' },
    { id: 'ileocaecal-valve', name: 'Ileocaecal valve', d: 'M270,610 C276,606 284,610 284,618 C284,626 276,630 270,626 Z', fill: '#8c3a24', stroke: '#5a2114' },
    { id: 'mcburneys-point', name: "McBurney's point", d: 'M242,566 L258,582 M258,566 L242,582', tube: 3, fill: '#1d4f91', stroke: '#ffffff' }
  ],
  over: `
    ${haustra(ASC, 21)}${haustra(HEP, 21)}${haustra(TRA, 21)}${haustra(SPL, 21)}${haustra(DES, 21)}${haustra(SIG, 19)}
    ${tenia(ASC)}${tenia(DES)}
    <path d="M396,510 C420,528 392,544 340,544 C296,552 300,578 342,580 C392,582 416,596 394,612 C366,628 326,608 296,618" fill="none" stroke="#c98a72" stroke-opacity=".5" stroke-width="10" stroke-dasharray="1 7"/>
    <path d="M370,438 C388,430 410,438 408,462 C406,482 350,476 328,492 C308,508 350,520 396,510" fill="none" stroke="#c0735c" stroke-opacity=".55" stroke-width="12" stroke-dasharray="1 5"/>
    <path d="M248,604 C248,616 252,628 262,636" fill="none" stroke="#9c5540" stroke-opacity=".5" stroke-width="1.4"/>`,
  labels: [
    { part: 'hepatic-flexure', text: 'Hepatic flexure', dot: [262, 398], text_at: [95, 385] },
    { part: 'ascending-colon', text: 'Ascending colon', dot: [254, 470], text_at: [95, 450] },
    { part: 'mcburneys-point', text: "McBurney's point", dot: [250, 574], text_at: [95, 560] },
    { part: 'ileocaecal-valve', text: 'Ileocaecal valve', dot: [271, 618], text_at: [95, 600] },
    { part: 'caecum', text: 'Caecum', dot: [242, 636], text_at: [95, 640] },
    { part: 'appendix', text: 'Appendix', dot: [262, 678], text_at: [95, 690] },
    { part: 'splenic-flexure', text: 'Splenic flexure', dot: [448, 388], text_at: [585, 365] },
    { part: 'transverse-colon', text: 'Transverse colon', dot: [352, 428], text_at: [585, 400] },
    { part: 'duodenojejunal-flexure', text: 'Duodenojejunal flexure', dot: [336, 424], text_at: [585, 430] },
    { part: 'jejunum', text: 'Jejunum', dot: [400, 448], text_at: [585, 460] },
    { part: 'descending-colon', text: 'Descending colon', dot: [448, 500], text_at: [585, 520] },
    { part: 'ileum', text: 'Ileum', dot: [410, 596], text_at: [585, 580] },
    { part: 'meckels-site', text: "Meckel's diverticulum", dot: [342, 596], text_at: [585, 620] },
    { part: 'sigmoid-colon', text: 'Sigmoid colon', dot: [426, 652], text_at: [585, 660] },
    { part: 'rectum', text: 'Rectum', dot: [350, 700], text_at: [585, 705] }
  ]
};
