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
        <div className='flex flex-col md:flex-row border'>
            <div className='relative h-32 aspect-square hidden xl:block'>
                <Image
                    src={dent}
                    alt={`Dr. ${specialists?.fullName}`}
                    fill
                    className='object-cover border-r border-primary-800'
                />
            </div>

            <div className='flex-grow px-3 md:px-6 py-3 flex flex-col'>
                <div className='flex lg:items-center gap-2 justify-between'>
                    <h3 className='text-lg lg:text-xl font-semibold'>
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

                <p className='text-sm lg:text-lg mt-2 lg:mt-0'>
                    {format(new Date(appointmentDate), "EEE, MMM dd yyyy")} (
                    {isToday(new Date(appointmentDate))
                        ? "Today"
                        : formatDistanceFromNow(appointmentDate)}
                    ) @ {time}
                </p>

                <div
                    className='flex xl:gap-5 mt-4 xl:mt-auto items-baseline
                 flex-col md:flex-row md:gap-2 gap-1'>
                    <div className='flex items-center gap-2'>
                        <p className='lg:text-xl font-semibold'>
                            #
                            {new Intl.NumberFormat().format(
                                Number(specialists?.price)
                            )}
                        </p>
                        <p>&bull;</p>
                        <p className='lg:text-lg'>Status: {status}</p>
                    </div>

                    <p className='md:ml-auto text-sm'>
                        Booked{" "}
                        {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
                    </p>
                </div>
            </div>

            {!isPast(appointmentDate) ? (
                <div className='flex md:flex-col border-t md:border-t-0 md:border-l h-16 md:h-auto md:w-[100px] bg-[#36558a]'>
                    <Link
                        href={`/profile/bookings/edit/${bookingId}`}
                        className='flex items-center justify-center md:justify-normal gap-2 uppercase md:text-xs font-bold border-r
                             md:border-r-0 md:border-b flex-grow px-3 transition-colors lg:hover:bg-[#2c4673]'>
                        <PencilSquareIcon className='h-5 w-5 transition-colors' />
                        <span className='mt-1'>Edit</span>
                    </Link>
                    <DeleteBooking onDelete={onDelete} bookingId={bookingId} />
                </div>
            ) : null}
        </div>
    );
}

export default BookingCard;
