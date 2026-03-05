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

