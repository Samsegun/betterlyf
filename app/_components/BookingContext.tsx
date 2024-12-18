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
    range: { from: undefined | string; to: undefined | string };
    setRange: Dispatch<
        SetStateAction<{
            from: undefined | string;
            to: undefined | string;
        }>
    >;
    resetRange: () => void;
}

// Define the provider
interface BookingProviderProps {
    children: ReactNode;
}

const BookingContext = createContext<Booking | undefined>(undefined);

const initialState = { from: undefined, to: undefined };

function BookingProvider({ children }: BookingProviderProps) {
    const [range, setRange] = useState<{
        from: string | undefined;
        to: string | undefined;
    }>(initialState);

    const resetRange = () => setRange(initialState);

    return (
        <BookingContext.Provider value={{ range, setRange, resetRange }}>
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
