# Sherry UX work website

UX portfolio website, built with Vite + React + TypeScript + MUI (same setup as GoogleFileWebsite).

## Run it locally

```bash
npm install
npm run dev
```

Then open the link Vite prints (usually http://localhost:5173/Sherry-UX-work-website/).

## Pages

| Page | Route | File |
| --- | --- | --- |
| Home | `/` | `src/components/pages/Home.tsx` |
| Project case studies | `/projects/:slug` | `src/components/pages/Project.tsx`, list in `src/data/projects.ts` |
| About me | `/about` | `src/components/pages/About.tsx` |
| Vibe coding | `/vibe-coding` | `src/components/pages/VibeCoding.tsx` |

The header and footer shared by every page live in `src/components/Layout.tsx`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
