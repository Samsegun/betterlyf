import { PatientData } from ".";

// Convert and validate the patient input
export function validatePatientData(formData: {
    patientId: string | number | undefined;
    fullName: FormDataEntryValue | null;
    email: string | undefined;
    phoneNumber: FormDataEntryValue | null;
}): PatientData {
    const patientId = String(formData.patientId); // Ensure it's a string
    const fullName = formData.fullName ? String(formData.fullName) : "";
    const email = formData.email || "";
    const phoneNumber = formData.phoneNumber
        ? String(formData.phoneNumber)
        : "";

    // Perform additional validation if needed
    if (!patientId || !fullName || !email || !phoneNumber) {
        throw new Error("Missing required fields");
    }

    return {
        patientId,
        fullName,
        email,
        phoneNumber,
    };
}
