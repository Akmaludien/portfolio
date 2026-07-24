# TECHNICAL_ARCHITECTURE.md: Akmaludien's Premium Portfolio

## System Overview

Akmaludien's Premium Portfolio is a statically generated single-page application (SPA) built with Next.js 14+ and TypeScript. The architecture prioritizes performance, maintainability, and a seamless user experience through server-side rendering (SSR) and static site generation (SSG), with minimal client-side JavaScript.

The system is designed as a content-first, presentation-layer application with no backend database or dynamic user authentication. All content is version-controlled and deployed via Vercel's CI/CD pipeline.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Vercel CDN                           │
│                  (Global Edge Network)                      │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    Next.js 14 App Router                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Server Components (Layout, Page, Sections)         │  │
│  │  • Hero                                              │  │
│  │  • Featured Projects                                │  │
│  │  • Journey Timeline                                 │  │
│  │  • Experience Grid                                  │  │
│  │  • Skills                                           │  │
│  │  • Contact                                          │  │
│  │  • Footer                                           │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
┌───────▼────────┐ ┌─────▼──────┐ ┌──────▼──────────┐
│  Tailwind CSS  │ │ Framer      │ │ Next.js Image  │
│  (Dark Theme)  │ │ Motion      │ │ Optimization   │
└────────────────┘ └─────────────┘ └──────────────────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
┌───────▼────────┐ ┌─────▼──────┐ ┌──────▼──────────┐
│  Content Data  │ │ Resume PDF │ │ Project Images │
│  (JSON/TS)     │ │ (/public)  │ │ (/public)      │
└────────────────┘ └─────────────┘ └──────────────────┘
```

## Technology Stack & Rationale

| Layer | Technology | Purpose | Rationale |
|:---|:---|:---|:---|
| **Frontend Framework** | Next.js 14+ (App Router) | React-based SSG/SSR | Zero-config deployment to Vercel, built-in image optimization, server components reduce client JS. |
| **Language** | TypeScript (strict mode) | Type safety | Prevents runtime errors, improves maintainability, enables IDE autocomplete. |
| **Styling** | Tailwind CSS | Utility-first CSS | Rapid UI development, custom dark theme config, minimal CSS bundle. |
| **Animation** | Framer Motion / CSS Transitions | Minimal motion effects | Lightweight, respects `prefers-reduced-motion`, 200–500ms durations. |
| **Image Optimization** | Next.js `` | Responsive images | Automatic WebP conversion, lazy loading, CDN delivery. |
| **Email API** | Resend | Contact form backend | Modern, minimal setup, transactional email delivery. |
| **Hosting** | Vercel | Deployment & CDN | Native Next.js support, global edge network, automatic HTTPS. |
| **Analytics** | Vercel Analytics + Web Vitals | Performance monitoring | Real-time metrics, zero client-side overhead. |

## Project Structure

```
akmaludien-portfolio/
├── app/
│   ├── layout.tsx              # Root layout, metadata, providers
│   ├── page.tsx                # Single-page entry point
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # POST endpoint for contact form (Resend)
│   └── globals.css             # Tailwind directives, custom dark theme
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Journey.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Timeline.tsx
│   │   └── Navigation.tsx
│   └── common/
│       ├── Header.tsx
│       └── ScrollToTop.tsx
├── data/
│   ├── content.ts              # All text, headlines, copy
│   ├── projects.ts             # Featured projects array
│   ├── journey.ts              # Timeline milestones
│   ├── experience.ts           # Experience cards
│   └── skills.ts               # Skill categories & chips
├── public/
│   ├── resume.pdf              # Resume download asset
│   ├── images/
│   │   ├── hero-workspace.jpg  # Hero section image
│   │   ├── project-rainfall.jpg
│   │   └── project-skd.jpg
│   └── favicon.ico
├── lib/
│   ├── utils.ts                # Utility functions (cn, classnames)
│   ├── constants.ts            # App-wide constants (URLs, email)
│   └── animations.ts           # Framer Motion variants
├── styles/
│   └── theme.css               # Custom dark theme variables
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind dark mode setup
├── tsconfig.json               # TypeScript strict mode
├── .eslintrc.json              # ESLint rules
├── .prettierrc                 # Code formatting
└── package.json
```

## Core Components & Responsibilities

### Page Structure (Single-Page Layout)

The entire portfolio is rendered as a single scrollable page (`app/page.tsx`). Navigation links smoothly scroll to section anchors using native HTML `id` attributes and CSS `scroll-behavior: smooth`.

```typescript
// app/page.tsx (simplified)
export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Journey />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
```

### Section Components

#### Hero Section
- **File:** `components/sections/Hero.tsx`
- **Responsibilities:**
  - Display headline, supporting copy, and professional workspace image
  - Render two primary CTAs: "View Projects" (scroll to projects) and "Download Resume" (trigger PDF download)
  - Display social links (GitHub, LinkedIn, Instagram)
  - Two-column layout: text left, image right
- **Data Source:** `data/content.ts`
- **Key Props:** None (data imported directly)

#### Featured Projects
- **File:** `components/sections/FeaturedProjects.tsx`
- **Responsibilities:**
  - Render exactly two project cards
  - Each card displays: thumbnail, 2-line summary, tech badges, "View Project" link, "GitHub" link
  - All external links open in new tabs with `rel="noopener noreferrer"`
- **Data Source:** `data/projects.ts` (array of project objects)
- **Key Props:** `projects: Project[]`

#### Journey Timeline
- **File:** `components/sections/Journey.tsx`
- **Responsibilities:**
  - Render minimal vertical timeline
  - Display progression: Instrumentation → Climate Data → ML → Software Engineering → AI Products
  - Conclude with "Never finished. Always evolving."
  - Prioritize visuals over paragraphs
- **Data Source:** `data/journey.ts`
- **Key Props:** `milestones: JourneyMilestone[]`

#### Experience Grid
- **File:** `components/sections/Experience.tsx`
- **Responsibilities:**
  - Render responsive card grid (Teaching, Research, Freelance, Organization)
  - Keep descriptions concise
  - Adapt layout for mobile (single column) and desktop (2–4 columns)
- **Data Source:** `data/experience.ts`
- **Key Props:** `experiences: Experience[]`

#### Skills
- **File:** `components/sections/Skills.tsx`
- **Responsibilities:**
  - Group technologies by category (AI & ML, Frontend, Backend, Database, Cloud, Developer Tools)
  - Render as clean chips/badges
  - No proficiency bars or percentages
- **Data Source:** `data/skills.ts`
- **Key Props:** `skillCategories: SkillCategory[]`

#### Contact
- **File:** `components/sections/Contact.tsx`
- **Responsibilities:**
  - Display headline: "Interested in working together? Let's connect."
  - Render contact buttons: Email (mailto:), GitHub, LinkedIn, Instagram
  - All links open in new tabs where appropriate
- **Data Source:** `data/content.ts` + `lib/constants.ts`
- **Key Props:** None

#### Footer
- **File:** `components/sections/Footer.tsx`
- **Responsibilities:**
  - Display "Never finished. Always evolving."
  - Show version indicator (e.g., "Portfolio v1.0")
  - Minimal styling
- **Data Source:** `data/content.ts`
- **Key Props:** None

### UI Components (Reusable)

#### Button
- **File:** `components/ui/Button.tsx`
- **Variants:** `primary`, `secondary`, `ghost`
- **Props:** `children`, `href`, `onClick`, `disabled`, `className`
- **Behavior:** Respects `prefers-reduced-motion` for hover effects

#### Card
- **File:** `components/ui/Card.tsx`
- **Props:** `children`, `className`, `hover` (boolean)
- **Styling:** Soft borders, large rounded corners, subtle glass effect

#### Badge
- **File:** `components/ui/Badge.tsx`
- **Props:** `children`, `variant` (e.g., `tech`, `category`)
- **Usage:** Tech stack labels, skill chips

#### Timeline
- **File:** `components/ui/Timeline.tsx`
- **Props:** `items: TimelineItem[]`
- **Rendering:** Vertical line with milestone nodes

#### Navigation
- **File:** `components/ui/Navigation.tsx`
- **Behavior:** Sticky header with smooth scroll-to-section links
- **Links:** Projects, Journey, Experience, Contact

### Common Components

#### Header
- **File:** `components/common/Header.tsx`
- **Responsibilities:**
  - Sticky navigation bar
  - Logo/brand name
  - Scroll-to-section links
  - Mobile hamburger menu (if needed)

#### ScrollToTop
- **File:** `components/common/ScrollToTop.tsx`
- **Behavior:** Smooth scroll animation when navigation links are clicked

## Data Management

All content is centralized in the `data/` directory as TypeScript files. This enables easy updates without modifying components.

### Content Data (`data/content.ts`)

```typescript
export const content = {
  hero: {
    headline: "Building intelligent products through AI, Machine Learning, and Full Stack Engineering.",
    supporting: "...",
    cta1: "View Projects",
    cta2: "Download Resume",
  },
  contact: {
    headline: "Interested in working together?",
    subheading: "Let's connect.",
  },
  footer: {
    tagline: "Never finished. Always evolving.",
    version: "Portfolio v1.0",
  },
};
```

### Projects Data (`data/projects.ts`)

```typescript
export interface Project {
  id: string;
  title: string;
  summary: string; // 2 lines max
  thumbnail: string; // path to image
  technologies: string[];
  viewProjectUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "rainfall-prediction",
    title: "Rainfall Prediction System",
    summary: "Bi-LSTM model for climate forecasting using TensorFlow.",
    thumbnail: "/images/project-rainfall.jpg",
    technologies: ["Bi-LSTM", "TensorFlow", "Climate Data", "Forecasting"],
    viewProjectUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
  {
    id: "skd-platform",
    title: "SKD Platform",
    summary: "Gamified learning platform with analytics and React frontend.",
    thumbnail: "/images/project-skd.jpg",
    technologies: ["React", "Supabase", "Gamified Learning", "Analytics"],
    viewProjectUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
];
```

### Journey Data (`data/journey.ts`)

```typescript
export interface JourneyMilestone {
  id: string;
  title: string;
  description?: string;
  icon?: string; // optional visual indicator
}

export const journey: JourneyMilestone[] = [
  { id: "instrumentation", title: "Instrumentation" },
  { id: "climate-data", title: "Climate Data" },
  { id: "ml", title: "Machine Learning" },
  { id: "software-eng", title: "Software Engineering" },
  { id: "ai-products", title: "AI Products" },
];
```

### Experience Data (`data/experience.ts`)

```typescript
export interface Experience {
  id: string;
  category: string; // "Teaching", "Research", "Freelance", "Organization"
  title: string;
  description: string; // concise
  period?: string; // optional
}

export const experiences: Experience[] = [
  {
    id: "teaching-1",
    category: "Teaching",
    title: "...",
    description: "...",
  },
  // ...
];
```

### Skills Data (`data/skills.ts`)

```typescript
export interface SkillCategory {
  name: string; // "AI & ML", "Frontend", etc.
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  // ...
];
```

## Styling Architecture

### Dark Theme Implementation

The portfolio uses a **dark mode only** design. Tailwind CSS is configured with a custom dark theme in `tailwind.config.ts`:

```typescript
// tailwind.config.ts
export default {
  darkMode: "class", // or "media" if respecting system preference
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: "#00d9ff", // cyan
        accentBlue: "#0066ff",
        border: "rgba(255, 255, 255, 0.1)",
        card: "rgba(255, 255, 255, 0.05)",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
      spacing: {
        section: "6rem", // generous whitespace between sections
      },
    },
  },
};
```

### Global Styles (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --accent: #00d9ff;
  --border: rgba(255, 255, 255, 0.1);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Subtle glass effect for cards */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Animation Strategy

### Framer Motion Integration

Animations are minimal and purposeful, respecting the `prefers-reduced-motion` media query.

```typescript
// lib/animations.ts
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const hoverScale = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
};
```

### Usage in Components

```typescript
import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/animations";

