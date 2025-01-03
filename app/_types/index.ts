import { InferInsertModel } from "drizzle-orm";
import { ReactNode } from "react";
import { bookingsTable, specialistsTable } from "../_db/schema";

export interface BookingData {
    patientId: number | string | undefined;
    specialistId: string;
    // email: string | undefined;
    appointmentDate: Date | undefined;
}

export interface PatientData {
    patientId: string;
    fullName: string;
    email: string;
    phoneNumber: string;
}

export type SpecialistType = InferInsertModel<typeof specialistsTable>;
export type BookingType = InferInsertModel<typeof bookingsTable>;

export const specialistTypes = [
    "all",
    "gp",
    "pediatrician",
    "gynecologist",
    "Dentist",
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
