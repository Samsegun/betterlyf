import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
    href: string;
    children: React.ReactNode;
    activeClassName: string;
    className?: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
    href,
    children,
    activeClassName,
    className = "",
}) => {
    const pathName = usePathname();

    // Determine if the link is active
    const isActive = pathName === href;

    return (
        <Link
            href={href}
            className={`${className} ${isActive ? activeClassName : ""}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;
