import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const variantStyles: Record<ButtonVariant, string> = {
  // Primary action = neutral light fill; accent color is reserved for
  // links/status, not for the loudest button on the page.
  primary:
    "bg-foreground text-background hover:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent/50 hover:text-accent",
  ghost:
    "bg-transparent text-text-secondary hover:text-foreground border border-transparent hover:border-border",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      />
    );
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
