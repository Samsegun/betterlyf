import Image from "next/image";
import { SpecialistType } from "../_types";
import TextExpander from "./TextExpander";
import {
    AcademicCapIcon,
    EnvelopeIcon,
    // MapPinIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

function Specialist({ specialist }: { specialist: SpecialistType }) {
    const {
        profilePictureUrl,
        fullName,
        bio,
        specialization,
        phoneNumber,
        email,
    } = specialist;

    return (
        <div className='hero rounded-lg shadow-2xl'>
            <div className='hero-content flex-col lg:flex-row lg:gap-10 xl:gap-16'>
                <Image
                    src={profilePictureUrl}
                    width={300}
                    height={200}
                    // fill
                    className='rounded-lg shadow-2xl'
                    alt={`${fullName}'s picture`}
                />

                <div className='mt-8 lg:mt-0 lg:basis-1/2'>
                    <h1 className='text-2xl lg:text-4xl font-bold mb-2 lg:mb-6 capitalize'>
                        Dr. {fullName}
                    </h1>

                    <ul className='flex flex-col gap-4 lg:gap-6'>
                        <li>
                            <span className='flex md:items-center gap-2 flex-col md:flex-row capitalize'>
                                <AcademicCapIcon className='h-5 w-5' />
                                <strong>Specialization:</strong>
                                {specialization}
                            </span>
                        </li>
                        <li>
                            <span className='flex md:items-center gap-2 flex-col md:flex-row'>
                                <EnvelopeIcon className='h-5 w-5' />
                                <strong>Email:</strong> {email}
                            </span>
                        </li>
                        <li>
                            <span className='flex md:items-center gap-2 flex-col md:flex-row capitalize'>
                                <UsersIcon className='h-5 w-5' />
                                <strong>Phone:</strong> {phoneNumber}
                            </span>
                        </li>
                        <li className='text-md italic'>
                            <TextExpander>{`${bio} Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum inventore vitae molestias iste architecto voluptatibus possimus laudantium placeat laborum, delectus est fugiat earum hic porro iure itaque. Quod dolorum explicabo accusantium corrupti maxime, rem officiis, molestias maiores ut quae voluptatibus?`}</TextExpander>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Specialist;
