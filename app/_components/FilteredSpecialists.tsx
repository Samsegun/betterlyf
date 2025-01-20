import Filter from "./Filter";
import SpecialistList from "./SpecialistList";
import { SpecialistFilter } from "../_types";

async function FilteredSpecialists({
    filter,
    currentPage,
}: {
    filter: SpecialistFilter;
    currentPage: number;
}) {
    return (
        <>
            <div className='flex justify-end mb-10 lg:mb-12'>
                <Filter />
            </div>

            <SpecialistList filter={filter} currentPage={currentPage} />
        </>
    );
}

export default FilteredSpecialists;
