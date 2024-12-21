import { Suspense } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return (
        <header
            className='fixed top-0 left-0 right-0 z-10 bg-[#24385c]
         px-2 py-3 md:px-8 md:py-5 shadow-md '>
            <div className='flex items-center mx-auto justify-between container'>
                <Logo />

                <Suspense fallback={<div>loading...</div>}>
                    <Navigation />
                </Suspense>
            </div>
        </header>
    );
}

export default Header;
