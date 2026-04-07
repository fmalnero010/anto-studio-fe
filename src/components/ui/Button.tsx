import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center",
    "font-semibold tracking-[0.2em] text-[0.625rem] md:text-xs uppercase",
    "rounded-sm transition-all duration-200",
    "cursor-pointer select-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose",
  ],
  variants: {
    variant: {
      primary: "bg-ink text-ivory hover:bg-ink-secondary active:scale-[0.98]",
      rose: "bg-rose text-ivory hover:bg-rose/90 active:scale-[0.98] shadow-[0_8px_20px_rgba(184,123,114,0.3)]",
      ghost:
        "bg-transparent text-ink-secondary border border-divider hover:bg-linen active:scale-[0.98]",
      outline:
        "bg-transparent text-rose border border-rose hover:bg-rose-faint active:scale-[0.98]",
    },
    size: {
      sm: "h-9 px-4 text-[0.5625rem] md:text-[0.625rem]",
      md: "h-[50px] md:h-[52px] px-6 md:px-8",
      lg: "h-14 px-8 md:px-10 text-xs md:text-sm",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    ButtonVariants {
  asChild?: boolean;
  children?: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
