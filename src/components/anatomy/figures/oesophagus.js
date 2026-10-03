// Oesophagus from pharynx to stomach, anterior view, trachea displaced to show the tube behind it.
export default {
  title: 'Oesophagus in the neck, chest and upper abdomen, front view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M300,10 C300,40 300,60 290,80 C250,100 190,110 160,140 L150,240 C148,340 160,420 165,470 L160,620 C160,680 170,710 180,735 L500,735 C510,710 520,680 520,620 L515,470 C520,420 532,340 530,240 L520,140 C490,110 430,100 390,80 C380,60 380,40 380,10 Z" fill="#f1ebe4" stroke="#b9a99a" stroke-width="2"/>
    <path d="M300,140 C250,130 205,170 200,250 C196,330 230,380 290,385 C318,386 326,350 326,300 L326,170 Z" fill="#dde9ef" stroke="#b7c9d3" stroke-width="1.4"/>
    <path d="M380,140 C430,130 475,170 480,250 C484,330 450,380 390,385 C362,386 354,350 354,300 L354,170 Z" fill="#dde9ef" stroke="#b7c9d3" stroke-width="1.4"/>
    <path d="M180,575 C200,520 240,480 290,474 C320,474 334,500 338,540 C330,620 290,690 230,700 C200,700 182,660 180,575 Z" fill="#a85d49" stroke="#6b3528" stroke-width="1.6" opacity="0.45"/>`,
  parts: [
    { id: 'pharynx', name: 'Pharynx', d: 'M304,30 C304,62 308,90 322,108 L358,108 C372,90 376,62 376,30 Z', fill: '#d8777a', stroke: '#8c3f44' },
    { id: 'diaphragm', name: 'Diaphragm', fill: '#c9767a', stroke: '#8c3f44', d: 'M170,580 C176,520 230,462 290,458 C318,458 332,470 340,478 C352,468 380,452 430,456 C490,462 520,520 522,580 C470,560 410,548 340,548 C270,548 220,560 170,580 Z' },
    { id: 'oesophagus', name: 'Oesophagus', d: 'M346,108 L348,250 C350,330 352,400 352,440 C352,468 356,490 364,508 L370,526', tube: 15, fill: '#e59a8d' },
    { id: 'trachea', name: 'Trachea and main bronchi', d: 'M330,150 L330,296 M330,296 C318,310 300,322 282,338 M330,296 C346,310 368,322 386,338', tube: 24, fill: '#b9d3df', stroke: '#6b8a98' },
    { id: 'larynx', name: 'Larynx', d: 'M312,110 L348,110 L352,150 L308,150 Z', fill: '#d9e6ec', stroke: '#6b8a98' },
    { id: 'aorta', name: 'Aorta (arch and descending)', d: 'M302,340 C296,250 340,226 372,244 C396,258 398,300 398,340 L394,468', tube: 22, fill: '#c0392b', stroke: '#7d2219' },
    { id: 'stomach', name: 'Stomach', fill: '#e2958a', stroke: '#9b4f45', d: 'M368,524 C390,490 450,495 470,540 C488,590 474,660 424,692 C392,710 350,702 330,678 C322,664 330,650 345,652 C372,650 382,620 378,590 C374,562 358,548 368,524 Z' },
    { id: 'lower-oesophageal-sphincter', name: 'Lower oesophageal sphincter', d: 'M358,498 L368,520', tube: 20, fill: '#c9705f', stroke: '#8c3f44' },
    { id: 'gastro-oesophageal-junction', name: 'Gastro-oesophageal junction (Z-line)', d: 'M358,524 C364,520 368,526 374,522 C378,520 382,526 384,530 L384,534 L358,534 Z', fill: '#f7d3a8', stroke: '#9b4f45' },
    { id: 'varices-site', name: 'Submucosal venous plexus (varices site)', d: 'M350,452 C344,458 356,464 350,470 C344,476 356,482 350,488 M356,456 C360,464 352,470 358,478', tube: 4, fill: '#3b6ea5', stroke: '#24466b' }
  ],
  over: `
    <path d="M330,160 L330,290" stroke="#6b8a98" stroke-width="1" stroke-dasharray="3 5" fill="none"/>
    <path d="M398,462 L392,474" stroke="#7d2219" stroke-width="2" fill="none"/>
    <path d="M340,478 L340,490" stroke="#8c3f44" stroke-width="1" fill="none"/>`,
  labels: [
    { part: 'pharynx', text: 'Pharynx', dot: [320, 60], text_at: [95, 60] },
    { part: 'larynx', text: 'Larynx', dot: [320, 130], text_at: [95, 115] },
    { part: 'trachea', text: 'Trachea', dot: [330, 220], text_at: [95, 190] },
    { part: 'trachea', text: 'Right main bronchus', dot: [296, 326], text_at: [95, 320] },
    { part: 'diaphragm', text: 'Diaphragm', dot: [230, 500], text_at: [95, 470] },
    { part: 'diaphragm', text: 'Oesophageal hiatus (T10)', dot: [340, 483], text_at: [95, 510] },
    { part: 'lower-oesophageal-sphincter', text: 'Lower oesophageal sphincter', dot: [361, 503], text_at: [95, 550] },
    { part: 'gastro-oesophageal-junction', text: 'Gastro-oesophageal junction', dot: [366, 530], text_at: [95, 590] },
    { part: 'oesophagus', text: 'Upper oesophageal sphincter', dot: [348, 135], text_at: [585, 125] },
    { part: 'oesophagus', text: 'Cervical oesophagus', dot: [347, 175], text_at: [585, 160] },
    { part: 'aorta', text: 'Aortic arch (2nd narrowing)', dot: [386, 252], text_at: [585, 215] },
    { part: 'trachea', text: 'Left main bronchus (3rd)', dot: [372, 322], text_at: [585, 290] },
    { part: 'oesophagus', text: 'Thoracic oesophagus', dot: [351, 380], text_at: [585, 350] },
    { part: 'aorta', text: 'Descending aorta', dot: [397, 420], text_at: [585, 410] },
    { part: 'varices-site', text: 'Varices (submucosal plexus)', dot: [354, 470], text_at: [585, 450] },
    { part: 'stomach', text: 'Stomach fundus', dot: [432, 545], text_at: [585, 500] },
    { part: 'stomach', text: 'Cardia', dot: [378, 540], text_at: [585, 540] },
    { part: 'stomach', text: 'Body of stomach', dot: [450, 600], text_at: [585, 600] }
  ]
};
