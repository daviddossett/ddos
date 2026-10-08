# ddossett.com

Source for [David Dossett's personal website](https://ddossett.com): an introduction, selected developer-tool projects, professional experience, and social links.

The site uses Astro, TypeScript, and plain CSS. Astro generates static HTML for deployment to GitHub Pages. Content lives directly in Astro pages and components; there is no separate CMS.

## Local development

Use Node.js 24, matching CI, and npm.

```sh
npm ci
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Astro's development server. |
| `npm run lint` | Run `astro check` for project diagnostics. |
| `npm run build` | Generate the production site in `dist/`. |
| `npm run preview` | Serve the production build locally after building. |

Despite its name, the lint script runs Astro's checker, not a separate style linter.

## Where to make changes

| File or directory | Contents |
| --- | --- |
| `src/pages/index.astro` | About copy and home-page composition. |
| `src/components/Header.astro` | Name, role, and avatar. |
| `src/components/Projects.astro` | Featured project titles, descriptions, and links. |
| `src/components/Experience.astro` | Roles, companies, and dates. |
| `src/components/Footer.astro` | Social links. |
| `src/layouts/Layout.astro` | Shared page shell, metadata, favicon, and font preload. |
| `src/styles/global.css` | Typography, layout, colors, and system light/dark themes. |
| `public/` | Fonts, images, favicons, and the custom-domain file. |

## Deployment

`.github/workflows/astro.yml` installs dependencies, runs the Astro check, builds the site, and deploys `dist/` to GitHub Pages. It runs on pushes to `main` and can also be triggered manually.

The canonical site URL is set in `astro.config.mjs`; the custom domain is recorded in `public/CNAME`. Both point to `ddossett.com`.
