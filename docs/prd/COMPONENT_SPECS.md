# COMPONENT_SPECS.md: Akmaludien's Premium Portfolio

## 1. Global Design Principles & Styling

### 1.1 Visual Style
*   **Theme:** Dark mode only. The site will not switch to a light theme based on system preference (see PRD.md for FR-02).
*   **Aesthetics:** Minimal premium, elegant, modern, content-first.
*   **Inspiration:** Linear, Vercel, Stripe, Anthropic, Apple.
*   **Layout:** Spacious layouts, generous whitespace.
*   **Typography:** Premium typography.
*   **Color Palette:** Predominantly dark background, with blue/cyan accents used for interactive elements, highlights, and subtle branding.
*   **Borders/Corners:** Soft borders, large rounded corners.
*   **Effects:** Very subtle glass effect (e.g., for card backgrounds or specific UI elements).
*   **Avoid:** Heavy gradients, cyberpunk, neon, particles, fake terminals, typing effects, visitor counters, excessive icons, visual clutter.

### 1.2 Typography
*   **Font Family:** A premium sans-serif font (e.g., Inter, Geist Sans, or similar) will be used consistently throughout the site.
*   **Hierarchy:** Strong typographic hierarchy will be implemented using varying font sizes, weights, and line heights for headings, subheadings, body text, and captions to facilitate scanning.
*   **Readability:** High contrast text against dark backgrounds to ensure legibility (see PRD.md for Accessibility NFRs).

### 1.3 Motion & Animation
*   **Principle:** Minimal and purposeful. Animations should improve UX, not distract.
*   **Types:** Subtle fade-in, slide-up/down, and hover effects.
*   **Duration:** All UI animations will have a duration between 200–500ms (see PRD.md for FR-13).
*   **Accessibility:** Animations will be disabled if the user's operating system `prefers-reduced-motion` setting is enabled (see PRD.md for FR-13).

### 1.4 Responsiveness
*   **Approach:** Designed desktop-first, ensuring an excellent and optimized experience on mobile and tablet devices (see PRD.md for FR-03).
*   **Interactions:** All interactive elements will be designed to be thumb-friendly on touch devices.
*   **Consistency:** Consistent spacing, padding, and element alignment will be maintained across all breakpoints.

## 2. Core Layout Components

### 2.1 Page Layout Container
*   **Purpose:** Provides a consistent maximum content width and horizontal padding for all major sections.
*   **Structure:** A central `div` or semantic element with a `max-width` (e.g., `max-w-screen-xl` in Tailwind CSS) and `margin: auto` for horizontal centering.
*   **Padding:** Consistent horizontal padding (e.g., `px-4` or `px-8`) to prevent content from touching screen edges.
*   **Background:** The primary dark background color of the application.

### 2.2 Section Wrapper
*   **Purpose:** Encapsulates each major content section (Hero, Projects, Journey, etc.) and defines consistent vertical spacing between them.
*   **Structure:** Semantic `section` HTML tags.
*   **Padding:** Consistent vertical padding (e.g., `py-24` or `py-32`) to create generous whitespace between sections.
*   **ID:** Each `section` will have a unique `id` attribute (e.g., `id="projects"`) to enable smooth scrolling navigation from the header (see PRD.md for FR-01).

## 3. UI Components

### 3.1 Navigation Header
*   **Purpose:** Provides sticky, scroll-to-section navigation and subtle brand identity.
*   **Visibility:** Fixed at the top of the viewport, potentially with a subtle background change on scroll.
*   **Elements:**
    *   **Brand/Name:** Akmaludien's name or initial on the left side.
    *   **Navigation Links:** "Projects", "Journey", "Experience", "Contact" (see PRD.md for FR-01).
*   **Interaction:** Clicking a link smoothly scrolls the user to the corresponding section on the single page.
*   **Styling:** Minimalist design, initially transparent or very subtle dark background, premium typography for links.

### 3.2 Button (Primary)
*   **Purpose:** Main call-to-action for high-priority actions.
*   **Styling:**
    *   Background: Solid blue/cyan accent color.
    *   Text: Contrasting light text (e.g., white).
    *   Shape: Large rounded corners.
    *   Hover: Subtle background color change, slight scale, or shadow effect.
    *   Padding: Generous horizontal and vertical padding for a substantial feel.
*   **Usage:** "View Projects", "Download Resume", "Email" (in Contact section).

### 3.3 Button (Secondary/Outline)
*   **Purpose:** For secondary actions or external links, less prominent than primary buttons.
*   **Styling:**
    *   Background: Transparent.
    *   Border: Thin border in the blue/cyan accent color.
    *   Text: Blue/cyan accent color.
    *   Shape: Large rounded corners.
    *   Hover: Subtle background fill with accent color, or text color change.
*   **Usage:** "GitHub" links, social media links (in Contact section).

### 3.4 Social Icon Button
*   **Purpose:** Provides direct links to Akmaludien's social profiles.
*   **Styling:**
    *   Icon: SVG icons for GitHub, LinkedIn, Instagram.
    *   Background: Transparent or a very subtle dark background.
    *   Hover: Subtle background change or icon color change to the blue/cyan accent.
    *   Shape: Circular or square with large rounded corners.
*   **Usage:** Hero section, Contact section.

