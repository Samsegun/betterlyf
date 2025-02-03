"use client";

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const today = new Date();
const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0; // Sunday
};

export function EditSelectedDate({
    editedDate: dateToEdit,
    setEditedDate,
    appointmentDay,
}: {
    editedDate: Date | undefined;
    appointmentDay: Date | undefined;
    setEditedDate: (date: Date | undefined) => void;
}) {
    const handleSelect = (selected: Date | undefined) => {
        setEditedDate(selected);
    };

    return (
        <div>
            <p className='text-lg md:text-2xl py-8 px-12'>Edit selected date</p>

            <div className='w-72 mx-auto'>
                <DayPicker
                    mode='single'
                    selected={appointmentDay ?? dateToEdit}
                    onSelect={handleSelect}
                    showOutsideDays
                    defaultMonth={appointmentDay ?? dateToEdit}
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

            {dateToEdit && (
                <p className='mt-8 text-sm md:text-lg font-medium text-center tracking-wide italic'>
                    Selected Date: {format(dateToEdit, "EEEE, MMMM d, yyyy")}
                </p>
            )}
        </div>
    );
}
