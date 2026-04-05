import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader, StepItem } from "@/components/ui";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-linen px-5 pt-8 pb-8"
      aria-labelledby="how-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionHeader
          label="Proceso"
          title="Tres pasos."
          boldTitle="Una experiencia."
          id="how-heading"
        />

        <div className="mt-1">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <StepItem
              key={step.number}
              step={step}
              isLast={i === HOW_IT_WORKS_STEPS.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
