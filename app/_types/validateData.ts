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
