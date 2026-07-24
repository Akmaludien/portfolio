# PRD: Akmaludien's Premium Portfolio

## Executive Summary & Product Vision

This document outlines the product requirements for "Akmaludien's Premium Portfolio," a single-page personal brand website.

The product vision is to create a definitive professional showcase for Akmaludien Ramadhan that converts high-value opportunities. It will achieve this by clearly and rapidly communicating his expertise in AI, Machine Learning, and Full Stack Engineering to a target audience of recruiters, founders, and hiring managers. The site will embody a "proof-over-claims" philosophy, prioritizing content and performance over visual spectacle, drawing inspiration from the design ethos of industry leaders like Linear and Vercel.

## Problem Statement & Target Users

**Problem Statement:** Akmaludien requires a centralized, professional online presence that effectively communicates his unique value proposition and differentiates him from other candidates. A standard resume or generic portfolio is insufficient to showcase the quality, depth, and real-world application of his work in AI and software engineering.

**Target Users:**
*   Recruiters (Technical and Non-technical)
*   Startup Founders
*   Hiring Managers
*   Potential Freelance Clients
*   Technical Collaborators

## System Scope & User Roles

The system is a statically generated, single-page application (SPA). All content is managed via version-controlled source files (e.g., JSON, TS, MDX). There is no backend database or dynamic user-facing authentication.

| Role | Permissions |
|:--------------|:--------------------------------------------------------------------------------------------------------|
| **Visitor** | `read-only` access to all public content on the single page. Can navigate via scroll-links and external links. |
| **Admin** | `read/write` access to the source code repository. Can update all site content by committing and deploying changes. |

## Functional Requirements

### User-Facing Requirements

*   **FR-01 (Navigation):** The site MUST render as a single, scrollable page. Header navigation links (Projects, Journey, Experience, Contact) MUST smoothly scroll the viewport to the corresponding section.
*   **FR-02 (Theme):** The website MUST render in a dark theme by default. It is a "dark mode only" design and will not switch to a light theme based on system preference.
*   **FR-03 (Responsiveness):** The layout MUST be fully responsive, providing an optimal viewing experience on desktop, tablet, and mobile devices. Mobile interactions must be thumb-friendly.
*   **FR-04 (Hero Section):** The hero section MUST display the primary headline, supporting copy, social links (GitHub, LinkedIn, Instagram), and two primary Call-to-Action (CTA) buttons: "View Projects" and "Download Resume".
*   **FR-05 (Hero CTAs):** The "View Projects" button MUST scroll the user to the Featured Projects section. The "Download Resume" button MUST initiate a file download of a resume in PDF format.
*   **FR-06 (Featured Projects):** The section MUST display exactly two flagship project cards.
*   **FR-07 (Project Card):** Each project card MUST contain a project thumbnail, a 2-line summary, technology badges, a "View Project" link, and a "GitHub" link. All external links MUST open in a new browser tab.
*   **FR-08 (Journey Timeline):** The Journey section MUST render a minimal, vertical timeline visualizing Akmaludien's career progression. It must conclude with the text "Never finished. Always evolving."
*   **FR-09 (Experience Grid):** The Experience section MUST display items (e.g., Teaching, Research, Freelance) in a responsive card grid with concise descriptions.
*   **FR-10 (Skills Display):** The Skills section MUST group technologies into predefined categories (AI & ML, Frontend, Backend, etc.) using chip/badge components. It MUST NOT use proficiency bars or percentages.
*   **FR-11 (Contact Links):** The Contact section MUST provide direct contact and social media links via buttons (Email, GitHub, LinkedIn, Instagram). The Email button MUST trigger a `mailto:` link.
*   **FR-12 (Footer):** The footer MUST be minimal, containing the phrase "Never finished. Always evolving." and a static version indicator (e.g., "Portfolio v1.0").
*   **FR-13 (Motion & Animation):** All UI animations (fade, slide, hover) MUST have a duration between 200-500ms. Animations MUST be disabled if the user's OS `prefers-reduced-motion` setting is enabled.

### Admin-Facing Requirements

*   **FR-14 (Content Management):** All site text (headlines, copy, labels) MUST be managed in a structured, centralized location within the source code (e.g., a single JSON or TypeScript file) for maintainability.
*   **FR-15 (Project Data):** Data for Featured Projects (titles, summaries, links, tech stacks, image paths) MUST be stored as an array of objects in a version-controlled file (JSON/TS).
*   **FR-16 (Dynamic Data):** Data for the Journey, Experience, and Skills sections MUST be managed in a structured format to allow for easy addition, removal, or modification without altering the UI components directly.
*   **FR-17 (Resume Asset):** The resume PDF file MUST be stored within the project's `/public` directory to be easily updated by replacing the file.

## Non-Functional Requirements

