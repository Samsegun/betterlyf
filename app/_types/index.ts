import { ReactNode } from "react";

export interface SpecialistType {
    id: number;
    fullName: string;
    specialization: string;
    email: string;
    phoneNumber: string;
    profilePictureUrl: string;
    bio: string;
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
