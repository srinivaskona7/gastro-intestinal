// The whole GI tract in situ, anterior view. Patient's right is the viewer's left.
export default {
  title: 'Gastrointestinal tract in the body, front view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M310,122 C310,150 305,160 270,172 C210,186 170,200 160,240 L168,330 C175,420 205,500 215,560 C222,610 205,650 200,722 L480,722 C475,650 458,610 465,560 C475,500 505,420 512,330 L520,240 C510,200 470,186 410,172 C375,160 370,150 370,122 Z" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>
    <ellipse cx="340" cy="68" rx="50" ry="60" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>
    <ellipse cx="288" cy="245" rx="52" ry="72" fill="#dde9ef" stroke="#b7c9d3" stroke-width="1.4"/>
    <ellipse cx="392" cy="245" rx="52" ry="72" fill="#dde9ef" stroke="#b7c9d3" stroke-width="1.4"/>
    <path d="M214,335 C260,292 420,292 466,335" fill="none" stroke="#8aa0ad" stroke-width="2.4" stroke-dasharray="7 5"/>
    <path d="M214,335 L228,520 M466,335 L452,520" fill="none" stroke="#e3dbd2" stroke-width="1"/>`,
  parts: [
    { id: 'mouth', name: 'Mouth and pharynx', d: 'M340,100 L340,152', tube: 16, fill: '#d8777a', stroke: '#8c3f44' },
    { id: 'oesophagus', name: 'Oesophagus', d: 'M340,152 L339,250 C339,300 346,320 355,342', tube: 13, fill: '#e59a8d' },
    { id: 'liver', name: 'Liver', fill: '#a85d49', stroke: '#6b3528', d: 'M232,345 C250,322 330,318 382,336 C402,346 398,366 384,378 C352,394 306,428 272,442 C246,444 230,402 232,345 Z' },
    { id: 'gallbladder', name: 'Gallbladder', fill: '#7fae6a', stroke: '#48703a', d: 'M314,418 C300,432 304,454 320,454 C336,454 340,430 326,418 Z' },
    { id: 'spleen', name: 'Spleen', fill: '#8e5f8a', stroke: '#5c3a59', d: 'M444,338 C458,336 466,352 462,374 C458,390 446,388 442,372 C438,358 438,342 444,338 Z' },
    { id: 'pancreas', name: 'Pancreas', fill: '#eed37f', stroke: '#a78a2e', d: 'M298,470 C330,452 372,462 424,436 C438,432 444,446 430,458 C392,484 340,490 302,488 C290,484 290,474 298,470 Z' },
    { id: 'stomach', name: 'Stomach', fill: '#e2958a', stroke: '#9b4f45', d: 'M352,334 C386,318 438,330 442,366 C446,404 426,442 396,454 C372,464 352,450 358,430 C372,420 386,402 382,384 C374,372 352,362 352,334 Z' },
    { id: 'duodenum', name: 'Duodenum', d: 'M368,448 C345,462 318,462 296,474 C280,490 282,515 304,528 C322,536 340,530 350,526', tube: 13, fill: '#e9a56f' },
    { id: 'small-intestine', name: 'Small intestine (jejunum and ileum)', d: 'M350,526 C372,520 392,532 380,548 C366,560 318,554 310,570 C304,586 350,590 384,584 C410,580 408,604 384,612 C350,620 316,612 312,630 C310,648 350,652 372,644', tube: 12, fill: '#f1b9a0' },
    { id: 'colon', name: 'Large intestine', d: 'M264,648 L264,500 C264,480 272,484 290,500 C330,528 380,532 410,512 C424,502 430,488 428,478 L428,590 C428,620 410,640 390,642 C366,642 364,616 346,620 C330,626 334,650 340,662', tube: 21, fill: '#d4876f' },
    { id: 'caecum', name: 'Caecum', d: 'M262,650 C254,662 258,678 274,678 C288,678 290,660 282,650 Z', fill: '#d4876f' },
    { id: 'appendix', name: 'Appendix', d: 'M262,676 C250,690 240,690 240,680', tube: 6, fill: '#c9735b' },
    { id: 'rectum', name: 'Rectum and anal canal', d: 'M340,662 L340,712', tube: 17, fill: '#c97a62' }
  ],
  labels: [
    { part: 'mouth', text: 'Mouth & pharynx', dot: [340, 102], text_at: [95, 100] },
    { part: 'oesophagus', text: 'Oesophagus', dot: [339, 230], text_at: [95, 215] },
    { part: 'liver', text: 'Liver', dot: [285, 385], text_at: [95, 370] },
    { part: 'gallbladder', text: 'Gallbladder', dot: [318, 440], text_at: [95, 430] },
    { part: 'duodenum', text: 'Duodenum', dot: [284, 500], text_at: [95, 490] },
    { part: 'colon', text: 'Ascending colon', dot: [264, 570], text_at: [95, 560] },
    { part: 'caecum', text: 'Caecum', dot: [272, 666], text_at: [95, 650] },
    { part: 'appendix', text: 'Appendix', dot: [245, 686], text_at: [95, 705] },
    { part: 'rectum', text: 'Rectum & anal canal', dot: [340, 695], text_at: [95, 735] },
    { part: 'spleen', text: 'Spleen', dot: [454, 356], text_at: [585, 320] },
    { part: 'stomach', text: 'Stomach', dot: [420, 385], text_at: [585, 375] },
    { part: 'pancreas', text: 'Pancreas', dot: [405, 462], text_at: [585, 440] },
    { part: 'colon', text: 'Transverse colon', dot: [395, 520], text_at: [585, 500] },
    { part: 'small-intestine', text: 'Small intestine', dot: [390, 584], text_at: [585, 565] },
    { part: 'colon', text: 'Descending colon', dot: [428, 545], text_at: [585, 625] }
  ]
};
