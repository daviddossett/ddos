# ddos

David Dossett's personal website ([ddossett.com](https://ddossett.com)), built
with [Astro](https://astro.build) and deployed as a static site. Contributions
that fix bugs, tighten copy, or improve accessibility are welcome.

## Getting started

Prerequisites: Node.js 24 (the version CI uses) and npm.

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm install
npm run dev
```

The dev server starts at <http://localhost:4321> by default.

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Astro dev server (`npm start` too)  |
| `npm run lint`    | Type-check the project with `astro check`     |
| `npm run build`   | Build the static site into `dist/`            |
| `npm run preview` | Serve the production build locally            |

## Project layout

```
src/
  components/   Header, Experience, Projects, Footer
  layouts/      Layout.astro (shared page shell)
  pages/        index.astro, 404.astro
  styles/       global.css
public/         Static assets: favicons, avatar, Inter font, CNAME
PRODUCT.md      Audience, purpose, and design principles
DESIGN.md       Design tokens: colors, typography, spacing
```

## Contributing

1. Fork the repo and create a branch from `main`.
2. Make your change and run it locally with `npm run dev`.
3. Before opening a pull request, run both checks that CI runs:

   ```sh
   npm run lint
   npm run build
   ```

4. Open a pull request against `main` with a short description of what changed
   and why. For visual changes, include a before/after screenshot.

### Design conventions

This is a quiet, text-first portfolio. Please read [PRODUCT.md](PRODUCT.md) and
[DESIGN.md](DESIGN.md) before changing UI. In short:

- Put useful context before visual spectacle; avoid decorative effects and
  card-grid layouts.
- Use the tokens in `DESIGN.md` and `src/styles/global.css` rather than
  introducing new colors or fonts.
- Support both light and dark themes.
- Meet WCAG AA contrast, keep full keyboard access with visible focus states,
  and respect reduced-motion preferences.

## Deployment

Pushes to `main` trigger the
[Deploy to Pages](.github/workflows/astro.yml) workflow, which runs
`npm ci`, `npm run lint`, and `npm run build`, then publishes `dist/` to GitHub
Pages.
