# Portfolio Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the old "Tokyo" CRA template with a fresh Vite + React site that recreates the `portfolio-next` design as three pages (Home, Work, Contact).

**Architecture:** Vite + React 18 SPA. `react-router-dom` v6 serves `/`, `/work`, `/contact` behind a shared layout shell (`Nav` + `Outlet`; each page renders its own `<main>` + `Footer`). Résumé content lives in one data module; pages compose small presentational components. Styling is the design's CSS ported verbatim. EmailJS powers the contact form with a graceful demo fallback.

**Tech Stack:** Vite 5, React 18, react-router-dom 6, @emailjs/browser 4, plain CSS (CSS custom properties), Firebase Hosting.

## Global Constraints

- **Design source of truth:** `docs/design-reference/portfolio-next/` (HTML/CSS/JS) and `docs/design-reference/tokens/`. Recreate the visual output; match class names exactly.
- **Spec:** `docs/superpowers/specs/2026-06-17-portfolio-rewrite-design.md`.
- **No new design.** Do not invent sections/copy not present in the design or `data/resume.js`.
- **Styling:** plain CSS only — no Sass, no CSS-in-JS, no CSS Modules. JSX `className`s match design classes (`.shell`, `.hero`, `.eyebrow`, `.exp`, `.skill-row`, `.btn`, `.nav`, …).
- **Content is data.** All résumé copy comes from `src/data/resume.js`; never hard-code résumé text in JSX. Lists render via `.map()`.
- **Motion:** only the `useScrollReveal` hook + the design's CSS hover/pulse. Respect `prefers-reduced-motion`. No animation libraries.
- **Static assets** (images, icons, favicon, resume PDF) live in `public/` and are referenced by absolute path (e.g. `/assets/img/portrait.jpg`).
- **Routing must support deep links** — `/work` and `/contact` resolve via the Firebase SPA rewrite.
- **EmailJS env vars** are `VITE_`-prefixed: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. Missing config → demo fallback.

## File Structure

```
index.html                 # Vite root HTML (new)
vite.config.js             # Vite config (new)
package.json               # rewritten: Vite deps, scripts
firebase.json              # public: build -> dist
public/
  favicon-32.png
  assets/img/portrait.jpg
  assets/img/about.jpg
  assets/icons/{linkedin,github,instagram}.svg
  assets/ishan-wardhono-resume.pdf   # user-supplied placeholder
src/
  main.jsx                 # entry + router + style imports
  App.jsx                  # layout shell (Nav + Outlet, scroll reset, reveal)
  styles/
    tokens.css             # @imports the four token files
    tokens/{fonts,colors,typography,spacing}.css   # copied from design-reference
    site.css               # copied from design-reference/portfolio-next/site.css
  data/resume.js           # all résumé content
  hooks/useScrollReveal.js
  lib/emailjs.js
  components/
    Nav.jsx  Footer.jsx  Eyebrow.jsx  Portrait.jsx  SkillRow.jsx
    ExperienceItem.jsx  ContactForm.jsx
  pages/
    Home.jsx  Work.jsx  Contact.jsx
```

Deleted: old `src/` (App.js, components/, views/, router/, assets/scss/, index.js, reportWebVitals.js), `public/index.html`, old `public/assets/*` (Tokyo template).

**Verification model:** this is a visual design port. Most tasks verify via `npm run build` (must succeed) plus a described `npm run dev` visual check against the design reference. One optional task adds a tiny Vitest smoke test for the EmailJS fallback logic.

---

### Task 1: Scaffold Vite + React, get a blank app building

**Files:**
- Create: `index.html`, `vite.config.js`
- Modify/replace: `package.json`
- Create: `src/main.jsx`, `src/App.jsx`
- Delete: `src/index.js`, `src/reportWebVitals.js`, `src/App.js`, `public/index.html`

**Interfaces:**
- Produces: `App` (default export, the layout shell), the router mounting `/`, `/work`, `/contact`.

- [ ] **Step 1: Replace `package.json`**

```json
{
  "name": "ishanwardhono",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: { outDir: "dist" },
});
```

- [ ] **Step 3: Create root `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ishan Wardhono — Backend Software Engineer</title>
    <link rel="icon" href="/favicon-32.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create `src/App.jsx` (temporary placeholder shell)**

```jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Outlet />;
}
```

- [ ] **Step 5: Create `src/main.jsx` with placeholder routes**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const Stub = ({ name }) => <h1>{name}</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Stub name="Home" />} />
          <Route path="work" element={<Stub name="Work" />} />
          <Route path="contact" element={<Stub name="Contact" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 6: Delete old CRA entry files**

```bash
rm -f src/index.js src/reportWebVitals.js src/App.js public/index.html
```

- [ ] **Step 7: Install and build**

```bash
npm install
npm run build
```
Expected: install succeeds, `npm run build` completes and writes `dist/index.html`.

- [ ] **Step 8: Smoke-test dev server**

```bash
npm run dev
```
Expected: dev server starts; visiting `/`, `/work`, `/contact` shows the stub headings. Stop the server.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "Scaffold Vite + React app, replace CRA entry"
```

