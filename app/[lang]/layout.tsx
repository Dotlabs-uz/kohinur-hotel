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
import Head from "next/head";

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
    description:
        "Kohinur Hotel is a luxurious four-star hotel in Samarkand, offering comfortable rooms, a restaurant, a spa center and other amenities. Book a room right now! Гостиница Кохинур – это роскошный четырехзвездочный отель в Самарканде, предлагающий комфортабельные номера, ресторан, спа-центр и другие удобства. Забронируйте номер прямо сейчас!",
    keywords: [
        "Kohinur",
        "hotel",
        "four stars",
        "Samarkand",
        "luxury",
        "restaurant",
        "spa",
        "pool",
        "rooms",
        "гостиница",
        "четыре звезды",
        "Самарканд",
        "люкс",
        "ресторан",
        "спа",
        "бассейн",
        "номера",
    ],
    viewport: "width=device-width, initial-scale=1.0",
    icons: "https://www.kohinur-plaza.com/images/logo-main.svg",
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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
        <html lang={lang}>
            <AOSInit />
            <Head>
                <meta
                    property="og:image:secure_url"
                    content="https://www.kohinur-plaza.com/images/logo-main.svg"
                />
            </Head>
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
