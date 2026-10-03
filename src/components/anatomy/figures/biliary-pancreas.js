// Liver (inferior surface), biliary tree, pancreas and duodenal C-loop, anterior view.
// Patient's right is the viewer's left.
export default {
  title: 'Biliary tree, pancreas and duodenum, front view',
  viewBox: '-200 0 1090 600',
  under: `
    <rect x="90" y="30" width="600" height="540" rx="60" fill="#f6f1ea" stroke="#d9cdc0" stroke-width="1.5" stroke-dasharray="6 5"/>`,
  parts: [
    { id: 'spleen', name: 'Spleen', fill: '#8e5f8a', stroke: '#5c3a59', d: 'M575,215 C610,192 652,220 650,272 C648,312 620,332 596,318 C580,300 570,250 575,215 Z' },
    { id: 'liver', name: 'Liver (inferior surface)', fill: '#a85d49', stroke: '#6b3528', d: 'M130,150 C150,90 260,60 380,62 C470,64 540,90 560,130 C540,170 470,200 420,214 C390,222 370,222 350,218 L320,222 C290,232 250,250 210,246 C160,236 125,200 130,150 Z' },
    { id: 'duodenum', name: 'Duodenum (C-loop)', d: 'M420,298 C370,290 322,292 274,306 C258,318 262,332 266,348 L268,450 C268,492 300,502 340,502 C400,504 450,498 480,482 C502,468 502,430 497,392', tube: 17, fill: '#e9a56f' },
    { id: 'pancreas', name: 'Pancreas', fill: '#eed37f', stroke: '#a78a2e', d: 'M292,332 C310,320 360,330 385,338 C430,326 500,300 560,268 C585,258 602,268 594,286 C560,314 500,346 440,372 C412,382 396,394 391,412 C388,442 370,470 340,474 C305,476 292,450 290,420 C288,382 286,352 292,332 Z' },
    { id: 'pancreatic-duct', name: 'Main pancreatic duct (of Wirsung)', d: 'M580,286 C530,302 470,324 422,350 C380,370 330,390 284,404', tube: 4, fill: '#c89a2a', stroke: '#8d6b14' },
    { id: 'common-bile-duct', name: 'Common bile duct', d: 'M334,258 L336,300 C338,340 318,372 290,400', tube: 7, fill: '#8fb447', stroke: '#5d7a24' },
    { id: 'hepatic-ducts', name: 'Right and left hepatic ducts', d: 'M340,178 C322,160 300,150 262,128 M300,152 L262,166 M340,178 C364,160 392,150 436,132 M392,152 L440,160', tube: 6, fill: '#b7c95a', stroke: '#7c8f30' },
    { id: 'common-hepatic-duct', name: 'Common hepatic duct', d: 'M340,178 L336,260', tube: 7, fill: '#b7c95a', stroke: '#7c8f30' },
    { id: 'cystic-duct', name: 'Cystic duct', d: 'M278,226 C296,240 316,250 336,258', tube: 5, fill: '#a3c061', stroke: '#6b8a2e' },
    { id: 'gallbladder', name: 'Gallbladder', fill: '#7fae6a', stroke: '#48703a', d: 'M276,218 C290,222 292,238 286,256 C294,282 292,314 268,318 C244,320 236,292 246,264 C250,250 256,240 262,232 C266,224 270,218 276,218 Z' },
    { id: 'ampulla', name: 'Hepatopancreatic ampulla (of Vater) and sphincter of Oddi', fill: '#c4702b', stroke: '#7a3f12', d: 'M274,398 C282,394 292,400 292,409 C290,417 278,418 272,412 C268,406 269,401 274,398 Z' }
  ],
  over: `
    <path d="M380,224 C384,190 380,150 372,100" fill="none" stroke="#6b3528" stroke-width="2" opacity=".55"/>
    <ellipse cx="338" cy="180" rx="34" ry="14" fill="none" stroke="#6b3528" stroke-width="1.2" stroke-dasharray="4 3" opacity=".6"/>
    <path d="M268,386 L300,398 M268,432 L300,420" fill="none" stroke="#9b5a22" stroke-width="1.2" opacity=".5"/>
    <path d="M150,180 C190,120 250,100 300,98 M420,100 C470,100 520,112 540,130" fill="none" stroke="#7d3f2e" stroke-width="1.2" opacity=".35"/>`,
  labels: [
    { part: 'liver', text: 'Right lobe of liver', dot: [210, 145], text_at: [95, 110] },
    { part: 'hepatic-ducts', text: 'Right hepatic duct', dot: [290, 148], text_at: [95, 155] },
    { part: 'cystic-duct', text: 'Cystic duct', dot: [300, 243], text_at: [95, 200] },
    { part: 'gallbladder', text: 'Gallbladder neck (Hartmann pouch)', dot: [270, 240], text_at: [95, 245] },
    { part: 'gallbladder', text: 'Gallbladder body', dot: [262, 282], text_at: [95, 290] },
    { part: 'gallbladder', text: 'Gallbladder fundus', dot: [258, 308], text_at: [95, 335] },
    { part: 'common-bile-duct', text: 'Common bile duct', dot: [328, 345], text_at: [95, 380] },
    { part: 'ampulla', text: 'Ampulla of Vater & sphincter of Oddi', dot: [278, 406], text_at: [95, 425] },
    { part: 'duodenum', text: 'Duodenum (2nd part)', dot: [267, 460], text_at: [95, 470] },
    { part: 'liver', text: 'Left lobe of liver', dot: [480, 125], text_at: [675, 100] },
    { part: 'hepatic-ducts', text: 'Left hepatic duct', dot: [396, 150], text_at: [675, 145] },
    { part: 'common-hepatic-duct', text: 'Common hepatic duct', dot: [338, 215], text_at: [675, 190] },
    { part: 'spleen', text: 'Spleen', dot: [628, 255], text_at: [675, 235] },
    { part: 'pancreas', text: 'Pancreatic tail', dot: [572, 282], text_at: [675, 335] },
    { part: 'pancreatic-duct', text: 'Main pancreatic duct', dot: [470, 325], text_at: [675, 380] },
    { part: 'pancreas', text: 'Pancreatic body', dot: [450, 352], text_at: [675, 425] },
    { part: 'pancreas', text: 'Pancreatic neck', dot: [386, 372], text_at: [675, 470] },
    { part: 'pancreas', text: 'Pancreatic head', dot: [335, 448], text_at: [675, 515] },
    { part: 'duodenum', text: 'Duodenum (3rd part)', dot: [420, 500], text_at: [675, 560] }
  ]
};
