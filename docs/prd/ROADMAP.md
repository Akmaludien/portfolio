# ROADMAP.md: Akmaludien's Premium Portfolio

## Phased Delivery Plan

This roadmap outlines the planned phases for the development and launch of Akmaludien's Premium Portfolio. Each phase builds upon the previous one, ensuring a structured and efficient development process.

Timeline assumes a team of 1 developer. Adjust proportionally for different team sizes.

| Phase | Duration | Goals |
|:------|:---------|:------|
| **Phase 1: Foundation & Core UI** | 2 weeks | Establish project infrastructure, implement core navigation, and build the foundational UI components for key sections. Focus on static content and basic responsiveness. |
| **Phase 2: Content Integration & Polish** | 2 weeks | Integrate all dynamic content, refine UI/UX, implement animations, and ensure full responsiveness across devices. Address initial performance and accessibility requirements. |
| **Phase 3: Optimization & Launch** | 1 week | Conduct comprehensive testing, optimize for Lighthouse scores, implement SEO, and prepare for public deployment. |
| **Phase 4: Post-Launch Enhancements** | Ongoing | Monitor performance, gather feedback, and implement P1/P2 features and minor improvements. |

## MVP Feature List

This section details the Minimum Viable Product (MVP) features, categorized by priority for launch and subsequent iterations. References to `PRD.md` feature requirements (FR-XX) are provided.

### P0: Must Have for Launch

These features are essential for the initial public release, ensuring a functional and impactful portfolio.

*   **FR-01 Navigation:** Single-page scrollable layout with smooth-scrolling header links.
*   **FR-02 Theme:** Dark mode only, default rendering.
*   **FR-03 Responsiveness (Basic):** Functional layout on desktop and mobile.
*   **FR-04 Hero Section:** Display headline, supporting copy, social links, and CTAs.
*   **FR-05 Hero CTAs:** "View Projects" scrolls to section, "Download Resume" initiates PDF download.
*   **FR-06 Featured Projects:** Display exactly two flagship project cards.
*   **FR-07 Project Card (Basic):** Thumbnail, 2-line summary, "View Project" and "GitHub" links (external, new tab).
*   **FR-08 Journey Timeline (Basic):** Minimal vertical timeline with career progression and "Never finished. Always evolving."
*   **FR-09 Experience Grid (Basic):** Responsive card grid for experience items with concise descriptions.
*   **FR-10 Skills Display (Basic):** Grouped technologies using chips/badges, no proficiency bars.
*   **FR-11 Contact Links:** Buttons for Email (`mailto:`), GitHub, LinkedIn, Instagram.
*   **FR-12 Footer:** Minimal footer with philosophy and version indicator.
*   **FR-14 Content Management:** All site text managed in a structured, centralized file.
*   **FR-15 Project Data:** Project data stored as an array of objects.
*   **FR-17 Resume Asset:** Resume PDF stored in `/public` directory.

### P1: Should Have within 1 Month Post-Launch

These features enhance the user experience and technical quality shortly after the initial launch.

*   **FR-03 Responsiveness (Advanced):** Full thumb-friendly interactions and consistent spacing on mobile.
*   **FR-07 Project Card (Full):** Implement tech badges for each project card.
*   **FR-08 Journey Timeline (Visuals):** Prioritize visuals over paragraphs in the timeline.
*   **FR-09 Experience Grid (Full):** Ensure optimal responsive card grid behavior.
*   **FR-10 Skills Display (Full):** Refined clean chips/badges for skills.
*   **FR-13 Motion & Animation:** Implement minimal fade, slide, hover animations (200-500ms) respecting `prefers-reduced-motion`.
*   **FR-16 Dynamic Data:** Structured data management for Journey, Experience, and Skills sections.
*   **NFRs (Initial Pass):** Initial focus on performance (FCP, LCP), accessibility (WCAG AA, keyboard navigation, contrast), and SEO (meta tags).

### P2: Nice to Have for Future

These features represent further refinements and optimizations for long-term quality and impact.

