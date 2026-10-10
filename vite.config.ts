import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit({
      compilerOptions: {
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },
      // Output to dist/ so the existing GitHub Pages workflow deploys it unchanged.
      adapter: adapter({ pages: "dist", assets: "dist", strict: true }),
      // Inline the small global stylesheet, matching Astro's single-request output.
      inlineStyleThreshold: Infinity,
      // Root-relative asset URLs so 404.html works when served at any nested path.
      paths: { relative: false },
    }),
  ],
});
