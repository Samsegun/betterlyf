"use client";

import { useOptimistic } from "react";
import { deleteBooking } from "../_lib/actions";
import { BookingsType } from "../_types";
import BookingCard from "./BookingCard";

function BookingList({ bookings }: { bookings: BookingsType[] }) {
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (currBookings, bookingId) => {
            return currBookings.filter(booking => booking.id !== bookingId);
        }
    );

    async function handleDelete(bookingId: number) {
        optimisticDelete(bookingId);

        try {
            await deleteBooking(bookingId);
        } catch (error) {
            console.error(
                "Failed to delete: delete action rolled back" + error
            );
        }
    }

    return (
        <ul className='space-y-6'>
            {optimisticBookings.map(booking => (
                <BookingCard
                    onDelete={handleDelete}
                    booking={booking}
                    key={booking.id}
                />
            ))}
        </ul>
    );
}

export default BookingList;
