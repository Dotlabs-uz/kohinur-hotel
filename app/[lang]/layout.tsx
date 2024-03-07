import Footer from "@/components/footer";
import Header from "@/components/header";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import { AOSInit } from "@/components/aos";

const cormorant = Cormorant_SC({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    variable: "--font-cormorant",
});

const defaultFont = localFont({
    src: "../../public/fonts/suisseintl.woff2",
    display: "swap",
    variable: "--font-suisseintl",
});

export const metadata: Metadata = {
    title: "Kohinur Plaza",
    description: "Number one hotel in Samarkand",
};

export default async function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
}>) {
    const { footer, header, button } = await getDictionary(lang);

    return (
        <html lang="en">
            <AOSInit />
            <body
                className={cn(
                    "bg-[#E7E7E7] text-[#05243F]",
                    defaultFont.variable,
                    cormorant.variable
                )}
            >
                    <Header links={header.links} buttonText={button} />
                    {children}
                    <Footer translation={footer} />
            </body>
        </html>
    );
}
