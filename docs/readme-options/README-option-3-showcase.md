# David Dossett

**Product design for developer tools.**

I'm a Seattle-based product designer on GitHub's Copilot Labs team. Before GitHub, I led design for VS Code. This site brings together a short introduction, selected projects, and my experience across GitHub, Microsoft, and 8ninths.

[Visit ddossett.com](https://ddossett.com)

## Selected projects

The site links to work spanning code editors, AI tools, and agentic coding:

| Project | Focus |
| --- | --- |
| [GitHub Copilot app](https://github.com/features/ai/github-app) | Parallel agentic coding with native GitHub context. |
| [GitHub Copilot CLI](https://github.com/features/copilot/cli) | A coding agent built for the terminal. |
| [Ace](https://githubnext.com/talks/one-developer-two-dozen-agents-zero-alignment/) | A multiplayer agentic coding prototype. |
| [GitHub Models](https://github.com/features/models) | Evaluating and improving LLM prompts. |
| [GitHub Spark](https://github.com/features/spark) | Building and shipping full-stack apps. |
| [VS Code](https://code.visualstudio.com/) | The open source AI code editor. |

## The site itself

A single-column layout, self-hosted Inter typography, and system-aware light and dark colors keep the presentation focused on the content. The implementation is small: Astro components, TypeScript, plain CSS, and static assets. GitHub Actions builds and publishes it to GitHub Pages.

## Working on the site

Use Node.js 24, matching the deployment workflow.

```sh
npm install
npm run dev
```

Update the introduction in `src/pages/index.astro`, the project and experience lists in `src/components/`, and the visual styling in `src/styles/global.css`.

Run `npm run lint` for Astro's project checks. Build with `npm run build`, then use `npm run preview` to view the generated site locally.

## Elsewhere

[GitHub](https://github.com/daviddossett)
