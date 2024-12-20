import { SignInButton } from "@clerk/nextjs";

function LoginMessage({ specialistName }: { specialistName: string }) {
    return (
        <div className='grid bg-[#24385c] '>
            <p className='text-center text-xl py-12 self-center tracking-wide italic'>
                Please{" "}
                <SignInButton>
                    <span className='font-bold underline cursor-pointer'>
                        login
                    </span>
                </SignInButton>{" "}
                to book an appointment with
                <br /> Dr. {specialistName} right now.
            </p>
        </div>
    );
}

export default LoginMessage;
