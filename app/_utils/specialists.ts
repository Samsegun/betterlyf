import { Specialist, SpecialistFilter } from "../_types";

export function filterSpecialists(
    filter: SpecialistFilter,
    mockSpecialists: Specialist[]
): Specialist[] {
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
