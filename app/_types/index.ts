import { InferInsertModel } from "drizzle-orm";
import { ReactNode } from "react";
import { specialistsTable } from "../_db/schema";

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

// export interface SpecialistType {
//     id: string;
//     userId: string | null;
//     fullName: string;
//     specialization: string;
//     email: string;
//     phoneNumber: string;
//     profilePictureUrl: string | null;
//     bio: string;
//     price: number;
//     location: string;
//     expertiseYears: number;
//     createdAt: string;
//     updatedAt: string;
// }

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
