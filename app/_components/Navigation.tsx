"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActiveLink from "./ActiveLink";
import { useUser } from "@clerk/nextjs";
import SignIn from "./SignIn";

const links = [
    { href: "/", text: "home" },
    { href: "/specialists", text: "find a specialist" },
    { href: "/about", text: "about" },
    { href: "/profile", text: "profile" },
];

const UserButton = dynamic(
    () => import("@clerk/nextjs").then(mod => mod.UserButton),
    {
        ssr: false,
    }
);

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();
    const { isSignedIn } = useUser();

    useEffect(() => {
        setMenuOpen(false);
    }, [pathName]);

    return (
        <nav className='text-xl'>
            {/* toggle mobile-menu button */}
            <button
                aria-label='Toggle Menu'
                className='block md:hidden'
                onClick={() => setMenuOpen(true)}>
                <Bars3Icon className='h-10 w-10' />
            </button>

            {/* desktop menu */}
            <ul className='hidden md:flex items-center gap-16'>
                {links.slice(1).map(link => {
                    const isProfileLink = link.text === "profile";

                    return (
                        <li
                            key={link.text}
                            className='flex items-center gap-2 capitalize hover:text-gray-200
                         transition-colors duration-150'>
                            {isProfileLink ? (
                                isSignedIn ? (
                                    <>
                                        <span className='flex'>
                                            <UserButton />
                                        </span>
                                        <ActiveLink
                                            href={link.href}
                                            activeClassName='text-[#ffcaa5]'
                                            className=''>
                                            {link.text}
                                        </ActiveLink>
                                    </>
                                ) : (
                                    <SignIn styles='py-2 px-4 lg:py-4 lg:px-8' />
                                )
                            ) : (
                                <ActiveLink
                                    href={link.href}
                                    activeClassName='text-[#ffcaa5]'
                                    className=''>
                                    {link.text}
                                </ActiveLink>
                            )}
                        </li>
                    );
                })}
            </ul>

            {menuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className='fixed inset-0 bg-black opacity-50 z-30'
                        onClick={() => setMenuOpen(false)}></div>

                    {/* mobile menu */}
                    <div
                        className='fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg
                     z-40 flex flex-col gap-8 p-4 text-[#0398CA]'>
                        <button
                            className='self-end mb-4 font-bold focus:outline-none'
                            onClick={() => setMenuOpen(false)}
                            aria-label='Close Menu'>
                            <XMarkIcon className='w-6 h-6 text-[#0398CA] font-bold' />
                        </button>

                        <ul className='space-y-8 text-center font-medium'>
                            {links.map(link => (
                                <li key={link.text} className='capitalize'>
                                    <ActiveLink
                                        href={link.href}
                                        className='block'
                                        activeClassName='bg-gray-50 shadow-xl py-2'>
                                        {link.text}
                                    </ActiveLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navigation;
