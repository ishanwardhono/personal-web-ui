# ishanwardhono.com

Personal résumé site for Ishan Wardhono — a refined-minimal, monochrome portfolio
built with Vite + React.

## Develop

```
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

- `src/pages/` — Home, Work, Contact
- `src/components/` — Nav, Footer, and presentational pieces
- `src/data/resume.js` — all résumé content (edit here to update the site)
- `src/styles/` — design tokens + global styles
- `docs/design-reference/` — the source-of-truth design prototype
- `docs/superpowers/` — the design doc and implementation plan

## Contact form

Uses EmailJS. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAILJS_PUBLIC_KEY` in `.env`. Without them, the form shows a demo message.

## Deploy

Firebase Hosting via GitHub Actions: push to `main` deploys live; PRs get a preview channel.
