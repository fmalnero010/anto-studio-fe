import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

const typographyVariants = tv({
  base: "",
  variants: {
    variant: {
      display:
        "text-[clamp(2rem,8vw,2.5rem)] font-extralight leading-[1.1] tracking-[-0.02em] text-ink",
      "display-bold":
        "text-[clamp(2rem,8vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-rose",
      h1: "text-[1.75rem] font-extralight leading-[1.15] tracking-[-0.01em] text-ink",
      h2: "text-xl font-bold leading-[1.15] tracking-[-0.01em] text-ink",
      h3: "text-base font-semibold leading-snug text-ink",
      body: "text-sm font-light leading-relaxed tracking-[0.03em] text-stone",
      "body-sm": "text-xs font-light leading-relaxed tracking-[0.03em] text-stone",
      label:
        "text-[0.625rem] font-medium uppercase tracking-[0.25em] text-rose",
      caption: "text-[0.6875rem] font-light tracking-[0.08em] text-stone",
      muted: "text-xs font-light text-stone",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyVariants = VariantProps<typeof typographyVariants>;

interface TypographyProps extends HTMLAttributes<HTMLElement>, TypographyVariants {
  as?: ElementType;
  children?: ReactNode;
}

export function Typography({
  as,
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  const variantToTag: Record<NonNullable<TypographyVariants["variant"]>, ElementType> = {
    display: "h1",
    "display-bold": "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body: "p",
    "body-sm": "p",
    label: "span",
    caption: "span",
    muted: "p",
  };

  const Tag = as ?? (variant ? variantToTag[variant] : "p");

  return (
    <Tag
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
