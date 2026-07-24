# Portfolio — Akmaludien Ramadhan

Personal portfolio of **Akmaludien Ramadhan**, an AI Software Engineer building intelligent products with machine learning, modern web technologies, and agentic AI.

Built with [Next.js](https://nextjs.org) 16, React 19, TypeScript 5, and Tailwind CSS 4. Animated with Framer Motion. Content driven by [Career OS](https://github.com/Akmaludien/portfolio) — a documentation-first workflow where canonical Markdown profiles generate all portfolio content.

**Live site:** [akmaludien.dev](https://akmaludien.dev)

---

## Sections

- **Hero** — professional identity, headline, key actions
- **Featured Projects** — flagship work (Rainfall Prediction System, SKDQuest)
- **Journey** — career timeline from Instrumentation Engineering through AI Software Engineering
- **Experience** — verified professional roles (Tutor, MBKM Internship, Research, Product)
- **Skills** — AI/ML, Frontend, Backend, Database, DevOps, Professional
- **Contact** — form (when configured) or mailto fallback
- **Footer** — tagline, copyright, Career OS attribution

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 16 (Turbopack) |
| Language | TypeScript 5 |
| UI | Tailwind CSS 4, Framer Motion |
| Fonts | Geist (Vercel) |
| Icons | Inline SVG |
| Email | Resend (optional, form fallback to mailto) |

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/       — contact form API route (Resend + health check)
│   ├── globals.css        — global styles, theme tokens
│   ├── layout.tsx         — root layout, metadata, fonts
│   ├── page.tsx           — section composition
│   └── favicon.png        — brand favicon
├── components/
│   ├── common/Header.tsx  — navigation bar
│   ├── sections/          — Hero, FeaturedProjects, Journey, Experience, Skills, Contact, Footer
│   └── ui/                — Button, Badge, Card
├── data/                  — content, projects, journey, experience, skills
├── lib/                   — types, constants, animations, utils
├── public/
│   └── images/            — photos, screenshots, logo assets
├── profile/               — Career OS canonical profile (11 Markdown files)
├── projects/              — Career OS project documentation
└── docs/                  — PRD, design specs, assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |

## Deployment

Deploy to [Vercel](https://vercel.com) from the Git repository.

Set `RESEND_API_KEY` as an environment variable to enable the contact form; without it the form shows a mailto fallback.

## Branding

- **Logo:** `public/images/logo.png` (1254×1254) — used as navbar icon, favicon, and OG image
- **Favicon:** `public/favicon.png` (48×48)
- **OG Image:** `public/images/logo-og.png` (1200×630)
- **Primary identity:** AI Software Engineer
- **Social:** [GitHub](https://github.com/Akmaludien) · [LinkedIn](https://linkedin.com/in/akmaludien-ramadhan-772408193) · [Instagram](https://instagram.com/akmaldnrmdhn)

## Career OS

This portfolio is powered by [Career OS](https://github.com/Akmaludien/portfolio) — a documentation-first system where canonical Markdown files serve as the single source of truth for all career content. Profile data lives in `profile/` and project details in `projects/`, both formatted for human readability and AI-assisted generation.

---

**License:** MIT
