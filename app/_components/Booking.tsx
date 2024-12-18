// import { auth } from "../_lib/auth";
// import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { SpecialistType } from "../_types";
import BookingForm from "./BookingForm";
import DateSelector from "./DateSelector";
// import LoginMessage from "./LoginMessage";
// import ReservationForm from "./ReservationForm";

async function Booking({ specialist }: { specialist: SpecialistType }) {
    // const [settings, bookedDates] = await Promise.all([
    //     getSettings(),
    //     getBookedDatesByCabinId(cabin.id),
    // ]);

    // const session = await auth();

    return (
        <div className='mt-5 grid lg:grid-cols-2 min-h-[400px]'>
            {/* <DateSelector
                settings={settings}
                bookedDates={bookedDates}
                cabin={cabin}
            /> */}
            <DateSelector specialist={specialist} />

            <BookingForm specialist={specialist} />

            {/* {session?.user ? (
                <ReservationForm cabin={cabin} user={session.user} />
            ) : (
                <LoginMessage />
            )} */}
        </div>
    );
}

export default Booking;
