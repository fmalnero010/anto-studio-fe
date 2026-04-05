import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button, Typography } from "@/components/ui";
import { STATS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export function Hero() {
  return (
    <section className="relative bg-linen px-5 pt-6 pb-8 overflow-hidden">
      {/* Decorative arch */}
      <div
        aria-hidden
        className="absolute right-3 top-2 w-[130px] h-[170px] bg-linen-deep opacity-70 rounded-t-[65px]"
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
          <span className="text-[0.5rem] font-regular uppercase tracking-[0.22em] text-stone">
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
          <Typography variant="display" as="h1">
            Donde el
          </Typography>
          <Typography variant="display" as="h1">
            cuidado
          </Typography>
          <Typography variant="display-bold" as="h1">
            es arte.
          </Typography>
        </motion.div>

        {/* Rule */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="w-8 h-px bg-rose my-3"
          aria-hidden
        />

        {/* Subheading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          <Typography variant="body" className="max-w-[17rem] mb-5">
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
          className="flex gap-2 mb-5"
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
          className="flex border-t border-divider pt-3.5"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex-1">
              <div className="flex items-stretch gap-0">
                {i !== 0 && (
                  <div className="w-px bg-divider mr-3 self-stretch" />
                )}
                <div>
                  <p className="text-base font-semibold text-ink leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[0.5625rem] font-light tracking-[0.1em] text-stone mt-0.5 uppercase">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
