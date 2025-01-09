// import {useActionState} from 'react'

import { Metadata } from "next";
import { getBooking } from "@/app/_lib/data-service";
import { EditBookingForm } from "@/app/_components/EditBookingForm";

export const metadata: Metadata = {
    title: "Edit your booking",
};

export default async function Page(props: {
    params: Promise<{ bookingId: number }>;
}) {
    const params = await props.params;
    const {
        id,
        timeSlot,
        purposeOfVisit,
        appointmentDate: selectedDay,
    } = await getBooking(params.bookingId);

    return (
        <div>
            <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
                Edit Booking #{id}
            </h2>

            <EditBookingForm
                bookingId={id}
                selectedData={{ timeSlot, purposeOfVisit, selectedDay }}
            />
        </div>
    );
}
