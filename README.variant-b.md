# ddossett.com

This is the home of David Dossett on the web: a quiet, text-first portfolio that
tells designers, developers, and collaborators what he does, where he's worked,
and which projects define his practice — without making anyone dig through a
dense case-study archive.

The site is intentionally restrained. Useful context comes before visual
spectacle, the copy stays direct and personal, and the work carries more weight
than decoration.

## Highlights

- **Text-first by design.** No oversized hero imagery or identical card grids —
  just a scannable page with clear hierarchy.
- **Small and static.** Built with [Astro](https://astro.build), a handful of
  components, and a single global stylesheet. No client framework required.
- **Considered details.** Self-hosted Inter, light and dark themes defined with
  OKLCH tokens, and a single warm accent color.
- **Accessible.** Targets WCAG AA contrast, full keyboard access, visible focus
  states, and respects reduced-motion preferences.
- **Ships itself.** Every push to `main` is checked, built, and deployed to
  GitHub Pages.

## Getting started

You'll need Node 24.

```sh
npm install
npm run dev
```

Then open the local URL Astro prints. When you're ready to ship, run
`npm run build` to produce the static site in `dist/`, or `npm run preview` to
see the production build locally.

## Contributing

This is a personal site, but small fixes are welcome. Before opening a pull
request:

1. Read [`PRODUCT.md`](PRODUCT.md) and [`DESIGN.md`](DESIGN.md) — they describe
   the voice, principles, and design tokens the site follows.
2. Run `npm run lint` and `npm run build` to make sure CI will pass.
3. Keep changes quiet and intentional, in the spirit of the rest of the site.
