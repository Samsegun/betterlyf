"use server";

import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { patientsTable } from "../_db/schema";
import { db } from "../_db";
import { validatePatientData } from "../_types/validateData";
import { BookingData } from "../_types";
import { ensurePatientExists } from "../_utils/helpers";

// interface PatientData {
//     patientId: string | number | undefined;
//     fullName: FormDataEntryValue | null;
//     email: string | undefined;
//     phoneNumber: FormDataEntryValue | null;
// }

export async function createBooking(
    bookingData: BookingData,
    formData: FormData
) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

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

    /* booking flow
    -- extract required data from incoming bookingData and call ensurePatientExists function
     to insert patient record if record does not exists
    */
    const patientData = validatePatientData({
        patientId: newBookingData.patientId,
        fullName: newBookingData.fullName,
        email: newBookingData.email,
        phoneNumber: newBookingData.phoneNumber,
    });
    const patientExists = await ensurePatientExists(patientData);

    console.log(patientExists);

    const patients = await db.select().from(patientsTable);
    console.log(patients);
}

// export async function createReservation(bookingData, formData) {
// const session = await auth();
//     if (!session) throw new Error("You must be logged in");

//     const newBooking = {
//         ...bookingData,
//         guestId: session.user.guestId,
//         numGuests: Number(formData.get("numGuests")),
//         observations: formData.get("observations").slice(0, 1000),
//         extrasPrice: 0,
//         totalPrice: bookingData.cabinPrice,
//         isPaid: false,
//         hasBreakfast: false,
//         status: "unconfirmed",
//     };

//     const { error } = await supabase.from("bookings").insert([newBooking]);

//     if (error) throw new Error("Booking could not be created");

//     revalidatePath(`/cabins/${bookingData.cabinId}`);
//     redirect("/cabins/thankyou");
// }
