"use client";

interface ErrorProps {
    error: {
        message: string;
    };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        // <section className='flex justify-center items-center flex-col '>
        <section className='mt-24 lg:mt-48 flex flex-col items-center gap-6 justify-center'>
            <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
            <p className='text-lg'>{error.message}</p>

            <button
                className='w-1/2 bg-primary-blue px-4 py-3 md:px-8 md:py-6 text-white text-lg lg:text-xl font-medium
             hover:bg-primary-lightBlue lg:w-fit transition-all rounded-lg'
                onClick={reset}>
                Try again
            </button>
        </section>
    );
}
