# Saurabh Pandey — Portfolio (Next.js)

Migrated from the original static HTML/CSS/JS portfolio at the repository root.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **next/font/google** — Bricolage Grotesque, Instrument Serif, Manrope, JetBrains Mono
- **three.js** — particle-network background, kept as imperative code in a `'use client'` component
- Custom CSS (ported verbatim from `../css/styles.css` to `app/globals.css`); only the four font-family CSS variables were rewired to consume next/font CSS variables

## Run

```bash
cd next-app
npm install
npm run dev
```

Open http://localhost:3000.

## Project layout

```
app/
  layout.tsx                       # next/font wiring + global CSS
  page.tsx                         # home — assembles all sections
  globals.css                      # ported styles.css
  projects/network-security/
    page.tsx                       # case-study page (former projects/network-security.html)

components/
  chrome/
    BackgroundCanvas.tsx           # three.js particle network (client)
    CustomCursor.tsx               # dot + ring follow cursor (client)
    Loader.tsx                     # initializing-system splash (client)
    Nav.tsx                        # scroll state + mobile menu (client)
    RevealOnScroll.tsx             # IntersectionObserver for .reveal items (client)
    SiteChrome.tsx                 # bundles loader/cursor/canvas/vignette/grain/rails

  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Achievements.tsx
    Education.tsx
    Contact.tsx

public/
  Saurabh_Pandey_Resume_DataScience.pdf
  Saurabh_Pandey_Resume_Core_EEE.pdf
  image.png
```

## Notes on the migration

- Server components by default. Only the four chrome pieces that need `window`, `document`, mouse/scroll, or `requestAnimationFrame` are `'use client'`.
- `data-include` fetch shim is gone — sections are imported as React components, no FOUC.
- The `.reveal` class still drives the scroll animation; a single global `IntersectionObserver` in `RevealOnScroll` adds `.in` exactly like the original.
- Resume PDFs are referenced from `/Saurabh_Pandey_Resume_*.pdf` (i.e. served from `public/`).
- Three.js is now an npm dependency rather than a CDN script tag, so it tree-shakes through the bundler.
