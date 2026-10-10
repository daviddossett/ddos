import { readFile } from "node:fs/promises";
import { transform } from "lightningcss";

const stylesheet = "src/styles/global.css";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addWatchTarget("src/styles/");

  // Inline the minified stylesheet to avoid a render-blocking CSS request.
  eleventyConfig.addShortcode("inlineStyles", async function () {
    const { code } = transform({
      filename: stylesheet,
      code: await readFile(stylesheet),
      minify: true,
    });
    return `<style>${code.toString()}</style>`;
  });

  eleventyConfig.addFilter("absoluteUrl", (path, base) =>
    new URL(path, base).toString(),
  );
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
  },
  templateFormats: ["njk"],
  htmlTemplateEngine: "njk",
};
