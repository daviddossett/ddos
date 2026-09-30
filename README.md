# David Dossett — Portfolio

[ddossett.com](https://ddossett.com) is David Dossett's personal website: a
quiet, text-first portfolio of selected product work and professional
experience. It is built with [Astro](https://astro.build/) and published as a
static site on GitHub Pages.

## Quick start

This project uses npm. CI runs on Node.js 24.

```sh
npm install
npm run dev
```

Open the local URL printed by Astro.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run Astro and TypeScript checks |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build locally |

## How it is organized

- `src/pages/` defines the site routes.
- `src/components/` contains the portfolio's content sections.
- `src/layouts/` provides the shared document shell and metadata.
- `src/styles/` contains the global visual system and responsive behavior.
- `public/` stores fonts, images, icons, and the custom-domain configuration.

Product intent and design decisions are documented in [PRODUCT.md](PRODUCT.md)
and [DESIGN.md](DESIGN.md).

Pushes to `main` are checked, built, and deployed to GitHub Pages by
[the Astro workflow](.github/workflows/astro.yml).
