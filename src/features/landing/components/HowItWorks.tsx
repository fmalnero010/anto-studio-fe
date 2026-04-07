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
      className="bg-linen pt-12 pb-12 md:pt-20 md:pb-20"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
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

          <div className="mt-2 md:grid md:grid-cols-3 md:gap-10">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.1 }}
              >
                <StepItem
                  step={step}
                  isLast={i === HOW_IT_WORKS_STEPS.length - 1}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
