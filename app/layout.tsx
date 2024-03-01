import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = Cormorant_SC({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    variable: "--font-cormorant",
});

const defaultFont = localFont({
    src: "../public/fonts/suisseintl.woff2",
    display: "swap",
    variable: "--font-suisseintl",
});

export const metadata: Metadata = {
    title: "Kohinur Plaza",
    description: "Number one hotel in Samarkand",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("bg-[#E7E7E7] text-[#05243F]", defaultFont.variable, cormorant.variable)}>
                <Header/>

                {children}
                <Footer/>
            </body>
        </html>
    );
}
