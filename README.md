# David Dossett

Source for [ddossett.com](https://ddossett.com), David Dossett's personal
website. It is a text-first Astro site with an introduction, selected projects,
and professional experience.

## Development

The deployment workflow uses Node.js 24 and npm. To run the site locally:

```sh
npm ci
npm run dev
```

Astro prints the local URL when the development server starts.

Other commands:

- `npm run lint` checks the Astro project.
- `npm run build` generates the static site in `dist/`.
- `npm run preview` serves the built site locally.

## Where to edit

- `src/pages/index.astro` contains the introduction and assembles the home page.
- `src/components/Projects.astro` and `src/components/Experience.astro` contain
  the project and work-history entries.
- `src/styles/global.css` contains the site styles; `public/` holds static assets
  such as the portrait, font, and favicons.
- `PRODUCT.md` and `DESIGN.md` document the site's purpose and design conventions.

## Deployment

The GitHub Pages workflow in `.github/workflows/astro.yml` checks and builds the
site, then deploys `dist/` on pushes to `main` or a manual workflow run.
`astro.config.mjs` sets the site URL, and `public/CNAME` specifies the custom domain.
