// import { PatientData } from ".";

// Convert and validate the patient input
// export function validatePatientData(formData: {
//     patientId: string | number | undefined;
//     fullName: FormDataEntryValue | null;
//     email: string | undefined;
//     phoneNumber: FormDataEntryValue | null;
// }): PatientData {
//     const patientId = String(formData.patientId); // Ensure it's a string
//     const fullName = formData.fullName ? String(formData.fullName) : "";
//     const email = formData.email || "";
//     const phoneNumber = formData.phoneNumber
//         ? String(formData.phoneNumber)
//         : "";

//     // additional validation
//     if (!patientId || !fullName || !email || !phoneNumber) {
//         throw new Error("Missing required fields");
//     }

//     return {
//         patientId,
//         fullName,
//         email,
//         phoneNumber,
//     };
// }

// appointmentDate: string;
// fullName: FormDataEntryValue | null;
// phoneNumber: FormDataEntryValue | null;
// timeSlot: FormDataEntryValue | null;
// status: string;
// purposeOfVisit: FormDataEntryValue | null;
// patientId: number | string | undefined;
// specialistId: number;

export function validateBookingsData(bookingData: {
    appointmentDate: string;
    fullName: FormDataEntryValue | null;
    phoneNumber: FormDataEntryValue | null;
    timeSlot: FormDataEntryValue | null;
    status: string;
    purposeOfVisit: FormDataEntryValue | null;
    patientId: number | string | undefined;
    specialistId: number;
}) {
    const patientId = String(bookingData.patientId);
    const fullName = bookingData.fullName ? String(bookingData.fullName) : "";
    const phoneNumber = bookingData.phoneNumber
        ? String(bookingData.phoneNumber)
        : "";
    const timeSlot = bookingData.timeSlot ? String(bookingData.timeSlot) : "";
    const purposeOfVisit = bookingData.purposeOfVisit
        ? String(bookingData.purposeOfVisit)
        : "";

    return {
        patientId,
        specialistId: bookingData.specialistId,
        fullName,
        phoneNumber,
        timeSlot,
        status: bookingData.status,
        appointmentDate: bookingData.appointmentDate,
        purposeOfVisit,
    };
}
