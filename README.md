# David Dossett

[ddossett.com](https://ddossett.com) is my personal site: a compact record of the
developer tools and product experiences I have helped shape.

I am a product designer based in Seattle, currently working at
[GitHub](https://github.com) on the
[Copilot Labs](https://github.com/features/ai/github-app) team. Previously, I led
design for [VS Code](https://code.visualstudio.com/). The work collected here
reflects the thread connecting those roles: I love building tools for developers.

## The work

The portfolio points to projects across agentic coding, AI-assisted creation,
prompt evaluation, and the editor:

- [GitHub Copilot app](https://github.com/features/ai/github-app) — parallel
  agentic coding with native GitHub context
- [GitHub Copilot CLI](https://github.com/features/copilot/cli) — a coding agent
  built for the terminal
- [Ace](https://githubnext.com/talks/one-developer-two-dozen-agents-zero-alignment/)
  — a multiplayer agentic coding prototype
- [GitHub Models](https://github.com/features/models) — tools to evaluate and
  improve LLM prompts
- [GitHub Spark](https://github.com/features/spark) — a way to build and ship
  full-stack apps
- [VS Code](https://code.visualstudio.com/) — the open source AI code editor

The site keeps the presentation intentionally direct: an introduction, selected
projects, and a career timeline. It supports light and dark color schemes,
responsive layouts, visible keyboard focus, and a locally hosted variable font.

## How it is built

The site is a small [Astro](https://astro.build/) project rendered as static
HTML. Its structure mirrors the experience: reusable components for the header,
projects, experience, and footer sit inside a shared layout that provides page
metadata and global styling.

Pushes to `main` are checked, built, and deployed to GitHub Pages through
[the Astro workflow](.github/workflows/astro.yml). The production URL is also
declared in [Astro's configuration](astro.config.mjs) and
[the custom-domain file](public/CNAME).

## Run it locally

Use Node.js 24 to match the deployment workflow, then install the locked
dependencies and start Astro:

```sh
npm ci
npm run dev
```

Other repository commands:

```sh
npm run lint     # Run Astro's project checks
npm run build    # Build the static site in dist/
npm run preview  # Preview the production build locally
```

You can also find me on
[GitHub](https://github.com/daviddossett),
[LinkedIn](https://www.linkedin.com/in/davidcdossett/), and
[Twitter](https://twitter.com/david_dossett).
