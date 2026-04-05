import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography, Divider } from "@/components/ui";
import { bookingSchema, type BookingSchema } from "../schemas/booking.schema";
import { useBookingStore } from "../store/booking.store";
import { SERVICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
] as const;

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-stone">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-[0.625rem] text-rose mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = cn(
  "w-full h-11 px-3 border border-divider rounded-sm bg-white",
  "text-sm font-light text-ink placeholder:text-stone/60",
  "focus:outline-none focus:border-ink transition-colors",
  "invalid:border-rose",
);

export function ConfirmStep() {
  const { selectedServiceId, selectedDate, selectedTime, setStep, reset } =
    useBookingStore();

  const service = SERVICES.find((s) => s.id === selectedServiceId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (_data: BookingSchema) => {
    // Simulate API call — replace with real endpoint later
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStep("success");
  };

  const formattedDate = selectedDate
    ? `${selectedDate.getDate()} de ${MONTHS[selectedDate.getMonth()]}`
    : "";

  return (
    <div>
      <Typography variant="h2" className="mb-1">
        Confirmá tu turno
      </Typography>
      <Typography variant="body-sm" className="mb-5">
        Completá tus datos para finalizar la reserva.
      </Typography>

      {/* Booking summary */}
      <div className="bg-linen border border-divider rounded-sm p-4 mb-5">
        <Typography variant="label" className="block mb-2">
          Resumen
        </Typography>
        <div className="flex justify-between items-start">
          <div>
            <Typography variant="h3" className="text-sm">
              {service?.name}
            </Typography>
            <Typography variant="caption" className="text-stone">
              {formattedDate} · {selectedTime}hs
            </Typography>
          </div>
          {service && (
            <Typography variant="caption" className="font-semibold text-rose">
              Desde {formatPrice(service.priceFrom)}
            </Typography>
          )}
        </div>
      </div>

      <Divider className="mb-5" />

      {/* Form */}
      <form
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
        noValidate
        className="flex flex-col gap-4"
      >
        <Field label="Nombre completo" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            className={inputClass}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field label="Teléfono" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+54 11 0000 0000"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Notas (opcional)" error={errors.notes?.message}>
          <textarea
            {...register("notes")}
            placeholder="Alguna indicación especial..."
            rows={3}
            className={cn(inputClass, "h-auto py-2.5 resize-none")}
          />
        </Field>

        <div className="flex gap-2 pt-1">
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={() => { setStep("datetime"); }}
          >
            Atrás
          </Button>
          <Button
            type="submit"
            variant="rose"
            size="md"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? "Reservando..." : "Confirmar reserva"}
          </Button>
        </div>

        <button
          type="button"
          onClick={reset}
          className="text-[0.625rem] text-stone underline underline-offset-2 text-center"
        >
          Cancelar y volver al inicio
        </button>
      </form>
    </div>
  );
}
