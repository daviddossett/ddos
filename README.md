# ddos

Source for [ddossett.com](https://ddossett.com), David Dossett's personal website.

A single-page static site built with [Astro](https://astro.build). Pushes to `main` are checked, built, and deployed to GitHub Pages by [`.github/workflows/astro.yml`](.github/workflows/astro.yml).

## Quick start

Requires Node.js (CI uses Node 24).

```sh
npm install
npm run dev
```

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the local dev server (`astro dev`)  |
| `npm run lint`    | Type-check the project (`astro check`)    |
| `npm run build`   | Build the static site to `dist/`          |
| `npm run preview` | Serve the production build locally        |

## Structure

```
src/
  pages/       index.astro, 404.astro
  components/  Header, Experience, Projects, Footer
  layouts/     Layout.astro
  styles/      global.css
public/        Fonts, images, favicon, CNAME
```

Design and product guidelines live in [`DESIGN.md`](DESIGN.md) and [`PRODUCT.md`](PRODUCT.md).