---

### Task 2: Port design tokens, global styles, and static assets

**Files:**
- Create: `src/styles/tokens.css`, `src/styles/tokens/{fonts,colors,typography,spacing}.css`, `src/styles/site.css`
- Create: `public/favicon-32.png`, `public/assets/img/{portrait,about}.jpg`, `public/assets/icons/{linkedin,github,instagram}.svg`
- Modify: `src/main.jsx` (import styles)
- Delete: old `public/assets/*`, `public/manifest.json` (Tokyo), `src/assets/` (old scss)

**Interfaces:**
- Produces: global CSS custom properties (`--ink`, `--clay`, `--font-display`, `--font-body`, `--font-heading`, spacing, etc.) and all design component classes, available app-wide.

- [ ] **Step 1: Copy token files**

```bash
mkdir -p src/styles/tokens
cp docs/design-reference/tokens/fonts.css      src/styles/tokens/fonts.css
cp docs/design-reference/tokens/colors.css     src/styles/tokens/colors.css
cp docs/design-reference/tokens/typography.css src/styles/tokens/typography.css
cp docs/design-reference/tokens/spacing.css    src/styles/tokens/spacing.css
```

- [ ] **Step 2: Create `src/styles/tokens.css`**

```css
/* Token entry point: fonts first (carries the Google Fonts @import), then the rest. */
@import "./tokens/fonts.css";
@import "./tokens/colors.css";
@import "./tokens/typography.css";
@import "./tokens/spacing.css";
```

- [ ] **Step 3: Copy the site stylesheet**

```bash
cp docs/design-reference/portfolio-next/site.css src/styles/site.css
```

- [ ] **Step 4: Copy static assets into `public/`**

```bash
mkdir -p public/assets/img public/assets/icons
cp docs/design-reference/assets/favicon-32.png       public/favicon-32.png
cp docs/design-reference/assets/img/portrait.jpg     public/assets/img/portrait.jpg
cp docs/design-reference/assets/img/about.jpg        public/assets/img/about.jpg
cp docs/design-reference/assets/icons/linkedin.svg   public/assets/icons/linkedin.svg
cp docs/design-reference/assets/icons/github.svg     public/assets/icons/github.svg
cp docs/design-reference/assets/icons/instagram.svg  public/assets/icons/instagram.svg
```

- [ ] **Step 5: Remove old Tokyo public assets and scss**

```bash
rm -rf public/assets/file public/assets/img/home public/assets/img/thumbs \
       public/assets/img/slider public/assets/img/portfolio public/assets/img/svg \
       public/manifest.json src/assets
```
Note: keep only the newly-copied `public/assets/img/{portrait,about}.jpg` and `public/assets/icons/*`. If `public/favicon/` (old) exists and is unused, remove it too.

- [ ] **Step 6: Import styles in `src/main.jsx`**

Add these two imports at the top of `src/main.jsx`, after the existing imports:

```js
import "./styles/tokens.css";
import "./styles/site.css";
```

- [ ] **Step 7: Build and visually verify tokens load**

```bash
npm run build && npm run dev
```
Expected: build passes. In the browser the stub headings now render in the design's serif/sans fonts on a white background (fonts + tokens applied). Stop the server.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Port design tokens, global styles, and static assets"
```

---

### Task 3: Create the résumé data module

**Files:**
- Create: `src/data/resume.js`

**Interfaces:**
- Produces:
  - `profile` — `{ name, role, location, email, status, summary, workSummary, aboutLead, aboutBody: string[] }`
  - `social` — `{ linkedin, github, instagram }`
  - `skills` — `Array<{ label: string, value: string }>`
  - `experiences` — `Array<{ role, company, period, place, summary, bullets: Array<{lead, rest}>, tags: string[] }>`
  - `education` — `{ degree, school, period, place, gpa, coursework, ta }`
  - `certifications` — `Array<{ year, name, issuer, url }>`

- [ ] **Step 1: Create `src/data/resume.js`**

```js
export const profile = {
  name: "Ishan Wardhono",
  role: "Backend Software Engineer",
  location: "Yogyakarta, Indonesia",
  email: "ishanwardhono@gmail.com",
  status: "Available for select work · Indonesia",
  summary:
    "Backend engineer based in Indonesia — building the high-availability microservices behind e-commerce, banking and logistics, and happiest with clean, testable code.",
  workSummary:
    "Specializing in Golang, PostgreSQL and high-availability microservices — high-throughput systems, workflow automation, and clean, testable code.",
  aboutLead:
    "I care about the parts users never see — the quiet machinery that has to stay up.",
  aboutBody: [
    "My work tends to live in the busiest part of a system — carts, checkouts, order management, account integration. I like making those modules fast, observable and boring in the best way: predictable under load, easy to debug at 2am, covered by tests.",
    "Lately I’ve been standardising how teams ship — writing the TRDs and change-management workflows that connect product intent to safe production deploys — and automating the repetitive parts with N8N. I’m happiest with clean, testable code and a Grafana board that tells the truth.",
  ],
};

