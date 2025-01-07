import { getSpecialists } from "../_lib/data-service";
import { SpecialistFilter } from "../_types";
import { filterSpecialists } from "../_utils/helpers";
import SpecialistCard from "./SpecialistCard";

async function SpecialistList({ filter }: { filter: SpecialistFilter }) {
    const specialists = await getSpecialists();

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-14'>
            {filterSpecialists(filter, specialists).map(specialist => (
                <SpecialistCard key={specialist.id} specialist={specialist} />
            ))}
        </div>
    );
}

export default SpecialistList;
