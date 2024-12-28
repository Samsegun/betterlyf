import { Metadata } from "next";
import Filter from "../_components/Filter";
import SpecialistList from "../_components/SpecialistList";
import { SpecialistFilter } from "../_types";
// import { getSpecialists } from "../_lib/data-service";

export const metadata: Metadata = {
    title: `Find a Specialist`,
};

async function Page({
    searchParams,
}: {
    searchParams?: Promise<{ specialists?: SpecialistFilter }>;
}) {
    const entries = await searchParams;
    const filter = entries?.specialists ?? "all";

    // const specialists = await getSpecialists();

    // console.log(specialists);

    return (
        <div>
            <div className='py-8'>
                <section>
                    <article>
                        <h1 className='font-medium text-4xl md:text-5xl'>
                            Find the Right Specialist for Your Needs
                        </h1>

                        <p className='my-4 text-lg lg:text-xl leading-8 lg:leading-9'>
                            At Betterlyf, we connect you with experienced
                            healthcare professionals across various specialties
                            to ensure you receive the care you deserve. Whether
                            you&apos;re looking for a general check-up or
                            specialized medical attention, our trusted experts
                            are here to help. Use the filters below to find and
                            book an appointment with a doctor who meets your
                            specific health needs.
                        </p>
                    </article>
                </section>

                <section className='mt-12'>
                    <div className='flex justify-end mb-10 lg:mb-12'>
                        <Filter />
                    </div>

                    <SpecialistList filter={filter} />
                </section>
            </div>
        </div>
    );
}

export default Page;
