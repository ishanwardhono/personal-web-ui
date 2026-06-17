# CLAUDE.md

Guidance for working in this repository.

## What this is

`ishanwardhono.com` — Ishan Wardhono's personal résumé site. A refined-minimal,
monochrome portfolio with a single restrained "clay" (`#b94a2b`) accent.

> **Status: mid-rewrite.** The repo is being rewritten from the old "Tokyo" CRA
> template to a fresh **Vite + React** site matching the `portfolio-next` design.
> Until the rewrite lands, `src/` still contains the OLD template — do not treat it
> as the target. The target architecture is below and in the design doc.

## Source of truth (read these first)

- **Design doc / spec:** `docs/superpowers/specs/2026-06-17-portfolio-rewrite-design.md`
  — the authoritative plan: decisions, page content, architecture, deployment changes.
- **Design reference (pixel-perfect target):** `docs/design-reference/portfolio-next/`
  — the HTML/CSS/JS prototype to recreate. Recreate the *visual output*; the prototype's
  file structure does not dictate the React structure.
  - `index.html` (Home), `work.html` (Work), `contact.html` (Contact)
  - `site.css` — the full visual system (port near-verbatim)
  - `site.js` — nav toggle, scroll-reveal, current-year behavior
- **Design tokens:** `docs/design-reference/tokens/` (`colors.css`, `fonts.css`,
  `typography.css`, `spacing.css`) and `styles.css` (the `@import` manifest).
- **Design assets:** `docs/design-reference/assets/` — `img/portrait.jpg`,
  `img/about.jpg`, and `icons/*.svg`. Copy what's needed into `src/assets/`.

## Target architecture (Vite + React 18)

```
src/
  main.jsx            # entry: ReactDOM + <BrowserRouter>, imports styles
  App.jsx            # layout shell: <Nav/> + <Outlet/> + <Footer/>, scroll-to-top on route change
  pages/             # Home.jsx, Work.jsx, Contact.jsx (compose components, pull copy from data/)
  components/        # Nav, Footer, Portrait, Eyebrow, SkillRow, ExperienceItem, ContactForm, Reveal
  data/resume.js     # SINGLE source of résumé content (experiences, skills, education, certs, contact)
  hooks/useScrollReveal.js   # IntersectionObserver; respects prefers-reduced-motion
  lib/emailjs.js     # @emailjs/browser wrapper + isConfigured()
  styles/            # tokens.css (ported tokens + Google Fonts @import), site.css (ported site.css)
  assets/            # img/, icons/, ishan-wardhono-resume.pdf (user-supplied)
```

Routes: `/` (Home), `/work` (Work), `/contact` (Contact).

## Conventions

- **Content is data.** All résumé content lives in `src/data/resume.js`. Updating the
  résumé = editing that file only; never hard-code copy in JSX. Lists render via `.map()`.
- **Styling is plain CSS.** Port `tokens.css` + `site.css` as-is. No Sass, no CSS-in-JS,
  no CSS Modules. JSX `className`s must match the design's class names exactly
  (`.shell`, `.hero`, `.eyebrow`, `.exp`, `.skill-row`, `.btn`, `.nav`, …) for fidelity.
- **Fonts** (Newsreader display, Mulish body, Montserrat labels, Poppins form) load via
  the Google Fonts `@import` in `tokens.css`.
- **Motion is minimal.** Only the `useScrollReveal` hook + the design's CSS hover/pulse
  states. Everything gated on `prefers-reduced-motion`. No animation libraries.
- **Keep components small and focused**, one purpose each, props-driven.

## Contact form (EmailJS)

`ContactForm` uses `@emailjs/browser` via these env vars (in `.env`, `VITE_`-prefixed so
Vite exposes them; the EmailJS public key is a publishable client key):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

If any are missing, the form degrades to the design's demo confirmation message.

## Commands (after rewrite to Vite)

```
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Deployment

Firebase Hosting, auto-deployed by GitHub Actions:
- Push to `main` → `.github/workflows/deploy-prod.yml` → live channel.
- Pull requests → `firebase-hosting-pull-request.yml` → preview channel.

During the rewrite, `firebase.json` must change `"public": "build"` → `"public": "dist"`.
Keep the SPA rewrite (`** → /index.html`) so `/work` and `/contact` deep-links resolve.

## Out of scope

`mockup.html` (a design-review device-frame tool, intentionally not copied), a projects /
case-studies section, dark mode, blog/news, and any contact-form backend.

## Things the user must supply

- `src/assets/ishan-wardhono-resume.pdf` (the "Download Résumé" target).
- EmailJS service / template / public keys.
