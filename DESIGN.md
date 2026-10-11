---
name: "My portfolio"
description: "A quiet, text-first portfolio for David Dossett."
colors:
  canvas: "oklch(0.984 0.003 70)"
  canvas-dark: "oklch(0.175 0.005 55)"
  ink: "oklch(0.225 0.008 50)"
  ink-dark: "oklch(0.925 0.007 75)"
  muted: "oklch(0.455 0.011 55)"
  muted-dark: "oklch(0.79 0.009 70)"
  quaternary: "oklch(0.8 0.008 60)"
  quaternary-dark: "oklch(0.42 0.008 55)"
  metadata: "oklch(0.525 0.01 58)"
  metadata-dark: "oklch(0.7 0.01 65)"
  hover: "oklch(0.958 0.005 65)"
  hover-dark: "oklch(0.215 0.007 55)"
  accent: "oklch(0.585 0.125 42)"
  accent-dark: "oklch(0.76 0.075 50)"
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

"Warm Graphite": neutral ramps tinted very slightly (chroma ≤ 0.011) toward the brand's own orange hue, so the page reads as graphite on soft stone rather than pure gray, without drifting into cream. A muted clay accent appears only at the moments of interaction: link underlines, focus rings, and text selection. It never fills a surface.

### Primary
- **Graphite Ink** (`oklch(0.225 0.008 50)`): Primary text and interactive labels. 16.3:1 on canvas.
- **Night Ink** (`oklch(0.925 0.007 75)`): Primary text in dark mode. 15:1 on canvas.

### Neutral
- **Stone Canvas** (`oklch(0.984 0.003 70)`): Light-mode page background.
- **Ember Canvas** (`oklch(0.175 0.005 55)`): Dark-mode page background, a warm charcoal rather than black.
- **Secondary** (`oklch(0.455 0.011 55)` / `oklch(0.79 0.009 70)`): Supporting copy. 7:1 / 9.6:1.
- **Metadata** (`oklch(0.525 0.01 58)` / `oklch(0.7 0.01 65)`): Project metadata and footer links. ≥4.7:1 on both canvas and hover fill.
- **Quaternary** (`oklch(0.8 0.008 60)` / `oklch(0.42 0.008 55)`): Non-text decoration only.
- **Hover** (`oklch(0.958 0.005 65)` / `oklch(0.215 0.007 55)`): Hover feedback for linked rows.

### Accent
- **Clay** (`oklch(0.585 0.125 42)` / `oklch(0.76 0.075 50)`): Hover underline and focus outline. At rest, underlines and selection use Clay mixed ~30% into the canvas.

### Named Rules

**The Content-First Rule.** Color clarifies state and hierarchy; it does not decorate sections.

**The Interaction-Only Accent Rule.** Clay appears only in response to the visitor (hover, focus, selection) or as a faint underline hint. Never as a fill, heading color, or badge.

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
- Text links inherit surrounding typography. Prose and footer links use a 2px solid underline with a 3px offset in a faint clay tint, which deepens to full Clay on hover while the text shifts to primary ink. Project rows use a full-row hover fill.
- The footer presents Twitter, GitHub, and LinkedIn as muted, underlined links in a horizontal row with 32px between links and the standard section gap above it.
- All interactive elements use a visible 2px Clay focus outline with a 2px offset. Color transitions take 160ms with an ease-out-quart curve and are removed under reduced motion.

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