### 3.5 Tech Badge / Skill Chip
*   **Purpose:** Visually represent individual technologies or skills concisely.
*   **Styling:**
    *   Background: Subtle dark background, potentially with a very subtle glass effect.
    *   Text: Light grey or white text.
    *   Border: Soft, thin border in a muted tone.
    *   Shape: Rounded corners.
    *   Size: Compact, ensuring legibility without being visually overwhelming.
*   **Usage:** Project cards, Skills section.

## 4. Section-Specific Components

### 4.1 Hero Section
*   **Layout:** Two columns on desktop (text on left, image on right), stacking vertically on mobile.
*   **Headline (`h1`):** "Building intelligent products through AI, Machine Learning, and Full Stack Engineering."
*   **Supporting Copy:** A concise paragraph explaining Akmaludien's background, evolving from instrumentation into AI and software engineering to solve real-world problems.
*   **Call-to-Action Buttons:**
    *   "View Projects" (Primary Button, scrolls to Featured Projects section - see PRD.md for FR-05).
    *   "Download Resume" (Primary Button, initiates PDF download - see PRD.md for FR-05).
*   **Social Links:** GitHub, LinkedIn, Instagram (using `Social Icon Button` components).
*   **Image:** A professional workspace photo with a subtle human presence. The image will be optimized using the Next.js Image component and avoid oversized portraits.

### 4.2 Featured Projects Section
*   **Purpose:** Showcase exactly two flagship projects as strong proof of capability.
*   **Layout:** A grid or flex layout displaying two `Project Card` components side-by-side on desktop, stacking vertically on mobile.
*   **Content:** Contains two instances of the `Project Card` component.

#### 4.2.1 Project Card
*   **Purpose:** Display a concise preview of a featured project.
*   **Elements:**
    *   **Thumbnail:** A project-specific image, optimized via Next.js Image component, with large rounded corners.
    *   **Title:** The project's name (e.g., "Rainfall Prediction System").
    *   **Summary:** A 2-line concise summary of the project's purpose or impact.
    *   **Tech Badges:** Multiple `Tech Badge` components representing key technologies used (e.g., Bi-LSTM, TensorFlow, React, Supabase).
    *   **Action Buttons:**
        *   "View Project" (Secondary Button, opens an external project page or detailed repository in a new browser tab - see PRD.md for FR-07).
        *   "GitHub" (Secondary Button, opens the project's GitHub repository in a new browser tab - see PRD.md for FR-07).
*   **Styling:** Card-like structure with soft borders, large rounded corners, and a subtle dark background, potentially with a very subtle glass effect.

### 4.3 Journey Section
*   **Purpose:** Visualize Akmaludien's career progression as a minimal vertical timeline.
*   **Layout:** A single-column layout, visually emphasizing a clear vertical flow.
*   **Elements:**
    *   **Timeline Stages:**
        *   "Instrumentation"
        *   "Climate Data"
        *   "Machine Learning"
        *   "Software Engineering"
        *   "AI Products"
    *   **Visuals:** Prioritize visual elements (e.g., subtle icons, connecting lines, distinct markers) over extensive paragraphs for each stage.
    *   **Concluding Text:** "Never finished. Always evolving."
*   **Styling:** Clean, minimalist design with clear visual separation and progression between stages.

### 4.4 Experience Section
*   **Purpose:** Display key areas of Akmaludien's professional experience.
*   **Layout:** A responsive card grid (e.g., 2-column on desktop, 1-column on mobile).
*   **Content:** Contains multiple instances of the `Experience Card` component.

#### 4.4.1 Experience Card
*   **Purpose:** Detail a specific experience area.
*   **Elements:**
    *   **Title:** The category of experience (e.g., "Teaching", "Research", "Freelance", "Organization").
    *   **Description:** A concise, scannable description of the experience.
*   **Styling:** Card-like structure with soft borders, large rounded corners, and a subtle dark background.

### 4.5 Skills Section
*   **Purpose:** Showcase Akmaludien's technical skills, grouped logically.
*   **Layout:** A grid or flex layout for categories, with `Skill Chip` components nested within each category.
*   **Categories:**
    *   "AI & ML"
    *   "Frontend"
    *   "Backend"
    *   "Database"
    *   "Cloud"
    *   "Developer Tools"
*   **Content:** Each category will have a clear heading, followed by a collection of `Skill Chip` components representing individual technologies.
*   **Avoid:** Proficiency bars, percentages, or any other visual representation of skill levels.

### 4.6 Contact Section
*   **Headline (`h2`):** "Interested in working together?"
*   **Supporting Text:** "Let's connect."
*   **Call-to-Action Buttons:**
    *   "Email" (Primary Button, triggers a `mailto:` link - see PRD.md for FR-11).
    *   "GitHub" (Secondary Button).
    *   "LinkedIn" (Secondary Button).
    *   "Instagram" (Secondary Button).
*   **Layout:** Content will be centered, with buttons arranged clearly for easy interaction. No contact form will be present (see PRD.md for "Out of Scope").

### 4.7 Footer Section
*   **Content:**
    *   "Never finished. Always evolving."
    *   "Portfolio v1.0" (see PRD.md for FR-12).
*   **Styling:** Minimalist design, centered text, subtle dark background, consistent with the overall premium aesthetic.

## 5. Data Structures

See [PRD.md] for `FR-14`, `FR-15`, and `FR-16` regarding the structured management of all site content (text, project details, journey stages, experience items, skills) via version-controlled data files (e.g., JSON or TypeScript objects). This approach ensures maintainability and allows for updates without direct modification of UI components.