import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type BookingStep = "service" | "datetime" | "confirm" | "success";

interface BookingState {
  step: BookingStep;
  selectedServiceId: string | null;
  selectedDate: Date | null;
  selectedTime: string | null;

  // Actions
  setStep: (step: BookingStep) => void;
  setService: (serviceId: string) => void;
  setDateTime: (date: Date, time: string) => void;
  reset: () => void;
}

const initialState = {
  step: "service" as BookingStep,
  selectedServiceId: null,
  selectedDate: null,
  selectedTime: null,
};

export const useBookingStore = create<BookingState>()(
  devtools(
    (set) => ({
      ...initialState,

      setStep: (step) => { set({ step }); },

      setService: (serviceId) => {
        set({ selectedServiceId: serviceId, step: "datetime" });
      },

      setDateTime: (date, time) => {
        set({ selectedDate: date, selectedTime: time, step: "confirm" });
      },

      reset: () => { set(initialState); },
    }),
    { name: "booking-store" },
  ),
);
