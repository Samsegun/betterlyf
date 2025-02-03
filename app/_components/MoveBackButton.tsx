"use client";

import { useMoveBack } from "../_utils/useMoveBack";

function MoveBackButton() {
    const moveBack = useMoveBack();

    return (
        <button
            onClick={moveBack}
            className='bg-[#24385c]
 transition-colors bg-none text-lg p-2 rounded-md duration-150
  hover:bg-primary-blue active:bg-primary-blue'>
            &larr; Back
        </button>
    );
}

export default MoveBackButton;
