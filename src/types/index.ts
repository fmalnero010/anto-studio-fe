/** Accent color variant used across service cards */
export type AccentVariant = "rose" | "ink";

/** A bookable service offered by the studio */
export interface Service {
  id: string;
  tag: string;
  name: string;
  description: string;
  durationMin: number;
  durationMax: number;
  priceFrom: number;
  accent: AccentVariant;
}

/** A customer testimonial / review */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

/** A step in the "How it works" section */
export interface Step {
  number: string;
  title: string;
  description: string;
}

/** Booking flow state */
export interface BookingState {
  selectedServiceId: string | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
}

/** Booking form values validated by Zod */
export interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
