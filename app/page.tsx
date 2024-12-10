import {
    CalendarDateRangeIcon,
    PhoneIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

import Header from "./_components/Header";

const userFlow = [
    {
        icon: <UserCircleIcon className=' text-primary-blue' />,
        title: "Find A Doctor",
        description:
            "Discover skilled doctors based on specialization and location.",
    },
    {
        icon: <CalendarDateRangeIcon className=' text-primary-blue' />,
        title: "Book Appoinment",
        description: "Effortlessly book appointments at your convenience.",
    },
    {
        icon: <UserCircleIcon className=' text-primary-blue' />,
        title: "Get Services",
        description:
            "Receive personalized healthcare services tailored towards your needs.",
    },
];

export default function Home() {
    return (
        <div>
            <Header />

            <main className=''>
                <section className='border border-b-2'>
                    <h1 className='font-medium text-3xl'>
                        Book Your Doctor Appointment Online.
                    </h1>

                    <p className='capitalize'>
                        A healthier tomorrow starts today. Schedule your
                        appointment. your wellness, our expertise: set up your
                        appointment today.
                    </p>

                    <div>
                        <button>book an appointment</button>
                        <button className='flex'>
                            <PhoneIcon className='h-10 w-10 text-primary-blue' />{" "}
                            Call now
                        </button>
                    </div>
                </section>

                <section>
                    <h2 className='capitalize font-medium text-2xl'>
                        how it works!
                    </h2>

                    <p>
                        Discover, book and experiene personalized healthcare
                        effortlessly with our user-friendly Doctor Appointment
                        Website.
                    </p>

                    <div className='flex justify-center'>
                        <div>
                            <span
                                className='flex items-center justify-center p-2 w-20 h-20 md:w-16
                         md:h-16 rounded-lg shadow-2xl'>
                                <UserCircleIcon className=' text-primary-blue' />
                            </span>

                            <h3 className='my-3 text-xl font-medium'>
                                Find A Doctor
                            </h3>

                            <p>
                                Discover skilled doctors based on specialization
                                and location.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
