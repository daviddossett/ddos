# David Dossett

Source for [ddossett.com](https://ddossett.com), David Dossett's personal
portfolio. The site is a quiet, text-first overview of selected product work
and professional experience, built with [Astro](https://astro.build/) and
deployed as a static site through GitHub Pages.

## Technology

- Astro 7 for pages, layouts, components, and static output
- TypeScript with Astro's strict configuration
- Plain CSS for the responsive layout, light/dark color modes, and interaction
  states
- A self-hosted Inter Variable font
- GitHub Actions and GitHub Pages for deployment

The site has no client-side framework or application state. Astro renders the
pages to static HTML during the build.

## Prerequisites

- [Node.js](https://nodejs.org/) 22.12.0 or newer
- npm 9.6.5 or newer

The deployment workflow uses Node.js 24. Using Node 24 locally provides the
closest match to CI.

## Setup

Clone the repository, install the locked dependencies, and start the Astro
development server:

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm ci
npm run dev
```

Astro prints the local URL when the server starts. By default, it is
`http://localhost:4321`.

## Available commands

Run all commands from the repository root.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Astro development server with live reload |
| `npm start` | Alias for `npm run dev` |
| `npm run lint` | Run `astro check` against Astro components and TypeScript |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Serve the generated `dist/` output locally |

For a production-oriented local check:

```sh
npm run lint
npm run build
npm run preview
```

## Editing the site

Most content is intentionally kept close to the component that renders it:

- Update the introduction in `src/pages/index.astro`.
- Update the project list in `src/components/Projects.astro`.
- Update roles and dates in `src/components/Experience.astro`.
- Update social links in `src/components/Footer.astro`.
- Update default metadata in `src/layouts/Layout.astro`.
- Update shared visual styles and responsive behavior in
  `src/styles/global.css`.
- Add static images, fonts, icons, or other passthrough files under `public/`.

For example, projects are defined as typed objects in
`src/components/Projects.astro`:

```ts
{
  title: "Project name",
  description: "A concise description",
  href: "https://example.com",
}
```

External links in the existing components open in a new tab and include
`rel="noopener noreferrer"`. Preserve that behavior when adding another
external destination.

## Project structure

```text
.
├── .github/
│   ├── skills/impeccable/   # Local UI design skill and supporting references
│   └── workflows/astro.yml  # GitHub Pages build and deployment
├── public/
│   ├── fonts/               # Self-hosted font files and license
│   ├── images/              # Static image assets
│   ├── CNAME                # Custom GitHub Pages domain
│   └── favicon.*            # Site icons
├── src/
│   ├── components/          # Header, projects, experience, and footer sections
│   ├── layouts/             # Shared document shell and metadata
│   ├── pages/               # Astro routes, including the custom 404 page
│   └── styles/              # Global design tokens and responsive styles
├── astro.config.mjs         # Canonical site URL
├── DESIGN.md                # Visual system and implementation rules
├── PRODUCT.md               # Product purpose, audience, and principles
├── package.json             # Scripts and dependencies
└── tsconfig.json            # Strict Astro TypeScript configuration
```

### Rendering flow

`src/pages/index.astro` composes the page from the shared layout and section
components. `src/layouts/Layout.astro` supplies the HTML document, metadata,
header, global stylesheet, and content slot. Astro then emits static files to
`dist/`; files in `public/` are copied through unchanged.

The canonical site URL is configured as `https://ddossett.com` in
`astro.config.mjs`, and `public/CNAME` declares the same custom domain for
GitHub Pages.

## Development workflow

1. Review `PRODUCT.md` and `DESIGN.md` before changing content hierarchy or
   presentation. They document the intended audience, voice, accessibility
   expectations, tokens, spacing, and interaction rules.
2. Make the smallest content or component change that satisfies the goal.
3. Run `npm run lint` to catch Astro and TypeScript issues.
4. Run `npm run build` to verify the static production output.
5. Use `npm run preview` when the change needs a final browser check against
   the generated site.

The design is deliberately restrained. Preserve the narrow text measure,
weight-led hierarchy, visible keyboard focus, responsive behavior, light and
dark modes, and reduced reliance on decorative effects.

## Testing and validation

This repository does not currently contain an automated unit or browser test
suite. The checked-in validation path is:

```sh
npm run lint
npm run build
```

The GitHub Pages workflow runs both commands before it uploads the deployment
artifact. For visual changes, also inspect the development or preview build at
mobile and desktop widths and verify keyboard focus plus light and dark color
modes.

## Deployment

`.github/workflows/astro.yml` deploys the site to GitHub Pages:

1. A push to `main`, or a manual `workflow_dispatch`, starts the workflow.
2. GitHub Actions installs dependencies with `npm ci`.
3. The workflow runs `npm run lint` and `npm run build`.
4. The generated `dist/` directory is uploaded and deployed to GitHub Pages.

Keep `astro.config.mjs` and `public/CNAME` aligned if the production domain
changes.

## Troubleshooting

### The install or Astro command reports an unsupported Node.js version

Check the active versions:

```sh
node --version
npm --version
```

Use Node.js 22.12.0 or newer; Node 24 matches the deployment workflow.

### Local dependencies do not match the lockfile

Reinstall exactly what is recorded in `package-lock.json`:

```sh
npm ci
```

### The production build behaves differently from the development server

Build and serve the generated static output instead of relying only on the
development server:

```sh
npm run build
npm run preview
```

Also confirm that static asset references use their root-relative `public/`
paths, such as `/images/david-avatar.webp` rather than including `public` in
the URL.

### GitHub Pages uses the wrong URL

Confirm that the `site` value in `astro.config.mjs` and the domain in
`public/CNAME` describe the same production host.

## Contributing

Keep changes focused and consistent with `PRODUCT.md` and `DESIGN.md`. Before
requesting review, run:

```sh
npm run lint
npm run build
```

Include a short explanation of any visible behavior change and, for visual
work, note the viewport and color modes you checked.
