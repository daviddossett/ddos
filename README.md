# ddossett.com

David Dossett's personal website — a quiet, text-first portfolio built with [Astro](https://astro.build) and deployed as a static site.

## Quick start

```sh
npm install
npm run dev
```

## Commands

| Command           | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the local dev server (`npm start` aliases this) |
| `npm run lint`    | Type-check the project with `astro check`       |
| `npm run build`   | Build the production site to `dist/`            |
| `npm run preview` | Preview the production build locally            |

## Project structure

```text
public/          Static assets (fonts, images, favicon, CNAME)
src/
  components/    Header, Experience, Projects, Footer
  layouts/       Base page layout
  pages/         index and 404 routes
  styles/        Global CSS
DESIGN.md        Design system: color, type, spacing tokens
PRODUCT.md       Audience, purpose, and design principles
```
