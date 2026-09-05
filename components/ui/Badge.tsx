import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "tech" | "category";
  className?: string;
};

export function Badge({ children, variant = "tech", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium",
        variant === "tech" && "border border-border bg-panel-2 text-text-secondary",
        variant === "category" && "border border-accent/25 bg-accent-dim text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
