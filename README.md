# ddos

Source for [ddossett.com](https://ddossett.com), David Dossett's personal site, built with [Astro](https://astro.build).

## Quick start

Requires Node.js (CI uses Node 24).

```sh
npm install
npm run dev
```

## Usage

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the local dev server       |
| `npm run lint`    | Type-check with `astro check`    |
| `npm run build`   | Build the static site to `dist/` |
| `npm run preview` | Preview the production build     |

Pushes to `main` deploy to GitHub Pages via [`.github/workflows/astro.yml`](.github/workflows/astro.yml).
