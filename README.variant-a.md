# ddossett.com

David Dossett's personal portfolio site — a static Astro site deployed to GitHub Pages.

## Setup

Requires Node 24 (matches CI).

```sh
npm install
```

## Usage

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the local dev server               |
| `npm run lint`    | Type-check the project (`astro check`)   |
| `npm run build`   | Build the production site into `dist/`   |
| `npm run preview` | Preview the production build locally     |

Pushes to `main` are built and deployed by `.github/workflows/astro.yml`.

## Project structure

```text
src/
  pages/        index.astro, 404.astro
  layouts/      Layout.astro
  components/   Header, Experience, Projects, Footer
  styles/       global.css
public/         favicon, fonts (Inter), images, CNAME
DESIGN.md       Design tokens and visual system
PRODUCT.md      Audience, purpose, and design principles
```
