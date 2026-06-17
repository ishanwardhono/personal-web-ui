# Portfolio Rewrite — Design Doc

_Date: 2026-06-17_
_Status: Approved — ready for implementation plan_

## Goal

Completely rewrite `ishanwardhono.com` to match the `portfolio-next` design from the
Claude Design handoff bundle (`ishan-wardhono-design-system`). The new site is a
refined-minimal, monochrome portfolio with a single restrained "clay" accent. It
replaces the current "Tokyo" React template (single-page tabs, heavy unused
dependencies) with a clean, content-driven, multi-page site.

The site is a personal résumé. Its primary ongoing job is **easy content updates**,
so résumé content is modeled as data, not hand-written JSX.

## Design source of truth

The visual design is fully specified in the handoff bundle. Treat these as the
pixel-perfect reference (recreate the visual output; do not assume the prototype's
file structure):

- `portfolio-next/index.html` — Home
- `portfolio-next/work.html` — Work
- `portfolio-next/contact.html` — Contact
- `portfolio-next/site.css` — the full visual system (nav, footer, type scale, all
  components, all responsive rules)
- `portfolio-next/site.js` — mobile nav toggle, scroll-reveal, current year
- design-system `tokens/` — `colors.css`, `fonts.css`, `typography.css`, `spacing.css`

`mockup.html` is a design-review tool (device frame around the real pages). It is
**not** part of the production site and is excluded.

## Decisions (confirmed)

| Decision | Choice |
|---|---|
| Tech stack | **Vite + React 18** |
| Routing | `react-router-dom` v6, three routes: `/`, `/work`, `/contact` |
| Styling | Plain CSS — port `tokens.css` + `site.css` verbatim. No Sass, no CSS-in-JS |
| Contact form | **EmailJS** (`@emailjs/browser`) via `VITE_EMAILJS_*` env vars; demo fallback if unconfigured |
| Résumé button | Links to `/assets/ishan-wardhono-resume.pdf` (user supplies the PDF) |
| Hosting | Firebase Hosting (unchanged); CI updated to serve `dist/` |
| Mockup page | Excluded (design tool only) |

## Pages & content

### Home (`/`) — personal
- **Hero** — status pill ("Available for select work · Indonesia") with pulsing clay
  dot, eyebrow ("Backend Software Engineer"), large serif name ("Ishan Wardhono"),
  lead summary, two CTAs: **"See my experiences →"** (→ `/work`) and **"Get in touch"**
  (→ `/contact`). Framed portrait (`portrait.jpg`, Bromo) that desaturates by default,
  warms to color on hover.
- **About (01)** — two-column prose bio.
- **Education (02)** — B.Sc. Computer Science, Universitas Sumatera Utara, GPA 3.76,
  Teaching Assistant note.
- **Certifications (03)** — Machine Learning, Coursera (with link).

### Work (`/work`) — experience
- **Hero** — eyebrow "Work", serif headline **"7 Years as Backend Software Engineer"**,
  lead summary, CTAs: **"Download Résumé ↓"** (→ PDF) and **"Get in touch"**. Portrait
  uses `about.jpg` (the Tokopedia-sign photo).
- **Technical Skills (01)** — a key/value table: Languages, Databases, Infrastructure,
  Messaging, Observability, AI Tools, Concepts.
- **Experience (02)** — timeline of four roles (Evermos, HTC Global Services, Pingspace
  Robotics, Tokopedia), each with period + place, role, company (clay), italic summary,
  3 bullet highlights, and a row of tech tags.

### Contact (`/contact`)
- **Invitation** — status pill, eyebrow "Contact", big serif "Let's _talk._", lead.
- **Details column** — Email, LinkedIn, GitHub, "Based in" (Yogyakarta · GMT+7), plus
  social icon links (LinkedIn, GitHub, Instagram).
- **Form column** — Name / Email / Message fields + "Send message →" button. Wired to
  EmailJS; on success shows a confirmation line; if EmailJS env vars are missing, falls
  back to the design's demo message.

### Shared
- **Nav** — sticky, blurred translucent header; brand "Ishan Wardhono." (clay dot);
  links Home / Work / Contact with an active-state clay underline. Under 720px it
  collapses to a "Menu"/"Close" toggle revealing a full-width dropdown.
- **Footer** — top border, simple bottom bar: © year (auto), email/role, location.

## Architecture

```
src/
  main.jsx                 # Vite entry: ReactDOM + <BrowserRouter>
  App.jsx                  # layout shell: <Nav/> + <Outlet/> + <Footer/> + scroll-to-top on route change
  pages/
    Home.jsx
    Work.jsx
    Contact.jsx
  components/
    Nav.jsx                # sticky nav, active link, mobile Menu toggle (local state)
    Footer.jsx
    Portrait.jsx           # framed grayscale→color photo (props: src, alt, caption?)
    Eyebrow.jsx            # numbered/ruled section label (props: index?, children)
    SkillRow.jsx           # one technical-skills row (props: label, value)
    ExperienceItem.jsx     # one timeline entry (props: role, company, period, place, summary, bullets, tags)
    ContactForm.jsx        # EmailJS-wired form with demo fallback
    Reveal.jsx             # wrapper applying the scroll-reveal hook (optional, opt-in)
  data/
    resume.js              # experiences[], skills[], education, certifications[], profile/contact info
  hooks/
    useScrollReveal.js     # IntersectionObserver; respects prefers-reduced-motion
  lib/
    emailjs.js             # thin EmailJS wrapper reading VITE_EMAILJS_* + isConfigured()
  styles/
    tokens.css             # ported design tokens (colors, fonts @import, type scale, spacing)
    site.css               # ported portfolio-next/site.css
  assets/
    img/portrait.jpg
    img/about.jpg
    icons/{linkedin,github,instagram,mail,download}.svg
    ishan-wardhono-resume.pdf   # user-supplied (placeholder slot reserved)
index.html                 # Vite root HTML (favicon, fonts handled by tokens.css @import)
vite.config.js
```

