# Portfolio — Sarina Zeitooni

Personal portfolio site for Sarina Zeitooni, senior front-end developer.

Live: https://sarinazeitooni.github.io/portfolio/

## Stack

React 19 · TypeScript · Vite · Tailwind CSS. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck + production build
npm run preview  # preview the build
npm run lint
```

## Editing content

All copy lives in [`src/data.ts`](src/data.ts) — profile, skills, experience and projects. Components under `src/components/` only render that data, so adding a project is a single entry in the `projects` array.
