import { content } from "@/data/content";
import { FIVERR_GIG_URL, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border py-8 text-center"
    >
      <p className="text-sm font-medium italic text-text-secondary">
        {content.footer.tagline}
      </p>
      <p className="mt-2 text-xs text-text-secondary/60">
        &copy; {new Date().getFullYear()} {SITE_NAME}
      </p>
      <nav aria-label="Social links" className="mt-3 flex flex-wrap justify-center gap-4 text-xs">
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className="text-text-secondary transition-colors hover:text-accent">GitHub</a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className="text-text-secondary transition-colors hover:text-accent">LinkedIn</a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile (opens in a new tab)" className="text-text-secondary transition-colors hover:text-accent">Instagram</a>
        <a href={FIVERR_GIG_URL} target="_blank" rel="noopener noreferrer" aria-label="Hire Akmal on Fiverr (opens in a new tab)" className="text-text-secondary transition-colors hover:text-accent">Fiverr</a>
      </nav>
    </footer>
  );
}
