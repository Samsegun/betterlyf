"use server";

import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { patientsTable, bookingsTable } from "../_db/schema";
import { db } from "../_db";
// import { validatePatientData } from "../_types/validateData";
import { BookingData } from "../_types";
import { validateBookingsData } from "../_types/validateData";
// import { ensurePatientExists } from "../_utils/helpers";

export async function createBooking(
    bookingData: BookingData,
    formData: FormData
) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    // First, create the patient record if it doesn't exist
    const patientRecord = await db
        .insert(patientsTable)
        .values({
            userId: String(bookingData.patientId),
        })
        .onConflictDoNothing() // This prevents errors if the patient already exists
        .returning();

    console.log(patientRecord);

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

    const createdBooking = await db
        .insert(bookingsTable)
        .values(validatedBookingData)
        .returning();

    console.log(createdBooking);
}

// export async function updateSpecialists() {

//     await db.update(specialistsTable)
//   .set({ specialization:  'ophthalmologist'})
//   .where(eq(specialistsTable.specialization, 'ophtamologist'));

// }
