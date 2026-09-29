# ddossett.com

David Dossett's personal website. The project uses Astro to generate a static
site deployed to GitHub Pages.

## Prerequisites

- Node.js 24 (the version used by CI)
- npm

## Setup

```sh
npm ci
npm run dev
```

The development server prints the local URL when it starts.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server. |
| `npm run start` | Alias for `npm run dev`. |
| `npm run lint` | Run `astro check` against the project. |
| `npm run build` | Generate the production site in `dist/`. |
| `npm run preview` | Serve the generated `dist/` site locally. |

To validate a production build locally:

```sh
npm run lint
npm run build
npm run preview
```

## Project layout

```text
.
|-- public/                 Static assets copied into the built site
|-- src/
|   |-- components/        Page sections and shared UI
|   |-- layouts/           Shared document structure and metadata
|   |-- pages/             File-based routes, including the 404 page
|   `-- styles/            Global styles
|-- astro.config.mjs       Astro configuration and canonical site URL
|-- package.json           npm scripts and dependencies
`-- tsconfig.json          Astro strict TypeScript configuration
```

`src/pages/index.astro` composes the home page from components inside the shared
layout. Astro writes the static production output to `dist/`; files in `public/`
are served from the site root.

## Deployment

`.github/workflows/astro.yml` validates and builds pushes to `main` with Node.js
24, then deploys the `dist/` artifact to GitHub Pages. The configured production
site is [https://ddossett.com](https://ddossett.com).

## Troubleshooting

- If dependency installation or Astro commands fail because of an unsupported
  runtime, confirm that `node --version` reports Node.js 24.
- `npm run preview` expects an existing production build. Run `npm run build`
  first if `dist/` has not been generated.