export const social = {
  linkedin: "https://linkedin.com/in/ishanwardhono",
  github: "https://github.com/ishanwardhono",
  instagram: "https://instagram.com/ishanwardhono",
};

export const skills = [
  { label: "Languages", value: "Golang (5+ yrs), C# (1 yr), JavaScript / TypeScript, PHP" },
  { label: "Databases", value: "PostgreSQL, MySQL, CockroachDB, MongoDB, DynamoDB, Redis" },
  { label: "Infrastructure", value: "Docker, Kubernetes, AWS, GCP, GitHub Actions, N8N" },
  { label: "Messaging", value: "Kafka, RabbitMQ, NSQ, AWS SQS" },
  { label: "Observability", value: "Datadog, Grafana, Elasticsearch, Scalyr" },
  { label: "AI Tools", value: "Claude Code, GitHub Copilot" },
  { label: "Concepts", value: "Microservices, REST, gRPC, GraphQL, SOLID, DDD, Unit / Integration Testing" },
];

export const experiences = [
  {
    role: "Backend Engineer",
    company: "Evermos",
    period: "Nov 2023 — Present",
    place: "Yogyakarta, ID",
    summary:
      "Social commerce platform — engineering the core transaction systems that carry the company’s revenue flow.",
    bullets: [
      { lead: "Core Transaction Systems —", rest: "optimise high-traffic Cart, Checkout & Order Management in Golang and MySQL." },
      { lead: "Process Standardization —", rest: "led TRD & Change-Management workflows connecting Product and Engineering for safe deploys." },
      { lead: "Automation & Debugging —", rest: "N8N automation to cut manual ops; Grafana for real-time monitoring." },
    ],
    tags: ["Golang", "PostgreSQL", "MySQL", "DynamoDB", "Redis", "Kubernetes", "Grafana", "N8N", "AWS"],
  },
  {
    role: "Backend Software Engineer",
    company: "HTC Global Services",
    period: "Nov 2022 — Nov 2023",
    place: "Kuala Lumpur, MY",
    summary: "IT consultant for a major Thai bank — a centralized account-integration platform.",
    bullets: [
      { lead: "Account Management System —", rest: "centralized platform in Golang for managing third-party integrations." },
      { lead: "Microservices Architecture —", rest: "layered design (BFF, Orchestrator, Core) on Kubernetes." },
      { lead: "Data & Observability —", rest: "PostgreSQL for integrity, Kafka for immutable activity logs on GKE." },
    ],
    tags: ["Golang", "PostgreSQL", "Kubernetes", "Kafka", "GKE", "GCP"],
  },
  {
    role: "Backend Developer",
    company: "Pingspace Robotics",
    period: "Jun 2021 — Nov 2022",
    place: "Penang, MY",
    summary: "Robotics & logistics — building a Warehouse Management System.",
    bullets: [
      { lead: "Warehouse Systems —", rest: "core WMS modules in C# & PostgreSQL with DDD and SOLID." },
      { lead: "Cloud Native —", rest: "serverless e-commerce in TypeScript + AWS Lambda, S3 and Apple Sign-In." },
      { lead: "System Integration —", rest: "RabbitMQ for async logging, Redis caching for faster retrieval." },
    ],
    tags: ["C#", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Tokopedia",
    period: "Apr 2019 — May 2021",
    place: "Jakarta, ID",
    summary: "Indonesia’s leading e-commerce unicorn — core Order Management at massive scale.",
    bullets: [
      { lead: "Order Management & Unified History —", rest: "Golang microservices at 2500+ RPS / 60ms avg with 99.9% uptime." },
      { lead: "Data Scalability —", rest: "high-availability CockroachDB and Redis Cluster architectures." },
      { lead: "Async Processing —", rest: "NSQ to buffer peak-season traffic spikes." },
    ],
    tags: ["Golang", "CockroachDB", "Redis Cluster", "Elasticsearch", "NSQ", "gRPC", "GraphQL", "Docker", "Datadog"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Universitas Sumatera Utara",
  period: "2014 — 2018",
  place: "Medan, ID",
  gpa: "GPA 3.76 / 4.00.",
  coursework: "Coursework in Data Structures, Algorithms & OOP.",
  ta: "Teaching Assistant (2015—2018) — led labs in Data Structures & Algorithms, OOP, and Algorithm Analysis.",
};

export const certifications = [
  {
    year: "2023",
    name: "Machine Learning",
    issuer: "Coursera",
    url: "https://coursera.org/share/ed28ed680bdbdd75530b168d53ccb85d",
  },
];
```

- [ ] **Step 2: Verify it parses**

```bash
node --input-type=module -e "import('./src/data/resume.js').then(m => console.log(Object.keys(m), m.experiences.length))"
```
Expected: prints the export names and `4`.

- [ ] **Step 3: Commit**

```bash
git add src/data/resume.js
git commit -m "Add résumé data module"
```

---

### Task 4: Build shared layout — Nav, Footer, scroll-reveal hook, App shell

**Files:**
- Create: `src/components/Nav.jsx`, `src/components/Footer.jsx`, `src/hooks/useScrollReveal.js`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `react-router-dom` (`NavLink`, `Outlet`, `useLocation`).
- Produces:
  - `Nav` (default export, no props) — sticky nav with mobile Menu toggle.
  - `Footer` (default export, prop `middle?: string`, defaults to `profile.email`).
  - `useScrollReveal(dep)` (default export) — adds `.in` to `.reveal` elements on intersection; re-runs when `dep` changes.

- [ ] **Step 1: Create `src/hooks/useScrollReveal.js`**

```js
import { useEffect } from "react";

export default function useScrollReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
```

- [ ] **Step 2: Create `src/components/Nav.jsx`**

```jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="shell nav-inner">
        <NavLink className="nav-brand" to="/">
          Ishan Wardhono<span className="dot">.</span>
        </NavLink>
        <button
          className="nav-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul
          className={open ? "nav-links open" : "nav-links"}
          onClick={(e) => {
            if (e.target.tagName === "A") setOpen(false);
          }}
        >
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create `src/components/Footer.jsx`**

```jsx
import { profile } from "../data/resume";

export default function Footer({ middle }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-bottom" style={{ margin: 0 }}>
          <span>© {new Date().getFullYear()} Ishan Wardhono</span>
          <span>{middle ?? profile.email}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Update `src/App.jsx` to render Nav + reveal**

```jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useScrollReveal(pathname);
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
```

- [ ] **Step 5: Build and verify nav**

```bash
npm run build && npm run dev
```
Expected: sticky nav with "Ishan Wardhono." brand (clay dot), Home/Work/Contact links with active underline on the current route. Narrow the window below 720px → links collapse, a "Menu" toggle appears, clicking toggles a full-width dropdown and switches to "Close". Stop the server.

- [ ] **Step 6: Commit**

```bash
git add src/components/Nav.jsx src/components/Footer.jsx src/hooks/useScrollReveal.js src/App.jsx
git commit -m "Add shared layout: Nav, Footer, scroll-reveal hook"
```

---

### Task 5: Build presentational components — Eyebrow, Portrait, SkillRow, ExperienceItem

**Files:**
- Create: `src/components/Eyebrow.jsx`, `src/components/Portrait.jsx`, `src/components/SkillRow.jsx`, `src/components/ExperienceItem.jsx`

**Interfaces:**
- Produces:
  - `Eyebrow` — props `{ index?: string, children, style? }` → `.eyebrow` block (optional clay `.idx`, a `.rule`, then label).
  - `Portrait` — props `{ src, alt, caption? }` → `.portrait` figure.
  - `SkillRow` — props `{ label, value }` → `.skill-row`.
  - `ExperienceItem` — props match one `experiences[]` entry: `{ role, company, period, place, summary, bullets, tags }` → `.exp` block.

- [ ] **Step 1: Create `src/components/Eyebrow.jsx`**

```jsx
export default function Eyebrow({ index, children, style }) {
  return (
    <div className="eyebrow" style={style}>
      {index ? <span className="idx">{index}</span> : null}
      <span className="rule" />
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/Portrait.jsx`**

```jsx
export default function Portrait({ src, alt, caption }) {
  return (
    <figure className="portrait" style={{ margin: 0 }}>
      <img src={src} alt={alt} />
      {caption ? <figcaption className="cap">{caption}</figcaption> : null}
    </figure>
  );
}
```

- [ ] **Step 3: Create `src/components/SkillRow.jsx`**

```jsx
export default function SkillRow({ label, value }) {
  return (
    <div className="skill-row">
      <div className="k">{label}</div>
      <div className="v">{value}</div>
    </div>
  );
}
```

- [ ] **Step 4: Create `src/components/ExperienceItem.jsx`**

```jsx
export default function ExperienceItem({ role, company, period, place, summary, bullets, tags }) {
  return (
    <div className="exp">
      <div className="exp-grid">
        <div className="exp-period">
          {period}
          <span className="place">{place}</span>
        </div>
        <div>
          <h3>{role}</h3>
          <div className="company">{company}</div>
          <p className="summary">{summary}</p>
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>
                <b>{b.lead}</b> {b.rest}
              </li>
            ))}
          </ul>
          <div className="tags">
            {tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Build to confirm no syntax errors**

```bash
npm run build
```
Expected: build passes (components compile even though not yet used).

- [ ] **Step 6: Commit**

```bash
git add src/components/Eyebrow.jsx src/components/Portrait.jsx src/components/SkillRow.jsx src/components/ExperienceItem.jsx
git commit -m "Add presentational components"
```

---

### Task 6: Build the Home page

**Files:**
- Create: `src/pages/Home.jsx`
- Modify: `src/main.jsx` (route `index` → `Home`)

**Interfaces:**
- Consumes: `Eyebrow`, `Portrait`, `Footer`, `react-router-dom` `Link`, and `profile`, `education`, `certifications` from `data/resume`.

- [ ] **Step 1: Create `src/pages/Home.jsx`**

```jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import Portrait from "../components/Portrait";
import Footer from "../components/Footer";
import { profile, education, certifications } from "../data/resume";

export default function Home() {
  useEffect(() => {
    document.title = "Ishan Wardhono — Backend Software Engineer";
  }, []);
  return (
    <>
      <main>
        <section className="shell hero">
          <div className="hero-grid">
            <div>
              <div className="status">
                <span className="pulse" /> {profile.status}
              </div>
              <Eyebrow>{profile.role}</Eyebrow>
              <h1 className="display h-xl hero-name">
                Ishan<br />Wardhono
              </h1>
              <p className="lead" style={{ maxWidth: "34ch" }}>
                {profile.summary}
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" to="/work">
                  See my experiences <span className="arrow">→</span>
                </Link>
                <Link className="btn btn-ghost" to="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
            <Portrait src="/assets/img/portrait.jpg" alt="Ishan Wardhono" caption="Bromo, East Java" />
          </div>
        </section>

        <section className="shell section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <Eyebrow index="01">About</Eyebrow>
          </div>
          <div className="cols">
            <div className="cols" style={{ gridTemplateColumns: "1fr", gap: 20 }}>
              <p className="lead" style={{ margin: 0 }}>
                {profile.aboutLead}
              </p>
            </div>
            <div className="cols" style={{ gridTemplateColumns: "1fr", gap: 18 }}>
              {profile.aboutBody.map((para, i) => (
                <p key={i} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="shell section" style={{ paddingTop: 0 }}>
          <div className="cols">
            <div>
              <Eyebrow index="02" style={{ marginBottom: 24 }}>
                Education
              </Eyebrow>
              <h3 className="display h-sm" style={{ margin: "0 0 4px" }}>
                {education.degree}
              </h3>
              <div
                className="company"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--clay)",
                  marginBottom: 6,
                }}
              >
                {education.school}
              </div>
              <p
                className="muted"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 12.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 18px",
                }}
              >
                {education.period} · {education.place}
              </p>
              <p style={{ margin: "0 0 8px" }}>
                <b style={{ color: "var(--ink)" }}>{education.gpa}</b> {education.coursework}
              </p>
              <p style={{ margin: 0 }}>{education.ta}</p>
            </div>
            <div>
              <Eyebrow index="03" style={{ marginBottom: 24 }}>
                Certifications
              </Eyebrow>
              {certifications.map((c) => (
                <div className="contact-line" style={{ paddingTop: 0 }} key={c.year}>
                  <span className="k">{c.year}</span>
                  <span>
                    <b style={{ color: "var(--ink)" }}>{c.name}</b> — {c.issuer}{" "}
                    <a
                      className="text-link"
                      style={{ border: "none", padding: 0, fontSize: 12, marginLeft: 8 }}
                      href={c.url}
                    >
                      View →
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Wire the route in `src/main.jsx`**

Add the import and replace the `index` route's element. After `import App from "./App";` add:

```js
import Home from "./pages/Home";
```
Change `<Route index element={<Stub name="Home" />} />` to:

```jsx
<Route index element={<Home />} />
```

- [ ] **Step 3: Build and visually verify against `index.html`**

```bash
npm run build && npm run dev
```
Expected: Home matches `docs/design-reference/portfolio-next/index.html` — status pill with pulsing clay dot, large serif "Ishan Wardhono", lead, two buttons, grayscale portrait that warms on hover, then About (01), Education (02), Certifications (03). Check single-column collapse below 860px. Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.jsx src/main.jsx
git commit -m "Add Home page"
```

---

### Task 7: Build the Work page

**Files:**
- Create: `src/pages/Work.jsx`
- Modify: `src/main.jsx` (route `work` → `Work`)

**Interfaces:**
- Consumes: `Eyebrow`, `Portrait`, `SkillRow`, `ExperienceItem`, `Footer`, `react-router-dom` `Link`, and `profile`, `skills`, `experiences` from `data/resume`.

- [ ] **Step 1: Create `src/pages/Work.jsx`**

```jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import Portrait from "../components/Portrait";
import SkillRow from "../components/SkillRow";
import ExperienceItem from "../components/ExperienceItem";
import Footer from "../components/Footer";
import { profile, skills, experiences } from "../data/resume";

export default function Work() {
  useEffect(() => {
    document.title = "Work — Ishan Wardhono";
  }, []);
  return (
    <>
      <main>
        <section className="shell hero">
          <div className="hero-grid">
            <div>
              <Eyebrow style={{ marginBottom: 22 }}>Work</Eyebrow>
              <h1 className="display h-lg hero-name" style={{ marginTop: 0 }}>
                7 Years as<br />Backend Software<br />Engineer
              </h1>
              <p className="lead" style={{ maxWidth: "40ch" }}>
                {profile.workSummary}
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="/assets/ishan-wardhono-resume.pdf">
                  Download Résumé <span className="arrow">↓</span>
                </a>
                <Link className="btn btn-ghost" to="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
            <Portrait src="/assets/img/about.jpg" alt="Ishan Wardhono" />
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <Eyebrow index="01">Technical Skills</Eyebrow>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <SkillRow key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </section>

        <section className="shell section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <Eyebrow index="02">Experience</Eyebrow>
          </div>
          {experiences.map((e) => (
            <ExperienceItem key={e.company} {...e} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Wire the route in `src/main.jsx`**

Add after the `Home` import:

```js
import Work from "./pages/Work";
```
Change `<Route path="work" element={<Stub name="Work" />} />` to:

```jsx
<Route path="work" element={<Work />} />
```

- [ ] **Step 3: Build and visually verify against `work.html`**

```bash
npm run build && npm run dev
```
Expected: Work matches `docs/design-reference/portfolio-next/work.html` — eyebrow "Work", serif "7 Years as Backend Software Engineer", `about.jpg` portrait, Download Résumé + Get in touch buttons, Technical Skills table (7 rows incl. AI Tools), and four experience entries (Evermos → Tokopedia) each with period/place, role, clay company, italic summary, bullets, and tag chips. Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Work.jsx src/main.jsx
git commit -m "Add Work page"
```

---

### Task 8: Build the EmailJS wrapper, ContactForm, and Contact page

**Files:**
- Create: `src/lib/emailjs.js`, `src/components/ContactForm.jsx`, `src/pages/Contact.jsx`
- Create: `.env` additions (document the three vars)
- Modify: `src/main.jsx` (route `contact` → `Contact`)

**Interfaces:**
- Consumes: `@emailjs/browser`, `Eyebrow`, `Footer`, and `profile`, `social` from `data/resume`.
- Produces:
  - `isConfigured(): boolean` and `sendContactEmail(params): Promise` from `src/lib/emailjs.js`.
  - `ContactForm` (default export, no props) — the EmailJS-wired form with demo fallback.

- [ ] **Step 1: Create `src/lib/emailjs.js`**

```js
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export function sendContactEmail(params) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
}
```

- [ ] **Step 2: Create `src/components/ContactForm.jsx`**

```jsx
import { useState } from "react";
import { isConfigured, sendContactEmail } from "../lib/emailjs";
import { profile } from "../data/resume";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | demo | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!isConfigured()) {
      form.reset();
      setStatus("demo");
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    try {
      await sendContactEmail({
        from_name: data.get("name"),
        reply_to: data.get("email"),
        message: data.get("message"),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const note = { marginTop: 18, fontSize: 13.5 };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" name="message" placeholder="Tell me a little about it…" required />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <span className="arrow">→</span>
      </button>
      {status === "sent" && (
        <p className="muted" style={note}>
          Thanks — I’ll get back to you soon.
        </p>
      )}
      {status === "demo" && (
        <p className="muted" style={note}>
          Thanks — this is a demo form. Email me directly at {profile.email} and I’ll reply.
        </p>
      )}
      {status === "error" && (
        <p className="muted" style={note}>
          Something went wrong. Please email me directly at {profile.email}.
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 3: Create `src/pages/Contact.jsx`**

```jsx
import { useEffect } from "react";
import Eyebrow from "../components/Eyebrow";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { profile, social } from "../data/resume";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Ishan Wardhono";
  }, []);
  return (
    <>
      <main>
        <section
          className="shell"
          style={{ paddingTop: "clamp(56px,8vw,110px)", paddingBottom: "clamp(20px,3vw,32px)" }}
        >
          <div className="status">
            <span className="pulse" /> Available for select work
          </div>
          <Eyebrow style={{ marginBottom: 22 }}>Contact</Eyebrow>
          <h1 className="display h-xl" style={{ maxWidth: "14ch" }}>
            Let’s <span className="serif-italic">talk.</span>
          </h1>
          <p className="lead" style={{ maxWidth: "40ch", marginTop: 18 }}>
            Have a system that needs to scale, a backend to untangle, or a role you think
            fits? The fastest way to reach me is email — I read everything.
          </p>
        </section>

        <section className="shell section" style={{ paddingTop: "clamp(36px,5vw,60px)" }}>
          <div className="contact-grid">
            <div>
              <div className="contact-line" style={{ paddingTop: 0 }}>
                <span className="k">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-line">
                <span className="k">LinkedIn</span>
                <a href={social.linkedin}>linkedin.com/in/ishanwardhono</a>
              </div>
              <div className="contact-line">
                <span className="k">GitHub</span>
                <a href={social.github}>github.com/ishanwardhono</a>
              </div>
              <div className="contact-line">
                <span className="k">Based in</span>
                <span>Yogyakarta, Indonesia · GMT+7</span>
              </div>
              <div className="socials" style={{ marginTop: 34 }}>
                <a href={social.linkedin} aria-label="LinkedIn">
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href={social.github} aria-label="GitHub">
                  <img src="/assets/icons/github.svg" alt="GitHub" />
                </a>
                <a href={social.instagram} aria-label="Instagram">
                  <img src="/assets/icons/instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer middle="Backend Software Engineer" />
    </>
  );
}
```

- [ ] **Step 4: Wire the route in `src/main.jsx`**

Add after the `Work` import:

```js
import Contact from "./pages/Contact";
```
Change `<Route path="contact" element={<Stub name="Contact" />} />` to:

```jsx
<Route path="contact" element={<Contact />} />
```
Then remove the now-unused `Stub` constant.

- [ ] **Step 5: Add EmailJS vars to `.env`**

Append to `.env` (fill in real values when available; leaving them blank triggers the demo fallback):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

- [ ] **Step 6: Build and verify against `contact.html`**

```bash
npm run build && npm run dev
```
Expected: Contact matches `docs/design-reference/portfolio-next/contact.html` — status pill, "Let's _talk._" (italic "talk"), details column (Email/LinkedIn/GitHub/Based in) + three social icons, and the form. With env vars blank, submitting a valid form resets it and shows the demo message. Stop the server.

- [ ] **Step 7: Commit**

```bash
git add src/lib/emailjs.js src/components/ContactForm.jsx src/pages/Contact.jsx src/main.jsx .env
git commit -m "Add EmailJS wrapper, ContactForm, and Contact page"
```

---

### Task 9: Update Firebase config and CI for the Vite build

**Files:**
- Modify: `firebase.json`
- Modify: `.github/workflows/deploy-prod.yml`, `.github/workflows/firebase-hosting-pull-request.yml`

**Interfaces:** none (deployment plumbing).

- [ ] **Step 1: Point Firebase Hosting at `dist`**

In `firebase.json`, change `"public": "build"` to `"public": "dist"`. Leave the `rewrites` block (`** → /index.html`) unchanged — it is required for `/work` and `/contact` deep links.

- [ ] **Step 2: Update the production workflow build step**

In `.github/workflows/deploy-prod.yml`, change the build step `- run: CI=false npm run build` to:

```yaml
      - run: npm run build
```
(Vite does not treat warnings as errors, so `CI=false` is no longer needed.)

- [ ] **Step 3: Update the PR-preview workflow build step**

In `.github/workflows/firebase-hosting-pull-request.yml`, change `- run: CI=false npm run build` to:

```yaml
      - run: npm run build
```

- [ ] **Step 4: Verify the build output directory**

```bash
npm run build && test -f dist/index.html && echo "dist OK"
```
Expected: prints `dist OK`.

- [ ] **Step 5: Commit**

```bash
git add firebase.json .github/workflows/deploy-prod.yml .github/workflows/firebase-hosting-pull-request.yml
git commit -m "Point Firebase Hosting and CI at Vite dist output"
```

---

### Task 10: Remove old template files, update README and .gitignore

**Files:**
- Delete: `src/components/{Home,About,Social}.jsx`, `src/views/`, `src/router/`, `src/assets/` (if any remain)
- Modify: `README.md`, `.gitignore`

**Interfaces:** none.

- [ ] **Step 1: Delete leftover Tokyo template files**

```bash
rm -rf src/views src/router src/components/Home.jsx src/components/About.jsx src/components/Social.jsx
```
Then confirm `src/` contains only: `main.jsx`, `App.jsx`, `styles/`, `data/`, `hooks/`, `lib/`, `components/` (Nav, Footer, Eyebrow, Portrait, SkillRow, ExperienceItem, ContactForm), `pages/` (Home, Work, Contact).

```bash
find src -type f | sort
```
Expected: no `HomeLight.jsx`, `NotFound.jsx`, `Routes.js`, or old components remain.

- [ ] **Step 2: Update `.gitignore` for Vite**

Add a `/dist` entry (replacing the CRA `/build`):

```
# production
/dist
/build
```

- [ ] **Step 3: Rewrite `README.md`**

```markdown
# ishanwardhono.com

Personal résumé site for Ishan Wardhono — a refined-minimal, monochrome portfolio
built with Vite + React.

## Develop

\`\`\`
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
\`\`\`

## Structure

- `src/pages/` — Home, Work, Contact
- `src/components/` — Nav, Footer, and presentational pieces
- `src/data/resume.js` — all résumé content (edit here to update the site)
- `src/styles/` — design tokens + global styles
- `docs/design-reference/` — the source-of-truth design prototype
- `docs/superpowers/` — the design doc and this implementation plan

## Contact form

Uses EmailJS. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAILJS_PUBLIC_KEY` in `.env`. Without them, the form shows a demo message.

## Deploy

Firebase Hosting via GitHub Actions: push to `main` deploys live; PRs get a preview channel.
\`\`\`
```

- [ ] **Step 4: Build to confirm nothing broke**

```bash
npm run build
```
Expected: build passes.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Remove old template, update README and .gitignore"
```

---

### Task 11 (optional, recommended): Add a Vitest smoke test for EmailJS fallback

Only do this task if keeping a minimal test setup (spec open item #3). It guards the one piece of branching logic in the app.

**Files:**
- Modify: `package.json` (add `test` script + dev deps)
- Create: `src/lib/emailjs.test.js`

- [ ] **Step 1: Add Vitest dev deps and script**

Add to `package.json` `devDependencies`: `"vitest": "^2.0.0"`. Add to `scripts`: `"test": "vitest run"`. Then:

```bash
npm install
```

- [ ] **Step 2: Write the test**

```js
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("isConfigured", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns false when env vars are missing", async () => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "");
    const { isConfigured } = await import("./emailjs.js");
    expect(isConfigured()).toBe(false);
    vi.unstubAllEnvs();
  });

  it("returns true when all env vars are set", async () => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "svc");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "tpl");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "key");
    const { isConfigured } = await import("./emailjs.js");
    expect(isConfigured()).toBe(true);
    vi.unstubAllEnvs();
  });
});
```

- [ ] **Step 3: Run the test**

```bash
npm test
```
Expected: 2 passing tests.

- [ ] **Step 4: Commit**

```bash
git add package.json src/lib/emailjs.test.js package-lock.json
git commit -m "Add Vitest smoke test for EmailJS fallback"
```

---

## Final verification

- [ ] `npm run build` succeeds and writes `dist/index.html`.
- [ ] `npm run preview` serves all three routes; deep-linking `/work` and `/contact` works.
- [ ] Each page visually matches its design-reference HTML at desktop width and below 720px (mobile nav toggle works).
- [ ] Portrait hover warms to color; the "available" dot pulses; section reveals fire once.
- [ ] Contact form: demo message with blank env; (when configured) sends via EmailJS.
- [ ] `git status` clean; no old Tokyo template files remain under `src/`.

## Reminders for the implementer

- The user must supply `public/assets/ishan-wardhono-resume.pdf` (Download Résumé target) and the real EmailJS credentials. Until then the résumé link 404s and the form uses the demo fallback — both expected.
- If a nested `@import` ordering warning appears from `tokens.css`, inline the Google Fonts `@import` as the first line of `src/styles/tokens.css` and drop the `@import "./tokens/fonts.css";` line (keep the `--font-*` `:root` vars from fonts.css by copying them into `tokens.css`).
