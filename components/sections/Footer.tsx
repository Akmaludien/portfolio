import { content } from "@/data/content";
import { SITE_NAME } from "@/lib/constants";

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
      <p className="mt-1 text-[10px] text-text-secondary/40">
        Built with Career OS documentation-first workflow
      </p>
    </footer>
  );
}
