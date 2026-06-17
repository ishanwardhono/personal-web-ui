# Portfolio — New Site (refined minimal)

A complete redesign of Ishan Wardhono's site. Same **monochrome tone**, brand-new everything
else: an elegant **Newsreader** serif display, a single restrained **clay** accent, generous
whitespace, and a calm, mostly-static feel. **Multi-page** and **mobile-first**.

## Pages
- `index.html` — **Home**: personal intro hero (name + summary + portrait), a "See my experiences →" jump to Work, short bio, education & certifications.
- `work.html` — **Work**: work-focused page head, technical-skills table, and the full experience timeline.
- `contact.html` — **Contact**: big invitation, details, quiet demo contact form.
- `mockup.html` — **Device mockup**: frames the real pages in browser / phone chrome with a **Desktop ↔ Mobile** resolution tweak (and a page switcher). Toggle from the on-canvas bar or the Tweaks panel; the iframe renders the actual responsive site, so Mobile shows the collapsed nav and single-column layout for real.

## Shared
- `site.css` — the whole visual system (nav, footer, type scale, components, all responsive rules). Links the design-system `styles.css` for tokens.
- `site.js` — mobile nav toggle, subtle scroll-reveal (respects reduced-motion), current year.

## Design notes
- **Type** — `--font-display` (Newsreader) for headlines, Mulish body, Montserrat tracked-caps for micro-labels.
- **Accent** — `--clay` (`#b94a2b`), used only on section numbers, the active-nav underline, link hovers, and the "available" pulse. Never as a fill.
- **Photo** — the morphing blob is retired here in favour of a sharp framed portrait that desaturates by default and warms up on hover.
- **Motion** — minimal: a soft scroll-reveal and small hover shifts; no entrances, no counters.

## Responsive
Everything is fluid (`clamp()` type, CSS grid). Breakpoints at 860/760/720/680/640/600px collapse
the hero, experience rows and skill table to single columns; the nav becomes a
**Menu** toggle under 720px.

> This is a sibling to `ui_kits/portfolio/` (the faithful recreation of the *current* site),
> which is left intact as reference.
