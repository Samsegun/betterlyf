import Image from "next/image";
import { SpecialistType } from "../_types";
import TextExpander from "./TextExpander";
import {
    AcademicCapIcon,
    MapPinIcon,
    StarIcon,
} from "@heroicons/react/24/solid";
import dent from "@/public/specialists/dent2.jpg";

function SpecialistInfo({ specialist }: { specialist: SpecialistType }) {
    const {
        // imageUrl,
        fullName,
        bio,
        specialization,
        location,
        experience: expertiseYears,
    } = specialist;

    return (
        <div className='hero rounded-lg shadow-2xl'>
            <div className='hero-content flex-col lg:flex-row lg:gap-10 xl:gap-16'>
                {/* <figure className='relative h-64'> */}
                <Image
                    src={dent}
                    width={280}
                    height={180}
                    // fill
                    className='rounded-lg shadow-2xl'
                    alt={`${fullName}'s picture`}
                />
                {/* </figure> */}

                <div className='mt-8 lg:mt-0 lg:basis-1/2'>
                    <h1 className='text-2xl lg:text-4xl font-bold mb-2 lg:mb-6 capitalize'>
                        Dr. {fullName}
                    </h1>

                    <ul className='flex flex-col gap-4 lg:gap-6'>
                        <li>
                            <span className='flex md:items-center gap-2 flex-col md:flex-row capitalize'>
                                <AcademicCapIcon className='hidden md:inline-flex h-5 w-5' />
                                <strong>Specialization:</strong>
                                {specialization}
                            </span>
                        </li>
                        <li>
                            <span className='flex md:items-center gap-2 flex-col md:flex-row'>
                                <StarIcon className='hidden md:inline-flex h-5 w-5' />
                                <strong>Experience:</strong> {expertiseYears}{" "}
                                years
                            </span>
                        </li>
                        <li>
                            <span className='flex md:items-center gap-2 flex-col md:flex-row capitalize'>
                                <MapPinIcon className='hidden md:inline-flex h-5 w-5' />
                                <strong>Location:</strong> {location}
                            </span>
                        </li>
                        <li className='text-md italic'>
                            <TextExpander>{`${bio}`}</TextExpander>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SpecialistInfo;
