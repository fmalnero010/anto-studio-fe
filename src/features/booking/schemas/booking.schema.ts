import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(80, "El nombre es demasiado largo"),
  email: z.string().email("El email no es válido"),
  phone: z
    .string()
    .min(8, "El teléfono debe tener al menos 8 dígitos")
    .regex(/^[\d\s\+\-\(\)]+$/, "El teléfono solo puede contener números"),
  notes: z.string().max(300, "Las notas no pueden superar los 300 caracteres").optional(),
});

export type BookingSchema = z.infer<typeof bookingSchema>;

/** Available times for the mock date picker */
export const AVAILABLE_TIMES = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
] as const;

export type AvailableTime = (typeof AVAILABLE_TIMES)[number];
