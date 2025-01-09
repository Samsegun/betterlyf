"use client";

import { useBooking } from "./BookingContext";

export function ResetDateButton() {
    const { resetAppointmentDay } = useBooking();

    return (
        <button
            className='bg-primary-blue px-4 py-3 md:px-8 md:py-4 text-white text-lg font-medium
hover:bg-primary-lightBlue transition-all rounded-md hover:cursor-pointer'
            onClick={resetAppointmentDay}>
            Reset Date
        </button>
    );
}
