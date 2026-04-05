import { useState } from "react";
import { Button, Typography } from "@/components/ui";
import { AVAILABLE_TIMES } from "../schemas/booking.schema";
import { useBookingStore } from "../store/booking.store";
import { cn } from "@/lib/utils";

/** Returns the next 14 days (excluding Sundays) */
function getAvailableDates(): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let cursor = new Date(today);
  cursor.setDate(cursor.getDate() + 1); // start tomorrow

  while (dates.length < 14) {
    if (cursor.getDay() !== 0) {
      // exclude Sundays
      dates.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] as const;
const MONTHS = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
] as const;

export function DateTimeStep() {
  const { setDateTime, setStep } = useBookingStore();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const availableDates = getAvailableDates();

  const canContinue = selectedDate !== null && selectedTime !== null;

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) return;
    setDateTime(selectedDate, selectedTime);
  };

  return (
    <div>
      <Typography variant="h2" className="mb-1">
        Elegí fecha y hora
      </Typography>
      <Typography variant="body-sm" className="mb-5">
        Seleccioná el día y horario que mejor te quede.
      </Typography>

      {/* Date picker — horizontal scroll */}
      <Typography variant="label" className="block mb-2">
        Fecha
      </Typography>
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 no-scrollbar mb-5">
        {availableDates.map((date) => {
          const isSelected =
            selectedDate?.toDateString() === date.toDateString();
          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => { setSelectedDate(date); }}
              className={cn(
                "flex flex-col items-center flex-shrink-0 w-14 py-2.5 rounded-sm border text-center transition-all",
                isSelected
                  ? "bg-ink border-ink text-ivory"
                  : "bg-white border-divider text-ink hover:border-stone",
              )}
            >
              <span className="text-[0.5625rem] font-light tracking-wide uppercase">
                {DAYS[date.getDay()]}
              </span>
              <span className="text-base font-semibold leading-tight mt-0.5">
                {date.getDate()}
              </span>
              <span className="text-[0.5rem] font-light tracking-wide">
                {MONTHS[date.getMonth()]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Time picker */}
      <Typography variant="label" className="block mb-2">
        Horario
      </Typography>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {AVAILABLE_TIMES.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button
              key={time}
              type="button"
              onClick={() => { setSelectedTime(time); }}
              className={cn(
                "py-2.5 rounded-sm border text-sm font-light tracking-wide transition-all",
                isSelected
                  ? "bg-ink border-ink text-ivory font-medium"
                  : "bg-white border-divider text-ink hover:border-stone",
              )}
            >
              {time}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="md"
          onClick={() => { setStep("service"); }}
        >
          Atrás
        </Button>
        <Button
          variant="primary"
          size="md"
          fullWidth
          disabled={!canContinue}
          onClick={handleContinue}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
