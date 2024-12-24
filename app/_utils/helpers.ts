import { eq } from "drizzle-orm";
import { db } from "../_db";
import { patientsTable } from "../_db/schema";
import { PatientData } from "../_types";
import { SpecialistType, SpecialistFilter } from "../_types";

export function filterSpecialists(
    filter: SpecialistFilter,
    mockSpecialists: SpecialistType[]
): SpecialistType[] {
    switch (filter.toLowerCase()) {
        case "all":
            return mockSpecialists;
        case "gp":
            return mockSpecialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() ===
                    "general practitioner"
            );
        case "pediatrician":
            return mockSpecialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() === "pediatrician"
            );
        case "gynecologist":
            return mockSpecialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() === "gynecologist"
            );
        case "dentist":
            return mockSpecialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() === "dentist"
            );
        case "ophthalmologist":
            return mockSpecialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() ===
                    "ophthalmologist"
            );
        case "physiotherapist":
            return mockSpecialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() ===
                    "physiotherapist"
            );
        default:
            return mockSpecialists;
    }
}

export async function ensurePatientExists(patientData: PatientData) {
    const { patientId, fullName, email, phoneNumber } = patientData;

    try {
        // Check if patient already exists
        const existingPatient = await db
            .select()
            .from(patientsTable)
            .where(eq(patientsTable.id, patientId))
            .limit(1);

        if (existingPatient.length === 0) {
            // Insert patient if not exists
            await db.insert(patientsTable).values({
                id: patientId, // Clerk's user.id
                fullName,
                phoneNumber,
                email,
            });
        }
        return existingPatient;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Patient does not exist");
    }
}
