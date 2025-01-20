import { Metadata } from "next";
import { SpecialistFilter } from "../_types";
import FilteredSpecialists from "../_components/FilteredSpecialists";

export const metadata: Metadata = {
    title: `Find a Specialist`,
    description: `we connect you with experienced
                            healthcare professionals across various specialties
                            to ensure you receive the care you deserve. whether
                            you're looking for a general check-up or
                            specialized medical attention, our trusted experts
                            are here to help.`,
};

async function Page({
    searchParams,
}: {
    searchParams?: Promise<{ specialists?: SpecialistFilter; page: number }>;
}) {
    const entries = await searchParams;
    const filter = entries?.specialists ?? "all";
    const currentPage = Number(entries?.page) || 1;

    return (
        <div>
            <div className='py-8 mx-auto max-w-6xl'>
                <section>
                    <article>
                        <h1 className='font-medium text-3xl md:text-5xl'>
                            Find the Right Specialist for Your Needs
                        </h1>

                        <p className='my-4 md:text-lg lg:text-xl leading-8 lg:leading-9'>
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
                    <FilteredSpecialists
                        filter={filter}
                        currentPage={currentPage}
                    />
                </section>
            </div>
        </div>
    );
}

export default Page;
