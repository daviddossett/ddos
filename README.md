# ddossett.com 👋

Welcome to the source code of David Dossett's personal website. It's built with
[Astro](https://astro.build) and ships as a static site, which is a fancy way of
saying there's no server to wake up at 3 a.m.

## Take it for a spin

```sh
npm install   # grab the ingredients
npm run dev   # fire up the dev server and start poking around
```

## Other things you can type

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `npm run lint`    | Runs `astro check` and tells you (nicely) what you broke        |
| `npm run build`   | Bakes the production site into `dist/`                          |
| `npm run preview` | Lets you admire the production build before anyone else does    |

## What's where

- `src/pages/`: the pages, including a `404` for the lost and wandering
- `src/components/`: the building blocks (header, footer, experience, projects)
- `src/layouts/`: the shared frame every page hangs in
- `src/styles/`: global CSS
- `public/`: static goodies like the avatar, fonts, and favicon

## Shipping

Push to `main` and a GitHub Actions workflow runs the lint, builds the site, and
deploys it to GitHub Pages. No ceremony, no confetti cannon (yet).
