---
name: "My portfolio"
description: "A quiet, text-first portfolio for David Dossett."
colors:
  canvas: "oklch(0.955 0.028 185)"
  canvas-dark: "oklch(0.215 0.045 205)"
  ink: "oklch(0.25 0.045 205)"
  ink-dark: "oklch(0.95 0.015 180)"
  muted: "oklch(0.42 0.045 205)"
  muted-dark: "oklch(0.82 0.03 185)"
  quaternary: "oklch(0.74 0.03 195)"
  quaternary-dark: "oklch(0.47 0.045 200)"
  metadata: "oklch(0.47 0.04 205)"
  metadata-dark: "oklch(0.76 0.04 190)"
  hover: "oklch(0.915 0.042 182)"
  hover-dark: "oklch(0.265 0.052 203)"
  accent: "oklch(0.52 0.18 35)"
  accent-dark: "oklch(0.77 0.14 45)"
  selection: "oklch(0.671 0.212 34.5)"
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

**Spruce & Persimmon.** Neutrals are tinted toward a Pacific Northwest evergreen (hue 180–205) instead of gray: a sea-glass canvas by day and a deep spruce canvas by night. A persimmon accent, derived from the original brand orange, carries the personality. Every text role meets WCAG AA on both the canvas and the hover fill.

### Primary
- **Spruce Ink** (`oklch(0.25 0.045 205)`): Primary text and interactive labels.
- **Fog Ink** (`oklch(0.95 0.015 180)`): Primary text in dark mode.

### Accent
- **Persimmon** (`oklch(0.52 0.18 35)` / dark `oklch(0.77 0.14 45)`): Section titles, link underlines (45% alpha at rest, solid on hover), hovered project titles, focus outlines, the avatar ring, and the 404 divider.
- **Brand Orange** (`oklch(0.671 0.212 34.5)`): Light-mode text selection. Dark mode selects with the dark persimmon.

### Neutral
- **Sea Glass** (`oklch(0.955 0.028 185)`): Light-mode page background.
- **Evergreen Night** (`oklch(0.215 0.045 205)`): Dark-mode page background.
- **Secondary Spruce** (`oklch(0.42 0.045 205)` / `oklch(0.82 0.03 185)`): Supporting copy.
- **Metadata Spruce** (`oklch(0.47 0.04 205)` / `oklch(0.76 0.04 190)`): Project metadata and footer links.
- **Quaternary** (`oklch(0.74 0.03 195)` / `oklch(0.47 0.045 200)`): Non-text decoration only.
- **Tide Hover** (`oklch(0.915 0.042 182)` / `oklch(0.265 0.052 203)`): Hover fill for linked rows.

### Named Rules

**The Content-First Rule.** Color clarifies state and hierarchy; the accent marks structure and interaction, never whole surfaces.

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
- The header uses a 48px circular portrait with a 2px persimmon ring (offset by 2px of canvas), followed by 32px of space and a two-line identity block with the name in primary ink and the role in muted ink.
- Text links inherit surrounding typography. Prose links use a 2px translucent persimmon underline with a 2px offset, then shift to primary ink with a solid persimmon underline on hover. Project rows use a full-row tide hover fill and the title turns persimmon.
- The footer presents Twitter, GitHub, and LinkedIn as muted, underlined links in a horizontal row with 32px between links and the standard section gap above it.
- All interactive elements use a visible 2px persimmon focus outline with a 2px offset.

### Project Entry

Project entries pair a regular-weight title with one line of muted context. On mobile, rows are 48px tall with 12px horizontal padding and a 28px gap. At 640px and wider, each row is 668px wide within the 644px content measure, created by 12px padding and -12px horizontal margins. Desktop rows are 72px tall with a 16px gap. Only entries with a destination receive hover and focus treatments.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page measure at 692px with 24px horizontal padding.
- **Do** separate major sections by 96–128px and keep related lines within 8–16px.
- **Do** use the primary and secondary spruce roles for readable hierarchy, and reserve persimmon for titles and interaction.
- **Do** preserve visible keyboard focus and reduced-motion behavior.

### Don't:
- **Don't** use oversized case-study imagery.
- **Don't** use identical card grids.
- **Don't** add decorative portfolio tropes or inflated marketing copy.
- **Don't** use visual effects that compete with the content.
- **Don't** add shadows, glass effects, gradient text, or colored side stripes.
