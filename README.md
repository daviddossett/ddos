David Dossett's personal website, built with [Eleventy](https://www.11ty.dev/)
(Nunjucks templates) and deployed as a static site.

## Development

```sh
npm install
npm run dev
```

`npm run dev` starts the Eleventy dev server with live reload. Page titles get a
`(Dev)` suffix while serving locally.

Run `npm run lint` to render every template without writing output (catches
template and data errors), `npm run build` to create the production site in
`dist/`, and `npm run preview` to serve the built `dist/` folder.

## Structure

- `src/index.njk`, `src/404.njk`: pages
- `src/_includes/layouts/base.njk`: shared HTML shell and metadata
- `src/_includes/partials/`: header, footer, projects, and experience sections
- `src/_data/`: site metadata, projects, and experience entries
- `src/styles/global.css`: global styles, minified with Lightning CSS and inlined
  into each page at build time
- `public/`: static assets copied as-is to the site root
