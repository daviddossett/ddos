# ddossett.com

Source for David Dossett's personal website, [ddossett.com](https://ddossett.com).
It is a single-page, text-first portfolio built with [Astro](https://astro.build)
and deployed as a static site to GitHub Pages.

## Tech stack

| Layer      | Tool                                                                 |
| ---------- | -------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build) `^7.1.3` (static output, no integrations) |
| Language   | TypeScript `^6.0.3` via Astro's `strict` tsconfig preset              |
| Checking   | [`@astrojs/check`](https://docs.astro.build/en/reference/cli-reference/#astro-check) `^0.9.9` |
| Styling    | Plain CSS in a single global stylesheet (`src/styles/global.css`)    |
| Typography | Self-hosted Inter variable font (`public/fonts/InterVariable.woff2`) |
| Hosting    | GitHub Pages with a custom domain (`public/CNAME`)                   |
| CI/CD      | GitHub Actions (`.github/workflows/astro.yml`)                        |

There is no CSS framework, UI library, or client-side JavaScript framework.

## Prerequisites

- **Node.js 22.12.0 or newer.** Astro 7 declares `"node": ">=22.12.0"` in its
  `engines` field. CI builds with **Node 24**, so that is the safest local
  match. The repo does not pin a version with `.nvmrc` or `.node-version`.
- **npm.** The repo ships a `package-lock.json`, and CI installs with `npm ci`.

## Getting started

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm install
npm run dev
```

Astro's dev server runs at <http://localhost:4321> by default. In dev mode the
page title gets a ` (Dev)` suffix (see `src/layouts/Layout.astro`), so you can
tell local and production tabs apart.

## npm scripts

All scripts are defined in `package.json`:

| Script            | Command         | What it does                                                                                  |
| ----------------- | --------------- | --------------------------------------------------------------------------------------------- |
| `npm run dev`     | `astro dev`     | Starts the local dev server with hot reloading.                                               |
| `npm start`       | `astro dev`     | Alias for `dev`.                                                                               |
| `npm run build`   | `astro build`   | Builds the production site into `dist/`.                                                      |
| `npm run preview` | `astro preview` | Serves the built `dist/` output locally. Run `build` first.                                   |
| `npm run lint`    | `astro check`   | Runs Astro's diagnostics and TypeScript type checking on `.astro` and `.ts` files. CI runs this before every build. |

## Project structure

```text
.
├── .github/
│   ├── workflows/astro.yml     # Build + deploy to GitHub Pages
│   └── skills/impeccable/      # Agent skill for design/UI work (not part of the site)
├── .impeccable/live/           # Local config for the impeccable skill's live mode
├── public/                     # Static assets, copied as-is to dist/
│   ├── CNAME                   # Custom domain: ddossett.com
│   ├── favicon.ico
│   ├── favicon.png             # 64×64 icon referenced by both pages
│   ├── fonts/
│   │   ├── InterVariable.woff2 # Inter variable font, preloaded in Layout
│   │   └── LICENSE.txt         # Font license
│   └── images/
│       └── david-avatar.webp   # Header avatar
├── src/
│   ├── components/
│   │   ├── Header.astro        # Avatar, name, and role
│   │   ├── Projects.astro      # "Projects" list (data defined inline)
│   │   ├── Experience.astro    # "Experience" list (data defined inline)
│   │   └── Footer.astro        # Social links (Twitter, GitHub, LinkedIn)
│   ├── layouts/
│   │   └── Layout.astro        # <html>/<head>, meta + Open Graph tags, font preload, Header
│   ├── pages/
│   │   ├── index.astro         # Home page: About intro + Projects + Experience + Footer
│   │   └── 404.astro           # Standalone "not found" page (noindex)
│   └── styles/
│       └── global.css          # @font-face, color tokens, light/dark themes, all component styles
├── astro.config.mjs            # Sets site: "https://ddossett.com"
├── tsconfig.json               # Extends astro/tsconfigs/strict
├── DESIGN.md                   # Design system spec
├── PRODUCT.md                  # Product/brand brief
└── package.json
```

### Key files in more detail

- **`astro.config.mjs`** only sets `site`. `Layout.astro` uses that value to
  build absolute `og:url` values. There are no adapters or integrations, so
  Astro produces fully static HTML.
- **`src/layouts/Layout.astro`** accepts optional `title` (default
  `"David Dossett"`) and `description` (default `"Product designer at GitHub"`)
  props. It renders the `<head>` (description, Open Graph, and Twitter card
  meta), preloads the Inter font, and wraps page content in `.site-shell` with
  the `Header`.
- **`src/pages/404.astro`** does not use `Layout`. It imports `global.css`
  directly and renders its own minimal document with `<meta name="robots" content="noindex">`.
- **`src/styles/global.css`** is the only stylesheet. It defines:
  - A `Sans` face (Inter variable, weights 100–900) and a metric-matched
    `Sans Fallback` face based on local Arial to reduce layout shift.
  - OKLCH color tokens on `:root` (`--canvas`, `--ink`, `--muted`,
    `--quaternary`, `--metadata`, `--hover`, `--accent`, `--selection-ink`),
    overridden in a `prefers-color-scheme: dark` block. There is no manual
    theme toggle; the site follows the OS setting.
  - Every class used by the components (`.site-header`, `.entry`,
    `.entry-row`, `.entry-link`, `.section-title`, `.site-footer`, and so on).

## Content authoring

The site has no CMS, Markdown content collections, or data files. Content lives
directly in the components:

| To change…                        | Edit                                                                 |
| --------------------------------- | -------------------------------------------------------------------- |
| The "About" intro paragraphs      | `src/pages/index.astro`                                              |
| The Projects list                 | The `projects` array in `src/components/Projects.astro`              |
| The Experience list               | The `experiences` array in `src/components/Experience.astro`         |
| Name, role, or avatar in the header | `src/components/Header.astro` (avatar file: `public/images/david-avatar.webp`) |
| Social links                      | `src/components/Footer.astro`                                        |
| Default page title / meta description | Prop defaults in `src/layouts/Layout.astro`                      |

Each list is a typed array whose shape is defined by a local `interface`:

```ts
// src/components/Projects.astro
interface Project {
  title: string;
  description: string;
  href: string;
}

// src/components/Experience.astro
interface Experience {
  title: string;
  company: string;
  description: string; // used for the date range, e.g. "2021–2024"
}
```

Add, remove, or reorder entries in the array, and the list renders them in
order. External links in the components use `target="_blank"` with
`rel="noopener noreferrer"`; keep that pattern for new links.

**Adding a page:** create a `.astro` file in `src/pages/` (for example
`src/pages/notes.astro` becomes `/notes`), wrap it in `Layout`, and pass
`title` and `description` props if the defaults don't fit.

After editing, run `npm run lint` to catch type errors before you push.

## Design and product docs

Read these before making visual or copy changes:

- [**DESIGN.md**](./DESIGN.md): The design system spec. YAML front matter lists
  color, typography, radius, spacing, and component tokens, followed by
  written guidance on colors, typography, elevation, components, and do's and
  don'ts for this quiet, text-first portfolio.
- [**PRODUCT.md**](./PRODUCT.md): The product brief. It covers the audience,
  purpose, brand personality, anti-references, design principles, and
  accessibility expectations (WCAG AA contrast, full keyboard access, visible
  focus states, and reduced-motion support).

The color tokens in `DESIGN.md` mirror the CSS custom properties in
`src/styles/global.css`. If you change one, update the other.

## Build and deployment

### Building locally

```sh
npm run lint     # astro check
npm run build    # outputs static files to dist/
npm run preview  # serve dist/ locally to verify the production build
```

`dist/` and Astro's generated `.astro/` directory are gitignored.

### Deploying

Deployment is fully automated by `.github/workflows/astro.yml` ("Deploy to
Pages"):

1. **Triggers:** every push to `main`, or a manual run via `workflow_dispatch`.
2. **Build job** (`ubuntu-latest`):
   - Checks out the repo and sets up Node 24 with npm caching.
   - Runs `actions/configure-pages`.
   - `npm ci`
   - `npm run lint`. A failing check blocks the deploy.
   - `npm run build`
   - Uploads `./dist` as the Pages artifact.
3. **Deploy job:** publishes the artifact to the `github-pages` environment
   with `actions/deploy-pages`.

The workflow uses a `pages` concurrency group with `cancel-in-progress: false`,
so overlapping deploys queue rather than cancel each other.

The custom domain comes from `public/CNAME` (`ddossett.com`), which Astro copies
into `dist/` at build time. If the domain ever changes, update both
`public/CNAME` and `site` in `astro.config.mjs`.

There is no separate staging environment or preview-deploy workflow. To check
changes before merging, use `npm run build && npm run preview`.
