import { cn } from "@/lib/utils";
import { Typography } from "./Typography";

interface SectionHeaderProps {
  label: string;
  title: string;
  boldTitle?: string;
  className?: string;
  light?: boolean;
  id?: string;
}

export function SectionHeader({
  label,
  title,
  boldTitle,
  className,
  light = false,
  id,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-6 md:mb-10", className)}>
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <div className={cn("w-5 h-px", light ? "bg-rose/60" : "bg-rose")} />
        <Typography
          variant="label"
          className={cn(light ? "text-rose/80" : "text-rose")}
        >
          {label}
        </Typography>
      </div>

      <Typography variant="display" as="h2" id={id} className="md:text-5xl md:leading-[1.05]">
        {title}
      </Typography>
      {boldTitle && (
        <Typography variant="display-bold" as="h2" className="md:text-5xl md:leading-[1.05]">
          {boldTitle}
        </Typography>
      )}
    </div>
  );
}
