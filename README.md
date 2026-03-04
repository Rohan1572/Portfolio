# Premium Fintech Portfolio

A recruiter-focused, high-performance portfolio built with React + Vite. The design language follows a modern fintech SaaS aesthetic with clear impact storytelling, reusable components, and dark/light theming.

## Highlights

- Mobile-first responsive layout with semantic sections.
- Smooth, subtle animations powered by Framer Motion.
- Dark/light theme toggle with local storage persistence.
- Recruiter-oriented content architecture (impact-first achievements and project outcomes).
- Project filtering by category (Fintech, Security, Web App).
- SEO-ready metadata and Open Graph tags in `index.html`.
- CSS Modules for scoped styling and long-term maintainability.

## Tech Stack

- React 18
- Vite 5
- Framer Motion
- CSS Modules

## Folder Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Projects.jsx
│   │   ├── SecurityEdge.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── content.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── styles/
│   │   ├── *.module.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Runtime Requirement

- Node.js 22+ is required (Agent Runners and local development).
- This repo pins Node via `.nvmrc` and `.node-version` to reduce environment drift.

## Run Locally

```bash
npm install
npm run dev
```

For production build validation:

```bash
npm run build
```

## Customization Tips

- Update profile and contact links in `src/components/Contact.jsx`.
- Replace placeholder demo/GitHub links in `src/data/content.js`.
- Adjust the color system in `src/styles/global.css`.
- Extend sections while preserving semantic structure for SEO and accessibility.


## Note on Assets

This version uses text-based SVG assets to keep repository diffs PR-friendly and avoid binary-artifact issues in automated review pipelines.
