# Markr Marketing Landing Page

This repository contains the Next.js implementation of a one-page marketing
landing page for **Markr**, an AI-powered student assessment platform for K-12
schools.

The page is aimed at school principals and heads of curriculum, with the goal
of encouraging visitors to subscribe to product news and updates.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Additional scripts:

```bash
npm run build
npm run start
```

## Implementation

- Built with **Next.js using the Pages Router**.
- Styled with **raw CSS** in a single global stylesheet.
- No Tailwind, CSS framework, component library or third-party styling package.
- Kept intentionally lean, with only `next`, `react` and `react-dom` as
  dependencies.
- Structured as reusable page sections inside `components/`.
- Designed to work across desktop and mobile layouts, including approximately
  1440px and 375px viewport widths.

## Approach

The page is structured as a concise marketing landing page for school decision
makers. The content focuses on the value Markr provides to principals and heads
of curriculum: faster assessment workflows, clearer visibility of student
progress and practical insight for curriculum planning.

The interface is split into focused sections so visitors can quickly understand
the product, review key capabilities, read common questions and subscribe for
updates. The implementation uses semantic sections, labelled form fields,
accordion controls with `aria-expanded`, an `aria-live` form status message and
a skip link for keyboard users.

## Page Sections

The landing page includes all required sections from the brief:

- Hero
- Product overview
- Features and capabilities
- FAQ
- EDM subscription form
- Footer

## Form Behaviour

The EDM subscription form is implemented as a front-end-only experience, as
required for this exercise. It is not connected to a backend, database or email
service.

The form includes basic validation:

- full name is required,
- work email is required,
- email format is checked,
- successful submission displays a confirmation message and resets the fields.

## Project Structure

```text
markr-marketing-landing-page/
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── Overview.js
│   ├── Features.js
│   ├── Faq.js
│   ├── Subscribe.js
│   └── Footer.js
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/
│   └── globals.css
├── package.json
├── package-lock.json
└── README.md
```

## Tools and AI Usage

The Next.js implementation was built with React, the Pages Router and raw CSS.
Google Fonts are used for typography.

AI tools were used to support copywriting, layout iteration, implementation
review and code quality checks. Claude was used during the design and code
iteration process, while Codex was used to review the Next.js project against the exercise requirements, identify potential implementation issues, and support testing of the local setup.


## Verification

The project has been checked against the technical requirements for the Next.js
deliverable:

- `npm install` installs the project dependencies.
- `npm run dev` starts the local development server.
- `npm run build` completes successfully.
- The implementation uses the Pages Router.
- Styling is written in raw CSS.
- No unnecessary npm packages are included.
- Desktop and mobile layouts have been reviewed.
