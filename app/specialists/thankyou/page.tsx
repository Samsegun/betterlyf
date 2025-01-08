import Link from "next/link";

export default function Page() {
    return (
        <div className='text-center space-y-6 mt-8 md:mt-28'>
            <h1 className='text-2xl md:text-3xl xl:text-4xl font-semibold'>
                Thank you for your booking!
            </h1>
            <Link
                href='/profile/bookings'
                className='underline text-xl md:text-2xl text-accent-500 inline-block'>
                Manage your bookings &rarr;
            </Link>
        </div>
    );
}
