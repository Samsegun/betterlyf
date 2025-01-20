import { ReactNode } from "react";
import { Database } from "./supabase";

type SpecialistsFromDB = Database["public"]["Tables"]["specialists"]["Row"];
export type BookingsFromDB = Database["public"]["Tables"]["bookings"]["Row"];

export type SpecialistType = Omit<
    SpecialistsFromDB,
    "created_at" | "updated_at" | "userId" | "email" | "phoneNumber"
>;

export type BookingsType = Omit<BookingsFromDB, "fullName"> & {
    specialists?: { price: number; fullName: string; imageUrl: string | null };
};

export type BookingType = Omit<BookingsFromDB, "created_at" | "updated_at">;

export interface BookingData {
    patientId: number | string | undefined;
    specialistId: number;
    // email: string | undefined;
    appointmentDate: Date | undefined;
}

export interface PatientData {
    patientId: string;
    fullName: string;
    email: string;
    phoneNumber: string;
}

export type PatientType = {
    id: number;
    gender: string | null;
    dateOfBirth: Date | null;
};

// export type BookingType = InferInsertModel<typeof bookingsTable>;

export const specialistTypes = [
    "all",
    "general practitioner",
    "pediatrician",
    "gynecologist",
    "dentist",
    "ophthalmologist",
    "physiotherapist",
] as const;

// Type for allowed filter types
export type SpecialistFilter = (typeof specialistTypes)[number];

export type SubmitButtonType = { pendingLabel: string; children: ReactNode };

// types/errors.ts
export type BookingError = {
    type: "DOUBLE_BOOKING" | "INVALID_TIME" | "INVALID_STATUS" | "UNKNOWN";
    message: string;
};

export type User = {
    id: string;
    clerkId: string;
    fullName: string;
    email: string;
    imageUrl: string;
};

export type BookingCardProps = {
    onDelete: (bookingId: number) => void;
    booking: BookingsType;
};
