"use client";

import Link from "next/link";
import {
    ArrowRightEndOnRectangleIcon,
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
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
    const router = useRouter();
    const { signOut } = useClerk();

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    };

    return (
        <nav className='border-r border-primary-900'>
            <ul className='flex flex-col gap-2 h-full text-lg'>
                {navLinks.map(link => (
                    <li key={link.name}>
                        <Link
                            className={`py-3 px-5 hover:bg-[#2c4673] transition-colors flex items-center
                                 gap-4 font-semibold rounded-tl-xl rounded-bl-xl ${
                                     pathName === link.href
                                         ? "bg-[#36558a]"
                                         : ""
                                 }`}
                            href={link.href}>
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}

                <li className='mt-auto'>
                    <button
                        // onClick={() => signOut({ redirectUrl: "/" })}
                        onClick={handleSignOut}
                        className='py-3 px-5 hover:bg-[#2c4673] transition-colors flex items-center gap-4 font-semibold w-full'>
                        <ArrowRightEndOnRectangleIcon className='h-5 w-5' />
                        <span>Sign out</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavigation;
