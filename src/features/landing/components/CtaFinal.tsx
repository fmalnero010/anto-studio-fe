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
      className="relative bg-ink pt-12 pb-14 md:pt-20 md:pb-24 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative elements */}
      <div
        aria-hidden
        className="absolute right-[-10px] top-[-20px] w-[110px] h-[150px] bg-white/[0.04] rounded-t-[55px]"
      />
      <div
        aria-hidden
        className="absolute right-[60px] bottom-[-20px] w-[100px] h-[100px] rounded-full bg-rose/[0.07]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="md:flex md:items-end md:justify-between md:gap-16"
        >
          {/* Text block */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-rose" aria-hidden />
              <span className="text-[0.5rem] font-medium uppercase tracking-[0.22em] text-rose">
                Tu momento es ahora
              </span>
            </div>

            {/* Headline */}
            <h2 id="cta-heading">
              <span className="block text-[clamp(1.75rem,7vw,2.25rem)] font-extralight leading-[1.1] tracking-[-0.02em] text-ivory md:text-5xl md:leading-[1.05]">
                Tu turno
              </span>
              <span className="block text-[clamp(1.75rem,7vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-rose md:text-5xl md:leading-[1.05]">
                te espera.
              </span>
            </h2>

            <p className="mt-4 text-[0.6875rem] font-light tracking-[0.05em] text-stone md:mt-6">
              {APP_NAME} Studio · {new Date().getFullYear()}
            </p>
          </div>

          {/* CTA button */}
          <div className="mt-6 md:mt-0 md:flex-shrink-0">
            <Button variant="rose" size="lg" asChild>
              <Link to="/booking">Reservar ahora</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
