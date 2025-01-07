import { notFound } from "next/navigation";
import { Suspense } from "react";

import Specialist from "@/app/_components/Specialist";
import Spinner from "@/app/_components/Spinner";
import Booking from "@/app/_components/Booking";
import { BookingProvider } from "@/app/_components/BookingContext";
import { getSpecialist, getSpecialists } from "@/app/_lib/data-service";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const specialist = await getSpecialist(id);

    return {
        title: `Dr. ${specialist?.fullName}`,
        description: `${specialist?.bio}`,
    };
}

// Generate route parameters for dynamic pages at build time.
// This pre-defines the `specialistId` values for Static Site Generation (SSG),
// allowing Next.js to statically generate pages for each specialist.
export async function generateStaticParams() {
    const specialists = await getSpecialists();

    const ids = specialists.map(specialist => ({
        specialistId: String(specialist.id),
    }));

    return ids;
}

async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const specialist = await getSpecialist(params.id);

    if (!specialist) notFound();

    return (
        <div className='py-8'>
            <Specialist specialist={specialist} />

            <div className='mt-20 rounded-lg shadow-2xl'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-accent-400 mb-10'>
                    Book Dr. {specialist.fullName} today.
                </h2>

                {/* <ProfileImageUpload /> */}

                <Suspense fallback={<Spinner />}>
                    <BookingProvider>
                        <Booking specialist={specialist} />
                    </BookingProvider>
                </Suspense>
            </div>
        </div>
    );
}

export default Page;
