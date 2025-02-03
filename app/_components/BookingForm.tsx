"use client";

import { useState } from "react";
import { useBooking } from "./BookingContext";
import { SpecialistType } from "../_types";
import SubmitButton from "./SubmitButton";
import { createBooking } from "../_lib/actions";
import { useLoggedInUser } from "./UserContext";
import { useRouter } from "next/navigation";

function BookingForm({ specialist }: { specialist: SpecialistType }) {
    const [error, setError] = useState<string | undefined | null>(null);
    const { user } = useLoggedInUser();
    const { appointmentDay, resetAppointmentDay } = useBooking();
    const router = useRouter();

    const bookingData = {
        patientId: user?.clerkId, // userId comes from Clerk
        specialistId: specialist.id, // Pass the ID of the selected specialist
        appointmentDate: appointmentDay,
    };

    const createBookingWithData = createBooking.bind(null, bookingData);

    const handleSubmit = async (formData: FormData) => {
        try {
            const result = await createBookingWithData(formData);

            if (!result.success) {
                setError(result.error?.message);
                return;
            }
            // Only reset if booking was successful
            setError(null);
            resetAppointmentDay();

            router.push("/specialists/thankyou");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Something went wrong"
            );
        }
    };

    return (
        <div className='border-t-2 mt-8 lg:mt-0 lg:border-t-0 grid scale-[1.01]'>
            <div className='px-8 lg:px-16 py-2 flex flex-wrap gap-2 justify-between items-center'>
                <p>Logged in as</p>

                <div className='flex gap-2 md:gap-4 items-center'>
                    <img
                        // Important to display google profile images
                        referrerPolicy='no-referrer'
                        className='h-8 rounded-full'
                        src={user?.imageUrl ?? undefined}
                        alt={user?.fullName ?? undefined}
                    />
                    <p>{user?.fullName || user?.email}</p>
                </div>
            </div>

            <form
                action={handleSubmit}
                className='py-10 px-6 md:px-8 lg:px-16 md:text-lg flex gap-5 flex-col'>
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
                        type='email'
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        required
                        readOnly
                        defaultValue={user?.email || ""}
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
                        {Array.from({ length: 9 }, (_, i) => i + 9).map(
                            hour => {
                                const time24Hour = `${String(hour).padStart(
                                    2,
                                    "0"
                                )}:00:00`; // "09:00:00", "17:00:00"
                                const displayTime = `${
                                    hour <= 12 ? hour : hour - 12
                                } ${hour < 12 ? "AM" : "PM"}`;
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
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input
                        name='phoneNumber'
                        id='phoneNumber'
                        required
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
                        placeholder='Enter phone number'
                    />
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

                {error && (
                    <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'>
                        {error}
                    </div>
                )}

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
