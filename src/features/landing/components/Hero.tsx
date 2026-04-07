import { motion, type Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button, Typography } from "@/components/ui";
import { STATS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export function Hero() {
  return (
    <section className="bg-linen pt-8 pb-10 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">

          {/* ── Left: content ─────────────────────────── */}
          <div className="relative">
            {/* Mobile-only decorative arch */}
            <div
              aria-hidden
              className="absolute right-3 top-2 w-[130px] h-[170px] bg-linen-deep opacity-70 rounded-t-[65px] md:hidden"
            />

            <div className="relative z-10">
              {/* Category tag */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center border border-divider px-2.5 py-1 mb-4"
              >
                <span className="text-[0.5rem] md:text-xs uppercase tracking-[0.22em] text-stone">
                  Centro de Estética
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                <Typography variant="display" as="h1" className="md:text-6xl md:leading-[1.05]">
                  Donde el
                </Typography>
                <Typography variant="display" as="h1" className="md:text-6xl md:leading-[1.05]">
                  cuidado
                </Typography>
                <Typography variant="display-bold" as="h1" className="md:text-6xl md:leading-[1.05]">
                  es arte.
                </Typography>
              </motion.div>

              {/* Rule */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="w-8 h-px bg-rose my-4 md:my-5"
                aria-hidden
              />

              {/* Subheading */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.25}
              >
                <Typography variant="body" className="max-w-[17rem] mb-6 md:max-w-sm md:text-base md:leading-relaxed">
                  Tratamientos personalizados
                  <br />
                  para tu bienestar y belleza.
                </Typography>
              </motion.div>

              {/* CTA row */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="flex gap-2 mb-6 md:gap-3"
              >
                <Button variant="primary" size="md" asChild>
                  <Link to="/booking">Reservar turno</Link>
                </Button>
                <Button variant="ghost" size="md" asChild>
                  <a href="#services">Ver servicios</a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.35}
                className="flex border-t border-divider pt-4"
              >
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex-1">
                    <div className="flex items-stretch gap-0">
                      {i !== 0 && (
                        <div className="w-px bg-divider mr-4 self-stretch" />
                      )}
                      <div>
                        <p className="text-base font-semibold text-ink leading-tight md:text-xl">
                          {stat.value}
                        </p>
                        <p className="text-[0.5625rem] md:text-xs font-light tracking-[0.1em] text-stone mt-0.5 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Right: decorative visual (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden md:flex justify-center items-end"
            aria-hidden
          >
            <div className="relative w-full max-w-[400px] h-[520px]">
              {/* Main arch */}
              <div className="absolute inset-x-[12%] top-0 bottom-[8%] bg-linen-deep opacity-80 rounded-t-full" />
              {/* Accent circle */}
              <div className="absolute bottom-[15%] right-[8%] w-24 h-24 rounded-full bg-rose/10" />
              {/* Small rose dot */}
              <div className="absolute top-[18%] left-[8%] w-3 h-3 rounded-full bg-rose/40" />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-[12%] right-[12%] flex items-center justify-between py-4 border-t border-divider">
                <span className="text-[0.5rem] uppercase tracking-[0.25em] text-stone">
                  Aire Studio
                </span>
                <span className="text-[0.5rem] uppercase tracking-[0.25em] text-rose">
                  Est. 2024
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
