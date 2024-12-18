"use client";

import Link from "next/link";

import { differenceInDays } from "date-fns";
import { useBooking } from "./BookingContext";
// import { createReservation } from "../_lib/actions";
// import SubmitButton from "./SubmitButton";
import { SpecialistType } from "../_types";

function BookingForm({ specialist }: { specialist: SpecialistType }) {
    const { range, resetRange } = useBooking();

    // CHANGE
    // const { maxCapacity, regularPrice, discount, id } = specialist;
    const { id } = specialist;

    const startDate = range.from;
    const endDate = range.to;

    // const numNights = differenceInDays(endDate, startDate);
    // const cabinPrice = numNights * (regularPrice - discount);

    // const bookingData = {
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

                {/* <div className='flex gap-4 items-center'>
                    <img
                        // Important to display google profile images
                        referrerPolicy='no-referrer'
                        className='h-8 rounded-full'
                        src={user.image}
                        alt={user.name}
                    />
                    <p>{user.name}</p>
                </div> */}
                <div className='flex gap-4 items-center'>
                    <div className='bg-gray-300 h-8 w-8 rounded-full'></div>
                    <p>tayo</p>
                </div>
            </div>

            <form
                // action={async formData => {
                //     await createBookingWithData(formData);
                //     resetRange();
                // }}
                className='py-10 px-8 lg:px-16 text-lg flex gap-5 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='numGuests'>Select Time</label>
                    <select
                        name='timeSlot'
                        id='timeSlot'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        required>
                        <option value='' key=''>
                            Select number of guests...
                        </option>
                        {Array.from({ length: 2 }, (_, i) => i + 1).map(x => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor='medicalHistory'>Any Medical History?</label>
                    <textarea
                        name='medicalHistory'
                        id='medicalHistory'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        placeholder='Medical history?'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    <button
                        className='bg-primary-blue px-4 py-3 md:px-8 md:py-4 text-white text-lg font-medium
             hover:bg-primary-lightBlue transition-all rounded-md hover:cursor-pointer'
                        disabled>
                        Submit
                    </button>
                </div>
                {/* 
                <div className='flex justify-end items-center gap-6'>
                    {!(startDate && endDate) ? (
                        <p className='text-primary-300 text-base'>
                            Start by selecting dates
                        </p>
                    ) : (
                        <SubmitButton pendingLabel='Reserving...'>
                            Reserve now
                        </SubmitButton>
                    )}
                </div> */}
            </form>
        </div>
    );
}

export default BookingForm;
