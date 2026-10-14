# ddos

David Dossett's personal website: a quiet, text-first portfolio built with
[Astro](https://astro.build) and deployed as a static site to GitHub Pages at
<https://ddossett.com>.

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Design and product docs](#design-and-product-docs)
- [Deployment](#deployment)

## Overview

The site is a single page (`src/pages/index.astro`) that presents David's
current role, selected projects, and professional experience, plus a custom
404 page. Content is organized into small Astro components (header, projects,
experience, footer) that share one layout and one global stylesheet.

## Tech stack

- [Astro](https://astro.build) for static site generation
- TypeScript, using Astro's `strict` tsconfig preset
- [`@astrojs/check`](https://docs.astro.build/en/reference/cli-reference/#astro-check)
  for type and template checking
- [Inter](https://rsms.me/inter/) variable font, self-hosted in `public/fonts/`
- GitHub Actions and GitHub Pages for CI/CD

## Prerequisites

- Node.js 24 or later (the version used in CI)
- npm

## Getting started

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm install
npm run dev
```

Astro serves the site locally with hot reloading; the terminal prints the URL
(by default <http://localhost:4321>).

## Available scripts

| Command           | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Start the local development server.                           |
| `npm start`       | Alias for `npm run dev`.                                      |
| `npm run lint`    | Type-check the project with `astro check`.                    |
| `npm run build`   | Build the production site into `dist/`.                       |
| `npm run preview` | Serve the production build from `dist/` locally.              |

## Project structure

```text
.
├── .github/
│   ├── skills/impeccable/    # Design tooling skill used by Copilot agents
│   └── workflows/astro.yml   # Build and deploy to GitHub Pages
├── public/
│   ├── CNAME                 # Custom domain (ddossett.com)
│   ├── favicon.ico, .png
│   ├── fonts/                # Self-hosted Inter variable font and license
│   └── images/               # Static images (avatar)
├── src/
│   ├── components/           # Header, Projects, Experience, Footer
│   ├── layouts/Layout.astro  # Shared page shell
│   ├── pages/                # index.astro and 404.astro
│   └── styles/global.css     # Global styles
├── astro.config.mjs          # Astro config (site URL)
├── tsconfig.json             # Extends astro/tsconfigs/strict
├── DESIGN.md                 # Design tokens and system
├── PRODUCT.md                # Audience, purpose, and principles
└── package.json
```

## Design and product docs

- [`PRODUCT.md`](PRODUCT.md) describes the audience, purpose, brand
  personality, and design principles for the site.
- [`DESIGN.md`](DESIGN.md) documents the design system: colors (with dark-mode
  variants), typography, and related tokens.

## Deployment

Pushes to `main` trigger the [Deploy to Pages](.github/workflows/astro.yml)
workflow, which can also be run manually. It installs dependencies with
`npm ci`, runs `npm run lint` and `npm run build`, uploads `dist/` as a Pages
artifact, and deploys it with GitHub Pages. The custom domain is configured
through `public/CNAME`.
