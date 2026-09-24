# ddossett.com

Personal portfolio for David Dossett, built with [Astro](https://astro.build/) and deployed as a static site to GitHub Pages.

**Live site:** [ddossett.com](https://ddossett.com)

## Quick start

Use Node.js 24 to match CI. Astro requires Node.js 22.12 or newer.

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm ci
npm run dev
```

The development server runs at `http://localhost:4321` by default.

## Project structure

```text
src/
├── components/    Page sections and shared UI
├── layouts/       Document shell and page metadata
├── pages/         Astro routes, including the home and 404 pages
└── styles/        Global styles and design tokens
public/            Fonts, images, favicons, and the custom-domain CNAME
```

Portfolio content is defined directly in the Astro components:

- `src/pages/index.astro` — introduction and page composition
- `src/components/Projects.astro` — selected projects
- `src/components/Experience.astro` — work history
- `src/components/Footer.astro` — social links
- `src/layouts/Layout.astro` — default metadata and shared document markup

Product and visual direction are documented in `PRODUCT.md` and `DESIGN.md`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Astro development server |
| `npm run start` | Alias for the development server |
| `npm run lint` | Run Astro's type and project checks |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the production build locally |

To check a production build:

```sh
npm run lint
npm run build
npm run preview
```

## Configuration

- `astro.config.mjs` sets the canonical site URL to `https://ddossett.com`.
- `public/CNAME` configures the same custom domain for GitHub Pages.
- `tsconfig.json` extends Astro's strict TypeScript configuration.
- No application-specific environment variables are required.

## Deployment

`.github/workflows/astro.yml` deploys the site to GitHub Pages on pushes to `main` and through manual workflow dispatch. The workflow uses Node.js 24, installs dependencies with `npm ci`, runs `npm run lint` and `npm run build`, then publishes `dist/`.

## Contributing

Keep changes focused and preserve the site's content-first design direction. Before opening a pull request, run:

```sh
npm run lint
npm run build
```

There is no separate automated test suite; these are the repository's current validation gates. Update `PRODUCT.md` or `DESIGN.md` only when a change intentionally alters the documented product or design direction.
