# ddossett.com

This repository contains [David Dossett's personal website](https://ddossett.com):
a concise introduction to his product work, experience, and design practice.

The site is built with [Astro](https://astro.build/) and generated as a static
site, keeping it quick to load and straightforward to maintain.

## Getting started

You'll need [Node.js](https://nodejs.org/) and npm. The deployment workflow uses
Node.js 24, so that version is the best match for local development.

Install the dependencies and start the development server:

```sh
npm install
npm run dev
```

Astro will print the local URL in your terminal, typically
`http://localhost:4321`. Changes appear automatically while the server is
running.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run lint` | Checks the Astro project for errors |
| `npm run build` | Creates the production site in `dist/` |
| `npm run preview` | Serves the production build locally |

## Project structure

```text
src/
├── components/  Reusable interface components
├── layouts/     Shared page layouts
├── pages/       Site pages and routes
└── styles/      Global styles
public/          Static assets copied into the build
```

Most content for the home page lives in `src/pages/index.astro`. Before opening
a pull request, run the same checks used by the deployment workflow:

```sh
npm run lint
npm run build
```

## Deployment

Pushes to `main` are checked, built, and deployed to GitHub Pages through the
[`Deploy to Pages`](.github/workflows/astro.yml) workflow.
