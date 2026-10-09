# ddossett.com

Hi, I'm David. This repository is the source for my personal website,
[ddossett.com](https://ddossett.com).

I'm a product designer based in Seattle. I work at GitHub on the Copilot Labs
team, and before that I led design for VS Code. I love building tools for
developers, so this site is mostly a quick way to explain who I am and point
to the work I've been part of.

## What you'll find on the site

It's a single page with three short sections:

- **About**: a couple of sentences on what I do and where I do it.
- **Projects**: a short list of products I've worked on, including the GitHub
  Copilot app, GitHub Copilot CLI, Ace, GitHub Models, GitHub Spark, and VS Code.
  Each one links out to the real thing.
- **Experience**: where I've worked, from a HoloLens internship at 8ninths
  through several roles at Microsoft to my current role at GitHub.

There are also links to Twitter, GitHub, and LinkedIn in the footer.

## Why it looks the way it does

I wanted the site to stay quiet and get out of the way. Visitors (designers,
developers, hiring partners, and possible collaborators) should be able to
understand what I do in a few seconds without clicking through a pile of case
studies. So there are no giant hero images, no grids of identical cards, and no
effects that compete with the words.

What's left is plain text, the Inter typeface, a mostly neutral palette with a
single warm accent, and light and dark themes. Accessibility is part of the
brief too. The goals are AA contrast, full keyboard access, visible focus states, and respect
for reduced-motion preferences.

If you're curious about the reasoning, [PRODUCT.md](PRODUCT.md) covers who the
site is for and [DESIGN.md](DESIGN.md) documents the design system.

## How it's built

The site is built with [Astro](https://astro.build) and ships as static HTML.
Every push to `main` runs a GitHub Actions workflow that checks the project,
builds it, and deploys the result to GitHub Pages.

```text
src/
  pages/        index.astro and a 404 page
  components/   Header, Projects, Experience, Footer
  layouts/      the shared page shell
  styles/       global.css
public/         fonts, favicon, avatar, and the CNAME for ddossett.com
```

## Running it locally

You'll need Node.js (the deploy workflow uses Node 24).

```sh
npm install
npm run dev
```

That starts the Astro dev server. A few other scripts are useful:

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run lint`    | Runs `astro check` to type-check the project   |
| `npm run build`   | Builds the production site into `dist/`        |
| `npm run preview` | Serves the built site so you can check it      |

## Say hello

You can find me on [GitHub](https://github.com/daviddossett),
[Twitter](https://twitter.com/david_dossett), or
[LinkedIn](https://www.linkedin.com/in/davidcdossett/).
