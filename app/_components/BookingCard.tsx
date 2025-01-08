import Image from "next/image";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {
    format,
    formatDistance,
    isPast,
    isToday,
    parse,
    parseISO,
} from "date-fns";
import DeleteBooking from "./DeleteBooking";
import { BookingCardProps } from "../_types";
import dent from "@/public/specialists/dent2.jpg";

export const formatDistanceFromNow = (dateStr: string) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    }).replace("about ", "");

function BookingCard({ onDelete, booking }: BookingCardProps) {
    const {
        id: bookingId,
        specialists,
        appointmentDate,
        status,
        created_at,
        timeSlot,
    } = booking;

    const date = parse(timeSlot, "HH:mm:ss", new Date());
    const time = format(date, "h:mm a");

    return (
        <div className='flex border border-primary-800'>
            <div className='relative h-32 aspect-square'>
                <Image
                    src={dent}
                    alt={`Dr. ${specialists?.fullName}`}
                    fill
                    className='object-cover border-r border-primary-800'
                />
            </div>

            <div className='flex-grow px-6 py-3 flex flex-col'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>
                        Booking with Dr.{" "}
                        <span className='capitalize'>
                            {specialists?.fullName}
                        </span>
                    </h3>

                    {isPast(new Date(appointmentDate)) ? (
                        <span className='bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
                            past
                        </span>
                    ) : (
                        <span className='bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
                            upcoming
                        </span>
                    )}
                </div>

                <p className='text-lg text-primary-300'>
                    {format(new Date(appointmentDate), "EEE, MMM dd yyyy")} (
                    {isToday(new Date(appointmentDate))
                        ? "Today"
                        : formatDistanceFromNow(appointmentDate)}
                    ) @ {time}
                </p>

                <div className='flex gap-5 mt-auto items-baseline'>
                    <p className='text-xl font-semibold text-accent-400'>
                        #
                        {new Intl.NumberFormat().format(
                            Number(specialists?.price)
                        )}
                    </p>
                    <p className='text-primary-300'>&bull;</p>
                    <p className='text-lg text-primary-300'>status: {status}</p>
                    <p className='ml-auto text-sm text-primary-400'>
                        Booked{" "}
                        {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
                    </p>
                </div>
            </div>

            <div className='flex flex-col border-l border-primary-800 w-[100px]'>
                {!isPast(appointmentDate) ? (
                    <>
                        <Link
                            href={`/profile/bookings/edit/${bookingId}`}
                            className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
                            <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
                            <span className='mt-1'>Edit</span>
                        </Link>
                        <DeleteBooking
                            onDelete={onDelete}
                            bookingId={bookingId}
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default BookingCard;
