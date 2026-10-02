# ddossett.com 👋

This is the source for [ddossett.com](https://ddossett.com), my personal site. I'm a product designer in Seattle, currently on the Copilot Labs team at GitHub and previously design lead for VS Code.

## What it is

One page, mostly text. It covers a short intro, the projects I've worked on (the GitHub Copilot app, Copilot CLI, GitHub Spark, VS Code, and others), and where I've worked. You should be able to get the picture in under a minute without digging through case studies.

## How it's designed

The site aims to be **quiet, precise, and technically confident**. In practice that means:

- **Content first.** A narrow 692px column, generous spacing between sections, and almost everything set at 1rem. Hierarchy comes from weight, tone, and space, not big headlines.
- **No portfolio tropes.** No oversized hero images, card grids, shadows, glass, or gradient text. Linked rows get a subtle hover fill, and that's about it.
- **One typeface.** Self-hosted Inter Variable with a metrically matched fallback so text doesn't shift when the font loads.
- **One accent.** Neutral light and dark palettes in OKLCH, with a single orange reserved for text selection.
- **Accessible by default.** WCAG AA contrast targets, keyboard-friendly links with visible focus rings, and no animations. Dark mode follows your system setting.

Want the details? [`DESIGN.md`](DESIGN.md) has the design system and [`PRODUCT.md`](PRODUCT.md) has the product intent behind it.

## Under the hood

It's a static [Astro](https://astro.build) site with TypeScript and a single plain-CSS stylesheet. No client-side framework. GitHub Actions builds it and deploys it to GitHub Pages on every push to `main`.

## Running it locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

Other useful commands:

- `npm run lint` — type-check with `astro check`
- `npm run build` — build the production site into `dist/`
- `npm run preview` — preview that build locally
