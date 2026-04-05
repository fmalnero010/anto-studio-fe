import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useEffect } from "react";
import { BookingPage } from "@/features/booking";
import { useBookingStore } from "@/features/booking/store/booking.store";

const bookingSearchSchema = z.object({
  serviceId: z.string().optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: bookingSearchSchema,
  component: Booking,
});

function Booking() {
  const { serviceId } = Route.useSearch();
  const { setService, selectedServiceId } = useBookingStore();

  // Pre-select service if coming from landing CTA
  useEffect(() => {
    if (serviceId && !selectedServiceId) {
      setService(serviceId);
    }
  }, [serviceId, selectedServiceId, setService]);

  return <BookingPage />;
}
