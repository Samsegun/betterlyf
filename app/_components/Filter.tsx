"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
import { SpecialistFilter } from "../_types";

type ButtonProps = {
    filter: SpecialistFilter;
    handleFilter: (filter: SpecialistFilter) => void;
    activeFilter: string;
    children: ReactNode;
};

const filters: SpecialistFilter[] = [
    "all",
    "general practitioner",
    "pediatrician",
    "gynecologist",
    "dentist",
    "ophthalmologist",
    "physiotherapist",
];

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const activeFilter = searchParams.get("specialists") ?? "all";

    async function handleFilter(filter: SpecialistFilter) {
        const params = new URLSearchParams(searchParams);

        params.set("specialists", filter);

        // Reset the page to 1 whenever we change filters
        params.set("page", "1");

        router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }

    return (
        <div
            className='font-medium tracking-wide border flex
         flex-wrap gap-2 p-2 md:gap-4 md:p-4 overflow-x-auto whitespace-nowrap'>
            {filters.map(item => (
                <Button
                    key={item}
                    filter={item}
                    handleFilter={handleFilter}
                    activeFilter={activeFilter}>
                    {item}
                </Button>
            ))}
        </div>
    );
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
    return (
        <button
            className={`px-5 py-2 lg:hover:text-gray-200 capitalize ${
                filter === activeFilter ? "bg-blue text-[#ffcaa5]" : ""
            }`}
            onClick={() => handleFilter(filter)}>
            {children}
        </button>
    );
}

export default Filter;
