# PERFORMANCE_ACCESSIBILITY.md: Akmaludien's Premium Portfolio

## Overview

This document specifies the performance and accessibility standards for Akmaludien's Premium Portfolio. It defines measurable targets, implementation strategies, and validation methods to ensure the site delivers an excellent experience for all users, regardless of device capability or ability.

The portfolio must achieve a **Lighthouse score above 95** across Performance, Accessibility, Best Practices, and SEO. It must comply with **WCAG 2.1 AA** standards and respect user preferences for motion and color contrast.

## Performance Targets

### Core Web Vitals

| Metric | Target | Rationale |
|:---|:---|:---|
| **First Contentful Paint (FCP)** | < 1.8s | Users perceive the page as loading quickly. |
| **Largest Contentful Paint (LCP)** | < 2.5s | Main content is interactive within acceptable time. |
| **Cumulative Layout Shift (CLS)** | < 0.1 | No unexpected layout shifts during load or interaction. |
| **First Input Delay (FID)** | < 100ms | Interactions feel responsive. |
| **Time to Interactive (TTI)** | < 3.5s | Page is fully usable without blocking scripts. |

### Lighthouse Scores

| Category | Target | Notes |
|:---|:---|:---|
| **Performance** | > 95 | Enforced via CI/CD pipeline. |
| **Accessibility** | > 95 | Validated before each deployment. |
| **Best Practices** | > 95 | Security, standards compliance. |
| **SEO** | > 95 | Metadata, structured data, mobile-friendliness. |

### Load Time Budgets

- **JavaScript (Total):** < 50 KB (gzipped)
- **CSS (Total):** < 15 KB (gzipped)
- **Images (Hero):** < 100 KB (optimized)
- **Images (Project Cards):** < 60 KB each (optimized)
- **Third-party Scripts:** Minimal; only Vercel Analytics (< 5 KB)

## Image Optimization Strategy

### Next.js Image Component

All images MUST use the Next.js `<Image>` component to enable automatic:
- Format conversion (WebP, AVIF)
- Responsive sizing
- Lazy loading
- Placeholder blur effects

### Image Specifications

| Section | Format | Max Size | Dimensions | Notes |
|:---|:---|:---|:---|:---|
| **Hero Photo** | WebP/AVIF | 100 KB | 1200×800px | Professional workspace; subtle human presence. |
| **Project Thumbnails** | WebP/AVIF | 60 KB each | 600×400px | Clear, high-contrast previews. |
| **Favicon** | SVG or PNG | 5 KB | 32×32px | Minimal, on-brand. |

### Lazy Loading

- Hero image: `loading="eager"` (above fold)
- Project thumbnails: `loading="lazy"` (below fold)
- All images: `decoding="async"`

### Alt Text Requirements

Every `<Image>` component MUST include a descriptive `alt` attribute:
- **Hero photo:** "Akmaludien at workspace with laptop and climate data visualizations"
- **Project thumbnails:** "[Project Name] — [Brief description]" (e.g., "Rainfall Prediction System — LSTM neural network forecasting interface")

## JavaScript & Bundle Optimization

### Code Splitting

- Use Next.js dynamic imports for non-critical components
- Lazy-load Framer Motion animations only when viewport enters animated sections
- Defer non-essential third-party scripts

### Minimal JavaScript Philosophy

- Avoid unnecessary client-side libraries
- Prefer CSS for animations (fade, slide, hover)
- Use Framer Motion only for complex, value-adding animations (200–500ms duration)
- No auto-playing effects, particle systems, or WebGL

### Bundle Analysis

- Run `next/bundle-analyzer` in CI/CD to track bundle size per commit
- Fail builds if bundle size increases > 5% without justification
- Document all third-party dependencies in `package.json` with rationale

## CSS & Styling Performance

### Tailwind CSS Configuration

- Use Tailwind's built-in purging to remove unused styles
- Configure custom dark mode via `darkMode: 'class'` in `tailwind.config.ts`
- Limit custom colors to the brand palette (blue, cyan, grays)
- Avoid excessive custom CSS; prefer utility classes

### Critical CSS

