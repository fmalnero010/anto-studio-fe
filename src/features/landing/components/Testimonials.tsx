import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeader, TestimonialCard } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-white pt-12 pb-12 md:pt-20 md:pb-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SectionHeader
            label="Reseñas"
            title="Lo que dicen"
            boldTitle="nuestras clientas."
            id="testimonials-heading"
          />

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                className="border border-divider rounded-sm p-6"
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: scroll snap carousel */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 -mx-5 px-5 pb-1 no-scrollbar"
              aria-label="Testimonials carousel"
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="min-w-full snap-center"
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div
              className="flex gap-2 mt-4"
              role="tablist"
              aria-label="Testimonial pagination"
            >
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    scrollRef.current?.scrollTo({
                      left: i * (scrollRef.current.offsetWidth),
                      behavior: "smooth",
                    });
                  }}
                  className={`rounded-full transition-all duration-200 ${
                    i === activeIndex
                      ? "w-[7px] h-[7px] bg-rose"
                      : "w-[5px] h-[5px] bg-rose-light mt-[1px]"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
