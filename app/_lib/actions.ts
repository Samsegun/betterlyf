"use server";

import { auth } from "@clerk/nextjs/server";

export async function createBooking(formData: FormData) {
    const session = await auth();
    console.log(session);

    console.log(formData);
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
