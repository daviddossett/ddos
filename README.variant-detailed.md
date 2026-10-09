# ddossett.com

Source for [ddossett.com](https://ddossett.com), the personal website of David
Dossett, a product designer at GitHub. The site is built with
[Astro](https://astro.build), generated as fully static HTML/CSS, and deployed
to GitHub Pages.

The site is a single, text-first page: a short intro, a list of selected
projects, and a work history, followed by social links. There is no client-side
JavaScript framework, CMS, or database.

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Editing content](#editing-content)
- [Styling and design](#styling-and-design)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Design and product docs](#design-and-product-docs)

## Features

- **Single-page portfolio** with About, Projects, and Experience sections.
- **Static output** — `astro build` produces plain HTML/CSS in `dist/`.
- **Automatic light and dark themes** via `prefers-color-scheme` and CSS custom
  properties using OKLCH colors.
- **Self-hosted Inter variable font** (`public/fonts/InterVariable.woff2`),
  preloaded and paired with a metric-matched Arial fallback to reduce layout
  shift.
- **SEO and social metadata** — page title, description, Open Graph, and
  Twitter card tags generated in the shared layout, with canonical URLs derived
  from the configured `site`.
- **Dev indicator** — page titles get a `(Dev)` suffix when running the dev
  server.
- **Custom 404 page** marked `noindex`.
- **Accessible markup** — labelled landmark sections, semantic lists, and
  visible `:focus-visible` styles for links.

## Tech stack

| Area         | Tool                                                         |
| ------------ | ------------------------------------------------------------ |
| Framework    | [Astro](https://astro.build) 7                               |
| Language     | TypeScript (strict, via `astro/tsconfigs/strict`)            |
| Type checks  | [`@astrojs/check`](https://docs.astro.build/en/reference/cli-reference/#astro-check) |
| Styling      | Plain global CSS (`src/styles/global.css`)                   |
| Hosting      | GitHub Pages (custom domain `ddossett.com`)                  |
| CI/CD        | GitHub Actions (`.github/workflows/astro.yml`)               |

## Project structure

```text
.
├── .github/
│   ├── skills/impeccable/      # Agent skill used for design/UI work
│   └── workflows/astro.yml     # Build + deploy to GitHub Pages
├── public/                     # Copied verbatim into the build output
│   ├── CNAME                   # Custom domain for GitHub Pages
│   ├── favicon.ico / .png
│   ├── fonts/InterVariable.woff2 (+ LICENSE.txt)
│   └── images/david-avatar.webp
├── src/
│   ├── components/
│   │   ├── Header.astro        # Avatar, name, and role
│   │   ├── Projects.astro      # Selected projects list (data inline)
│   │   ├── Experience.astro    # Work history list (data inline)
│   │   └── Footer.astro        # Twitter, GitHub, LinkedIn links
│   ├── layouts/
│   │   └── Layout.astro        # <head> metadata, font preload, site shell
│   ├── pages/
│   │   ├── index.astro         # Home page (About + Projects + Experience)
│   │   └── 404.astro           # Not-found page
│   └── styles/
│       └── global.css          # Fonts, color tokens, theme, layout styles
├── astro.config.mjs            # Astro config (sets `site`)
├── tsconfig.json
├── DESIGN.md                   # Design system tokens and guidance
├── PRODUCT.md                  # Audience, purpose, and brand principles
└── package.json
```

## Getting started

### Prerequisites

- **Node.js 24** (matches the version used in CI)
- **npm** (a `package-lock.json` is committed)

### Install and run

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm install
npm run dev
```

The dev server starts at <http://localhost:4321> by default, with hot reload.

## Scripts

| Command           | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Start the Astro dev server.                                  |
| `npm start`       | Alias for `npm run dev`.                                     |
| `npm run lint`    | Run `astro check` for TypeScript and Astro diagnostics.      |
| `npm run build`   | Build the production site into `dist/`.                      |
| `npm run preview` | Serve the built `dist/` locally to verify a production build.|

### Recommended workflow

1. Run `npm run dev` and make changes in `src/`.
2. Run `npm run lint` before committing — CI runs the same check and will fail
   the deploy if it doesn't pass.
3. Optionally run `npm run build && npm run preview` to verify the production
   output.

## Editing content

All content lives in Astro components; there is no separate content collection.

| To change…                 | Edit                                                    |
| -------------------------- | ------------------------------------------------------- |
| Intro / About copy         | `src/pages/index.astro`                                 |
| Projects list              | `projects` array in `src/components/Projects.astro`     |
| Work history               | `experiences` array in `src/components/Experience.astro`|
| Name, role, avatar         | `src/components/Header.astro`, `public/images/`         |
| Social links               | `src/components/Footer.astro`                           |
| Default title/description  | Props defaults in `src/layouts/Layout.astro`            |

Projects are typed as `{ title, description, href }` and experiences as
`{ title, company, description }`; adding an item to either array renders a new
row automatically.

## Styling and design

- Styles are global and live in `src/styles/global.css`; components use shared
  class names (e.g. `entry`, `entry-row`, `section-title`) rather than scoped
  styles.
- Color tokens (`--canvas`, `--ink`, `--muted`, `--metadata`, `--hover`,
  `--accent`, …) are defined on `:root` and overridden in a
  `prefers-color-scheme: dark` media query.
- See [`DESIGN.md`](DESIGN.md) for the full token set (colors, typography,
  radii, spacing) and [`PRODUCT.md`](PRODUCT.md) for audience, voice, and
  accessibility goals.

## Deployment

Deployment is fully automated by
[`.github/workflows/astro.yml`](.github/workflows/astro.yml):

- **Triggers:** every push to `main`, or manually via `workflow_dispatch`.
- **Build job:** checks out the repo, sets up Node 24 with npm caching, runs
  `npm ci`, `npm run lint`, and `npm run build`, then uploads `./dist` as a
  Pages artifact.
- **Deploy job:** publishes the artifact with `actions/deploy-pages` to the
  `github-pages` environment.

Only one Pages deployment runs at a time (`concurrency: pages`), and in-progress
runs are not cancelled.

## Configuration

- **Site URL:** `site: "https://ddossett.com"` in `astro.config.mjs`. Used to
  build absolute `og:url` values; update it if the domain changes.
- **Custom domain:** `public/CNAME` contains `ddossett.com` and is copied to
  the build output for GitHub Pages.
- **Environment variables:** none are required.

## Design and product docs

- [`PRODUCT.md`](PRODUCT.md) — who the site is for, what it should accomplish,
  brand personality, anti-references, and accessibility expectations.
- [`DESIGN.md`](DESIGN.md) — design tokens and visual guidelines.
- `.github/skills/impeccable/` — an agent skill and supporting scripts for
  design critique, audits, and live UI iteration.
