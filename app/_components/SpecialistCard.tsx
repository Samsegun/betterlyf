import Image from "next/image";
import Link from "next/link";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { SpecialistType } from "../_types";

interface SpecialistCardProps {
    specialist: SpecialistType;
}

function SpecialistCard({ specialist }: SpecialistCardProps) {
    const { id, fullName, imageUrl, specialization } = specialist;

    return (
        <div className='card overflow-hidden bg-[#24385c] shadow-xl sm:flex sm:flex-row'>
            {/* Image Container */}
            <figure
                className='relative h-48 sm:h-auto sm:w-1/3 
            min-h-[250px] md:min-h-[200px]'>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        fill
                        alt={`dr. ${fullName}`}
                        className='object-cover'
                        sizes='(max-width: 640px) 100vw, 33vw'
                        priority
                    />
                )}
            </figure>

            {/* Content */}
            <div className='card-body flex flex-col gap-4 p-4 sm:w-2/3'>
                <div>
                    {/* Full Name */}
                    <h3 className='card-title capitalize font-semibold text-xl sm:text-2xl mb-2 sm:mb-3'>
                        Dr. {fullName}
                    </h3>

                    {/* Specialization */}
                    <div className='flex gap-2 sm:gap-3 items-center mb-2'>
                        <AcademicCapIcon className='h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0' />
                        <p className='text-base sm:text-lg flex items-center flex-wrap gap-1'>
                            Specialization:{" "}
                            <span className='font-bold text-sm sm:text-base capitalize'>
                                {specialization}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className='card-actions mt-auto justify-end text-[#ffb47e]'>
                    <Link
                        href={`/specialists/${id}`}
                        className='block transition-all hover:text-gray-300'>
                        Details & Booking &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SpecialistCard;
