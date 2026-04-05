import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  vertical?: boolean;
}

export function Divider({ className, vertical = false }: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        "bg-divider flex-shrink-0",
        vertical ? "w-px h-full" : "w-full h-px",
        className,
      )}
    />
  );
}
