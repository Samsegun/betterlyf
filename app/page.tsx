"use client";

import Link from "next/link";
import { useLoggedInUser } from "./_components/UserContext";

export default function Page() {
    const { user } = useLoggedInUser();
    const name = user?.fullName ? `, ${user.fullName.split(" ")[0]}` : "";

    return (
        <div className='mt-24 lg:mt-48 flex flex-col items-center justify-center'>
            <section className='relative z-0 text-center'>
                <div className='mb-5 md:mb-7 xl:mb-10'>
                    <h1
                        className='font-medium text-3xl text-center md:text-4xl lg:text-6xl
             text-white tracking-tight leading-normal'>
                        Welcome to BetterLyf
                        <span className='capitalize'>{name ?? ""}</span>
                    </h1>

                    <p className='mt-4 mb-8 text-sm md:text-base lg:text-xl tracking-wide italic'>
                        ...book your doctor appoinment online.
                    </p>
                </div>

                <button
                    className='w-1/2 bg-primary-blue text-white text-lg lg:text-xl font-medium
             hover:bg-primary-lightBlue transition-all rounded-lg'>
                    <Link
                        href='/specialists'
                        className='block w-full px-4 py-3 md:px-8 md:py-6 xl:px-4'>
                        Book Now!
                    </Link>
                </button>
            </section>
        </div>
    );
}
