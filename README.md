David Dossett's personal website, built with Astro and deployed as a static site.

## Themes

A labeled Theme `<select>` in the site header (opposite the avatar) switches between Light, Dark, High contrast, Lagoon, and Sunset. The choice is stored in `localStorage` under `ddossett-theme`. Until a theme is saved, the page follows the system color scheme (`prefers-color-scheme`).

## Development

```sh
npm install
npm run dev
```

Run `npm run lint` to check the project and `npm run build` to create the
production site in `dist/`.
