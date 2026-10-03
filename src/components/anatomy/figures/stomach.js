// Stomach opened in the coronal plane, with the first part of the duodenum. Patient's right is the viewer's left.
export default {
  title: 'Stomach and duodenal bulb, opened, front view',
  viewBox: '-110 0 900 760',
  under: `
    <path d="M30,110 C70,96 120,120 152,168 C146,232 164,296 194,344 L130,352 C70,322 20,200 30,110 Z" fill="#a85d49" stroke="#6b3528" stroke-width="1.6" opacity="0.5"/>`,
  parts: [
    { id: 'lesser-omentum', name: 'Lesser omentum (attachment)', fill: '#f5e6b8', stroke: '#c9b06a', d: 'M300,152 C322,230 332,330 316,374 C290,400 240,398 206,392 L190,344 C164,296 146,232 152,168 C190,150 250,140 300,152 Z' },
    { id: 'duodenum', name: 'Descending duodenum', d: 'M132,425 C124,470 120,520 118,590', tube: 34, fill: '#e9a56f' },
    { id: 'duodenal-bulb', name: 'Duodenal bulb (first part of duodenum)', fill: '#e9a56f', stroke: '#9b6a3f', d: 'M210,392 C190,378 150,380 138,408 C132,440 170,450 210,434 Z' },
    { id: 'oesophagus', name: 'Oesophagus', d: 'M262,20 C262,80 285,120 306,158', tube: 30, fill: '#e59a8d' },
    { id: 'body', name: 'Body of stomach', fill: '#eca99c', stroke: '#9b4f45', d: 'M300,150 C318,86 420,66 470,108 C520,150 528,300 486,380 C446,462 340,492 268,470 C232,460 212,446 206,430 L206,392 C240,398 290,400 316,374 C332,330 322,230 300,150 Z' },
    { id: 'fundus', name: 'Fundus', fill: '#f0b5a8', stroke: '#9b4f45', d: 'M300,150 C318,86 420,66 470,108 C484,122 494,140 499,157 L306,176 Z' },
    { id: 'antrum', name: 'Pyloric antrum', fill: '#e39a8d', stroke: '#9b4f45', d: 'M316,374 C290,400 240,398 206,392 L206,430 C212,446 232,460 268,470 C300,480 330,484 357,478 C340,440 325,405 316,374 Z' },
    { id: 'pylorus', name: 'Pylorus (pyloric canal and sphincter)', fill: '#c7716a', stroke: '#8c3f44', d: 'M206,392 L242,395 L242,458 C226,454 212,444 206,430 Z' },
    { id: 'cardia', name: 'Cardia', fill: '#d98173', stroke: '#9b4f45', d: 'M286,140 C296,128 324,136 328,160 C328,182 304,194 290,182 C282,168 280,150 286,140 Z' },
    { id: 'lesser-curvature', name: 'Lesser curvature', d: 'M302,160 C322,230 332,330 316,374 C290,400 240,398 208,392', tube: 6, fill: '#b5534a', stroke: '#8c3f44' },
    { id: 'greater-curvature', name: 'Greater curvature', d: 'M300,150 C318,86 420,66 470,108 C520,150 528,300 486,380 C446,462 340,492 268,470 C232,460 212,446 207,430', tube: 6, fill: '#b5534a', stroke: '#8c3f44' },
    { id: 'rugae', name: 'Rugae (mucosal folds)', d: 'M350,230 C376,250 384,296 372,356 M378,190 C414,230 424,300 408,396 M412,162 C454,210 474,290 452,384 M444,140 C484,180 498,250 482,330 M352,396 C384,424 402,448 392,470 M262,414 C282,418 296,426 306,440 M256,440 C274,446 290,456 304,464', tube: 5, fill: '#c97a6e', stroke: '#b86a60' }
  ],
  over: `
    <path d="M242,395 L242,458" stroke="#8c3f44" stroke-width="2" fill="none"/>
    <path d="M316,374 L357,478" stroke="#b86a60" stroke-width="1" stroke-dasharray="4 4" fill="none"/>`,
  labels: [
    { part: 'oesophagus', text: 'Oesophagus', dot: [262, 55], text_at: [95, 55] },
    { part: 'cardia', text: 'Cardia', dot: [296, 162], text_at: [95, 110] },
    { part: 'lesser-omentum', text: 'Lesser omentum attachment', dot: [240, 240], text_at: [95, 200] },
    { part: 'lesser-curvature', text: 'Lesser curvature', dot: [326, 280], text_at: [95, 280] },
    { part: 'lesser-curvature', text: 'Incisura angularis', dot: [314, 377], text_at: [95, 345] },
    { part: 'duodenal-bulb', text: 'Duodenal bulb', dot: [165, 408], text_at: [95, 405] },
    { part: 'pylorus', text: 'Pyloric canal & sphincter', dot: [224, 430], text_at: [95, 465] },
    { part: 'duodenum', text: 'Descending duodenum', dot: [122, 520], text_at: [95, 530] },
    { part: 'fundus', text: 'Fundus', dot: [430, 118], text_at: [585, 90] },
    { part: 'body', text: 'Body', dot: [430, 290], text_at: [585, 230] },
    { part: 'greater-curvature', text: 'Greater curvature', dot: [513, 270], text_at: [585, 300] },
    { part: 'rugae', text: 'Rugae', dot: [416, 320], text_at: [585, 370] },
    { part: 'antrum', text: 'Pyloric antrum', dot: [300, 445], text_at: [585, 470] }
  ]
};
