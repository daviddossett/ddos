# ddossett.com

Source for [ddossett.com](https://ddossett.com), David Dossett's personal website. It's a single-page, text-first portfolio built with [Astro](https://astro.build) and deployed as a static site to GitHub Pages.

## Overview

The site gives designers, developers, hiring partners, and collaborators a concise view of David's current role, selected product work, and professional background. The home page has four parts:

- **Header** — portrait, name, and role
- **About** — a short introduction
- **Projects** — linked product work (defined in `src/components/Projects.astro`)
- **Experience** — role history (defined in `src/components/Experience.astro`)

There's also a custom `404` page. Light and dark modes follow the system `prefers-color-scheme` setting.

## Tech stack

- **[Astro](https://astro.build)** 7 — static site generation, no client-side framework
- **TypeScript** — strict mode via `astro/tsconfigs/strict`
- **[@astrojs/check](https://docs.astro.build/en/reference/cli-reference/#astro-check)** — type and template diagnostics
- **Plain CSS** — a single global stylesheet in `src/styles/global.css`
- **Inter Variable** — self-hosted from `public/fonts/` with a metrically adjusted fallback

## Project structure

```text
.
├── .github/workflows/astro.yml   # Build + deploy to GitHub Pages
├── public/
│   ├── CNAME                     # Custom domain (ddossett.com)
│   ├── favicon.ico / favicon.png
│   ├── fonts/                    # Inter Variable + license
│   └── images/                   # Portrait
├── src/
│   ├── components/               # Header, Projects, Experience, Footer
│   ├── layouts/Layout.astro      # HTML shell, metadata, global styles
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   └── 404.astro             # Not-found page
│   └── styles/global.css         # Design tokens and all styles
├── astro.config.mjs              # Site URL configuration
├── DESIGN.md                     # Design system
└── PRODUCT.md                    # Product intent and principles
```

## Setup

Prerequisites: Node.js and npm. CI builds with Node.js 24.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321. In development the page title is suffixed with `(Dev)`.

## Scripts

| Script            | Runs            | Purpose                                   |
| ----------------- | --------------- | ----------------------------------------- |
| `npm run dev`     | `astro dev`     | Start the local dev server                |
| `npm start`       | `astro dev`     | Alias for `dev`                           |
| `npm run lint`    | `astro check`   | Type-check `.astro` and `.ts` files       |
| `npm run build`   | `astro build`   | Build the production site into `dist/`    |
| `npm run preview` | `astro preview` | Serve the built `dist/` output locally    |

## Deployment

Deployment is handled by [`.github/workflows/astro.yml`](.github/workflows/astro.yml). On every push to `main` (or a manual `workflow_dispatch`), the workflow:

1. Installs dependencies with `npm ci` on Node.js 24
2. Runs `npm run lint`
3. Runs `npm run build`
4. Uploads `dist/` and deploys it to GitHub Pages

The custom domain is set by `public/CNAME`, and `site` in `astro.config.mjs` is `https://ddossett.com`.

## Editing content

- **Projects:** edit the `projects` array in `src/components/Projects.astro`.
- **Experience:** edit the `experiences` array in `src/components/Experience.astro`.
- **About copy:** edit `src/pages/index.astro`.

## Design and product docs

- [`DESIGN.md`](DESIGN.md) — color, typography, spacing, and component rules, plus do's and don'ts
- [`PRODUCT.md`](PRODUCT.md) — audience, purpose, brand personality, design principles, and accessibility expectations

Read both before making visual or copy changes.
