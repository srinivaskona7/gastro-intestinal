// Portal venous system and the four portosystemic anastomoses, anterior view.
// Patient's right is the viewer's left. Arrows show direction of blood flow.
const arrow = (x, y, a, c) =>
  `<polygon points="-7,-5 7,0 -7,5" transform="translate(${x} ${y}) rotate(${a})" fill="${c}" stroke="#fff" stroke-width="1"/>`;
const PV = '#5b4fa0', CO = '#d2691e';
export default {
  title: 'Portal venous system and portosystemic anastomoses, front view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M310,122 C310,150 305,160 270,172 C210,186 170,200 160,240 L168,330 C175,420 205,500 215,560 C222,610 205,650 200,722 L480,722 C475,650 458,610 465,560 C475,500 505,420 512,330 L520,240 C510,200 470,186 410,172 C375,160 370,150 370,122 Z" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>
    <ellipse cx="340" cy="68" rx="50" ry="60" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>
    <ellipse cx="288" cy="245" rx="52" ry="72" fill="#dde9ef" stroke="#b7c9d3" stroke-width="1.4"/>
    <ellipse cx="392" cy="245" rx="52" ry="72" fill="#dde9ef" stroke="#b7c9d3" stroke-width="1.4"/>
    <path d="M214,335 C260,292 420,292 466,335" fill="none" stroke="#8aa0ad" stroke-width="2.4" stroke-dasharray="7 5"/>
    <path d="M298,470 C330,452 372,462 424,436 C438,432 444,446 430,458 C392,484 340,490 302,488 C290,484 290,474 298,470 Z" fill="#f3e6b4" stroke="#d6c06f" stroke-width="1" stroke-dasharray="4 3"/>`,
  parts: [
    { id: 'bowel', name: 'Small and large intestine', d: 'M264,648 L264,500 C264,480 272,484 290,500 C330,528 380,532 410,512 C424,502 430,488 428,478 L428,590 C428,620 410,640 390,642 C366,642 364,616 346,620 C330,626 334,650 340,662', tube: 19, fill: '#eac3b1', stroke: '#b98a76' },
    { id: 'rectum', name: 'Rectum and anal canal', d: 'M340,662 L340,712', tube: 17, fill: '#d99a85', stroke: '#a3614d' },
    { id: 'liver', name: 'Liver', fill: '#a85d49', stroke: '#6b3528', d: 'M232,345 C250,322 330,318 382,336 C402,346 398,366 384,378 C352,394 306,428 272,442 C246,444 230,402 232,345 Z' },
    { id: 'spleen', name: 'Spleen', fill: '#8e5f8a', stroke: '#5c3a59', d: 'M444,338 C458,336 466,352 462,374 C458,390 446,388 442,372 C438,358 438,342 444,338 Z' },
    { id: 'stomach', name: 'Stomach', fill: '#e2958a', stroke: '#9b4f45', d: 'M352,334 C386,318 438,330 442,366 C446,404 426,442 396,454 C372,464 352,450 358,430 C372,420 386,402 382,384 C374,372 352,362 352,334 Z' },
    { id: 'oesophagus', name: 'Oesophagus', d: 'M340,152 L339,250 C339,300 346,320 355,342', tube: 13, fill: '#e59a8d', stroke: '#9b4f45' },
    { id: 'azygos', name: 'Azygos vein (systemic, to SVC)', d: 'M368,340 L368,230 C368,196 356,180 348,172', tube: 5, fill: '#3b6ea5', stroke: '#24466b' },
    { id: 'ivc', name: 'Inferior vena cava', d: 'M304,606 L304,520 L308,330 L314,238', tube: 14, fill: '#3b6ea5', stroke: '#24466b' },
    { id: 'hepatic-veins', name: 'Hepatic veins', d: 'M262,402 C280,372 298,350 310,338 M300,378 C306,362 314,348 310,338 M350,366 C338,352 324,344 310,338', tube: 6, fill: '#3b6ea5', stroke: '#24466b' },
    { id: 'portal-vein', name: 'Portal vein', d: 'M346,478 C338,456 322,434 300,414 M300,414 C280,406 262,396 246,384 M300,414 C322,404 348,396 368,382', tube: 9, fill: PV, stroke: '#352c75' },
    { id: 'splenic-vein', name: 'Splenic vein', d: 'M346,478 C372,478 400,462 420,440 C434,426 444,404 448,384', tube: 7, fill: PV, stroke: '#352c75' },
    { id: 'smv', name: 'Superior mesenteric vein', d: 'M346,478 C350,520 366,562 374,606 M360,536 C346,534 334,538 326,548 M366,566 C384,560 396,566 402,578 M372,596 C356,596 342,604 338,614', tube: 7, fill: PV, stroke: '#352c75' },
    { id: 'imv', name: 'Inferior mesenteric vein', d: 'M408,636 C436,604 436,540 418,500 C410,484 404,474 398,466', tube: 5, fill: PV, stroke: '#352c75' },
    { id: 'oesophageal-collaterals', name: 'Oesophageal collaterals (left gastric to azygos)', d: 'M392,398 C384,380 366,372 356,352 C346,340 350,330 348,318 C342,304 352,292 346,278 C340,262 350,250 346,236 C342,222 352,210 348,194', tube: 6, fill: CO, stroke: '#8c430d' },
    { id: 'caput-medusae', name: 'Caput medusae (paraumbilical veins)', d: 'M330,566 C332,540 322,520 326,496 M330,566 C310,560 296,566 282,556 M330,566 C350,560 366,566 384,558 M330,566 C318,582 300,580 290,594 M330,566 C344,582 360,582 372,592', tube: 4, fill: CO, stroke: '#8c430d' },
    { id: 'rectal-collaterals', name: 'Rectal collaterals (superior to middle and inferior rectal)', d: 'M398,640 C392,660 376,672 350,682 M340,690 C322,690 306,676 298,660 C292,646 296,630 306,614', tube: 5, fill: CO, stroke: '#8c430d' },
    { id: 'retroperitoneal-collaterals', name: 'Retroperitoneal collaterals (colic to lumbar and renal veins)', d: 'M266,536 C280,540 296,538 308,530 M266,560 C282,566 298,562 312,556', tube: 4, fill: CO, stroke: '#8c430d' },
    { id: 'umbilicus', name: 'Umbilicus', fill: '#d9b8a4', stroke: '#8a6a58', d: 'M330,558 C336,558 340,563 338,568 C335,573 326,573 323,568 C321,563 325,558 330,558 Z' }
  ],
  over: `
    ${arrow(322, 452, 220, PV)}${arrow(360, 540, -100, PV)}${arrow(428, 548, -80, PV)}${arrow(432, 410, 250, PV)}${arrow(290, 414, 200, PV)}
    ${arrow(306, 420, 90, '#24466b')}${arrow(308, 290, -92, '#24466b')}${arrow(368, 300, -90, '#24466b')}
    ${arrow(352, 294, -95, CO)}${arrow(322, 526, -95, CO)}${arrow(296, 648, -75, CO)}${arrow(356, 682, 160, CO)}${arrow(288, 538, 0, CO)}`,
  labels: [
    { part: 'oesophageal-collaterals', text: 'Oesophageal varices', dot: [346, 236], text_at: [95, 150] },
    { part: 'hepatic-veins', text: 'Hepatic veins', dot: [286, 362], text_at: [95, 320] },
    { part: 'liver', text: 'Liver', dot: [245, 400], text_at: [95, 380] },
    { part: 'ivc', text: 'Inferior vena cava', dot: [308, 290], text_at: [95, 265] },
    { part: 'portal-vein', text: 'Portal vein', dot: [328, 446], text_at: [95, 440] },
    { part: 'retroperitoneal-collaterals', text: 'Retroperitoneal collaterals', dot: [284, 540], text_at: [95, 500] },
    { part: 'caput-medusae', text: 'Caput medusae', dot: [300, 564], text_at: [95, 560] },
    { part: 'umbilicus', text: 'Umbilicus', dot: [330, 567], text_at: [95, 600] },
    { part: 'rectal-collaterals', text: 'Rectal varices', dot: [300, 660], text_at: [95, 660] },
    { part: 'rectum', text: 'Rectum', dot: [340, 702], text_at: [95, 710] },
    { part: 'azygos', text: 'Azygos vein (to SVC)', dot: [368, 262], text_at: [585, 200] },
    { part: 'spleen', text: 'Spleen', dot: [454, 352], text_at: [585, 300] },
    { part: 'stomach', text: 'Stomach', dot: [420, 390], text_at: [585, 345] },
    { part: 'splenic-vein', text: 'Splenic vein', dot: [420, 442], text_at: [585, 410] },
    { part: 'smv', text: 'Superior mesenteric vein', dot: [370, 590], text_at: [585, 540] },
    { part: 'imv', text: 'Inferior mesenteric vein', dot: [432, 570], text_at: [585, 600] },
    { part: 'bowel', text: 'Large and small bowel', dot: [428, 610], text_at: [585, 660] }
  ]
};
