import Link from "next/link";

function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            <h1 className='text-3xl font-semibold'>
                This Specialist could not be found :(
            </h1>

            <Link href='/specialists' className='flex justify-center'>
                <button className='bg-primary-blue px-4 py-3 md:px-8 md:py-6 text-white text-lg font-medium hover:bg-primary-lightBlue transition-all'>
                    &larr; Back to all specialists
                </button>
            </Link>
        </main>
    );
}

export default NotFound;
