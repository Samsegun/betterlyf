import Image from "next/image";
import book from "@/public/betterlyf-help.jpg";
import expert from "@/public/betterlyf-help2.jpg";

function Page() {
    return (
        <section className='py-16 mx-auto max-w-6xl space-y-36'>
            <div className='flex flex-col lg:flex-row items-center gap-12'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2'>
                    <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl'>
                        <Image
                            src={book}
                            alt='Chatting with a patient'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </div>

                {/* Text Content Section */}
                <div className='w-full lg:w-1/2 space-y-6'>
                    <h1 className='text-4xl md:text-5xl font-bold tracking-wider'>
                        Empowering You to Live Your Best Life
                    </h1>

                    <div className='space-y-4 leading-7 lg:leading-8'>
                        <p>
                            At BetterLyf, we believe that everyone deserves to
                            live a fulfilling and balanced life. Our mission is
                            to provide the tools, resources, and support you
                            need to achieve your personal wellness goals and
                            create lasting positive change.
                        </p>

                        <p>
                            Founded in 2023, we&apos;ve helped thousands of
                            individuals transform their lives through our
                            holistic approach to wellness. We understand that
                            each person&apos;s journey is unique, which is why
                            we offer personalized solutions that address
                            physical, mental, and emotional well-being.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row items-center gap-12'>
                {/* Text Content Section */}
                <div className='w-full lg:w-1/2 space-y-6'>
                    <h1 className='text-4xl md:text-5xl font-bold tracking-wider'>
                        Empowering Specialists, Elevating Care
                    </h1>

                    <div className='space-y-4 leading-7 lg:leading-8'>
                        <p>
                            Betterlyf isn&apos;t just for patients—it&apos;s
                            also built with specialists in mind. We provide
                            healthcare professionals with a dedicated platform
                            to onboard, manage their services, and focus on
                            delivering exceptional care. From scheduling
                            appointments to managing availability, our system
                            simplifies every step of their journey.
                        </p>

                        <p>
                            Our team of dedicated experts brings together years
                            of experience in wellness coaching, mental health
                            support, and lifestyle optimization. We&apos;re
                            committed to staying at the forefront of wellness
                            innovation while maintaining the human touch that
                            makes our community special.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className='w-full  lg:w-1/2'>
                    <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl'>
                        <Image
                            src={expert}
                            alt='People living better lives'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;
