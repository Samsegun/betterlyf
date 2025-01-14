"use client";

import { useState } from "react";
import { parseISO } from "date-fns";
import { updateBooking } from "../_lib/actions";
import { EditSelectedDate } from "./EditSelectedDate";
import SubmitButton from "./SubmitButton";

type SelectedData = {
    timeSlot: string;
    purposeOfVisit: string | null;
    selectedDay: string;
};

const transformTime = (hour: number) => {
    const time24Hour = `${String(hour).padStart(2, "0")}:00:00`; // "09:00:00", "17:00:00"

    const displayTime = `${hour <= 12 ? hour : hour - 12} ${
        hour < 12 ? "AM" : "PM"
    }`;

    return { time24Hour, displayTime };
};

export function EditBookingForm({
    bookingId,
    selectedData,
}: {
    bookingId: number;
    selectedData: SelectedData;
}) {
    const [editedDate, setEditedDate] = useState<Date | undefined>(
        parseISO(selectedData.selectedDay)
    );
    const { timeSlot, purposeOfVisit } = selectedData;

    const updateBookingnWithId = updateBooking.bind(
        null,
        bookingId,
        editedDate
    );

    // const handleSubmit = async (formData: FormData) => {
    //     // try {
    //     const result = await updateBookingnWithId(formData);

    //     // console.log(result);
    //     // if (!result.success) {
    //     //     setError(result.error?.message);
    //     //     return;
    //     // }
    //     // // Only reset if booking was successful
    //     // setError(null);
    //     // resetAppointmentDay();

    //     // router.push("/specialists/thankyou");
    //     // } catch (err) {
    //     //     setError(
    //     //         err instanceof Error ? err.message : "Something went wrong"
    //     //     );
    //     // }
    // };

    return (
        <div className='rounded-lg shadow-2xl'>
            <EditSelectedDate
                editedDate={editedDate}
                setEditedDate={setEditedDate}
            />

            <form
                action={(formData: FormData) => updateBookingnWithId(formData)}
                className='py-8 px-6 md:px-12 text-lg flex gap-6 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='timeSlot'>Edit selected Time</label>
                    <select
                        name='timeSlot'
                        id='timeSlot'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        required
                        defaultValue={timeSlot}>
                        <option value='' key=''>
                            Select time slot...
                        </option>
                        {Array.from({ length: 9 }, (_, i) => i + 9).map(
                            hour => {
                                const { displayTime, time24Hour } =
                                    transformTime(hour);

                                return (
                                    <option value={time24Hour} key={hour}>
                                        {displayTime}
                                    </option>
                                );
                            }
                        )}
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor='purpose'>Edit purpose of Visit?</label>
                    <textarea
                        name='purposeOfVisit'
                        id='purpose'
                        defaultValue={purposeOfVisit ?? ""}
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        placeholder='Anything your doctor should know before hand?'
                    />
                </div>

                {/* <input type='hidden' value={bookingId} name='bookingId' /> */}

                <div className='flex justify-end items-center gap-6'>
                    <SubmitButton pendingLabel={"Updating..."}>
                        Update booking
                    </SubmitButton>
                </div>
            </form>
        </div>
    );
}
