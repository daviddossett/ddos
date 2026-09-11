# David Dossett

Personal site for [David Dossett](https://ddossett.com), a product designer in Seattle. It is a quiet, text-first index of his current work, selected projects, and experience—not a case-study archive.

Live site: [ddossett.com](https://ddossett.com)

## What the site does

The homepage is a single scrolling page:

1. **Identity** — portrait, name, and role
2. **About** — current role on GitHub Copilot Labs, previous work on VS Code
3. **Projects** — linked rows for selected product work (Copilot app and CLI, Ace, GitHub Models, GitHub Spark, VS Code)
4. **Experience** — role, company, and years
5. **Footer** — Twitter, GitHub, and LinkedIn

Unknown URLs render a simple **404** page (`src/pages/404.astro`), marked `noindex`.

There is no blog, no internal project pages, and no client-side routing beyond Astro’s static pages.

## Notable UX

- **Light and dark color** follow the OS/browser `prefers-color-scheme`. There is no in-page theme switcher or persisted theme preference.
- **Narrow measure** (692px) with generous section spacing so the page scans as a list, not a card grid.
- **Project rows** are full-row links with a quiet hover fill. Experience rows are not links.
- **External links** open in a new tab with `noopener noreferrer`.
- **Keyboard focus** uses a visible 2px outline with offset.
- **Text selection** uses a brand-orange highlight; it is not used as a decorative accent on the layout.
- **Self-hosted Inter Variable** (font family name `Sans`) with a metrically adjusted Arial fallback.
- In local development, the document title is `David Dossett (Dev)` so the tab is easy to tell apart from production.

## Stack

| Piece | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 7, static HTML |
| Language | TypeScript (`astro/tsconfigs/strict`) |
| Styling | Hand-written CSS in `src/styles/global.css` (OKLCH tokens, no Tailwind) |
| Check | `astro check` (`npm run lint`) |
| Hosting | GitHub Pages + custom domain `ddossett.com` |

There is no unit/e2e test suite. CI runs the type/template check, then a production build.

`PRODUCT.md` and `DESIGN.md` at the repo root describe audience, voice, and the visual system. Treat the running CSS as source of truth if they drift.

## Run locally

Requires Node.js **24** (the version CI uses) and npm.

```sh
npm install
npm run dev
```

Astro’s default local URL is `http://localhost:4321`. `npm start` is the same as `npm run dev`.

### Build, preview, and check

```sh
npm run lint      # astro check
npm run build     # writes static files to dist/
npm run preview   # serve dist/ locally
```

## Deployment

Pushes to `main` run [`.github/workflows/astro.yml`](.github/workflows/astro.yml):

1. `npm ci`
2. `npm run lint`
3. `npm run build`
4. Upload `dist/` and deploy with GitHub Pages

The workflow also allows a manual `workflow_dispatch`. The custom domain is set in `public/CNAME` (`ddossett.com`); `astro.config.mjs` sets `site` to `https://ddossett.com` for canonical/Open Graph URLs.

## Project layout

```
src/pages/index.astro      Homepage sections
src/pages/404.astro        Not-found page
src/layouts/Layout.astro   Document shell, meta tags, font preload
src/components/            Header, Projects, Experience, Footer
src/styles/global.css      Tokens, layout, light/dark, hover/focus
public/                    Favicon, avatar, fonts, CNAME
```

To change copy, edit the homepage intro in `src/pages/index.astro`, the project list in `src/components/Projects.astro`, or the experience list in `src/components/Experience.astro`.
