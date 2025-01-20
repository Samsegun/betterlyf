import { Suspense } from "react";
import { SpecialistFilter } from "../_types";
import Pagination from "./Pagination";
import SpecialistsTable from "./SpecialistsTable";
import { CardsSkeleton } from "./Skeletons";
import { getSpecialitsPages } from "../_lib/data-service";

async function SpecialistList({
    filter,
    currentPage,
}: {
    filter: SpecialistFilter;
    currentPage: number;
}) {
    const totalPages = await getSpecialitsPages(filter);

    return (
        <>
            <Suspense key={filter + currentPage} fallback={<CardsSkeleton />}>
                <div className='px-2 md:px-0 grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-14'>
                    <SpecialistsTable
                        filter={filter}
                        currentPage={currentPage}
                    />
                </div>

                <div className='mt-12 flex w-full justify-center text-lg'>
                    <Pagination totalPages={totalPages} />
                </div>
            </Suspense>
        </>
    );
}

export default SpecialistList;
