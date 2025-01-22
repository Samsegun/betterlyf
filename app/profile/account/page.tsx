import { auth } from "@clerk/nextjs/server";
import { EditProfileForm } from "@/app/_components/EditProfileForm";
import { getPatient } from "@/app/_lib/data-service";
import Link from "next/link";

export default async function Page() {
    const { userId } = await auth();
    const patient = await getPatient(userId!);

    return (
        <div>
            <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
                Edit Profile
            </h2>

            {patient ? (
                <EditProfileForm patient={patient} />
            ) : (
                <p className='text-lg leading-7'>
                    You have no Profile yet. Book now with one of our{" "}
                    <Link
                        className='underline text-accent-500'
                        href='/specialists'>
                        highly rated specialists{"  "}
                    </Link>
                    to create a profile.
                </p>
            )}
        </div>
    );
}
