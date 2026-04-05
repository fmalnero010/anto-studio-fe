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
    <div className={cn("flex gap-3.5", className)}>
      {/* Left: number + connector */}
      <div className="flex flex-col items-center">
        <Typography
          as="span"
          variant="label"
          className="text-rose font-thin tracking-[0.15em] pt-0.5 min-w-[1.25rem]"
        >
          {step.number}
        </Typography>
        {!isLast && (
          <div className="w-px flex-1 bg-divider mt-1 min-h-[2.5rem]" />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-5">
        <Typography variant="h3" className="mb-1">
          {step.title}
        </Typography>
        <Typography variant="body-sm" className="max-w-[18rem]">
          {step.description}
        </Typography>
      </div>
    </div>
  );
}