export function ProjectCard() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
    >
      {/* Card content */}
    </motion.div>
  );
}
```

### Respecting Reduced Motion

```typescript
// lib/utils.ts
export function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// In components:
const shouldAnimate = !getMotionPreference();
```

## Image Optimization

### Next.js Image Component

All images use the Next.js `<Image>` component for automatic optimization:

```typescript
import Image from "next/image";

export function Hero() {
  return (
    <Image
      src="/images/hero-workspace.jpg"
      alt="Akmaludien's workspace"
      width={600}
      height={400}
      priority // LCP image
      className="rounded-xl"
    />
  );
}
```

### Image Strategy

- **Hero Image:** `priority={true}` (marks as LCP candidate)
- **Project Thumbnails:** `loading="lazy"` (default)
- **Format:** WebP with fallback to JPEG
- **Sizes:** Responsive breakpoints configured in `next.config.js`

## Contact Form & Email Integration

### API Route (`app/api/contact/route.ts`)

The contact form uses Resend for email delivery:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const result = await resend.emails.send({
      from: "noreply@akmaludien.dev",
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });

    return Response.json({ success: true, id: result.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
```

### Environment Variables

```
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=akmaludien@example.com
```

## Performance Optimization

### Next.js Configuration (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
```

### Lighthouse Optimization Targets

| Metric | Target | Strategy |
|:---|:---|:---|
| **First Contentful Paint (FCP)** | < 1.8s | Inline critical CSS, optimize hero image |
| **Largest Contentful Paint (LCP)** | < 2.5s | Mark hero image as `priority`, lazy load below-fold images |
| **Cumulative Layout Shift (CLS)** | < 0.1 | Reserve space for images, avoid dynamic content injection |
| **Time to Interactive (TTI)** | < 3.5s | Minimize JavaScript, use server components |
| **Overall Score** | > 95 | Semantic HTML, high contrast, keyboard navigation |

### Code Splitting & Lazy Loading

- **Server Components:** Default for all section components (no JS sent to client)
- **Client Components:** Only for interactive elements (buttons, forms)
- **Dynamic Imports:** Used for heavy libraries if needed

```typescript
// Lazy load Framer Motion only when needed
const motion = dynamic(() => import("framer-motion"), { ssr: false });
```

## Accessibility & Semantic HTML

### Semantic Structure

```typescript
export default function Home() {
  return (
    <>
      <header>
        <nav>{/* Navigation links */}</nav>
      </header>
      <main>
        <section id="hero">{/* Hero */}</section>
        <section id="projects">{/* Projects */}</section>
        <section id="journey">{/* Journey */}</section>
        <section id="experience">{/* Experience */}</section>
        <section id="skills">{/* Skills */}</section>
        <section id="contact">{/* Contact */}</section>
      </main>
      <footer>{/* Footer */}</footer>
    </>
  );
}
```

### Keyboard Navigation

- All interactive elements (buttons, links) are focusable
- Focus order follows visual hierarchy
- Skip-to-main-content link available
- No keyboard traps

### Color Contrast

- Text: `#ffffff` on `#0a0a0a` = 21:1 ratio (WCAG AAA)
- Accent text: `#00d9ff` on `#0a0a0a` = 8.5:1 ratio (WCAG AA)

