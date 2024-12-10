import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className='flex items-center justify-between px-2 py-3 border border-b-2 '>
            <Logo />

            <Navigation />
        </header>
    );
}

export default Header;
