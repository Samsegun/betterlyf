"use server";

import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { BookingData } from "../_types";
import { validateBookingsData } from "../_types/validateData";
import { handleBookingSubmission } from "../_utils/bookings";
import { supabase } from "./supabase";

export async function createBooking(
    bookingData: BookingData,
    formData: FormData
) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    /*  patient insertion flow section*/
    // First, create the patient record if it doesn't exist
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: patient, error } = await supabase
        .from("patients")
        .upsert(
            [
                {
                    userId: String(bookingData.patientId),
                },
            ],
            { onConflict: "userId" }
        )
        .select();

    if (error) {
        throw new Error("Error during upsert:", error);
    } else {
        console.log("Patient record (inserted or unchanged)");
    }

    /* booking insertion flow section */
    const appointmentDate = format(bookingData.appointmentDate!, "yyyy-MM-dd"); // Format date from react-day-picker
    const newBookingData = {
        ...bookingData,
        appointmentDate,
        fullName: formData.get("fullName"),
        phoneNumber: formData.get("phoneNumber"),
        timeSlot: formData.get("timeSlot"),
        status: "pending", // Initial status
        purposeOfVisit: formData.get("purposeOfVisit"),
    };

    const validatedBookingData = validateBookingsData(newBookingData);
    const result = await handleBookingSubmission(validatedBookingData);

    if (!result.success) {
        throw new Error(result.error?.message);
    }

    // Handle successful booking
    return result;
}

// export async function updateSpecialists() {

//     await db.update(specialistsTable)
//   .set({ specialization:  'ophthalmologist'})
//   .where(eq(specialistsTable.specialization, 'ophtamologist'));

// }
