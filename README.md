# ddossett.com

This is my personal website — a small, quiet place to say what I do, where I've
worked, and which projects I'd point to if you asked.

I wanted it to read less like a portfolio and more like a well-kept index. One
narrow column of text, one typeface, almost everything at the same size. The
hierarchy comes from weight, tone, and space rather than big headlines or
splashy case-study imagery. There are no card grids, no shadows, and one orange
accent that only shows up when you select something.

The restraint is deliberate, but it isn't an excuse for loose ends. Light and
dark modes are both first-class, contrast meets WCAG AA, every interaction works
from the keyboard with a visible focus ring, and motion steps aside for anyone
who prefers less of it. The idea is simple: let the work carry the weight, and
keep the words short and specific.

If you're curious about the reasoning, [PRODUCT.md](PRODUCT.md) covers who the
site is for and why it exists, and [DESIGN.md](DESIGN.md) documents the colors,
type, spacing, and the handful of rules that hold it together.

## Run it locally

It's an [Astro](https://astro.build) site that builds to static files.

```sh
npm install
npm run dev
```

Before shipping anything, `npm run lint` runs `astro check`, and
`npm run build` writes the finished site to `dist/`.
