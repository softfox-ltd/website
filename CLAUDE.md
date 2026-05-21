# CLAUDE.md — Softfox Website

## Project overview
Placeholder company website for Softfox Ltd (`softfox.com`). Signposts IT Consultancy services and the upcoming Safeguard product. Deployed as a static site via GitHub Pages.

## Stack
- **Framework:** Next.js 14, static export (`output: 'export'` → `out/`)
- **CSS:** Tailwind CSS v4 via `@tailwindcss/postcss`
- **TypeScript:** strict mode
- **Icons:** Lucide React
- **Fonts:** Source Serif 4 (display), Source Sans 3 (body) via `next/font/google`

## Key commands
- `npm run dev` — local dev server at `localhost:3000`
- `npm run build` — static export to `out/`
- `npm run typecheck` — TypeScript check (must pass before committing)
- `npm run lint` — ESLint

## Theme
Identical to Softfox Safeguard's design system. All tokens live in `app/globals.css`. Do not introduce new colours or fonts outside that file.

## Deploy
GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. Custom domain `softfox.com` is set via `public/CNAME`.

## GitHub workflow
- **Never push directly to `main`.** Branch protection is enabled. Use `feature/*`, `fix/*`, or `chore/*` branches and open a PR via `gh pr create`.
- `npm run typecheck` must pass before every commit.

## Placeholder values to update before launch
- Email: `hello@softfox.com` — grep-replace when confirmed
- Company registration number: currently absent from footer — add when known
- Safeguard card: remove "Coming soon" badge and add product URL when released
