"use client";

import Link from "next/link";
import {
    ArrowRightEndOnRectangleIcon,
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

const navLinks = [
    {
        name: "Home",
        href: "/profile",
        icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
    },
    {
        name: "Bookings",
        href: "/profile/bookings",
        icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
    },
    {
        name: "User profile",
        href: "/profile/account",
        icon: <UserIcon className='h-5 w-5 text-primary-600' />,
    },
];

function SideNavigation() {
    const pathName = usePathname();
    const { signOut } = useClerk();

    return (
        <nav className='border-r border-primary-900'>
            <ul className='flex flex-col gap-2 h-full text-lg'>
                {navLinks.map(link => (
                    <li key={link.name}>
                        <Link
                            className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                                pathName === link.href ? "bg-primary-900" : ""
                            }`}
                            href={link.href}>
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}

                <li className='mt-auto'>
                    <button
                        onClick={() => signOut({ redirectUrl: "/" })}
                        className='py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full'>
                        <ArrowRightEndOnRectangleIcon className='h-5 w-5 text-primary-600' />
                        <span>Sign out</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavigation;
