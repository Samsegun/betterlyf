"use server";

import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { patientsTable } from "../_db/schema";
import { db } from "../_db";
import { BookingData } from "../_types";
import { validateBookingsData } from "../_types/validateData";
import { handleBookingSubmission } from "../_utils/bookings";

export async function createBooking(
    bookingData: BookingData,
    formData: FormData
) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    // First, create the patient record if it doesn't exist
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const patientRecord = await db
        .insert(patientsTable)
        .values({
            userId: String(bookingData.patientId),
        })
        .onConflictDoNothing() // This prevents errors if the patient already exists
        .returning();

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
