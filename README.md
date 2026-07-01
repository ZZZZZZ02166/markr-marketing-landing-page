# Markr — EDM Landing Page

A responsive marketing landing page and EDM (email direct marketing) subscription
form for **Markr**, an AI-assisted assessment concept for K–12 schools. Built with
**Next.js (Pages Router)** and **raw CSS** — no Tailwind, no UI or styling libraries.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Approach

- **Next.js Pages Router.** The page is composed in `pages/index.js` from small,
  focused section components in `components/`. `pages/_document.js` holds the
  Google Fonts links and document `<head>`; `pages/_app.js` imports the single
  global stylesheet.
- **Raw CSS, one stylesheet.** All styling lives in `styles/globals.css` using
  plain CSS with custom properties (`:root` design tokens for colour, spacing and
  the type scale) and media queries. No CSS-in-JS, no preprocessor, no Tailwind.
- **Responsive.** Designed for desktop (~1440) down to mobile (~375). Breakpoints
  at 980px, 720px and 430px collapse the grids (overview cards, feature rows,
  footer) into a single column and scale headings down.
- **Interactivity is client-side React state.** The FAQ list and the three feature
  accordions use `useState` (one open item per group). No external state or
  animation libraries.
- **Lean dependencies.** Only `next`, `react` and `react-dom`. Nothing else.

## Form

The EDM subscription form (`components/Subscribe.js`) is **front-end only** — it is
**not** connected to any backend, database or email service, as permitted by the
brief. It uses controlled inputs and basic validation:

- name and email are required,
- email is checked against a simple pattern,
- on success it shows a confirmation message and resets the fields.

## Project structure

```
markr-next/
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── Overview.js
│   ├── Features.js      # feature rows + accordions (useState)
│   ├── Faq.js           # FAQ accordion (useState)
│   ├── Subscribe.js     # EDM form, front-end validation
│   └── Footer.js
├── pages/
│   ├── _app.js          # imports styles/globals.css
│   ├── _document.js     # <head>, fonts
│   └── index.js         # page composition
├── styles/
│   └── globals.css      # all styling + design tokens + media queries
├── package.json
└── README.md
```

## Tools & AI tooling

- **Next.js** (Pages Router) and **React**.
- Fonts: **Gabarito** and **Inter**, loaded from Google Fonts.
- **AI tooling:** the design was iterated on and the HTML/CSS was ported to this
  Next.js structure with the help of **Claude** (Anthropic's AI assistant). The
  design direction, copy, colour system and component breakdown were reviewed and
  adjusted manually.
