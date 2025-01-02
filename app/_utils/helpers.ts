import { eq } from "drizzle-orm";
import { db } from "../_db";
import { patientsTable } from "../_db/schema";
import { PatientData } from "../_types";
import { SpecialistType, SpecialistFilter } from "../_types";

export function filterSpecialists(
    filter: SpecialistFilter,
    specialists: SpecialistType[]
): SpecialistType[] {
    switch (filter.toLowerCase()) {
        case "all":
            return specialists;
        case "gp":
            return specialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() ===
                    "general practitioner"
            );
        case "pediatrician":
            return specialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() === "pediatrician"
            );
        case "gynecologist":
            return specialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() === "gynecologist"
            );
        case "dentist":
            return specialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() === "dentist"
            );
        case "ophthalmologist":
            return specialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() ===
                    "ophthalmologist"
            );
        case "physiotherapist":
            return specialists.filter(
                specialist =>
                    specialist.specialization.toLowerCase() ===
                    "physiotherapist"
            );
        default:
            return specialists;
    }
}

export async function ensurePatientExists(patientData: PatientData) {
    const { patientId } = patientData;

    try {
        // Check if patient already exists
        const existingPatient = await db
            .select()
            .from(patientsTable)
            .where(eq(patientsTable.userId, patientId))
            .limit(1);

        if (existingPatient.length === 0) {
            // Insert patient if not exists
            await db.insert(patientsTable).values({
                userId: patientId, // Clerk's user.id
            });
        }
        return existingPatient;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Patient does not exist");
    }
}
