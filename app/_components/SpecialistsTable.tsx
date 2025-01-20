import { getFilteredSpecialists } from "../_lib/data-service";
import { SpecialistFilter } from "../_types";
import SpecialistCard from "./SpecialistCard";

async function SpecialistsTable({
    filter,
    currentPage,
}: {
    filter: SpecialistFilter;
    currentPage: number;
}) {
    const specialists = await getFilteredSpecialists(filter, currentPage);

    return (
        <>
            {specialists.map(specialist => (
                <SpecialistCard key={specialist.id} specialist={specialist} />
            ))}
        </>
    );
}

export default SpecialistsTable;
