"use client";

// import Link from "next/link";

import { useUser } from "@clerk/nextjs";
// import { differenceInDays } from "date-fns";
import { useBooking } from "./BookingContext";
// import { createReservation } from "../_lib/actions";
// import SubmitButton from "./SubmitButton";
import { SpecialistType } from "../_types";
import SubmitButton from "./SubmitButton";
import { createBooking } from "../_lib/actions";

function BookingForm({ specialist }: { specialist: SpecialistType }) {
    const { user } = useUser();
    const { appointmentDay, resetAppointmentDay } = useBooking();

    // CHANGE
    // const { maxCapacity, regularPrice, discount, id } = specialist;
    // const { id } = specialist;

    // const bookingData = {
    // patientId: id,

    //     startDate,
    //     endDate,
    //     numNights,
    //     cabinPrice,
    //     cabinId: id,
    // };

    // const createBookingWithData = createReservation.bind(null, bookingData);

    return (
        <div className='border-t-2 mt-8 lg:mt-0 lg:border-t-0 grid scale-[1.01]'>
            <div className='px-8 lg:px-16 py-2 flex justify-between items-center'>
                <p>Logged in as</p>

                <div className='flex gap-4 items-center'>
                    <img
                        // Important to display google profile images
                        referrerPolicy='no-referrer'
                        className='h-8 rounded-full'
                        src={user?.imageUrl ?? undefined}
                        alt={user?.username ?? undefined}
                    />
                    <p>{user?.fullName}</p>
                </div>
            </div>

            <form
                // action={async formData => {
                //     await createBookingWithData(formData);
                //     resetRange();
                // }}
                action={async formData => {
                    await createBooking(formData);
                    resetAppointmentDay();
                }}
                className='py-10 px-8 lg:px-16 text-lg flex gap-5 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        name='fullName'
                        id='fullName'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        required
                        defaultValue={user?.fullName || ""}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email'
                        id='email'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        required
                        defaultValue={
                            user?.emailAddresses[0].emailAddress || ""
                        }
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input
                        name='phoneNumber'
                        id='phoneNumber'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        placeholder='Optional'
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='timeSlot'>Select Time</label>
                    <select
                        name='timeSlot'
                        id='timeSlot'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        required>
                        <option value='' key=''>
                            Select time slot...
                        </option>
                        {Array.from({ length: 9 }, (_, i) => i + 9).map(x => (
                            <option value={x} key={x}>
                                {x <= 12 ? x : x - 12} {x <= 11 ? "AM" : "PM"}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor='purpose'>Purpose of Visit?</label>
                    <textarea
                        name='purposeOfVisit'
                        id='purpose'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        placeholder='Anything your doctor should know before hand?'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    {!appointmentDay ? (
                        <p className='text-xl font-medium tracking-wide italic'>
                            Start by selecting date
                        </p>
                    ) : (
                        <SubmitButton pendingLabel='Booking...'>
                            Book now
                        </SubmitButton>
                    )}
                </div>
            </form>
        </div>
    );
}

export default BookingForm;
