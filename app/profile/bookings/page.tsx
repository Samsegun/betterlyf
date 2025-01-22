// import ReservationList from "@/app/_components/ReservationList";
import BookingList from "@/app/_components/BookingList";
import { getBookings } from "@/app/_lib/data-service";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Page() {
    const session = await auth();
    const bookings = await getBookings(session.userId!);

    return (
        <div>
            <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
                Your bookings
            </h2>

            {bookings.length === 0 ? (
                <p className='text-lg leading-7'>
                    You have no bookings yet. Check out our{" "}
                    <Link
                        className='underline text-accent-500'
                        href='/specialists'>
                        highly rated specialists &rarr;
                    </Link>
                </p>
            ) : (
                <BookingList bookings={bookings} />
            )}
        </div>
    );
}
