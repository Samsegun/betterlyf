"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

type ButtonProps = {
    filter: string;
    handleFilter: (filter: string) => void;
    activeFilter: string;
    children: ReactNode;
};

const filters = [
    "all",
    "gp",
    "pediatrician",
    "gynecologist",
    "Dentist",
    "ophthalmologist",
    "physiotherapist",
];

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const activeFilter = searchParams.get("specialists") ?? "all";

    function handleFilter(filter: string) {
        const params = new URLSearchParams(searchParams);

        params.set("specialists", filter);
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
                    {item === "gp" ? "general practitioner (GP)" : item}
                </Button>
            ))}
        </div>
    );
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
    return (
        <button
            className={`px-5 py-2 hover:text-gray-200 capitalize ${
                filter === activeFilter ? "bg-blue text-[#ffcaa5]" : ""
            }`}
            onClick={() => handleFilter(filter)}>
            {children}
        </button>
    );
}

export default Filter;