### Alt Text

All images include descriptive `alt` attributes:

```typescript
<Image
  src="/images/project-rainfall.jpg"
  alt="Rainfall Prediction System: Bi-LSTM model visualization with climate data inputs"
/>
```

## Deployment & CI/CD

### Vercel Deployment

The project is deployed to Vercel with automatic CI/CD from the Git repository:

1. **Push to main branch** → Vercel detects changes
2. **Build & Test** → Next.js build runs, Lighthouse CI validates performance
3. **Deploy to Edge** → Global CDN distribution
4. **Monitor** → Vercel Analytics tracks Web Vitals

### Environment Variables (Vercel)

```
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=akmaludien@example.com
NEXT_PUBLIC_SITE_URL=https://akmaludien.dev
```

### Pre-Deployment Checks

```bash
# Lint
npm run lint

# Type check
npm run type-check

# Build
npm run build

# Lighthouse CI (optional)
npm run lighthouse
```

## Monitoring & Analytics

### Vercel Analytics

Real-time performance metrics:
- Page load time
- Web Vitals (FCP, LCP, CLS, FID)
- Visitor geography
- Device types

### Custom Events

Track key conversions:

```typescript
// Track resume download
export function trackResumeDownload() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "download", {
      file_name: "resume.pdf",
    });
  }
}

// Track project view
export function trackProjectView(projectId: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_project", {
      project_id: projectId,
    });
  }
}
```

