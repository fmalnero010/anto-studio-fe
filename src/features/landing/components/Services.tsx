import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { SectionHeader, ServiceCard } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      ref={ref}
      className="bg-white px-5 pt-8 pb-8"
      aria-labelledby="services-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionHeader
          label="Servicios"
          title="Nuestros"
          boldTitle="tratamientos."
          id="services-heading"
        />

        <div className="flex flex-col gap-2">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.07 }}
            >
              <Link to="/booking" search={{ serviceId: service.id }}>
                <ServiceCard service={service} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
