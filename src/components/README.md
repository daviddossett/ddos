# 🧩 Components

Welcome to the parts bin! Every piece of the homepage that isn't a page or a layout lives here. They're small, they're static, and they take zero props. Import one, drop it in, done. ✨

## The cast

| Component | What it does | Where it shows up |
| --- | --- | --- |
| 🙋 `Header.astro` | The identity badge: avatar (`/images/david-avatar.webp`), name, and "Product Designer" role. | `src/layouts/Layout.astro`, so it appears on every page that uses the layout. |
| 🛠️ `Projects.astro` | Renders the "Projects" section from a local `projects` array. Each entry links out in a new tab. | `src/pages/index.astro` |
| 📜 `Experience.astro` | Renders the "Experience" section from a local `experiences` array (title, company, dates). | `src/pages/index.astro` |
| 👋 `Footer.astro` | Social links to Twitter, GitHub, and LinkedIn. | `src/pages/index.astro`, inside `<Layout>` after `<main>` |

> 404 doesn't use any of these. `src/pages/404.astro` brings its own markup.

## Editing content

- **Add a project or job:** append an object to the array in the component's frontmatter (`projects` in `Projects.astro`, `experiences` in `Experience.astro`). Each array has a TypeScript interface right above it, so the editor will tell you if a field's missing.
- **Change social links:** edit the `<a>` tags in `Footer.astro` directly.

## Adding a new component 🚀

Match the house style:

1. **Name it in PascalCase** and save it as `src/components/YourThing.astro`.
2. **Keep data local.** If it renders a list, define an `interface` and a typed array in the frontmatter, then `.map()` over it. See `Projects.astro` for the pattern.
3. **Style with global classes.** Components don't use scoped `<style>` blocks. Shared classes like `content-section`, `section-title`, `entry-list`, `entry`, `entry-row`, `entry-title`, and `entry-description` live in `src/styles/global.css`. Add new ones there too.
4. **Be accessible.** Wrap sections in `<section aria-labelledby="...">` with a matching `<h2 id="...">`.
5. **External links** get `target="_blank"` and `rel="noopener noreferrer"`.
6. **Import it with a relative path**, e.g. `import YourThing from "../components/YourThing.astro";`, from a page or layout.
7. **Check your work** with `npm run lint` (runs `astro check`) and `npm run dev`. 🎉
