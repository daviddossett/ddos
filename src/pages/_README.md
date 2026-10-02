# 🗺️ `src/pages`: where URLs are born

Welcome to the routing department! In Astro, every `.astro` file in this folder
becomes a page on the site. No router config, no route table, no ceremony. Drop
a file here and it gets a URL. This folder is small for now, so the tour is
short.

## 📍 The route map

| File | Route | What it is |
| --- | --- | --- |
| `index.astro` | `/` | The homepage. It has an **About** intro, then `<Projects />` and `<Experience />`, with `<Footer />` at the bottom. Everything sits inside `Layout`. |
| `404.astro` | `/404` (and any URL that doesn't exist) | The friendly "this page could not be found" page. It's marked `noindex` so search engines skip it. |

That's all of them. ✨ (This `_README.md` doesn't count. The leading
underscore keeps Astro from turning it into a page.)

The production URL comes from `site: "https://ddossett.com"` in
`astro.config.mjs`. `Layout` uses it to build each page's `og:url`.

## 🧭 Dynamic routes and content collections

There aren't any yet. No `[slug].astro` files, no `getStaticPaths()`, and no
content collections. Every route here is a plain static page that gets built
to HTML.

## 🧱 How the pages are put together

- **`index.astro`** wraps its content in `src/layouts/Layout.astro`. The layout
  provides:
  - `<html>`/`<head>` boilerplate, the favicon, and a preloaded Inter variable font
  - `<title>`, `description`, Open Graph, and Twitter meta tags
  - a `.site-shell` wrapper with the `<Header />` already in place
  - optional `title` and `description` props, which default to
    `"David Dossett"` and `"Product designer at GitHub"`
  - a `(Dev)` suffix on the title while you're running `astro dev`
- **`404.astro`** skips `Layout` on purpose. It writes its own small HTML
  document, imports `src/styles/global.css` directly, and uses the
  `.not-found` styles. There's no header, so the error page stays bare.

## 🛠️ Adding a new page

1. Create a file here. The filename sets the route: `uses.astro` → `/uses`,
   and `writing/index.astro` → `/writing`.
2. Wrap the content in `Layout` so you get the header, fonts, and meta tags,
   and pass a `title` and `description`:

   ```astro
   ---
   import Layout from "../layouts/Layout.astro";
   ---

   <Layout title="Uses · David Dossett" description="Tools I reach for daily">
     <main>
       <h1 class="section-title">Uses</h1>
     </main>
   </Layout>
   ```

3. Follow `index.astro`: put page content in `<main>`, and pull reusable
   sections from `src/components/` instead of building them inline.
4. Run `npm run dev` to preview it and `npm run lint` (`astro check`) to catch
   type problems before you push. 🚀

> 💡 Static assets such as images, fonts, and favicons belong in `/public`,
> not here. Any `.astro`, `.md`, `.mdx`, or `.html` file in `src/pages` becomes
> a route unless its name starts with `_`. That's why this guide is
> `_README.md`: named `README.md`, it would be published at `/README`. 🙈
