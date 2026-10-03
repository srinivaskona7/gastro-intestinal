# Design system (from Stitch)

```json
{
 "bodyFont": "INTER",
 "bodyFontFamily": "Inter",
 "colorMode": "LIGHT",
 "colorVariant": "FIDELITY",
 "customColor": "#115e59",
 "designMd": "---\nname: Clinical Editorial Archive\ncolors:\n  surface: '#f9f9ff'\n  surface-dim: '#cfdaf2'\n  surface-bright: '#f9f9ff'\n  surface-container-lowest: '#ffffff'\n  surface-container-low: '#f0f3ff'\n  surface-container: '#e7eeff'\n  surface-container-high: '#dee8ff'\n  surface-container-highest: '#d8e3fb'\n  on-surface: '#111c2d'\n  on-surface-variant: '#3f4947'\n  inverse-surface: '#263143'\n  inverse-on-surface: '#ecf1ff'\n  outline: '#6f7977'\n  outline-variant: '#bec9c7'\n  surface-tint: '#216963'\n  primary: '#004541'\n  on-primary: '#ffffff'\n  primary-container: '#115e59'\n  on-primary-container: '#91d5ce'\n  inverse-primary: '#8fd3cc'\n  secondary: '#5a5f5e'\n  on-secondary: '#ffffff'\n  secondary-container: '#dee4e2'\n  on-secondary-container: '#606564'\n  tertiary: '#7c1107'\n  on-tertiary: '#ffffff'\n  tertiary-container: '#9d2a1c'\n  on-tertiary-container: '#ffb8ac'\n  error: '#ba1a1a'\n  on-error: '#ffffff'\n  error-container: '#ffdad6'\n  on-error-container: '#93000a'\n  primary-fixed: '#abefe8'\n  primary-fixed-dim: '#8fd3cc'\n  on-primary-fixed: '#00201e'\n  on-primary-fixed-variant: '#00504b'\n  secondary-fixed: '#dee4e2'\n  secondary-fixed-dim: '#c2c8c6'\n  on-secondary-fixed: '#171d1c'\n  on-secondary-fixed-variant: '#424847'\n  tertiary-fixed: '#ffdad4'\n  tertiary-fixed-dim: '#ffb4a8'\n  on-tertiary-fixed: '#410100'\n  on-tertiary-fixed-variant: '#8a1c10'\n  background: '#f9f9ff'\n  on-background: '#111c2d'\n  surface-variant: '#d8e3fb'\ntypography:\n  display-hero:\n    fontFamily: Newsreader\n    fontSize: 48px\n    fontWeight: '400'\n    lineHeight: 56px\n    letterSpacing: -0.02em\n  display-hero-mobile:\n    fontFamily: Newsreader\n    fontSize: 34px\n    fontWeight: '400'\n    lineHeight: 42px\n    letterSpacing: -0.015em\n  headline-lg:\n    fontFamily: Newsreader\n    fontSize: 36px\n    fontWeight: '400'\n    lineHeight: 44px\n    letterSpacing: -0.015em\n  headline-lg-mobile:\n    fontFamily: Newsreader\n    fontSize: 28px\n    fontWeight: '400'\n    lineHeight: 36px\n    letterSpacing: -0.01em\n  headline-md:\n    fontFamily: Newsreader\n    fontSize: 26px\n    fontWeight: '500'\n    lineHeight: 34px\n    letterSpacing: -0.01em\n  headline-sm:\n    fontFamily: Newsreader\n    fontSize: 21px\n    fontWeight: '500'\n    lineHeight: 28px\n    letterSpacing: '0'\n  body-lead:\n    fontFamily: Newsreader\n    fontSize: 19px\n    fontWeight: '400'\n    lineHeight: 30px\n    letterSpacing: 0.005em\n  body-md:\n    fontFamily: Inter\n    fontSize: 15px\n    fontWeight: '400'\n    lineHeight: 24px\n    letterSpacing: -0.005em\n  body-sm:\n    fontFamily: Inter\n    fontSize: 13px\n    fontWeight: '400'\n    lineHeight: 20px\n    letterSpacing: '0'\n  label-lg:\n    fontFamily: Inter\n    fontSize: 14px\n    fontWeight: '600'\n    lineHeight: 20px\n    letterSpacing: 0.01em\n  label-md:\n    fontFamily: Inter\n    fontSize: 12px\n    fontWeight: '600'\n    lineHeight: 16px\n    letterSpacing: 0.025em\n  label-caps:\n    fontFamily: Inter\n    fontSize: 11px\n    fontWeight: '700'\n    lineHeight: 16px\n    letterSpacing: 0.08em\n  code-clinical:\n    fontFamily: Inter\n    fontSize: 12px\n    fontWeight: '500'\n    lineHeight: 16px\n    letterSpacing: 0.02em\nrounded:\n  sm: 0.125rem\n  DEFAULT: 0.25rem\n  md: 0.375rem\n  lg: 0.5rem\n  xl: 0.75rem\n  full: 9999px\nspacing:\n  gutter: 1.5rem\n  gutter-mobile: 1rem\n  gutter-desktop: 2.5rem\n  margin: 1.5rem\n  margin-mobile: 1rem\n  margin-desktop: 4rem\n  space-xs: 0.25rem\n  space-sm: 0.5rem\n  space-md: 1rem\n  space-lg: 1.5rem\n  space-xl: 2.5rem\n---\n\n## Brand & Style\n\nThis design system expresses quiet authority, intellectual discipline, and pedagogical empathy. Developed for clinical educators, medical fellows, residents, and medical students studying gastrointestinal medicine, the interface moves deliberately away from the cold, sterile, software-utility look typical of legacy health databases. Instead, it pairs the permanence and elegance of a museum monograph or rare anatomical atlas with the high-legibility precision of contemporary digital ergonomics.\n\nThe visual style is **Academic Editorial & Tonal Minimalism**. It emphasizes:\n- **Restful Scholarship:** A warm, paper-inspired foundational plane eliminates optical fatigue during intensive review rounds or night shifts.\n- **Hierarchical Discipline:** Typography, border micro-rules, and strict rhythm demarcate histopathology annotations, clinical diagnostic pathways, and differential diagnosis tables.\n- **Selective Urgency:** High-yield clinical alerts and board-relevant pearls utilize a targeted vermilion accent against clinical teals and muted sage surfaces, strictly preserved for critical takeaways to avoid cognitive saturation.\n- **Sidebar-Free Immersion:** Fluid reading panes prioritize uninterrupted study flows, replacing cluttered side navigation bars with dedicated in-canvas breadcrumbs, section wayfinding markers, and contextual jump anchors.\n\n## Colors\n\nThe palette balances historical anatomical publishing with high-contrast accessibility standards (WCAG AAA compliant for all reading and informational text hierarchies).\n\n### Palette Architecture\n- **Primary (`#115E59` - Deep Pine Teal):** Anchor color representing clinical rigor, diagnostic precision, and structural credibility. Applied to primary CTAs, active pagination indices, foundational taxonomy tags, and section headers.\n- **Secondary (`#F0F5F3` - Subdued Sage):** A low-stimulation tinted surface applied to secondary content cards, histology breakdown containers, and comparative tables. Acts as a soft resting layer between neutral surfaces.\n- **Tertiary (`#E05A47` - High-Yield Vermilion):** Reserved exclusively for high-yield USMLE pearls, diagnostic pitfalls, pathognomonic signs, and emergency triage notes. It must never be applied decoratively.\n- **Neutral Primary (`#1E293B` - Deep Slate):** High-density text neutral formulated to prevent eye strain on tinted backgrounds while retaining deep visual contrast.\n- **Neutral Secondary (`#475569` - Slate Muted):** Used for metadata, figure captions, citation details, anatomical scale markers, and secondary icon fills.\n- **Canvas Base (`#FAF8F5` - Warm Parchment):** The universal app background, providing an editorial paper substrate that softens contrast against dark text.\n- **Surface Elevation (`#FFFFFF` - Pure White):** Used strictly for interactive foreground components, search dropdown surfaces, modal sheets, and active clinical slides.\n- **Micro-Border (`#E2DDD5` - Warm Linen Rule):** Hairline boundary token used instead of heavy drop shadows to structure panels, callouts, and tabular arrays.\n\n## Typography\n\nThe typographic system creates an interplay between scholarly distinction and computational clarity:\n\n- **Editorial Serif (`Newsreader`):** Handles all high-order and structural headings, essay synopses, and case study introductions. Newsreader supplies an optical cadence reminiscent of medical journals, grounding long case narratives with humanity and poise. Optical sizing and italics should be used deliberately for anatomical designations (`*Helicobacter pylori*`, `*lamina propria*`).\n- **Clinical Grotesque (`Inter`):** Drives all analytical content, differential comparison grids, tabular data, patient vitals, histological metadata, and UI controls. Inter provides neutral, neutral-density tracking that ensures no visual confusion between numerical data, lab parameters, and morphological staging indices.\n- **Micro-Labels & Taxonomy:** `label-caps` must be paired with uppercase transformation and wide letter-spacing (`0.08em`) to delineate taxonomy tiers (e.g., `PATHOPHYSIOLOGY`, `ENDOSCOPY`, `HISTOLOGY`).\n\n## Layout & Spacing\n\nThis design system deliberately omits permanent app sidebars to protect uninterrupted reading focus and eliminate UI clutter. Content flows down a controlled editorial spine.\n\n### Layout Mechanics\n- **Max Content Container:** Primary reading column is capped at `760px` for optimal typographic line length (65\u201375 characters per line).\n- **Extended Study Canvas:** Case studies featuring split view endoscopy feeds, comparative histology, and diagnostic algorithmic pathways widen to a maximum container of `1240px`.\n- **Top Utility Navigation:** Anchored, low-profile top bar containing search, organ system breadcrumbs, and rapid index jumps.\n- **Rhythm & Vertical Alignment:** All stack spacing conforms to an 8px grid foundation. Headings adopt generous top padding (`space-xl`) paired with disciplined proximity to the following paragraph (`space-sm`), visually grouping content clusters organically.\n- **Responsive Adaptations:**\n  - *Mobile (< 768px):* Single-column uninterrupted stack. Margins collapse to `margin-mobile` (16px), gutters to `gutter-mobile` (16px). Inline tabs replace parallel diagnostic matrices.\n  - *Tablet (768px \u2013 1024px):* Single-column text layout with side-anchored floating notes and 2-column comparative image panels.\n  - *Desktop (> 1024px):* Centered clinical spine with generous lateral breathing room (`margin-desktop`), enabling high-resolution image viewers to expand outward without destabilizing the reading baseline.\n\n## Elevation & Depth\n\nVisual hierarchy does not rely on prominent drop shadows or simulated material lifts. The system expresses structural depth through **tonal stratification and crisp hairline boundaries**.\n\n- **Canvas Foundation:** `#FAF8F5` serves as the non-elevated ground layer.\n- **Tonal Layers:** Secondary content sections, interactive slide viewers, and reference asides use `#F0F5F3` or pure `#FFFFFF` resting directly on the canvas without dimensional offsets.\n- **Low-Contrast Micro-Rules:** Depths and boundaries are established via a single 1px solid border (`#E2DDD5`). When a card is hovered or focused, the border transitions smoothly to the primary brand tone (`#115E59`) without physical displacement.\n- **Float and Modals (Exception Only):** Floating search overlays, histological image magnifiers, and anatomical reference lightboxes use a controlled ambient dispersion:\n  `box-shadow: 0 12px 32px -4px rgba(30, 41, 59, 0.08), 0 4px 12px -2px rgba(30, 41, 59, 0.04);`\n  This shadow is neutral slate-tinted, diffuse, and intentionally soft.\n\n## Shapes\n\nThe design system employs a **Soft (`1`)** shape language. Corners are slightly tempered rather than rounded, maintaining an editorial, textbook feel:\n\n- **Standard Containers & Cards:** `0.25rem` (4px) border radius. Gives modules structural discipline and avoids the overly casual appearance of heavily rounded geometry.\n- **Badges, Tags, and High-Yield Chips:** `0.25rem` (4px) border radius. Preserves rectangular tag legibility while avoiding sharp corners.\n- **Interactive Buttons & Inputs:** `0.25rem` (4px) border radius for unified form alignment.\n- **Media Containers (Microscopy & Endoscopy frames):** `0.375rem` (6px) border radius, bounded by a 1px border (`#E2DDD5`) to treat imagery like mounted archival prints.\n\n## Components\n\n### Buttons\n- **Primary:** Solid `#115E59` background with `#FFFFFF` text. Micro-radius (4px), padding `10px 18px`. Hover: `#0D4D4D`. Focus ring: 2px offset with `#115E59`.\n- **Secondary / Outline:** Background transparent, border 1px solid `#115E59`, text `#115E59`. Hover: background `#F0F5F3`.\n- **Tertiary (High-Yield Trigger):** Solid `#E05A47` with `#FFFFFF` text. Used only for testing modes, board questions, and high-yield flashcard reveals.\n\n### Chips & Badges\n- **Organ System Taxonomy:** Background `#FFFFFF`, border 1px solid `#E2DDD5`, text `#115E59`, font `label-md`.\n- **High-Yield Clinical Pearl Chip:** Background `#FEF2F0`, border 1px solid rgba(224, 90, 71, 0.3), text `#E05A47`, font `label-caps`. Preceded by an alert bullet or mini beacon.\n- **Histology Marker:** Background `#F0F5F3`, text `#115E59`, border 1px solid transparent, font `code-clinical`.\n\n### Clinical Callout Panels\n- **USMLE High-Yield Pearl Box:** Left accent border (3px solid `#E05A47`), background `#FFFFFF`, inner padding `space-md` (16px), outer border 1px solid `#E2DDD5` (top, right, bottom). Header features Newsreader medium italic title followed by Inter clean body text.\n- **Differential Warning / Red Flag:** Tinted background `rgba(224, 90, 71, 0.05)`, border 1px solid rgba(224, 90, 71, 0.25), text `#1E293B`.\n\n### Medical Media & Image Viewer Cards\n- Pure `#FFFFFF` background, 1px solid `#E2DDD5`. Contains the high-res endoscopic/histopathology slide.\n- **Figure Caption Footer:** Inset metadata row displaying magnification (e.g., `40x H&E`), biopsy site, and diagnostic findings formatted in `body-sm` (`#475569`).\n\n### Form Controls & Filter Bars\n- **Search Inputs:** Floating full-width or centered search bar with `#FFFFFF` background, border 1px solid `#E2DDD5`, placeholder text `#475569`. Active focus: border `#115E59` with subtle outline halo.\n- **Checkboxes & Radios:** Sharp square/circle hybrid, border 1.5px solid `#475569`, filled `#115E59` when checked.\n\n### Content Lists & Differentials\n- Unordered lists use subtle square en-dash markers in `#115E59` instead of circular bullets.\n- Ordered diagnostic algorithm steps feature bracketed numerical counters (e.g., `[01]`, `[02]`) in `code-clinical` style.",
 "font": "NEWSREADER",
 "headlineFont": "NEWSREADER",
 "headlineFontFamily": "Newsreader",
 "labelFont": "INTER",
 "labelFontFamily": "Inter",
 "namedColors": {
  "background": "#f9f9ff",
  "error": "#ba1a1a",
  "error_container": "#ffdad6",
  "inverse_on_surface": "#ecf1ff",
  "inverse_primary": "#8fd3cc",
  "inverse_surface": "#263143",
  "on_background": "#111c2d",
  "on_error": "#ffffff",
  "on_error_container": "#93000a",
  "on_primary": "#ffffff",
  "on_primary_container": "#91d5ce",
  "on_primary_fixed": "#00201e",
  "on_primary_fixed_variant": "#00504b",
  "on_secondary": "#ffffff",
  "on_secondary_container": "#606564",
  "on_secondary_fixed": "#171d1c",
  "on_secondary_fixed_variant": "#424847",
  "on_surface": "#111c2d",
  "on_surface_variant": "#3f4947",
  "on_tertiary": "#ffffff",
  "on_tertiary_container": "#ffb8ac",
  "on_tertiary_fixed": "#410100",
  "on_tertiary_fixed_variant": "#8a1c10",
  "outline": "#6f7977",
  "outline_variant": "#bec9c7",
  "primary": "#004541",
  "primary_container": "#115e59",
  "primary_fixed": "#abefe8",
  "primary_fixed_dim": "#8fd3cc",
  "secondary": "#5a5f5e",
  "secondary_container": "#dee4e2",
  "secondary_fixed": "#dee4e2",
  "secondary_fixed_dim": "#c2c8c6",
  "surface": "#f9f9ff",
  "surface_bright": "#f9f9ff",
  "surface_container": "#e7eeff",
  "surface_container_high": "#dee8ff",
  "surface_container_highest": "#d8e3fb",
  "surface_container_low": "#f0f3ff",
  "surface_container_lowest": "#ffffff",
  "surface_dim": "#cfdaf2",
  "surface_tint": "#216963",
  "surface_variant": "#d8e3fb",
  "tertiary": "#7c1107",
  "tertiary_container": "#9d2a1c",
  "tertiary_fixed": "#ffdad4",
  "tertiary_fixed_dim": "#ffb4a8"
 },
 "overrideNeutralColor": "#1e293b",
 "overridePrimaryColor": "#115e59",
 "overrideSecondaryColor": "#f0f5f3",
 "overrideTertiaryColor": "#e05a47",
 "roundness": "ROUND_FOUR",
 "spacing": {
  "gutter": "1.5rem",
  "gutter-desktop": "2.5rem",
  "gutter-mobile": "1rem",
  "margin": "1.5rem",
  "margin-desktop": "4rem",
  "margin-mobile": "1rem",
  "space-lg": "1.5rem",
  "space-md": "1rem",
  "space-sm": "0.5rem",
  "space-xl": "2.5rem",
  "space-xs": "0.25rem"
 },
 "spacingScale": 2,
 "typography": {
  "body-lead": {
   "fontFamily": "Newsreader",
   "fontSize": "19px",
   "fontWeight": "400",
   "letterSpacing": "0.005em",
   "lineHeight": "30px"
  },
  "body-md": {
   "fontFamily": "Inter",
   "fontSize": "15px",
   "fontWeight": "400",
   "letterSpacing": "-0.005em",
   "lineHeight": "24px"
  },
  "body-sm": {
   "fontFamily": "Inter",
   "fontSize": "13px",
   "fontWeight": "400",
   "letterSpacing": "0",
   "lineHeight": "20px"
  },
  "code-clinical": {
   "fontFamily": "Inter",
   "fontSize": "12px",
   "fontWeight": "500",
   "letterSpacing": "0.02em",
   "lineHeight": "16px"
  },
  "display-hero": {
   "fontFamily": "Newsreader",
   "fontSize": "48px",
   "fontWeight": "400",
   "letterSpacing": "-0.02em",
   "lineHeight": "56px"
  },
  "display-hero-mobile": {
   "fontFamily": "Newsreader",
   "fontSize": "34px",
   "fontWeight": "400",
   "letterSpacing": "-0.015em",
   "lineHeight": "42px"
  },
  "headline-lg": {
   "fontFamily": "Newsreader",
   "fontSize": "36px",
   "fontWeight": "400",
   "letterSpacing": "-0.015em",
   "lineHeight": "44px"
  },
  "headline-lg-mobile": {
   "fontFamily": "Newsreader",
   "fontSize": "28px",
   "fontWeight": "400",
   "letterSpacing": "-0.01em",
   "lineHeight": "36px"
  },
  "headline-md": {
   "fontFamily": "Newsreader",
   "fontSize": "26px",
   "fontWeight": "500",
   "letterSpacing": "-0.01em",
   "lineHeight": "34px"
  },
  "headline-sm": {
   "fontFamily": "Newsreader",
   "fontSize": "21px",
   "fontWeight": "500",
   "letterSpacing": "0",
   "lineHeight": "28px"
  },
  "label-caps": {
   "fontFamily": "Inter",
   "fontSize": "11px",
   "fontWeight": "700",
   "letterSpacing": "0.08em",
   "lineHeight": "16px"
  },
  "label-lg": {
   "fontFamily": "Inter",
   "fontSize": "14px",
   "fontWeight": "600",
   "letterSpacing": "0.01em",
   "lineHeight": "20px"
  },
  "label-md": {
   "fontFamily": "Inter",
   "fontSize": "12px",
   "fontWeight": "600",
   "letterSpacing": "0.025em",
   "lineHeight": "16px"
  }
 }
}
```

## Brand & Style

This design system expresses quiet authority, intellectual discipline, and pedagogical empathy. Developed for clinical educators, medical fellows, residents, and medical students studying gastrointestinal medicine, the interface moves deliberately away from the cold, sterile, software-utility look typical of legacy health databases. Instead, it pairs the permanence and elegance of a museum monograph or rare anatomical atlas with the high-legibility precision of contemporary digital ergonomics.

The visual style is **Academic Editorial & Tonal Minimalism**. It emphasizes:
- **Restful Scholarship:** A warm, paper-inspired foundational plane eliminates optical fatigue during intensive review rounds or night shifts.
- **Hierarchical Discipline:** Typography, border micro-rules, and strict rhythm demarcate histopathology annotations, clinical diagnostic pathways, and differential diagnosis tables.
- **Selective Urgency:** High-yield clinical alerts and board-relevant pearls utilize a targeted vermilion accent against clinical teals and muted sage surfaces, strictly preserved for critical takeaways to avoid cognitive saturation.
- **Sidebar-Free Immersion:** Fluid reading panes prioritize uninterrupted study flows, replacing cluttered side navigation bars with dedicated in-canvas breadcrumbs, section wayfinding markers, and contextual jump anchors.

## Layout & Spacing

This design system deliberately omits permanent app sidebars to protect uninterrupted reading focus and eliminate UI clutter. Content flows down a controlled editorial spine.

### Layout Mechanics
- **Max Content Container:** Primary reading column is capped at `760px` for optimal typographic line length (65–75 characters per line).
- **Extended Study Canvas:** Case studies featuring split view endoscopy feeds, comparative histology, and diagnostic algorithmic pathways widen to a maximum container of `1240px`.
- **Top Utility Navigation:** Anchored, low-profile top bar containing search, organ system breadcrumbs, and rapid index jumps.
- **Rhythm & Vertical Alignment:** All stack spacing conforms to an 8px grid foundation. Headings adopt generous top padding (`space-xl`) paired with disciplined proximity to the following paragraph (`space-sm`), visually grouping content clusters organically.
- **Responsive Adaptations:**
  - *Mobile (< 768px):* Single-column uninterrupted stack. Margins collapse to `margin-mobile` (16px), gutters to `gutter-mobile` (16px). Inline tabs replace parallel diagnostic matrices.
  - *Tablet (768px – 1024px):* Single-column text layout with side-anchored floating notes and 2-column comparative image panels.
  - *Desktop (> 1024px):* Centered clinical spine with generous lateral breathing room (`margin-desktop`), enabling high-resolution image viewers to expand outward without destabilizing the reading baseline.

## Elevation & Depth

Visual hierarchy does not rely on prominent drop shadows or simulated material lifts. The system expresses structural depth through **tonal stratification and crisp hairline boundaries**.

- **Canvas Foundation:** `#FAF8F5` serves as the non-elevated ground layer.
- **Tonal Layers:** Secondary content sections, interactive slide viewers, and reference asides use `#F0F5F3` or pure `#FFFFFF` resting directly on the canvas without dimensional offsets.
- **Low-Contrast Micro-Rules:** Depths and boundaries are established via a single 1px solid border (`#E2DDD5`). When a card is hovered or focused, the border transitions smoothly to the primary brand tone (`#115E59`) without physical displacement.
- **Float and Modals (Exception Only):** Floating search overlays, histological image magnifiers, and anatomical reference lightboxes use a controlled ambient dispersion:
  `box-shadow: 0 12px 32px -4px rgba(30, 41, 59, 0.08), 0 4px 12px -2px rgba(30, 41, 59, 0.04);`
  This shadow is neutral slate-tinted, diffuse, and intentionally soft.

