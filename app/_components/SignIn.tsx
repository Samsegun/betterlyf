"use client";

import { SignUpButton, useUser } from "@clerk/nextjs";

function SignIn() {
    const { isSignedIn } = useUser();

    if (isSignedIn) return null;

    return (
        <SignUpButton>
            <button
                className='block w-1/2 mx-auto my-4 bg-primary-blue px-4 py-3 md:px-8 md:py-6 text-white text-lg lg:text-xl font-medium
                     hover:bg-primary-lightBlue transition-all cursor-pointer rounded-lg'>
                Sign In
            </button>
        </SignUpButton>
    );
}

export default SignIn;