## Security Considerations

### Content Security Policy (CSP)

Configured in `next.config.js`:

```javascript
headers: [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  },
];
```

### External Links

All external links include security attributes:

```typescript
<a href={url} target="_blank" rel="noopener noreferrer">
  Link
</a>
```

### HTTPS Enforcement

Vercel automatically enforces HTTPS on all traffic.

## Maintenance & Future Scalability

### Content Updates

To update any section:

1. Edit the corresponding file in `data/`
2. Commit and push to Git
3. Vercel automatically rebuilds and deploys

Example: Adding a new project

```typescript
// data/projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: "new-project",
    title: "New Project Title",
    summary: "2-line summary here.",
    thumbnail: "/images/project-new.jpg",
    technologies: ["Tech1", "Tech2"],
    viewProjectUrl: "https://...",
    githubUrl: "https://...",
  },
];
```

### Version Control

- **Main branch:** Production-ready code
- **Feature branches:** For new features or updates
- **Pull requests:** Code review before merge

### Monitoring & Alerts

- Vercel deployment notifications
- Lighthouse CI failures block merges
- Analytics dashboard for traffic and conversion tracking

## Type Definitions

### Core Interfaces (`lib/types.ts`)

```typescript
export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  technologies: string[];
  viewProjectUrl: string;
  githubUrl: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface Experience {
  id: string;
  category: string;
  title: string;
  description: string;
  period?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Code Quality

```bash
# ESLint
npm run lint

# TypeScript type checking
npm run type-check

# Format code
npm run format
```

### Build & Test

```bash
# Production build
npm run build

# Start production server
npm start
```

## Conclusion

The technical architecture of Akmaludien's Premium Portfolio is designed for **performance, maintainability, and conversion**. By leveraging Next.js server components, Tailwind CSS, and Vercel's global infrastructure, the site delivers a premium experience with minimal client-side JavaScript. Content is centralized and version-controlled, enabling rapid updates without touching component code. The architecture supports the "proof-over-claims" philosophy by prioritizing fast load times, semantic HTML, and clear visual hierarchy—ensuring recruiters and collaborators immediately understand Akmaludien's value proposition.