| Category | Requirement | Metric / Target |
|:----------------|:--------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| **Performance** | The site must load quickly to retain user attention. | First Contentful Paint (FCP) < 1.8s |
| | The site must feel interactive immediately. | Largest Contentful Paint (LCP) < 2.5s |
| | Overall performance score must be excellent. | Google Lighthouse Score (Performance): > 95 |
| **Accessibility** | The site must be usable by people with disabilities. | WCAG 2.1 AA compliance |
| | All interactive elements must be keyboard-navigable. | All links and buttons focusable and activatable via keyboard. |
| | Content must be legible. | Color contrast ratio > 4.5:1 for normal text. |
| | Images must have descriptive alt text. | `alt` attributes on all `` tags. |
| **Security** | All external links must be secure. | `rel="noopener noreferrer"` on all `target="_blank"` links. |
| | The site must be served over a secure protocol. | HTTPS enforced on all traffic. |
| **SEO** | The page must be indexed correctly by search engines. | Google Lighthouse Score (SEO): > 95 |
| | Page metadata must be descriptive for social sharing. | Open Graph (OG) and Twitter card meta tags implemented. |
| **Maintainability** | Codebase must be easy to understand and update. | TypeScript strict mode enabled. ESLint and Prettier configured. |

## Technology Stack & Rationale

| Component | Technology | Rationale |
|:---------------------|:-----------------------------------------|:------------------------------------------------------------------------------------------------------|
| **Frontend Framework** | Next.js 14+ (App Router) & TypeScript | Provides static site generation (SSG) for peak performance, server components, and type safety. Aligns with modern React ecosystem. |
| **Styling** | Tailwind CSS | Utility-first CSS for rapid, consistent UI development. Enables custom dark theme configuration easily. |
| **Animation** | Framer Motion / CSS Transitions | Provides a simple, performant API for the minimal animations required. Respects `prefers-reduced-motion`. |
| **Image Optimization** | Next.js `` Component | Automates image optimization (resizing, format conversion to WebP), lazy loading, and serving via CDN. |
| **Hosting/Deployment** | Vercel | Native platform for Next.js, offering zero-config deployment, global CDN, and seamless CI/CD from Git. |
| **Analytics** | Vercel Analytics | Privacy-friendly, real-time performance and audience insights with zero client-side performance impact. |

## Success Metrics & KPIs

| Metric | KPI / Target | Rationale |
|:------------------------|:--------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| **Lighthouse Score** | > 95 across Performance, Accessibility, Best Practices, SEO. | Validates technical quality and user experience. |
| **Page Load Time** | LCP < 2.5 seconds on a 4G connection. | Ensures visitors don't leave before content loads. |
| **Bounce Rate** | < 40% | Indicates that visitors are engaging with the content beyond the fold. |
| **Resume Downloads** | Tracked as a key conversion event. Target: >5% of unique visitors. | Direct measure of recruiter/hiring manager interest. |
| **Avg. Session Duration** | > 45 seconds | Shows that visitors are taking the time to scan multiple sections. |

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation Strategy |
|:-----------------------------------|:-------|:----------------------------------------------------------------------------------------------------------------|
| **Content becomes outdated** | High | Implement FR-14 to FR-16 to ensure content is managed in simple, structured data files, facilitating quarterly content reviews and updates. |
| **Performance degradation** | High | Integrate Lighthouse CI into the deployment pipeline to prevent merging PRs that drop performance scores below the target threshold. Use Vercel Analytics to monitor Web Vitals. |
| **Design fails to convert** | Medium | Monitor resume downloads and contact link clicks. If metrics are low, gather qualitative feedback from target users (recruiters) and iterate on copy or CTAs. |
| **Over-engineering / Scope Creep** | Medium | Strictly adhere to the "minimal premium" design principle and the "Out of Scope" section. All new features must be justified against the core objective. |

## Constraints & Assumptions

**Constraints:**
*   The final product MUST be a single-page application.
*   The design MUST be "dark mode only".
*   The technology stack is fixed as specified in this document.
*   The site will feature a maximum of two flagship projects in the dedicated section.

**Assumptions:**
*   Akmaludien will provide all necessary content (text, project details, professional photo, resume PDF) before development begins.
*   The target audience (recruiters, founders) values concise, high-impact information and proof of work over elaborate design or long-form text.
*   The "Never finished. Always evolving." philosophy resonates with a tech-focused audience.

## Out of Scope

This version of the portfolio will explicitly NOT include:
*   Multi-page navigation or a traditional blog.
*   A client-facing CMS or admin dashboard.
*   A contact form (contact is via `mailto:` and social links only).
*   Testimonials or client logos.
*   Pricing or detailed service package sections.
*   Skill proficiency bars, percentages, or ratings.
*   Long "About Me" sections or personal stories.
*   Complex, resource-intensive animations (e.g., particle effects, WebGL, auto-playing videos).
*   Visitor counters or other vanity metrics.