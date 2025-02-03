// import { auth } from "../_lib/auth";
// import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "@clerk/nextjs/server";

import { SpecialistType } from "../_types";
import BookingForm from "./BookingForm";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";

async function Booking({ specialist }: { specialist: SpecialistType }) {
    const { sessionId } = await auth();

    return (
        <div className='mt-5 grid lg:grid-cols-2 min-h-[400px]'>
            <DateSelector specialist={specialist} />

            {sessionId ? (
                <BookingForm specialist={specialist} />
            ) : (
                <LoginMessage specialistName={specialist.fullName} />
            )}
        </div>
    );
}

export default Booking;
