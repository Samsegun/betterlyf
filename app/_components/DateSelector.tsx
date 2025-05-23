"use client";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBooking } from "./BookingContext";
import { SpecialistType } from "../_types";
import { ResetDateButton } from "./ResetDateButton";
import { formatCurrency } from "../_utils/helpers";

function DateSelector({ specialist }: { specialist: SpecialistType }) {
    const { appointmentDay, handleDateSelection } = useBooking();

    const today = new Date();
    const isWeekend = (date: Date) => {
        const day = date.getDay();
        return day === 0; // Sunday
    };

    const handleSelect = (selected: Date | undefined) => {
        handleDateSelection(selected);
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
                            {formatCurrency(specialist.price)}
                        </span>

                        <span className=''>/booking</span>
                    </p>
                </div>

                {appointmentDay && <ResetDateButton />}
            </div>
        </div>
    );
}

export default DateSelector;