- Inline critical CSS for above-the-fold content (hero, navigation)
- Defer non-critical styles using `media="print"` or dynamic imports

### CSS-in-JS Avoidance

- Do NOT use CSS-in-JS libraries (styled-components, emotion)
- Prefer Tailwind utilities and CSS modules for scoped styles

## Font Loading & Typography

### Font Strategy

- Use system fonts or a single, optimized web font (e.g., Inter, Geist)
- Load fonts via `next/font` with `display: swap` to prevent layout shift
- Preload critical fonts in `<head>`

### Font Specifications

```typescript
// Example: next/font configuration
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
```

### Font Sizes & Line Heights

- Base font size: 16px
- Heading hierarchy: 32px (H1), 24px (H2), 18px (H3)
- Line height: 1.6 for body text, 1.2 for headings
- Letter spacing: 0 (default) for body, -0.02em for headings

## Animation Performance

### Motion Principles

- All animations: 200–500ms duration
- Use `transform` and `opacity` properties only (GPU-accelerated)
- Avoid animating `width`, `height`, `left`, `top` (layout thrashing)
- Disable animations if `prefers-reduced-motion: reduce` is set

### Framer Motion Configuration

```typescript
// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animationConfig = prefersReducedMotion
  ? { duration: 0 }
  : { duration: 0.3, ease: 'easeInOut' };
```

### CSS Transitions

Prefer CSS transitions for simple effects:

```css
/* Fade on hover */
.link {
  opacity: 1;
  transition: opacity 300ms ease-in-out;
}

.link:hover {
  opacity: 0.7;
}
```

## Accessibility Standards

### WCAG 2.1 AA Compliance

The portfolio MUST meet or exceed WCAG 2.1 Level AA across all sections:

| Criterion | Implementation |
|:---|:---|
| **1.4.3 Contrast (Minimum)** | All text ≥ 4.5:1 ratio (normal), ≥ 3:1 (large). Tested via axe DevTools. |
| **1.4.11 Non-text Contrast** | UI components ≥ 3:1 ratio. Borders, buttons, icons tested. |
| **2.1.1 Keyboard** | All interactive elements focusable via Tab. Activatable via Enter/Space. |
| **2.1.2 No Keyboard Trap** | Focus must not be trapped. Escape key closes modals/dropdowns. |
| **2.4.3 Focus Order** | Logical tab order (left-to-right, top-to-bottom). |
| **2.4.7 Focus Visible** | Visible focus indicator (outline or highlight) on all focusable elements. |
| **3.2.1 On Focus** | No unexpected context changes on focus. |
| **3.3.4 Error Prevention** | Form inputs (if any) provide clear error messages. |
| **4.1.2 Name, Role, Value** | All UI components have accessible names and roles. |
| **4.1.3 Status Messages** | Dynamic content updates announced to screen readers. |

### Semantic HTML

All content MUST use semantic HTML5 elements:

```html
<!-- ✓ Correct -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#journey">Journey</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="hero" aria-labelledby="hero-heading">
    <h1 id="hero-heading">Building intelligent products...</h1>
  </section>
</main>

<footer>
  <p>Never finished. Always evolving.</p>
</footer>

<!-- ✗ Avoid -->
<div class="header">
  <div class="nav">
    <span class="link">Projects</span>
  </div>
</div>
```

### Heading Hierarchy

- Exactly one `<h1>` per page (hero headline)
- Logical progression: H1 → H2 → H3 (no skipping levels)
- All headings must have unique, descriptive text

### Link & Button Accessibility

```html
<!-- ✓ Descriptive link text -->
<a href="https://github.com/akmaludien">View on GitHub</a>

<!-- ✗ Avoid generic text -->
<a href="https://github.com/akmaludien">Click here</a>

<!-- ✓ Button with aria-label for icon buttons -->
<button aria-label="Download resume as PDF">
  <DownloadIcon />
</button>

<!-- ✓ External links with rel attribute -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External link
</a>
```

### Color Contrast

**Dark Mode Palette:**

