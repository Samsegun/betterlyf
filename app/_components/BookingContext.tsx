"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Booking {
    appointmentDay: Date | undefined;
    handleDateSelection: (date: Date | undefined) => void;
    resetAppointmentDay: () => void;
}

// Define the provider
interface BookingProviderProps {
    children: ReactNode;
}

const BookingContext = createContext<Booking | undefined>(undefined);

const initialState = undefined;

function BookingProvider({ children }: BookingProviderProps) {
    const [appointmentDay, setAppointmentDay] = useState<Date | undefined>(
        initialState
    );

    const handleDateSelection = (date: Date | undefined) => {
        // Create a new Date object
        const correctedDate = new Date(
            Date.UTC(date!.getFullYear(), date!.getMonth(), date!.getDate())
        );

        setAppointmentDay(correctedDate);
    };

    const resetAppointmentDay = () => setAppointmentDay(initialState);

    return (
        <BookingContext.Provider
            value={{
                appointmentDay,
                handleDateSelection,
                resetAppointmentDay,
            }}>
            {children}
        </BookingContext.Provider>
    );
}

function useBooking() {
    const context = useContext(BookingContext);

    if (context === undefined)
        throw new Error("Context was used outside of Booking provider");

    return context;
}

export { BookingProvider, useBooking };
