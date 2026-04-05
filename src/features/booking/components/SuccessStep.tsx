import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button, Typography } from "@/components/ui";
import { useBookingStore } from "../store/booking.store";
import { SERVICES } from "@/lib/constants";
import { APP_NAME } from "@/lib/constants";

export function SuccessStep() {
  const { selectedServiceId, selectedDate, selectedTime, reset } =
    useBookingStore();

  const service = SERVICES.find((s) => s.id === selectedServiceId);
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center text-center pt-6 pb-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 18 }}
      >
        <CheckCircle
          size={52}
          strokeWidth={1.25}
          className="text-rose mb-4"
        />
      </motion.div>

      <Typography variant="h2" className="mb-1">
        ¡Reserva confirmada!
      </Typography>
      <Typography variant="body" className="mb-5 max-w-[16rem]">
        Te esperamos en {APP_NAME} Studio.
      </Typography>

      {/* Summary card */}
      <div className="w-full bg-linen border border-divider rounded-sm p-4 text-left mb-6">
        <Typography variant="label" className="block mb-2">
          Tu turno
        </Typography>
        <Typography variant="h3" className="text-sm mb-0.5">
          {service?.name}
        </Typography>
        <Typography variant="caption" className="capitalize">
          {formattedDate} · {selectedTime}hs
        </Typography>
      </div>

      <Typography variant="caption" className="text-stone mb-6 max-w-[15rem]">
        Te enviaremos un recordatorio por email antes del turno.
      </Typography>

      <Button variant="ghost" size="md" fullWidth asChild>
        <Link to="/" onClick={reset}>
          Volver al inicio
        </Link>
      </Button>
    </motion.div>
  );
}
