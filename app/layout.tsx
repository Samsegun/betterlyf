import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./_styles/globals.css";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GreenLyf | Home",
    description: "Book an appointment an healthcare professional",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${roboto.className} antialiased bg-white text-primary-green`}>
                {children}
            </body>
        </html>
    );
}
