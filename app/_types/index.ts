import { ReactNode } from "react";

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

export interface SpecialistType {
    id: number;
    fullName: string;
    specialization: string;
    email: string;
    phoneNumber: string;
    profilePictureUrl: string;
    bio: string;
    price: number;
    location: string;
    expertiseYears: number;
    createdAt: string;
    updatedAt: string;
}

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
