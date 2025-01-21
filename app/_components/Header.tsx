import { Suspense } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

async function Header() {
    return (
        <header
            className='fixed top-0 left-0 right-0 z-10 bg-[#24385c]
         px-4 py-5 md:px-9 md:py-6 shadow-md '>
            <div className='flex items-center mx-auto justify-between max-w-7xl'>
                <Logo />

                <Suspense fallback={<div>loading...</div>}>
                    <Navigation />
                </Suspense>
            </div>
        </header>
    );
}

export default Header;
