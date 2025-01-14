import {
    BookingsType,
    BookingType,
    PatientType,
    SpecialistType,
} from "../_types";
import { supabase } from "./supabase";

export async function getSpecialists(): Promise<SpecialistType[]> {
    const { data, error } = await supabase
        .from("specialists")
        .select(
            "id, experience, fullName, bio, imageUrl, location, price, specialization"
        );

    if (error) {
        console.error(error);
        throw new Error("specialists could not be loaded");
    }

    return data;
}

export async function getSpecialist(id: string): Promise<SpecialistType> {
    const { data, error } = await supabase
        .from("specialists")
        .select(
            "id, experience, fullName, bio, imageUrl, location, price, specialization"
        )
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Booking could not get loaded");
    }

    return data;
}

export async function getBookings(id: string): Promise<BookingsType[]> {
    const { data, error } = await supabase
        .from("bookings")
        .select(
            "id, patientId, specialistId, appointmentDate, timeSlot, phoneNumber, status, purposeOfVisit, updated_at, created_at, specialists(fullName, imageUrl, price)"
        )
        .eq("patientId", id)
        .returns<BookingsType[]>();

    if (error) {
        console.error(error);
        throw new Error("Booking could not get loaded");
    }

    return data;
}

export async function getBooking(id: number): Promise<BookingType> {
    const { data, error } = await supabase
        .from("bookings")
        .select(
            "id, patientId, specialistId, appointmentDate, timeSlot, phoneNumber, status, purposeOfVisit, updated_at, created_at"
        )
        .eq("id", id)
        .returns<BookingType>()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Booking could not get loaded");
    }

    return data;
}

export async function getPatient(userId: string): Promise<PatientType> {
    const { data, error } = await supabase
        .from("patients")
        .select("id, gender, dateOfBirth")
        .eq("userId", userId)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Patient could not get loaded");
    }

    return data;
}