*   **NFRs (Optimization):** Achieve Google Lighthouse scores > 95 across all categories.
*   **Analytics Integration:** Implement Vercel Analytics for performance and audience insights.
*   **Image Optimization:** Full utilization of Next.js `Image` component for all images.
*   **Code Quality Refinement:** Strict TypeScript, ESLint, and Prettier enforcement across the entire codebase.

## Milestones

| Milestone | Phase | Target Date | Deliverables |
|:----------|:------|:------------|:-------------|
| **M1: Project Setup & Hero** | Phase 1 | Day 5 | Next.js project initialized, Tailwind CSS configured, Vercel deployment pipeline set up, Hero section (FR-04, FR-05) implemented and responsive. |
| **M2: Core Sections UI** | Phase 1 | Day 10 | Basic UI for Featured Projects (FR-06, FR-07), Journey (FR-08), Experience (FR-09), Skills (FR-10), Contact (FR-11), and Footer (FR-12) implemented. |
| **M3: Content Integration** | Phase 2 | Day 17 | All static content (FR-14, FR-15, FR-17) integrated. Dynamic data structures (FR-16) implemented for Journey, Experience, Skills. |
| **M4: Responsiveness & Motion** | Phase 2 | Day 24 | Full responsiveness (FR-03) achieved. Minimal animations (FR-13) implemented. |
| **M5: Pre-Launch Audit** | Phase 3 | Day 29 | Initial pass on NFRs (Performance, Accessibility, SEO). All P0 features fully tested. |
| **M6: Public Launch** | Phase 3 | Day 35 | Site deployed to Vercel, domain configured, initial announcement. |
| **M7: Post-Launch Review** | Phase 4 | Month 2 | Review P1 features, implement Vercel Analytics, address initial feedback. |

## Dependencies

### External Dependencies

*   **Vercel Account:** For hosting and deployment.
*   **GitHub Account:** For source code management and CI/CD integration with Vercel.
*   **LinkedIn Account:** For social link.
*   **Instagram Account:** For social link.
*   **Resume PDF:** Final version of Akmaludien's resume.
*   **Project External Links:** Live URLs for featured projects and their GitHub repositories.

### Internal Dependencies

*   **Design Mockups/Wireframes:** High-fidelity designs for all sections (if not already provided by the "Idea" section).
*   **Content Copy:** Finalized text for all sections (headlines, supporting copy, project summaries, journey points, experience descriptions, skill categories).
*   **Professional Photo:** High-resolution image for the Hero section.
*   **Project Thumbnails:** Visual assets for featured project cards.

## Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|:-----|:-------|:------------|:-----------|
| **Content Delays** | High: Delays launch, incomplete site. | Medium | Proactively request all content (text, images, resume PDF) from Akmaludien at the start of Phase 1. Use placeholder content if necessary to unblock development. |
| **Performance Degradation** | High: Poor UX, low Lighthouse scores, negative impression. | Medium | Implement Next.js `Image` component and Vercel CDN from Phase 1. Integrate Lighthouse CI into the deployment pipeline (P1/P2) to prevent regressions. Regularly monitor Web Vitals. |
| **Design Mismatch** | Medium: Site doesn't meet "premium" feel or conversion goals. | Low | Adhere strictly to the provided design principles (minimal premium, content-first, specific inspirations). Conduct regular reviews with Akmaludien to ensure alignment with visual style and UX goals. |
| **Scope Creep** | Medium: Delays launch, increases complexity. | Low | Strictly follow the `PRD.md` and "Out of Scope" section. Any new feature requests must be formally evaluated against the project's core objective and added to P2 or a future roadmap. |
| **Accessibility Issues** | Medium: Excludes users, reflects poorly on a professional site. | Medium | Integrate accessibility best practices (semantic HTML, keyboard navigation, contrast checks) from Phase 1. Utilize automated accessibility tools (e.g., Axe DevTools) during development and testing. |
| **Browser Compatibility** | Low: Inconsistent experience across browsers. | Low | Focus on modern browser support. Use CSS features with good browser support or appropriate fallbacks. Test on major browsers (Chrome, Firefox, Safari, Edge) and common mobile devices. |