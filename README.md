# ddossett.com

Source for [ddossett.com](https://ddossett.com), the personal website of David Dossett — a product designer at GitHub. The site is a single, text-first page that introduces David, lists selected projects, and summarizes his professional experience. It is built with [Astro](https://astro.build) and deployed as a static site to GitHub Pages.

## Tech stack

- **[Astro](https://astro.build) 7** — static site generation with `.astro` components
- **TypeScript** — strict mode via `astro/tsconfigs/strict`, type-checked with [`@astrojs/check`](https://www.npmjs.com/package/@astrojs/check)
- **Plain CSS** — a single global stylesheet in `src/styles/global.css`
- **Inter Variable** — self-hosted from `public/fonts/`
- **GitHub Actions + GitHub Pages** — build and deployment

There are no Astro integrations, UI frameworks, or CSS frameworks.

## Prerequisites

- **Node.js 22.12.0 or later** (required by Astro 7). CI uses Node 24.
- **npm 9.6.5 or later**. The repository includes a `package-lock.json`, so use npm.

## Getting started

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm install
npm run dev
```

The dev server prints a local URL (Astro's default is `http://localhost:4321`). In development, page titles are suffixed with `(Dev)` so the tab is easy to tell apart from production.

## npm scripts

| Script            | Command         | What it does                                                                 |
| ----------------- | --------------- | ---------------------------------------------------------------------------- |
| `npm run dev`     | `astro dev`     | Starts the local dev server with hot reloading.                              |
| `npm start`       | `astro dev`     | Alias for `npm run dev`.                                                     |
| `npm run lint`    | `astro check`   | Runs Astro's diagnostics and TypeScript type checking across the project.    |
| `npm run build`   | `astro build`   | Builds the production site into `dist/`.                                     |
| `npm run preview` | `astro preview` | Serves the contents of `dist/` locally. Run `npm run build` first.           |

Before opening a pull request, run `npm run lint` and `npm run build` — these are the same checks CI runs before deploying.

## Project structure

```text
.
├── .github/
│   ├── skills/impeccable/   # Agent skill for frontend design work
│   └── workflows/astro.yml  # Build + deploy to GitHub Pages
├── public/                  # Copied to the build output as-is
│   ├── CNAME                # Custom domain: ddossett.com
│   ├── favicon.ico
│   ├── favicon.png
│   ├── fonts/               # InterVariable.woff2 and its license
│   └── images/              # david-avatar.webp
├── src/
│   ├── components/
│   │   ├── Header.astro     # Avatar, name, and role
│   │   ├── Projects.astro   # Selected projects list
│   │   ├── Experience.astro # Work history list
│   │   └── Footer.astro     # Twitter, GitHub, and LinkedIn links
│   ├── layouts/
│   │   └── Layout.astro     # HTML shell, metadata, Open Graph/Twitter tags, font preload
│   ├── pages/
│   │   ├── index.astro      # Home page (About, Projects, Experience)
│   │   └── 404.astro        # Not-found page
│   └── styles/
│       └── global.css       # All site styles, font faces, light/dark themes
├── astro.config.mjs         # Sets the canonical site URL
├── DESIGN.md                # Design system
├── PRODUCT.md               # Product context
├── package.json
└── tsconfig.json
```

Astro uses file-based routing: each file in `src/pages/` becomes a route (`index.astro` → `/`, `404.astro` → `/404.html`).

## Editing content

The site has no CMS, Markdown collection, or blog. All content lives directly in Astro components:

- **About copy** — edit the intro paragraphs in `src/pages/index.astro`.
- **Projects** — add, remove, or reorder entries in the `projects` array at the top of `src/components/Projects.astro`. Each entry needs a `title`, a one-line `description`, and an `href`.
- **Experience** — edit the `experiences` array at the top of `src/components/Experience.astro`. Each entry has a `title`, `company`, and `description` (used for the date range).
- **Name, role, and avatar** — `src/components/Header.astro`; the image lives at `public/images/david-avatar.webp`.
- **Social links** — `src/components/Footer.astro`.
- **Page title and description defaults** — the `title` and `description` props in `src/layouts/Layout.astro`.

### Adding a page

Create a new `.astro` file in `src/pages/` and wrap it in the shared layout to get the header, metadata, and global styles:

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Page title" description="Short description">
  <main>
    <!-- content -->
  </main>
</Layout>
```

### Styling

All styles live in `src/styles/global.css`, which is imported by the layout. Follow the tokens and rules in [DESIGN.md](DESIGN.md) — keep the narrow page measure, weight-led type hierarchy, flat surfaces, and support for both light and dark modes. Respect the accessibility expectations in [PRODUCT.md](PRODUCT.md): WCAG AA contrast, visible focus states, full keyboard access, and reduced-motion preferences.

## Design and product docs

- **[PRODUCT.md](PRODUCT.md)** — who the site is for, what it should accomplish, brand personality, design principles, and accessibility commitments.
- **[DESIGN.md](DESIGN.md)** — the design system: color, typography, spacing, and component tokens, plus do's and don'ts for keeping the site quiet and text-first.

Read both before making visual or copy changes.

## Build and deployment

`npm run build` writes a fully static site to `dist/`. The canonical URL (`https://ddossett.com`) is set via `site` in `astro.config.mjs` and is used to generate absolute `og:url` values.

Deployment is handled by the [Deploy to Pages](.github/workflows/astro.yml) GitHub Actions workflow:

1. Runs on every push to `main`, or manually via **workflow_dispatch**.
2. Installs dependencies with `npm ci` on Node 24.
3. Runs `npm run lint`, then `npm run build`.
4. Uploads `dist/` and deploys it to GitHub Pages.

The custom domain is configured by `public/CNAME`, which Astro copies into the build output. A failing lint or build blocks the deploy, so run both locally before merging.
