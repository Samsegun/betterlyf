import Link from "next/link";

export default function Home() {
    return (
        <div className='mt-24 lg:mt-48 flex flex-col items-center justify-center'>
            {/* <Image
                src={bg}
                fill
                placeholder='blur'
                quality={80}
                className='object-cover object-top blur-sm 2xl:blur-md z-0'
                alt='a team of health professionals'
            /> */}

            <section className='relative z-0 text-center'>
                <h1
                    className='font-medium text-3xl text-center md:text-6xl
             text-white mb-5 md:mb-10 tracking-tight leading-9'>
                    Book Your Doctor <br /> Appointment Online.
                </h1>

                <button
                    className='bg-primary-blue px-4 py-3 md:px-8 md:py-6 text-white text-lg font-medium
             hover:bg-primary-lightBlue transition-all'>
                    <Link href='/'>Explore Premium Services</Link>
                </button>
            </section>
        </div>
    );
}
