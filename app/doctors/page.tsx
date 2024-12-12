import Filter from "../_components/Filter";

function Page() {
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
                    <div className='flex justify-end mb-8'>
                        <Filter />
                    </div>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae vero, nulla sit deserunt saepe quis fugiat dolor
                        ipsa. Id, rem.
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
