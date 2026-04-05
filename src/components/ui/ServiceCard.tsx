import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Typography } from "./Typography";
import type { Service } from "@/types";

const serviceCardVariants = tv({
  slots: {
    root: "flex border border-divider rounded-sm overflow-hidden",
    bar: "w-[3px] flex-shrink-0",
    body: "flex-1 px-3 py-[10px]",
    tag: "text-[0.5rem] font-medium uppercase tracking-[0.22em] mb-1",
    row: "flex items-baseline justify-between gap-2",
    name: "text-sm font-semibold text-ink",
    price: "text-[0.6875rem] font-semibold text-rose flex-shrink-0",
    time: "mt-1 text-[0.625rem] font-light tracking-[0.05em] text-stone",
  },
  variants: {
    accent: {
      rose: {
        bar: "bg-rose",
        tag: "text-rose",
        body: "bg-white",
      },
      ink: {
        bar: "bg-ink",
        tag: "text-stone",
        body: "bg-linen",
      },
    },
  },
  defaultVariants: {
    accent: "rose",
  },
});

interface ServiceCardProps {
  service: Service;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}

export function ServiceCard({
  service,
  className,
  onClick,
  selected = false,
}: ServiceCardProps) {
  const slots = serviceCardVariants({ accent: service.accent });
  const duration =
    service.durationMin === service.durationMax
      ? `${service.durationMin} min`
      : `${service.durationMin} – ${service.durationMax} min`;

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
      }}
      className={cn(
        slots.root(),
        selected && "ring-2 ring-rose ring-inset",
        onClick && "cursor-pointer hover:shadow-sm transition-shadow",
        className,
      )}
      aria-pressed={onClick ? selected : undefined}
    >
      <div className={slots.bar()} />
      <div className={slots.body()}>
        <Typography as="span" className={slots.tag()}>
          {service.tag}
        </Typography>
        <div className={slots.row()}>
          <span className={slots.name()}>{service.name}</span>
          <span className={slots.price()}>
            Desde {formatPrice(service.priceFrom)}
          </span>
        </div>
        <p className={slots.time()}>⏱ {duration}</p>
      </div>
    </div>
  );
}
