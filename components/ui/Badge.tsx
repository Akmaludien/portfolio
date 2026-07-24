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
        variant === "tech" &&
          "glass text-text-secondary",
        variant === "category" &&
          "bg-accent/10 text-accent border border-accent/20",
        className
      )}
    >
      {children}
    </span>
  );
}
