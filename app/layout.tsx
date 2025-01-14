import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./_styles/globals.css";
import Header from "./_components/Header";
import { UserProvider } from "./_components/UserContext";
import { BookingProvider } from "./_components/BookingContext";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: "%s | BetterLyf",
        default: "Welcome | BetterLyf",
    },
    description: "Book an appointment with a healthcare professional",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body
                    className={`${roboto.className} antialiased relative bg text-white
                 `}>
                    <div className='min-h-screen flex flex-col'>
                        <Header />

                        <div className='md:px-8 py-12 flex-1'>
                            <main className='container max-w-7xl px-4 md:px-6 mx-auto mt-16'>
                                <UserProvider>
                                    <BookingProvider>
                                        {children}
                                    </BookingProvider>
                                </UserProvider>
                            </main>
                        </div>

                        <footer>
                            <p className=' flex items-center mx-auto justify-center gap-2 font-bold'>
                                <span>
                                    &copy; {new Date().getUTCFullYear()}
                                </span>

                                <span>BetterLyf</span>
                            </p>
                        </footer>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
