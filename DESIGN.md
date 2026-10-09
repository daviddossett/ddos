---
name: "My portfolio"
description: "A quiet, text-first portfolio for David Dossett."
colors:
  canvas: "oklch(0.955 0.019 138)"
  canvas-dark: "oklch(0.145 0 0)"
  ink: "oklch(0.235 0.028 143)"
  ink-dark: "oklch(1 0 0 / 90%)"
  muted: "oklch(0.425 0.036 143)"
  muted-dark: "oklch(1 0 0 / 70%)"
  tertiary: "oklch(0.55 0.036 140)"
  tertiary-dark: "oklch(1 0 0 / 50%)"
  quaternary: "oklch(0.71 0.036 138)"
  quaternary-dark: "oklch(1 0 0 / 32%)"
  metadata: "oklch(0.475 0.036 143)"
  metadata-dark: "oklch(1 0 0 / 60%)"
  hover: "oklch(0.922 0.026 138)"
  hover-dark: "oklch(0.2 0 0)"
  accent: "oklch(0.671 0.212 34.5)"
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
  interactive: "8px"
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
    textColor: "{colors.ink}"
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
- Complete light and dark color modes

## 2. Colors

Light mode uses a sage-tinted ramp: every light role shares a gentle green hue (138–143) so the canvas, text, and hover fills read as one family. Dark mode keeps its neutral ramp. The brand orange sits opposite sage on the color wheel and stays sparse: selection feedback and the underline of a hovered prose or footer link. Neither mode uses pure white or pure black as the dominant canvas.

### Primary
- **Moss Ink** (`oklch(0.235 0.028 143)`, #162215): Primary text and interactive labels. 14.6:1 on the canvas.
- **Night Ink** (`oklch(1 0 0 / 90%)`): Primary text in dark mode.

### Neutral
- **Sage Canvas** (`oklch(0.955 0.019 138)`, #eaf3e7): Light-mode page background.
- **Night Canvas** (`oklch(0.145 0 0)`): Dark-mode page background.
- **Secondary Fern** (`oklch(0.425 0.036 143)`, #435442): Supporting copy in light mode. 7.2:1 on the canvas.
- **Secondary Silver** (`oklch(1 0 0 / 70%)`): Supporting copy in dark mode.
- **Metadata Fern** (`oklch(0.475 0.036 143)`, #51624f / `oklch(1 0 0 / 60%)`): Project metadata and footer links. 5.8:1 on the canvas, 5.3:1 on the hover fill.
- **Tertiary Lichen** (`oklch(0.55 0.036 140)` / `oklch(1 0 0 / 50%)`): Available for subdued structure.
- **Quaternary Lichen** (`oklch(0.71 0.036 138)`, #97a792 / `oklch(1 0 0 / 32%)`): Non-text decoration only because it does not meet this site's AA requirement at 16px.
- **Sage Hover** (`oklch(0.922 0.026 138)`, #ddead9): Hover feedback for linked rows.
- **Night Hover** (`oklch(0.2 0 0)`): Dark-mode hover feedback.
- **Brand Orange** (`oklch(0.671 0.212 34.5)`, #fc532a): Selection feedback and hovered-link underlines only. Never used for text.

### Named Rules

**The Content-First Rule.** Color clarifies state and hierarchy; it does not decorate sections.

## 3. Typography

**Display Font:** Sans, a self-hosted Inter Variable build (with metrically adjusted Arial fallback)
**Body Font:** Sans, a self-hosted Inter Variable build (with metrically adjusted Arial fallback)

**Character:** Familiar platform typography keeps attention on the work. Weight, tone, and spacing create hierarchy instead of a separate display face.

### Hierarchy
- **Title** (500, 1rem, 1.5): Name and section titles.
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
- **Corner Style:** Small interactive radius (8px), only on linked rows.
- **Background:** Transparent at rest, quiet tonal fill on hover.
- **Shadow Strategy:** None.
- **Border:** None.
- **Internal Padding:** 12px on all sides at desktop sizes.

### Navigation
- The header uses a 48px circular portrait, followed by 32px of space and a two-line identity block with the name in primary ink and the role in muted ink.
- Text links inherit surrounding typography. Prose links use a 1px dotted underline with a 4px offset, then shift to primary ink with a brand orange underline on hover. Project rows use a full-row hover fill.
- The footer presents Twitter, GitHub, and LinkedIn as muted, underlined links in a horizontal row with 32px between links and the standard section gap above it.
- All interactive elements use a visible 2px neutral focus outline with a 2px offset.

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
