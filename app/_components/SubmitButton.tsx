"use client";

import { useFormStatus } from "react-dom";
import { SubmitButtonType } from "../_types";

function SubmitButton({ pendingLabel, children }: SubmitButtonType) {
    //useFormStatus can only be used inside a component that is rendered inside a form
    const { pending } = useFormStatus();

    return (
        <button
            className='bg-primary-blue px-4 py-3 md:px-8 md:py-4 text-white text-lg font-medium
hover:bg-primary-lightBlue transition-all rounded-md hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
            disabled={pending}>
            {pending ? pendingLabel : children}
        </button>
    );
}

export default SubmitButton;
