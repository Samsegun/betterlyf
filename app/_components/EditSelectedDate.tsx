"use client";

import { DayPicker } from "react-day-picker";
import { useBooking } from "./BookingContext";

export function EditSelectedDate() {
    const { appointmentDay, setAppointmentDay, resetAppointmentDay } =
        useBooking();

    const today = new Date();
    const isWeekend = (date: Date) => {
        const day = date.getDay();
        return day === 0; // Sunday or Saturday
    };

    const handleSelect = (selected: Date | undefined) => {
        setAppointmentDay(selected);
    };

    return (
        <div className='w-72 mx-auto'>
            <DayPicker
                className=''
                mode='single'
                selected={appointmentDay}
                onSelect={handleSelect}
                showOutsideDays
                modifiersClassNames={{
                    selected: "my-selected",
                    today: "my-today",
                }}
                disabled={[
                    { before: today }, // Disable past dates
                    isWeekend, // Disable weekends
                ]}
            />
        </div>
    );
}
