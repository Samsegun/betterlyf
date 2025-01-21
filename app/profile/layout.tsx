import { ReactNode } from "react";
import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-12'>
            <SideNavigation />
            <div className='lg:py-12 max-w-3xl'>{children}</div>
        </div>
    );
}