### Component boundaries
- **Pages** compose components and pull copy from `data/resume.js`. They hold no
  business logic beyond layout.
- **`data/resume.js`** is the single source of résumé content. Updating the résumé
  means editing this file only — no JSX changes. Experience entries, skill rows, and
  certifications all render via `.map()`.
- **`Nav`** owns the only meaningful interactive state (mobile menu open/closed).
- **`ContactForm`** is self-contained: validates required fields (native HTML), calls
  the EmailJS wrapper, manages submit/success/error UI state locally.
- **`lib/emailjs.js`** isolates the EmailJS SDK and config-presence check so the form
  degrades gracefully and the dependency is swappable.

### Styling approach
- Port the design CSS as-is. `tokens.css` defines the CSS custom properties
  (`--ink`, `--clay`, `--font-display`, `--font-body`, `--font-heading`, spacing, etc.)
  and `@import`s the Google Fonts (Newsreader, Mulish, Montserrat, Poppins).
- `site.css` carries all component/layout/responsive rules. Class names in JSX match
  the design's class names exactly (`.shell`, `.hero`, `.eyebrow`, `.exp`, `.skill-row`,
  `.btn`, `.nav`, etc.) for fidelity.
- Both are imported once in `main.jsx`. No CSS Modules needed — this is a small site
  with a deliberately global design system.

### Motion
- `useScrollReveal` adds an `in` class when elements enter the viewport (threshold
  ~0.12), gated behind `prefers-reduced-motion: no-preference`. Reveal is opt-in via the
  `Reveal` wrapper / `reveal` class, kept extremely subtle (the design is static-first).
- Everything else (button hover, nav underline, portrait warm-up, available pulse) is
  pure CSS, already in `site.css`.

### Responsive
Fully fluid via `clamp()` type and CSS grid. Breakpoints from the design collapse the
hero, experience rows, and skill table to single columns; nav becomes the Menu toggle
under 720px. No JS-driven breakpoints — all handled in CSS.

## Deployment / tooling changes

- **Vite** replaces `react-scripts`. `npm run dev` (local), `npm run build` → `dist/`,
  `npm run preview`.
- **`firebase.json`** — change `"public": "build"` → `"public": "dist"`. SPA rewrite to
  `/index.html` stays (needed so `/work` and `/contact` deep-links resolve).
- **CI** (`.github/workflows/deploy-prod.yml` and `firebase-hosting-pull-request.yml`) —
  build step stays `npm run build` (now Vite); Firebase action picks up `dist/` via
  `firebase.json`. Keep `CI=false` only if needed (Vite doesn't treat warnings as
  errors, so it can likely be dropped).
- **`package.json`** — new dependency set: `react`, `react-dom`, `react-router-dom`,
  `@emailjs/browser`. Dev: `vite`, `@vitejs/plugin-react`. Remove all unused: `aos`,
  `react-slick`/`slick-carousel`, `react-map-gl`, `react-modal`, `react-modal-video`,
  `simple-react-lightbox`, `react-tooltip`, `react-hook-form`, `emailjs-com` (replaced),
  `firebase` (hosting uses CLI/CI, not the SDK), `sass`, `react-scripts`, the testing
  libs (unless we choose to keep a minimal test setup).

## Environment variables

`.env` (committed; EmailJS public key is safe to expose client-side — it is a publishable key):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

If any are absent, `ContactForm` shows the demo confirmation instead of sending.

## Out of scope
- `mockup.html` device-frame tool.
- Projects / case-studies section (intentionally dropped during design iteration).
- Dark mode, additional accent colors, blog/news, portfolio gallery.
- A backend for the contact form (EmailJS is client-side).

## Open items (need user input before/at implementation)
1. **`ishan-wardhono-resume.pdf`** — user to supply the actual PDF file.
2. **EmailJS credentials** — user to create/provide service, template, and public key.
3. **Testing** — whether to keep any test tooling (e.g. Vitest) or ship test-free for
   this static site. Default: no tests unless requested.

## Success criteria
- Three routes render pixel-faithfully to the design at desktop and mobile widths.
- Mobile nav toggle, portrait hover, available pulse, and section reveals all work.
- Deep-linking to `/work` and `/contact` resolves on Firebase (SPA rewrite).
- Contact form sends via EmailJS when configured, degrades to demo message otherwise.
- Résumé content all sourced from `data/resume.js`.
- No unused dependencies remain; `npm run build` produces a clean `dist/`.
