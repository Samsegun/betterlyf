// import {useActionState} from 'react'

import { Metadata } from "next";
import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking } from "@/app/_lib/data-service";
import { EditSelectedDate } from "@/app/_components/EditSelectedDate";

export const metadata: Metadata = {
    title: "Edit your booking",
};

const transformTime = (hour: number) => {
    const time24Hour = `${String(hour).padStart(2, "0")}:00:00`; // "09:00:00", "17:00:00"

    const displayTime = `${hour <= 12 ? hour : hour - 12} ${
        hour < 12 ? "AM" : "PM"
    }`;

    return { time24Hour, displayTime };
};

export default async function Page(props: {
    params: Promise<{ bookingId: number }>;
}) {
    const params = await props.params;
    const { id, timeSlot, purposeOfVisit } = await getBooking(params.bookingId);

    // console.log(booking.timeSlot);

    // const updateReservationWithId = updateReservation.bind(null, bookingId);
    // const [state, formAction] = useActionState(
    //     updateInvoiceWithId,
    //     initialState
    // );

    // CHANGE
    // const bookingId = 23;
    // const maxCapacity = 23;

    return (
        <div>
            <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
                Edit Booking #{id}
            </h2>

            <div>
                <EditSelectedDate />

                <form
                    action={updateBooking}
                    className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'>
                    <div className='space-y-2'>
                        <label htmlFor='timeSlot'>Select Time</label>
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
                        <label htmlFor='purpose'>Purpose of Visit?</label>
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
                            Update reservation
                        </SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
