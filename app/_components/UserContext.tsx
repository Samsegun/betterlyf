// contexts/user-context.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

type User = {
    id: string;
    fullName: string;
    email: string;
};

type UserContextType = {
    user: User | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const initializeUser = async () => {
            try {
                // const userData = await checkUser();
                const response = await fetch("/api/user"); // You'll need to create this API route
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(null);
            }
        };

        initializeUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}

function useLoggedInUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useLoggedInUser must be used within a UserProvider");
    }

    return context;
}

export { UserProvider, useLoggedInUser };
