import { Fragment } from "react";

import {
    CalendarDateRangeIcon,
    PhoneIcon,
    PlusCircleIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

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
        icon: <PlusCircleIcon className=' text-primary-blue' />,
        title: "Get Services",
        description:
            "Receive personalized healthcare services tailored towards your needs.",
    },
];

function PreviousSections() {
    return (
        <div>
            <section>
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
                        {userFlow.map(flow => (
                            <Fragment key={flow.title}>
                                <span
                                    className='flex items-center justify-center p-2 w-20 h-20 md:w-16
         md:h-16 rounded-lg shadow-3xl'>
                                    {flow.icon}
                                </span>

                                <h3 className='my-3 text-xl font-medium'>
                                    {flow.title}
                                </h3>

                                <p>{flow.description}</p>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PreviousSections;
