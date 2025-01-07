"use client";

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface Booking {
    appointmentDay: Date | undefined;
    setAppointmentDay: Dispatch<SetStateAction<Date | undefined>>;
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

    const resetAppointmentDay = () => setAppointmentDay(initialState);

    return (
        <BookingContext.Provider
            value={{ appointmentDay, setAppointmentDay, resetAppointmentDay }}>
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
