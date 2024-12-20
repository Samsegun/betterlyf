import Link from "next/link";
import SignIn from "./_components/SignIn";

export default function Page() {
    return (
        <div className='mt-24 lg:mt-48 flex flex-col items-center justify-center'>
            <section className='relative z-0 text-center'>
                <div className='mb-5 md:mb-10'>
                    <h1
                        className='font-medium text-4xl text-center md:text-6xl
             text-white tracking-tight leading-10'>
                        Welcome to BetterLyf
                    </h1>

                    <p className='mt-4 mb-8 md:text-xl tracking-wide italic'>
                        ...book your doctor appoinment online.
                    </p>
                </div>

                <button
                    className='w-1/2 bg-primary-blue text-white text-lg lg:text-xl font-medium
             hover:bg-primary-lightBlue transition-all rounded-lg'>
                    <Link
                        href='/specialists'
                        className='block w-full px-4 py-3 md:px-8 md:py-6'>
                        Book Now!
                    </Link>
                </button>

                <SignIn />
            </section>
        </div>
    );
}
