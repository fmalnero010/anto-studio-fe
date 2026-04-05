import { ServiceCard, Typography } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import { useBookingStore } from "../store/booking.store";

export function ServiceStep() {
  const { selectedServiceId, setService } = useBookingStore();

  return (
    <div>
      <Typography variant="h2" className="mb-1">
        Elegí tu servicio
      </Typography>
      <Typography variant="body-sm" className="mb-5">
        Seleccioná el tratamiento que querés reservar.
      </Typography>

      <div className="flex flex-col gap-2">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            selected={selectedServiceId === service.id}
            onClick={() => { setService(service.id); }}
          />
        ))}
      </div>
    </div>
  );
}
