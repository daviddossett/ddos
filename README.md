# David Dossett - Portfolio Website

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export (GitHub Pages compatible)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **bun** package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd daviddossett
```

### 2. Install dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using bun:
```bash
bun install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production static site
- `npm run start` - Start the production server (requires build first)
- `npm run lint` - Run ESLint to check for code issues

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out/` directory, which can be deployed to any static hosting service.

## Deployment

This project is configured for static export and can be deployed to:

- **GitHub Pages** (configured with CNAME)
- **Vercel**
- **Netlify**
- Any static hosting service

The build output will be in the `out/` directory after running `npm run build`.

## Project Structure

```
├── components/          # React components
├── pages/              # Next.js pages
├── public/             # Static assets (images, favicon, etc.)
├── globals.css         # Global styles
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## License

Private project - All rights reserved.
