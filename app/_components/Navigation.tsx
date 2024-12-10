import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Navigation() {
    return (
        <nav>
            <span className='block md:hidden'>
                <Bars3Icon className='h-10 w-10 text-primary-blue' />
            </span>

            <ul className='hidden md:flex flex-col'>
                <li>
                    <Link href='/'>Find a Doctor</Link>
                </li>
                <li>
                    <Link href='/'>Find a Doctor</Link>
                </li>
                <li>
                    <Link href='/'>Find a Doctor</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
