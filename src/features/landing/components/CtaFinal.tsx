import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui";
import { APP_NAME } from "@/lib/constants";

export function CtaFinal() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative bg-ink px-5 pt-7 pb-8 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative arch — mirrors hero */}
      <div
        aria-hidden
        className="absolute right-[-10px] top-[-20px] w-[110px] h-[150px] bg-white/[0.04] rounded-t-[55px]"
      />
      <div
        aria-hidden
        className="absolute right-[60px] bottom-[-20px] w-[100px] h-[100px] rounded-full bg-rose/[0.07]"
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-px bg-rose" aria-hidden />
          <span className="text-[0.5rem] font-medium uppercase tracking-[0.22em] text-rose">
            Tu momento es ahora
          </span>
        </div>

        {/* Headline */}
        <h2 id="cta-heading">
          <span className="block text-[clamp(1.75rem,7vw,2.25rem)] font-extralight leading-[1.1] tracking-[-0.02em] text-ivory">
            Tu turno
          </span>
          <span className="block text-[clamp(1.75rem,7vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-rose mb-5">
            te espera.
          </span>
        </h2>

        <Button variant="rose" size="md" asChild>
          <Link to="/booking">Reservar ahora</Link>
        </Button>

        <p className="mt-4 text-[0.6875rem] font-light tracking-[0.05em] text-stone">
          {APP_NAME} Studio · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
