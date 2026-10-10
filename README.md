David Dossett's personal website, built with SvelteKit and deployed as a fully
prerendered static site (via `@sveltejs/adapter-static`, no client-side JS).

## Development

```sh
npm install
npm run dev
```

Run `npm run lint` to type-check the project (`svelte-check`) and
`npm run build` to create the production site in `dist/`. Use
`npm run preview` to serve the built output locally.

Static assets (fonts, images, favicons, `CNAME`) live in `static/`.
