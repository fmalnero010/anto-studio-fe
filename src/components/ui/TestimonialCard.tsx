import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("select-none", className)}>
      {/* Stars */}
      <p className="text-rose text-sm tracking-wide mb-3" aria-label={`${testimonial.rating} stars`}>
        {"★".repeat(testimonial.rating)}
      </p>

      {/* Quote */}
      <Typography
        variant="h1"
        className="text-[1.0625rem] font-extralight leading-[1.65] tracking-[0.04em] text-ink mb-4"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </Typography>

      {/* Author */}
      <div className="w-6 h-px bg-divider mb-2" />
      <Typography
        as="p"
        variant="caption"
        className="font-semibold text-ink-secondary uppercase tracking-[0.1em]"
      >
        {testimonial.author}
      </Typography>
      <Typography variant="caption" className="text-stone">
        {testimonial.role}
      </Typography>
    </div>
  );
}
