"use client";

import { useLoggedInUser } from "../_components/UserContext";

export default function Page() {
    const { user } = useLoggedInUser();
    const firstName = user?.fullName.split(" ")[0] ?? "";

    return (
        <h2 className='font-semibold text-2xl text-accent-400 mb-7 capitalize'>
            Welcome{firstName ? `, ${firstName}` : ", user"}
        </h2>
    );
}
