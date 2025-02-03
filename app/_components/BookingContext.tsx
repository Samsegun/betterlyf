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
    handleDateSelection: (date: Date | undefined) => void;
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

    const handleDateSelection = (date: Date | undefined) => {
        // Create a new Date object and set the time to UTC midnight
        const correctedDate = new Date(
            Date.UTC(date!.getFullYear(), date!.getMonth(), date!.getDate())
        );

        // console.log("Original Date:", date); // Logs local timezone date
        // console.log("Corrected UTC Date:", correctedDate); // Logs correct UTC date
        // console.log(
        //     "Formatted Date for DB:",
        //     format(correctedDate, "yyyy-MM-dd")
        // ); // Corrected for DB

        // Save correctedDate in state or submit to Supabase
        setAppointmentDay(correctedDate);
    };

    const resetAppointmentDay = () => setAppointmentDay(initialState);

    return (
        <BookingContext.Provider
            value={{
                appointmentDay,
                handleDateSelection,
                setAppointmentDay,
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
