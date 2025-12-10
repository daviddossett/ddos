# Development

This project now uses [Bun](https://bun.sh/) for dependency management and scripts. Make sure Bun v1.3.4 or newer is installed locally.

```bash
curl -fsSL https://bun.sh/install | bash
```

## Install dependencies

```bash
bun install
```

## Common scripts

```bash
bun run dev      # next dev
bun run build    # next build
bun run start    # next start
bun run lint     # next lint
```

CI automatically provisions Bun via `oven-sh/setup-bun` and runs the same scripts.
