# 👋 ddossett.com

Welcome to the engine room of **[ddossett.com](https://ddossett.com)** — David Dossett's personal website. It's a small, fast, static site built with [Astro](https://astro.build) 🚀 and shipped to GitHub Pages. No servers to babysit, no database to feed. Just HTML, CSS, and good intentions.

## 🧭 What's in the box

```text
src/
├── pages/        # index.astro (the main event) + 404.astro (for the lost and curious)
├── components/   # Header, Projects, Experience, Footer
├── layouts/      # Layout.astro — the shared page wrapper
└── styles/       # global.css
public/           # favicons, avatar, Inter font, and the CNAME
```

Want the design rationale? 🎨 See [`DESIGN.md`](DESIGN.md) and [`PRODUCT.md`](PRODUCT.md).

## 🛠️ Get it running

You'll need Node.js (CI uses Node 24) and npm.

```sh
npm install
npm run dev
```

Then open the local URL Astro prints and start poking at things. Hot reload handles the rest. ✨

## 📜 Scripts

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Starts the Astro dev server (`npm start` works too)       |
| `npm run lint`    | Runs `astro check` to catch type and template slip-ups 🔍 |
| `npm run build`   | Builds the production site into `dist/` 📦                |
| `npm run preview` | Serves the built `dist/` locally for a final look 👀      |

## 🚢 Deployment

Every push to `main` kicks off the [Deploy to Pages](.github/workflows/astro.yml) workflow, which:

1. Installs dependencies with `npm ci`
2. Runs `npm run lint`
3. Runs `npm run build`
4. Publishes `dist/` to GitHub Pages at [ddossett.com](https://ddossett.com) 🌐

You can also trigger it manually from the Actions tab. If lint fails, nothing ships — so keep `astro check` happy. 🙂

## 🔤 Credits

Typography by the lovely [Inter](https://github.com/rsms/inter) typeface, used under the SIL Open Font License (see [`public/fonts/LICENSE.txt`](public/fonts/LICENSE.txt)).
