# ddossett.com

Source for [ddossett.com](https://ddossett.com), David Dossett's personal website. It's a single-page, text-first portfolio built with [Astro](https://astro.build) and deployed as a static site to GitHub Pages.

## Overview

The site gives designers, developers, hiring partners, and collaborators a short summary of David's current role, selected product work, and professional background. The goal and voice are described in [`PRODUCT.md`](PRODUCT.md), and the visual system is in [`DESIGN.md`](DESIGN.md).

The home page is made up of these parts:

| Section        | Source                                                       | Content                                              |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| Header         | [`src/components/Header.astro`](src/components/Header.astro) | Avatar, name, and role                               |
| About          | [`src/pages/index.astro`](src/pages/index.astro)             | Short intro with links to current and past work      |
| Projects       | [`src/components/Projects.astro`](src/components/Projects.astro) | Selected projects with titles, descriptions, and links |
| Experience     | [`src/components/Experience.astro`](src/components/Experience.astro) | Roles, companies, and dates                     |
| Footer         | [`src/components/Footer.astro`](src/components/Footer.astro) | Twitter, GitHub, and LinkedIn links                  |

There's also a custom `404` page at [`src/pages/404.astro`](src/pages/404.astro).

## Features

- **Fully static output.** `astro build` writes plain HTML and CSS to `dist/`. No client-side framework is used.
- **Light and dark themes.** Colors switch automatically with `prefers-color-scheme`. All colors are defined in OKLCH.
- **Self-hosted font.** Inter Variable is served from `public/fonts/` and preloaded in the base layout.
- **SEO and social metadata.** [`Layout.astro`](src/layouts/Layout.astro) sets the page title, description, Open Graph, and Twitter card tags. Canonical URLs come from the `site` value in `astro.config.mjs`.
- **Dev title marker.** In development, page titles end with `(Dev)` (based on `import.meta.env.DEV`), so local tabs are easy to tell apart from production.

## Tech stack

| Area          | Tool                                                               |
| ------------- | ------------------------------------------------------------------ |
| Framework     | [Astro](https://astro.build) `^7.1.3`                              |
| Language      | TypeScript (strict config via `astro/tsconfigs/strict`)            |
| Type checking | [`@astrojs/check`](https://docs.astro.build/en/reference/cli-reference/#astro-check) |
| Styling       | Plain CSS in [`src/styles/global.css`](src/styles/global.css)      |
| Font          | [Inter](https://github.com/rsms/inter), licensed under the SIL OFL 1.1 |
| Hosting       | GitHub Pages, deployed with GitHub Actions                         |

## Getting started

### Prerequisites

- **Node.js 22.12.0 or later.** This is the minimum Astro 7 supports. CI uses Node 24.
- **npm.** The repo includes a `package-lock.json`.

### Install and run

```sh
npm install
npm run dev
```

Astro starts a dev server, at <http://localhost:4321> by default. Edits to files in `src/` reload automatically.

### Build and preview

```sh
npm run lint     # type-check .astro and .ts files
npm run build    # write the production site to dist/
npm run preview  # serve dist/ locally
```

## Available scripts

All scripts are defined in [`package.json`](package.json).

| Command           | Runs            | Description                                           |
| ----------------- | --------------- | ----------------------------------------------------- |
| `npm run dev`     | `astro dev`     | Start the local dev server with hot reload            |
| `npm start`       | `astro dev`     | Alias for `npm run dev`                               |
| `npm run build`   | `astro build`   | Build the static site into `dist/`                    |
| `npm run preview` | `astro preview` | Serve the production build locally                    |
| `npm run lint`    | `astro check`   | Type-check the project and run Astro diagnostics      |

The project doesn't have an automated test suite. `npm run lint` and `npm run build` are the checks that CI runs.

## Project structure

```text
.
├── .github/
│   ├── skills/impeccable/   # Agent skill used for design work on this repo
│   └── workflows/astro.yml  # Build and deploy to GitHub Pages
├── public/                  # Static files copied to the site root as-is
│   ├── CNAME                # Custom domain (ddossett.com)
│   ├── favicon.ico
│   ├── favicon.png
│   ├── fonts/               # InterVariable.woff2 and its license
│   └── images/              # david-avatar.webp
├── src/
│   ├── components/          # Header, Projects, Experience, Footer
│   ├── layouts/Layout.astro # Base HTML shell, metadata, font preload
│   ├── pages/
│   │   ├── index.astro      # Home page (/)
│   │   └── 404.astro        # Not-found page
│   └── styles/global.css    # Global styles, font faces, color tokens
├── astro.config.mjs         # Astro config (sets `site`)
├── tsconfig.json            # Extends astro/tsconfigs/strict
├── DESIGN.md                # Design system: colors, type, spacing, components
└── PRODUCT.md               # Audience, purpose, brand, design principles
```

## Updating content

Content is written directly in the components. There's no CMS and no content collection.

- **Projects:** edit the `projects` array in [`src/components/Projects.astro`](src/components/Projects.astro). Each entry has a `title`, `description`, and `href`.
- **Experience:** edit the `experiences` array in [`src/components/Experience.astro`](src/components/Experience.astro). Each entry has a `title`, `company`, and `description` (the date range).
- **About text:** edit the intro section in [`src/pages/index.astro`](src/pages/index.astro).
- **Social links:** edit [`src/components/Footer.astro`](src/components/Footer.astro).
- **Default title and description:** change the `Layout` prop defaults in [`src/layouts/Layout.astro`](src/layouts/Layout.astro).

Before making visual changes, read [`DESIGN.md`](DESIGN.md) and [`PRODUCT.md`](PRODUCT.md). They describe the color tokens, type scale, spacing, and the guidelines the site follows (for example, no oversized imagery or identical card grids, and WCAG AA contrast).

## Configuration

| File                 | Purpose                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------- |
| `astro.config.mjs`   | Sets `site: "https://ddossett.com"`, which Astro uses to build absolute URLs such as `og:url` |
| `tsconfig.json`      | Extends Astro's strict TypeScript preset and excludes `dist`                                |
| `public/CNAME`       | Custom domain for GitHub Pages                                                              |

The site doesn't need any environment variables. The only environment value it reads is Astro's built-in `import.meta.env.DEV`.

## Deployment

The [**Deploy to Pages**](.github/workflows/astro.yml) workflow deploys the site to GitHub Pages. It runs on every push to `main` and can also be started by hand with `workflow_dispatch`.

1. **Build job** (Ubuntu, Node 24): runs `npm ci`, then `npm run lint`, then `npm run build`, and uploads `./dist` as the Pages artifact.
2. **Deploy job:** publishes the artifact to the `github-pages` environment with `actions/deploy-pages`.

`public/CNAME` is copied into the build, so the site is served at `ddossett.com`. If `npm run lint` or `npm run build` fails, nothing is deployed.

## License

The repository doesn't include a license file for the site's source or content. The bundled Inter font is distributed under the SIL Open Font License 1.1; see [`public/fonts/LICENSE.txt`](public/fonts/LICENSE.txt).
