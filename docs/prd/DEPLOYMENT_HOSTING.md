# DEPLOYMENT_HOSTING.md: Akmaludien's Premium Portfolio

## Overview

This document outlines the deployment and hosting strategy for Akmaludien's Premium Portfolio, a statically generated single-page application built with Next.js. The primary goal is to ensure a highly performant, reliable, and easily maintainable online presence that aligns with the project's "minimal premium" and "content-first" philosophy.

## Hosting Platform

The chosen hosting platform is **Vercel**.

### Rationale
*   **Native Next.js Support:** Vercel is the creator of Next.js, offering unparalleled integration and optimization for Next.js applications.
*   **Static Site Generation (SSG):** Leverages Next.js's SSG capabilities to pre-render the entire site at build time, resulting in lightning-fast load times and improved SEO.
*   **Global Edge Network (CDN):** Content is automatically distributed across Vercel's global CDN, ensuring low latency for visitors worldwide.
*   **Zero-Config Deployment:** Simplifies the deployment process by automatically detecting the Next.js framework and configuring build settings.
*   **Serverless Functions:** Supports Next.js API Routes, which can be deployed as serverless functions. This is crucial for handling backend logic, such as the `Resend` integration for the contact email (see Environment Variables section).

## Deployment Strategy

The project employs a Git-based, automated deployment strategy.

### Production Deployments
*   **Branch:** The `main` branch is configured for automatic production deployments.
*   **Trigger:** Every push or merge to the `main` branch initiates a new build and deployment to the production URL.
*   **Atomic Deployments:** Vercel performs atomic deployments, meaning a new version of the site is deployed only after a successful build, ensuring zero downtime.

### Preview Deployments
*   **Branch/PRs:** Every new Git branch or Pull Request (PR) automatically triggers a preview deployment.
*   **Preview URLs:** Each preview deployment receives a unique, shareable URL, allowing for easy review and testing of changes before merging to `main`.
*   **Collaboration:** Facilitates collaboration and feedback loops by providing live, isolated environments for proposed changes.

## CI/CD Pipeline

Vercel's integrated CI/CD pipeline automates the build, test, and deployment process.

### Build Process
*   Vercel automatically detects the Next.js project and executes `npm install` (or `yarn install`) followed by `npm run build` (or `yarn build`).
*   The build process generates the static assets and serverless functions (for API routes).

### Quality Gates
*   **Lighthouse CI:** As per PRD.md, Lighthouse CI will be integrated into the deployment pipeline. This ensures that performance, accessibility, best practices, and SEO scores meet predefined thresholds before a deployment is considered successful. This prevents regressions in critical non-functional requirements.
*   **Type Checking & Linting:** The build process includes TypeScript type checking and ESLint/Prettier checks to maintain code quality and consistency.

## Domain Management

The portfolio will be accessible via a custom domain.

*   **Custom Domain:** Akmaludien's chosen personal domain (e.g., `akmaludien.com`).
*   **DNS Configuration:** The domain's DNS records (typically A records and/or CNAME records) will be configured to point to Vercel's nameservers or IP addresses, as instructed by Vercel.

## SSL/TLS

Security is paramount, and HTTPS is enforced.

*   **Automatic SSL:** Vercel automatically provisions and renews free SSL/TLS certificates (via Let's Encrypt) for all deployed projects, including custom domains.
*   **HTTPS Enforcement:** All traffic to the portfolio will be automatically redirected to HTTPS, ensuring secure communication and improved SEO.

## Monitoring & Analytics

Performance and user engagement are continuously monitored.

*   **Vercel Analytics:** Integrated for privacy-friendly, real-time performance and audience insights. This includes monitoring Core Web Vitals (LCP, FCP, CLS) to ensure the site meets performance targets.
*   **Lighthouse CI:** Provides continuous auditing of performance, accessibility, and SEO metrics as part of the CI/CD pipeline.
*   **Uptime Monitoring:** Vercel provides robust infrastructure monitoring to ensure high availability of the deployed application.

## Environment Variables

Sensitive information is managed securely using environment variables.

*   **Vercel Dashboard:** Environment variables (e.g., `RESEND_API_KEY` for the contact email functionality) are securely stored and managed within the Vercel project settings.
*   **Scope:** Variables can be scoped to specific environments (e.g., `development`, `preview`, `production`) to ensure appropriate access control.
*   **Build-time vs. Runtime:** Variables can be configured to be available at build time (for static content generation) or at runtime (for serverless functions).

## Rollback Strategy

Vercel provides a robust and instant rollback mechanism.

*   **Immutable Deployments:** Each successful deployment creates an immutable instance of the application.
*   **Instant Rollback:** In case of an issue with a new deployment, Vercel allows for an instant rollback to any previous successful deployment with a single click from the dashboard, ensuring minimal impact on users.