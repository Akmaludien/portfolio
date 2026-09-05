import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-panel p-6",
        hover && "transition-colors duration-200 hover:border-border-strong",
        className
      )}
    >
      {children}
    </div>
  );
}
