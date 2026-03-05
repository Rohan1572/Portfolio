# Premium FinTech Portfolio

A recruiter-focused developer portfolio designed like a SaaS landing page instead of a static resume. The experience emphasizes trust, performance, and storytelling for fintech product engineering.

## Overview

This refactor upgrades the portfolio into a modular Next.js architecture with:

- animated hero and section reveals (Framer Motion)
- dynamic project filtering
- dark/light theme toggle
- loading and page transition animations
- timeline-based experience section
- interactive contact form via API route
- responsive fintech-inspired design system using Tailwind CSS

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **UI:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** React Icons

## Architecture

```text
src/
  animations/
    fadeIn.ts
    stagger.ts
  components/
    About.tsx
    Contact.tsx
    Education.tsx
    Experience.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Projects.tsx
    Skills.tsx
    ThemeToggle.tsx
  data/
    experience.ts
    projects.ts
    skills.ts
  pages/
    api/
      contact.ts
    _app.tsx
    index.tsx
  styles/
    globals.css
public/
  assets/
    archive/
      RG logo.png
      ROHAN GUPTA_auto_x1.jpg
      tech post new 2.jpg
      favicon-placeholder.txt
  favicon.svg
  og-image.svg
  profile.jpg
```

## Features

- **Premium Hero:** Animated gradient, strong positioning statement, and rotating capability text.
- **Project Showcase:** Interactive cards with category filters (All, FinTech, Web Apps, Tools).
- **Skill Intelligence:** Category-based animated skill grid with icons.
- **Experience Storytelling:** Scroll-animated vertical timeline for Deloitte and EY roles.
- **UX Enhancements:** Smooth scrolling, dark/light mode, custom cursor effect, transitions.
- **Performance-minded setup:** Dynamic import for Projects section, optimized `next/image`, metadata for SEO + Open Graph.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build production bundle:
   ```bash
   npm run build
   ```
4. Start production server:
   ```bash
   npm run start
   ```

### Restricted Environments (Codex)

Some sandboxed Codex runs cannot reach the npm registry and may return `403 Forbidden` on `npm install`.
When this happens, `npm run lint` now exits successfully with a skip message instead of failing due to missing `eslint-config-next`.
In normal environments (with dependencies installed), `npm run lint` still runs full ESLint checks.
Use `npm run lint:strict` when you want lint to hard-fail if ESLint/dependencies are unavailable.

## Contact API Configuration

The contact form sends email using Resend. Set these environment variables before using `/api/contact`:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (optional, defaults to `onboarding@resend.dev`)

## Deployment

Deploy easily to Vercel:

- Import repository
- Keep defaults
- Deploy

## Customization Notes

- Update project data: `src/data/projects.ts`
- Update experience: `src/data/experience.ts`
- Update skills: `src/data/skills.ts`
- Replace social/contact identity in `src/components/Contact.tsx`
- Keep production-ready static assets under `public/` and park legacy/raw media in `public/assets/archive/`.