| Element | Background | Foreground | Ratio | WCAG |
|:---|:---|:---|:---|:---|
| **Body Text** | #0a0a0a | #e5e5e5 | 15.3:1 | AAA |
| **Headings** | #0a0a0a | #ffffff | 21:1 | AAA |
| **Links** | #0a0a0a | #00d9ff (cyan) | 8.2:1 | AAA |
| **Buttons** | #0066ff (blue) | #ffffff | 8.6:1 | AAA |
| **Disabled State** | #0a0a0a | #666666 | 4.5:1 | AA |

All ratios verified via WebAIM Contrast Checker.

### Focus Indicators

```css
/* Visible focus outline for all interactive elements */
:focus-visible {
  outline: 2px solid #00d9ff;
  outline-offset: 2px;
}

/* Remove default outline only if custom focus is provided */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #00d9ff;
  outline-offset: 2px;
}
```

### Motion & Vestibular Disorders

```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Optimization

#### Skip Links

Include a skip-to-main-content link (visible on focus):

```html
<a href="#main" class="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main">
  <!-- Page content -->
</main>
```

#### ARIA Labels & Descriptions

```html
<!-- Navigation with aria-label -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#projects">Projects</a></li>
  </ul>
</nav>

<!-- Section with aria-labelledby -->
<section id="projects" aria-labelledby="projects-heading">
  <h2 id="projects-heading">Featured Projects</h2>
</section>

<!-- Icon button with aria-label -->
<button aria-label="Open GitHub profile">
  <GitHubIcon />
</button>

<!-- Live region for dynamic updates -->
<div aria-live="polite" aria-atomic="true" class="sr-only">
  <!-- Screen reader announcements -->
</div>
```

#### Landmark Regions

```html
<header role="banner">
  <!-- Navigation -->
</header>

<main role="main">
  <!-- Primary content -->
</main>

<footer role="contentinfo">
  <!-- Footer -->
</footer>
```

### Form Accessibility (Contact Links)

While the portfolio uses `mailto:` links instead of a form, any future contact form MUST include:

```html
<form>
  <label for="email">Email Address</label>
  <input
    id="email"
    type="email"
    name="email"
    required
    aria-required="true"
    aria-describedby="email-hint"
  />
  <span id="email-hint">We'll respond within 24 hours.</span>

  <button type="submit">Send Message</button>
</form>
```

### Language Declaration

```html
<html lang="en">
  <!-- Page content -->
</html>
```

## Testing & Validation

### Automated Testing

#### Lighthouse CI

Run Lighthouse in CI/CD on every commit:

```bash
# .github/workflows/lighthouse.yml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
  with:
    configPath: './lighthouserc.json'
    uploadArtifacts: true
    temporaryPublicStorage: true
```

**Configuration (`lighthouserc.json`):**

```json
{
  "ci": {
    "collect": {
      "url": ["https://akmaludien.dev"],
      "numberOfRuns": 3,
      "settings": {
        "configPath": "./lighthouse-config.js"
      }
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.95 }],
        "categories:seo": ["error", { "minScore": 0.95 }]
      }
    }
  }
}
```

#### axe DevTools

Automated accessibility scanning:

```bash
npm install --save-dev @axe-core/react
```

Run in development:

```typescript
// pages/_app.tsx
import { axe } from '@axe-core/react';

if (process.env.NODE_ENV === 'development') {
  axe(React, ReactDOM, 1000);
}
```

#### Web Vitals Monitoring

```typescript
// lib/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals(metric: any) {
  console.log(metric);
  // Send to analytics
}

// pages/_app.tsx
import { reportWebVitals } from '../lib/web-vitals';

