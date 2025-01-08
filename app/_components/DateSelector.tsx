"use client";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBooking } from "./BookingContext";
import { SpecialistType } from "../_types";

// function isAlreadyBooked(range, datesArr) {
//     return (
//         range.from &&
//         range.to &&
//         datesArr.some(date =>
//             isWithinInterval(date, { start: range.from, end: range.to })
//         )
//     );
// }

function DateSelector({ specialist }: { specialist: SpecialistType }) {
    const { appointmentDay, setAppointmentDay, resetAppointmentDay } =
        useBooking();

    //
    const today = new Date();
    const isWeekend = (date: Date) => {
        const day = date.getDay();
        return day === 0; // Sunday or Saturday
    };

    const handleSelect = (selected: Date | undefined) => {
        setAppointmentDay(selected);
    };

    return (
        <div className='flex flex-col justify-around'>
            <DayPicker
                className='pt-12 place-self-center'
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
            {appointmentDay && (
                <p className='mt-8 text-sm md:text-lg font-medium text-center tracking-wide italic'>
                    Selected Date:{" "}
                    {format(appointmentDay, "EEEE, MMMM d, yyyy")}
                </p>
            )}

            <div className='my-4 flex flex-col md:flex-row  items-center gap-4 justify-center px-8 py-10 h-[72px]'>
                <div className='flex'>
                    <p className='md:text-2xl'>
                        <span className=''>
                            #
                            {new Intl.NumberFormat().format(
                                Number(specialist.price)
                            )}
                        </span>

                        <span className=''>/booking</span>
                    </p>
                </div>

                {appointmentDay && (
                    <button
                        className='bg-primary-blue px-4 py-3 md:px-8 md:py-4 text-white text-lg font-medium
             hover:bg-primary-lightBlue transition-all rounded-md hover:cursor-pointer'
                        onClick={resetAppointmentDay}>
                        Reset Date
                    </button>
                )}
            </div>
        </div>
    );
}

export default DateSelector;