## Components

### Buttons
- **Primary:** Solid `#115E59` background with `#FFFFFF` text. Micro-radius (4px), padding `10px 18px`. Hover: `#0D4D4D`. Focus ring: 2px offset with `#115E59`.
- **Secondary / Outline:** Background transparent, border 1px solid `#115E59`, text `#115E59`. Hover: background `#F0F5F3`.
- **Tertiary (High-Yield Trigger):** Solid `#E05A47` with `#FFFFFF` text. Used only for testing modes, board questions, and high-yield flashcard reveals.

### Chips & Badges
- **Organ System Taxonomy:** Background `#FFFFFF`, border 1px solid `#E2DDD5`, text `#115E59`, font `label-md`.
- **High-Yield Clinical Pearl Chip:** Background `#FEF2F0`, border 1px solid rgba(224, 90, 71, 0.3), text `#E05A47`, font `label-caps`. Preceded by an alert bullet or mini beacon.
- **Histology Marker:** Background `#F0F5F3`, text `#115E59`, border 1px solid transparent, font `code-clinical`.

### Clinical Callout Panels
- **USMLE High-Yield Pearl Box:** Left accent border (3px solid `#E05A47`), background `#FFFFFF`, inner padding `space-md` (16px), outer border 1px solid `#E2DDD5` (top, right, bottom). Header features Newsreader medium italic title followed by Inter clean body text.
- **Differential Warning / Red Flag:** Tinted background `rgba(224, 90, 71, 0.05)`, border 1px solid rgba(224, 90, 71, 0.25), text `#1E293B`.

### Medical Media & Image Viewer Cards
- Pure `#FFFFFF` background, 1px solid `#E2DDD5`. Contains the high-res endoscopic/histopathology slide.
- **Figure Caption Footer:** Inset metadata row displaying magnification (e.g., `40x H&E`), biopsy site, and diagnostic findings formatted in `body-sm` (`#475569`).

### Form Controls & Filter Bars
- **Search Inputs:** Floating full-width or centered search bar with `#FFFFFF` background, border 1px solid `#E2DDD5`, placeholder text `#475569`. Active focus: border `#115E59` with subtle outline halo.
- **Checkboxes & Radios:** Sharp square/circle hybrid, border 1.5px solid `#475569`, filled `#115E59` when checked.

### Content Lists & Differentials
- Unordered lists use subtle square en-dash markers in `#115E59` instead of circular bullets.
- Ordered diagnostic algorithm steps feature bracketed numerical counters (e.g., `[01]`, `[02]`) in `code-clinical` style.