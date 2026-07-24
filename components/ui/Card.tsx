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
        "glass rounded-xl p-6",
        hover && "transition-all duration-200 hover:border-accent/30",
        className
      )}
    >
      {children}
    </div>
  );
}
