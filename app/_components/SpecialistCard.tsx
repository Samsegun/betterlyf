import Image from "next/image";
import Link from "next/link";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { SpecialistType } from "../_types";
import dent from "@/public/specialists/dent2.jpg";

interface SpecialistCardProps {
    specialist: SpecialistType;
}

function SpecialistCard({ specialist }: SpecialistCardProps) {
    const {
        id,
        fullName,
        // profilePictureUrl,
        specialization,
    } = specialist;

    return (
        /* second iteration*/
        <div className='card sm:card-side bg-[#24385c] shadow-xl'>
            <figure className='relative h-64 md:h-auto md:w-1/3 '>
                <Image
                    src={dent}
                    fill
                    alt={`dr. ${fullName}`}
                    className='object-cover object-center border-white sm:border-r'
                />
            </figure>

            {/* Content */}
            <div className='card-body gap-4 p-3 xl:p-4'>
                <div>
                    {/* Full Name */}
                    <h3 className='card-title capitalize font-semibold text-2xl mb-3'>
                        Dr. {fullName}
                    </h3>

                    {/* Specialization */}
                    <div className='flex gap-3 items-center mb-2'>
                        <AcademicCapIcon className='h-5 w-5' />
                        <p className='text-lg flex items-center flex-wrap gap-1'>
                            Specialization:{" "}
                            <span className='font-bold text-base capitalize'>
                                {specialization}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className='card-actions justify-end text-[#ffb47e] lg:hover:text-gray-300'>
                    <Link
                        href={`/specialists/${id}`}
                        className='block transition-all'>
                        Details & Booking &rarr;
                    </Link>
                </div>
            </div>
        </div>

        /* first iteration*/
        // <div className='flex flex-col min-h-[36rem] md:min-h-fit md:flex-row border border-white'>
        //     {/* Profile Picture */}
        //     <div className='relative basis-9/12 md:flex-1'>
        //         <Image
        //             src={dent}
        //             fill
        //             alt={`dr. ${fullName}`}
        //             className='object-cover border-b border-white sm:border-b-0 sm:border-r'
        //         />
        //     </div>

        //     {/* Content */}
        //     <div className='flex flex-col flex-grow'>
        //         <div className='pt-5 pb-4 px-7 border-b border-white sm:border-b-0'>
        //             {/* Full Name */}
        //             <h3 className='text-[#ffb47e] capitalize font-semibold text-2xl mb-3'>
        //                 Dr. {fullName}
        //             </h3>

        //             {/* Specialization */}
        //             <div className='flex gap-3 items-center mb-2'>
        //                 <AcademicCapIcon className='h-5 w-5' />
        //                 <p className='text-lg'>
        //                     Specialization:{" "}
        //                     <span className='font-bold capitalize'>
        //                         {specialization}
        //                     </span>
        //                 </p>
        //             </div>
        //         </div>

        //         {/* Footer */}
        //         <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
        //             <Link
        //                 href={`/specialists/${id}`}
        //                 className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'>
        //                 Details & Booking &rarr;
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    );
}

export default SpecialistCard;
