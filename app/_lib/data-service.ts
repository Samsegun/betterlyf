import {
    BookingsType,
    BookingType,
    PatientType,
    SpecialistFilter,
    SpecialistType,
} from "../_types";
import { supabase } from "./supabase";

// Pagination
const ITEMS_PER_PAGE = 10;

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

export async function getFilteredSpecialists(
    filter: SpecialistFilter,
    currentPage: number
): Promise<SpecialistType[]> {
    // start and end indices for the range
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE - 1;

    // await new Promise(res => {
    //     setTimeout(res, 2000);
    // });

    const query = supabase
        .from("specialists")
        .select(
            "id, experience, fullName, bio, imageUrl, location, price, specialization"
        );

    if (filter !== "all") {
        query.eq("specialization", filter);
    }

    const { data: specialists, error } = await query.range(start, end);

    if (error) {
        console.error(error);
        throw new Error("specialists could not be loaded");
    }

    return specialists;
}

export async function getSpecialitsPages(
    filter: SpecialistFilter
): Promise<number> {
    const query = supabase.from("specialists").select("*", { count: "exact" });

    if (filter !== "all") {
        query.eq("specialization", filter);
    }

    const { count, error } = await query;

    if (error || count === null) {
        console.error(error);
        throw new Error("specialists could not be loaded");
    }

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return totalPages;
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

export async function getPatient(userId: string): Promise<PatientType | null> {
    const { data } = await supabase
        .from("patients")
        .select("id, gender, dateOfBirth")
        .eq("userId", userId)
        .single();

    return data;
}
