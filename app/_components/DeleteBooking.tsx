"use client";

import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Spinner from "./Spinner";

function DeleteBooking({
    onDelete,
    bookingId,
}: {
    onDelete: (bookingId: number) => void;
    bookingId: number;
}) {
    // if using a server action outside of a form, we can use the
    //useTransition hook for state transitions
    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        if (confirm("Are you sure you want to delete this booking?"))
            startTransition(() => onDelete(bookingId));
    }

    return (
        <button
            onClick={handleDelete}
            className='flex items-center justify-center md:justify-normal gap-2 uppercase md:text-xs font-bold flex-grow px-3 transition-colors lg:hover:bg-red-700'>
            {!isPending ? (
                <>
                    {" "}
                    <TrashIcon className='h-5 w-5 transition-colors' />
                    <span className='mt-1'>Delete</span>
                </>
            ) : (
                <span className='mx-auto '>
                    <Spinner />
                </span>
            )}
        </button>
    );
}

export default DeleteBooking;
