---
name: "My portfolio"
description: "A quiet, text-first portfolio for David Dossett."
colors:
  canvas: "oklch(1 0 0)"
  canvas-dark: "oklch(0 0 0)"
  ink: "oklch(0 0 0)"
  ink-dark: "oklch(1 0 0)"
  muted: "oklch(0.32 0 0)"
  muted-dark: "oklch(0.82 0 0)"
  metadata: "oklch(0.45 0 0)"
  metadata-dark: "oklch(0.72 0 0)"
  quaternary: "oklch(0.82 0 0)"
  quaternary-dark: "oklch(0.36 0 0)"
  rule: "oklch(0 0 0)"
  rule-dark: "oklch(1 0 0)"
  hover: "oklch(0 0 0)"
  hover-dark: "oklch(1 0 0)"
  hover-ink: "oklch(1 0 0)"
  hover-ink-dark: "oklch(0 0 0)"
  accent: "oklch(0.57 0.23 30)"
  accent-dark: "oklch(0.68 0.22 33)"
typography:
  title:
    fontFamily: "Sans, Sans Fallback, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Sans, Sans Fallback, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"cv01\", \"ss03\""
  label:
    fontFamily: "Sans, Sans Fallback, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  interactive: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "128px"
components:
  entry:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.interactive}"
    padding: "12px"
  entry-hover:
    backgroundColor: "{colors.hover}"
    textColor: "{colors.hover-ink}"
    rounded: "{rounded.interactive}"
    padding: "12px"
---

# Design System: My portfolio

## 1. Overview

**Creative North Star: "My portfolio"**

The system reads like a carefully maintained personal index: compact, direct, and calm. A narrow text column and generous vertical pauses make the hierarchy legible without oversized typography or decorative framing. The design rejects oversized case-study imagery, identical card grids, decorative portfolio tropes, inflated marketing copy, and effects that compete with the content.

**Key Characteristics:**
- A 692px page measure with 24px side padding
- Tight groups separated by 96–128px pauses
- Inter Variable with weight-led hierarchy
- Flat surfaces with subtle hover fills only on actionable rows
- Complete light and dark color modes in true black and white with one vermilion signal

## 2. Colors

**Ink & Signal.** True black and true white, a short high-contrast gray ramp, and one vermilion signal accent pushed from the original brand orange hue. Hierarchy comes from value contrast, not tint.

### Primary
- **Ink** (`oklch(0 0 0)` / `oklch(1 0 0)`): Primary text, section rules, and the inverted hover fill.
- **Canvas** (`oklch(1 0 0)` / `oklch(0 0 0)`): Page background.

### Neutral
- **Secondary Graphite** (`oklch(0.32 0 0)` / `oklch(0.82 0 0)`): Intro copy and role label. 12.7:1 / 12:1.
- **Metadata Graphite** (`oklch(0.45 0 0)` / `oklch(0.72 0 0)`): Project and experience metadata, footer links. 7.4:1 / 8.5:1.
- **Quaternary** (`oklch(0.82 0 0)` / `oklch(0.36 0 0)`): Non-text decoration only (resting footer underlines).

### Accent
- **Signal Vermilion** (`oklch(0.57 0.23 30)` / `oklch(0.68 0.22 33)`): Prose link underlines, focus rings, selection, and the full-stop mark after the name. Meets 4.5:1 against its canvas in both modes so it can carry text if needed.

### Named Rules

**The Content-First Rule.** Color clarifies state and hierarchy; it does not decorate sections.

**The One-Signal Rule.** Vermilion is the only hue on the page. Never introduce a second accent or tint the neutrals.

**The Inversion Rule.** Interactive rows invert (ink fill, canvas text) on hover and keyboard focus instead of using a soft tonal fill.

## 3. Typography

**Display Font:** Sans, a self-hosted Inter Variable build (with metrically adjusted Arial fallback)
**Body Font:** Sans, a self-hosted Inter Variable build (with metrically adjusted Arial fallback)

**Character:** Familiar platform typography keeps attention on the work. Weight, tone, and spacing create hierarchy instead of a separate display face.

### Hierarchy
- **Title** (650, 1rem, 1.5, -0.011em): Name and section titles.
- **Body** (400, 1rem, 1.5): Descriptions and narrative copy, capped at the 692px page measure. Introductory prose uses 1.65 line-height.
- **Label** (500, 1rem, 1.5): Section headings and role labels.

### Named Rules

**The One-Size Rule.** Most text stays at 1rem; hierarchy comes from weight, color, grouping, and space.

## 4. Elevation

The system is flat. Depth comes from tonal hover feedback and generous separation, not shadows or layered cards.

### Named Rules

**The Flat-by-Default Rule.** Do not add shadows to page sections or list entries.

## 5. Components

### Cards / Containers
- **Corner Style:** Square (0px). Crisp edges match the black/white system.
- **Background:** Transparent at rest, full ink inversion on hover and focus.
- **Shadow Strategy:** None.
- **Border:** None.
- **Internal Padding:** 12px on all sides at desktop sizes.

### Navigation
- The header uses a 48px circular portrait, followed by 32px of space and a two-line identity block with the name in primary ink and the role in muted ink.
- Text links inherit surrounding typography. Prose links are ink with a 2px vermilion underline at a 3px offset; it thickens to 3px on hover. Project rows invert on hover. Section titles sit under a 1px ink rule. The portrait is rendered in grayscale.
- The footer presents Twitter, GitHub, and LinkedIn as muted, underlined links in a horizontal row with 32px between links and the standard section gap above it.
- All interactive elements use a visible 2px vermilion focus outline with a 2px offset.

### Project Entry

Project entries pair a regular-weight title with one line of muted context. On mobile, rows are 48px tall with 12px horizontal padding and a 28px gap. At 640px and wider, each row is 668px wide within the 644px content measure, created by 12px padding and -12px horizontal margins. Desktop rows are 72px tall with a 16px gap. Only entries with a destination receive hover and focus treatments.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page measure at 692px with 24px horizontal padding.
- **Do** separate major sections by 96–128px and keep related lines within 8–16px.
- **Do** use the primary and secondary neutral roles for readable light-mode hierarchy.
- **Do** preserve visible keyboard focus and reduced-motion behavior.

### Don't:
- **Don't** use oversized case-study imagery.
- **Don't** use identical card grids.
- **Don't** add decorative portfolio tropes or inflated marketing copy.
- **Don't** use visual effects that compete with the content.
- **Don't** add shadows, glass effects, gradient text, or colored side stripes.
