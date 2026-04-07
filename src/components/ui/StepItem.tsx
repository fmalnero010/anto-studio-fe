import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import type { Step } from "@/types";

interface StepItemProps {
  step: Step;
  isLast?: boolean;
  className?: string;
}

export function StepItem({ step, isLast = false, className }: StepItemProps) {
  return (
    <div className={cn("flex gap-3.5 md:flex-col md:gap-4", className)}>
      {/* Number + vertical connector (mobile) */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-3">
        <Typography
          as="span"
          variant="label"
          className="text-rose font-thin tracking-[0.15em] pt-0.5 min-w-[1.25rem] md:text-base md:tracking-[0.1em] md:pt-0"
        >
          {step.number}
        </Typography>
        {/* Vertical connector — mobile only */}
        {!isLast && (
          <div className="w-px flex-1 bg-divider mt-1 min-h-[2.5rem] md:hidden" />
        )}
        {/* Horizontal rule under number — desktop only */}
        <div className="hidden md:block h-px w-8 bg-rose/40" />
      </div>

      {/* Content */}
      <div className="pb-5 md:pb-0">
        <Typography variant="h3" className="mb-1.5 md:text-base md:font-semibold">
          {step.title}
        </Typography>
        <Typography variant="body-sm" className="md:text-sm md:max-w-none">
          {step.description}
        </Typography>
      </div>
    </div>
  );
}
