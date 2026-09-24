# ddossett.com

This repository is the source for [ddossett.com](https://ddossett.com), David
Dossett's personal website. It is a quiet, text-first portfolio built with
[Astro](https://astro.build/) and published as a static site.

The site has a deliberately focused job: help a visitor understand who David
is, what he is working on, and the experience behind that work without asking
them to navigate a case-study archive. A short introduction leads into selected
projects, a career timeline, and a few ways to connect.

## How the site is put together

The reading experience maps closely to the source:

1. `Header.astro` establishes the identity with a portrait, name, and role.
2. `index.astro` introduces David and his current work.
3. `Projects.astro` presents selected products with concise context and links.
4. `Experience.astro` provides the professional timeline.
5. `Footer.astro` closes with social links.

Astro assembles those pieces at build time. There is no CMS, backend, or
client-side application layer; the content lives alongside the components that
render it. The result is a small static site whose structure is easy to follow
and whose presentation stays secondary to the work.

The repository also includes two documents that explain the intent behind the
implementation:

- [`PRODUCT.md`](PRODUCT.md) defines the audience, purpose, voice, and product
  principles.
- [`DESIGN.md`](DESIGN.md) records the visual system, interaction rules, and
  design constraints.

## Run it locally

Use Node.js 24 to match the GitHub Actions environment. The project does not
declare a package-manager version, but it does commit `package-lock.json` and
uses npm in development and CI.

```sh
git clone https://github.com/daviddossett/ddos.git
cd ddos
npm install
npm run dev
```

Astro serves the site at [http://localhost:4321](http://localhost:4321) by
default and reloads it as files change.

For a lockfile-exact install, such as in automation or a clean checkout, use:

```sh
npm ci
```

## Work with the project

The available npm commands are intentionally small:

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Astro development server. |
| `npm run start` | Runs the same development server as `npm run dev`. |
| `npm run lint` | Runs `astro check` against the Astro and TypeScript source. |
| `npm run build` | Creates the production site in `dist/`. |
| `npm run preview` | Serves the built site locally for a production-style review. |

A useful end-to-end check is:

```sh
npm run lint
npm run build
npm run preview
```

There is no separate automated test suite. The repository's required checks are
the Astro type/content check and a successful production build.

## Change the content

Most updates have one clear home:

| If you want to change... | Edit... |
| --- | --- |
| The introduction or page composition | `src/pages/index.astro` |
| The name, role, or portrait | `src/components/Header.astro` |
| The selected work | `src/components/Projects.astro` |
| The career timeline | `src/components/Experience.astro` |
| The social links | `src/components/Footer.astro` |
| Default metadata and shared page markup | `src/layouts/Layout.astro` |
| The not-found page | `src/pages/404.astro` |

Projects and experience entries are typed arrays inside their respective Astro
components. Add, remove, or reorder an object to change the rendered list. Keep
the copy short and specific: the product direction favors useful context over
promotional language.

Static files live in `public/` and are copied to the built site without
transformation. The current assets include the portrait, favicons, the custom
domain file, and a self-hosted Inter Variable font.

## Understand the visual system

All site-wide styles live in `src/styles/global.css`. The design is built around
a narrow reading measure, restrained type hierarchy, generous spacing, and
flat surfaces. Project rows gain a subtle background only when they are
interactive.

The stylesheet also provides:

- automatic light and dark color schemes through `prefers-color-scheme`;
- a self-hosted variable font with a metrically adjusted fallback;
- visible keyboard focus states;
- responsive spacing and project-row layouts; and
- a dedicated, centered treatment for the 404 page.

When changing the interface, use [`DESIGN.md`](DESIGN.md) as the detailed
reference. Its central constraint is worth preserving: hierarchy should come
from content, weight, tone, and space rather than decorative effects.

## Configure the site

The project has only a few configuration surfaces:

- `astro.config.mjs` sets the canonical site URL to `https://ddossett.com`.
- `public/CNAME` assigns the same custom domain for GitHub Pages.
- `src/layouts/Layout.astro` defines the default title, description, social
  metadata, favicon, and font preload.
- `tsconfig.json` extends Astro's strict TypeScript configuration.

In development, the shared layout appends `(Dev)` to the page title so a local
tab is easy to distinguish from the production site.

## Repository map

```text
.
├── .github/
│   └── workflows/astro.yml   # GitHub Pages build and deployment
├── public/
│   ├── fonts/                # Self-hosted Inter Variable font
│   ├── images/               # Portrait asset
│   ├── CNAME                 # Custom domain
│   └── favicon.*             # Browser icons
├── src/
│   ├── components/           # Header, projects, experience, and footer
│   ├── layouts/              # Shared document metadata and page shell
│   ├── pages/                # Home and 404 routes
│   └── styles/               # Global visual system
├── astro.config.mjs
├── DESIGN.md
├── PRODUCT.md
└── package.json
```

## Deployment

GitHub Actions deploys the site to GitHub Pages. A push to `main`, or a manual
workflow dispatch, runs the following sequence:

1. Check out the repository.
2. Install Node.js 24 and restore the npm cache.
3. Install dependencies with `npm ci`.
4. Run `npm run lint`.
5. Run `npm run build`.
6. Upload `dist/` and deploy it to GitHub Pages.

The workflow is defined in [`.github/workflows/astro.yml`](.github/workflows/astro.yml).

## Contributing

There is no formal `CONTRIBUTING.md` yet. For now, keep changes focused and
consistent with the product and design documents:

1. Create a branch from `main`.
2. Make the smallest coherent content or interface change.
3. Run `npm run lint` and `npm run build`.
4. Review visual changes locally in both light and dark color schemes.
5. Open a pull request that explains the change and its effect on the site.

Avoid adding portfolio conventions that the project intentionally rejects:
oversized case-study imagery, repetitive card grids, ornamental effects, or
inflated copy. The best contribution makes the site clearer while keeping it
calm, direct, and personal.
