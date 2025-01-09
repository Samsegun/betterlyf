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
