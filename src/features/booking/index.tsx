import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useBookingStore, type BookingStep } from "./store/booking.store";
import { ServiceStep } from "./components/ServiceStep";
import { DateTimeStep } from "./components/DateTimeStep";
import { ConfirmStep } from "./components/ConfirmStep";
import { SuccessStep } from "./components/SuccessStep";
import { APP_NAME } from "@/lib/constants";

const STEPS: { key: BookingStep; label: string }[] = [
  { key: "service", label: "Servicio" },
  { key: "datetime", label: "Fecha" },
  { key: "confirm", label: "Datos" },
];

const STEP_CONTENT: Record<BookingStep, React.ReactNode> = {
  service: <ServiceStep />,
  datetime: <DateTimeStep />,
  confirm: <ConfirmStep />,
  success: <SuccessStep />,
};

export function BookingPage() {
  const { step } = useBookingStore();
  const isSuccess = step === "success";
  const currentIndex = STEPS.findIndex((s) => s.key === step);

  return (
    <div className="min-h-[100dvh] bg-linen flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 h-[64px] border-b border-divider bg-linen">
        {isSuccess ? (
          <div />
        ) : (
          <Link
            to="/"
            className="flex items-center gap-1.5 text-ink-secondary hover:text-ink transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span className="text-xs font-light tracking-wide">{APP_NAME}</span>
          </Link>
        )}

        <span className="text-[0.5625rem] font-medium tracking-[0.2em] uppercase text-stone">
          Reservar turno
        </span>

        <div className="w-12" aria-hidden />
      </header>

      {/* Step progress — hidden on success */}
      {!isSuccess && (
        <div className="px-5 pt-5 pb-0">
          <div className="flex items-center gap-2 mb-1">
            {STEPS.map((s, i) => (
              <div key={s.key} className="flex items-center gap-2 flex-1">
                <div
                  className={`h-[2px] w-full transition-all duration-300 ${
                    i <= currentIndex ? "bg-rose" : "bg-divider"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {STEPS.map((s, i) => (
              <span
                key={s.key}
                className={`text-[0.5rem] font-medium uppercase tracking-[0.15em] transition-colors ${
                  i <= currentIndex ? "text-rose" : "text-stone/50"
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Step content */}
      <main className="flex-1 px-5 pt-6 pb-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {STEP_CONTENT[step]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
