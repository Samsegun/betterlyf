// utils/bookings.ts
import { BookingError, BookingType } from "../_types/index";
import { supabase } from "../_lib/supabase";

export async function handleBookingSubmission(
    bookingData: BookingType
): Promise<{ success: boolean; error?: BookingError }> {
    try {
        // First, check if the slot is available before trying to insert
        const { data: existingBooking } = await supabase
            .from("bookings")
            .select("*")
            .eq("specialistId", bookingData.specialistId)
            .eq("appointmentDate", bookingData.appointmentDate)
            .eq("timeSlot", bookingData.timeSlot)
            .limit(1)
            .single();

        // If a booking exists, return early with a friendly message
        if (existingBooking) {
            return {
                success: false,
                error: {
                    type: "DOUBLE_BOOKING",
                    message: `The time slot you selected is already booked. Please select a different time or date.`,
                },
            };
        }

        // If no existing booking, proceed with creation
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data: createdBooking, error } = await supabase
            .from("bookings")
            .insert([bookingData])
            .select();

        if (error) throw new Error();

        return { success: true };
    } catch (error) {
        // Handle specific database constraint violations
        if (error instanceof Error) {
            if (error.message.includes("unique_appointment_slot")) {
                // This is a fallback in case of race conditions
                return {
                    success: false,
                    error: {
                        type: "DOUBLE_BOOKING",
                        message:
                            "This slot was just booked by someone else. Please try another time slot or date.",
                    },
                };
            }

            if (error.message.includes("time_slot_check")) {
                return {
                    success: false,
                    error: {
                        type: "INVALID_TIME",
                        message:
                            "Please select a valid appointment time between 9 AM and 5 PM.",
                    },
                };
            }

            if (error.message.includes("status_check")) {
                return {
                    success: false,
                    error: {
                        type: "INVALID_STATUS",
                        message: "Invalid booking status provided.",
                    },
                };
            }
        }

        // Handle unexpected errors
        console.error("Booking creation error:", error);
        return {
            success: false,
            error: {
                type: "UNKNOWN",
                message:
                    "An unexpected error occurred. Please try again later.",
            },
        };
    }
}