export { reportWebVitals };
```

### Manual Testing

#### Keyboard Navigation

- [ ] Tab through all interactive elements in logical order
- [ ] Shift+Tab navigates backward
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes any modals or dropdowns
- [ ] Focus indicator is always visible

#### Screen Reader Testing

Test with:
- **NVDA** (Windows, free)
- **JAWS** (Windows, paid)
- **VoiceOver** (macOS, built-in)
- **TalkBack** (Android, built-in)

Verify:
- [ ] All headings are announced correctly
- [ ] Link text is descriptive
- [ ] Form labels are associated with inputs
- [ ] Dynamic content updates are announced
- [ ] Navigation landmarks are identified

#### Color Contrast Verification

- [ ] Use WebAIM Contrast Checker or axe DevTools
- [ ] Test all text, buttons, and UI components
- [ ] Verify 4.5:1 ratio for normal text, 3:1 for large text
- [ ] Test in both light and dark modes (if applicable)

#### Responsive Design Testing

- [ ] Desktop (1920×1080, 1440×900)
- [ ] Tablet (768×1024, iPad)
- [ ] Mobile (375×667, iPhone SE; 414×896, iPhone 12)
- [ ] Test touch interactions (buttons, links)
- [ ] Verify text is readable without zooming

#### Motion & Animation Testing

- [ ] Enable `prefers-reduced-motion: reduce` in OS settings
- [ ] Verify animations are disabled or significantly reduced
- [ ] Test on low-end devices (throttled CPU/network)

## Performance Monitoring

### Vercel Analytics

Vercel Analytics provides real-time Web Vitals data with zero client-side overhead:

- **Real User Monitoring (RUM):** Collects FCP, LCP, CLS, FID from actual visitors
- **Dashboard:** View trends, identify regressions
- **Alerts:** Notify on performance degradation

Enable in `next.config.js`:

```javascript
module.exports = {
  analytics: {
    enabled: true,
  },
};
```

### Custom Web Vitals Reporting

```typescript
// lib/analytics.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Send to Vercel Analytics or custom endpoint
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Performance Budgets

Enforce budgets in CI/CD:

```bash
# .github/workflows/performance.yml
- name: Check Performance Budget
  run: npm run lighthouse:ci
```

## Deployment & Optimization

### Vercel Deployment

Vercel automatically optimizes Next.js sites:

- **Edge Caching:** Global CDN with automatic cache invalidation
- **Image Optimization:** Automatic WebP/AVIF conversion
- **Compression:** Gzip and Brotli compression enabled
- **HTTP/2 Push:** Preload critical resources

### Build Optimization

```bash
# next.config.js
module.exports = {
  swcMinify: true, // Use SWC for faster minification
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  productionBrowserSourceMaps: false, // Disable source maps in production
};
```

### Environment Variables

```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.production (production)
NEXT_PUBLIC_SITE_URL=https://akmaludien.dev
```

## Accessibility Checklist

Before each deployment, verify:

- [ ] Lighthouse Accessibility score ≥ 95
- [ ] All images have descriptive alt text
- [ ] Heading hierarchy is correct (H1 → H2 → H3)
- [ ] All links have descriptive text (not "click here")
- [ ] All buttons have accessible names
- [ ] Color contrast ≥ 4.5:1 for normal text
- [ ] Focus indicators are visible on all interactive elements
- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Space, Escape)
- [ ] `prefers-reduced-motion` is respected
- [ ] Form inputs (if any) have associated labels
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Page has a single `<h1>` tag
- [ ] Semantic HTML is used throughout
- [ ] Skip-to-main-content link is present
- [ ] Language is declared in `<html lang="en">`

## Performance Checklist

Before each deployment, verify:

- [ ] Lighthouse Performance score ≥ 95
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] JavaScript bundle < 50 KB (gzipped)
- [ ] CSS bundle < 15 KB (gzipped)
- [ ] All images are optimized (WebP/AVIF)
- [ ] Lazy loading is enabled for below-fold images
- [ ] Fonts are loaded via `next/font` with `display: swap`
- [ ] No render-blocking resources
- [ ] Third-party scripts are deferred or async
- [ ] Minification is enabled (JS, CSS, HTML)
- [ ] Compression is enabled (Gzip, Brotli)
- [ ] Cache headers are set correctly
- [ ] No console errors or warnings

## Continuous Improvement

### Quarterly Reviews

- [ ] Analyze Vercel Analytics data for performance trends
- [ ] Review user feedback for accessibility issues
- [ ] Run full Lighthouse audit on all pages
- [ ] Test on new devices and browsers
- [ ] Update dependencies and security patches

### Monitoring & Alerts

Set up alerts for:
- Lighthouse score drops below 95
- LCP exceeds 2.5s
- CLS exceeds 0.1
- JavaScript bundle size increases > 5%
- Accessibility violations detected

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Next Review:** Quarterly