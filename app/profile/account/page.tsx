import { auth } from "@clerk/nextjs/server";
import { EditProfileForm } from "@/app/_components/EditProfileForm";
import { getPatient } from "@/app/_lib/data-service";

export default async function Page() {
    const { userId } = await auth();
    const patient = await getPatient(userId!);

    return (
        <div>
            <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
                Edit Profile
            </h2>

            <EditProfileForm patient={patient} />
        </div>
    );
}
