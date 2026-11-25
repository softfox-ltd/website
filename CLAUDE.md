# CLAUDE.md — Softfox Website

## Project overview
Company website for Softfox Ltd (`softfox.com`). Leads with fractional CTO services (AI strategy and agentic adoption, delivered as part of Freeman Clarke West Midlands), then the Safeguard and Joue products. Deployed as a static site via GitHub Pages.

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
- Testimonials: fill in quotes in `components/testimonials.tsx` (the strip stays hidden until one has a quote and name)
- Joue card: remove the Beta tag when Joue leaves beta
