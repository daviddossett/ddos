# ddos

Source for [ddossett.com](https://ddossett.com), David Dossett's personal website.

It's a single-page Astro site covering David's current role, selected projects, and experience. It builds to static HTML and deploys to GitHub Pages on every push to `main`.

## Quick start

Requires Node.js. CI uses Node 24.

```sh
npm install
npm run dev
```

## Commands

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the local dev server                  |
| `npm run lint`    | Type-check the project with `astro check`   |
| `npm run build`   | Build the production site into `dist/`      |
| `npm run preview` | Serve the production build locally          |

## Structure

```
src/pages/       index.astro and 404.astro
src/components/  Header, Projects, Experience, Footer
src/layouts/     Shared page layout
src/styles/      Global CSS
public/          Fonts, images, favicon, CNAME
```

`PRODUCT.md` and `DESIGN.md` describe the site's audience, voice, and design system.
