import type { Service, Testimonial, Step } from "@/types";

export const APP_NAME = "AIRE" as const;
export const APP_SUBTITLE = "STUDIO" as const;
export const APP_TAGLINE = "Centro de Estética" as const;

export const SERVICES: Service[] = [
  {
    id: "facial",
    tag: "FACIAL",
    name: "Limpiezas Faciales",
    description:
      "Hidratación profunda, peeling y tratamientos regeneradores personalizados.",
    durationMin: 60,
    durationMax: 90,
    priceFrom: 8000,
    accent: "rose",
  },
  {
    id: "lashes",
    tag: "PESTAÑAS",
    name: "Tratamiento de Pestañas",
    description:
      "Lifting, extensión clásica y volumen ruso. Look natural o dramático.",
    durationMin: 60,
    durationMax: 120,
    priceFrom: 6000,
    accent: "ink",
  },
  {
    id: "nails",
    tag: "MANOS & PIES",
    name: "Manicura & Pedicura",
    description: "Semipermanente, gel y nail art. Acabados impecables.",
    durationMin: 45,
    durationMax: 60,
    priceFrom: 4500,
    accent: "rose",
  },
  {
    id: "makeup",
    tag: "BEAUTY",
    name: "Maquillaje",
    description: "Social, novia y artístico. Cursos personalizados disponibles.",
    durationMin: 90,
    durationMax: 90,
    priceFrom: 10000,
    accent: "ink",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Cada visita es una experiencia. Anto cuida cada detalle. Mi piel nunca estuvo mejor.",
    author: "María González",
    role: "Clienta habitual",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "El mejor lugar para cuidarse. Ambiente increíble y resultados que duran semanas.",
    author: "Sofía Martínez",
    role: "Clienta habitual",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Profesionalismo y calidad en cada servicio. No hay otro lugar donde prefiera ir.",
    author: "Valentina Ruiz",
    role: "Clienta habitual",
    rating: 5,
  },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "01",
    title: "Choose your service",
    description:
      "Browse the catalogue and find the treatment that suits you best.",
  },
  {
    number: "02",
    title: "Pick a date & time",
    description: "Select the date and time that works best for your schedule.",
  },
  {
    number: "03",
    title: "Confirm your booking",
    description:
      "Receive a confirmation and a reminder before your appointment.",
  },
];

export const STATS = [
  { value: "100+", label: "Servicios" },
  { value: "4.9 ★", label: "Valoración" },
  { value: "2 min", label: "Para reservar" },
] as const;
