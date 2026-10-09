# ddossett.com

David Dossett's personal website — a single-page Astro site deployed to GitHub Pages.

## Quick start

```sh
npm install
npm run dev
```

## Commands

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local dev server           |
| `npm run lint`    | Type-check with `astro check`        |
| `npm run build`   | Build the static site to `dist/`     |
| `npm run preview` | Preview the production build locally |

## Where things live

- `src/pages/` — the home page and 404
- `src/components/` — header, projects, experience, footer
- `public/` — images, fonts, favicon, `CNAME`

Pushes to `main` are checked, built, and deployed by `.github/workflows/astro.yml`.
