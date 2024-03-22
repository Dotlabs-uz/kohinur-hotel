import Footer from "@/components/footer";
import Header from "@/components/header";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
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

// export const metadata: Metadata = {
//     title: "Kohinur Plaza",
//     description:
//         "Kohinur Hotel is a luxurious four-star hotel in Samarkand, offering comfortable rooms, a restaurant, a spa center and other amenities. Book a room right now!",
//     openGraph: {
//         title: "Kohinur Plaza",
//         images: ["https://www.kohinur-plaza.com/images/logo-main.svg"],
//     },
//     keywords:
//         "Kohinur, hotel, four stars, Samarkand, Uzbekistan, luxury, restaurant, spa, pool, rooms",
//     viewport: "width=device-width, initial-scale=1.0",
//     icons: "https://www.kohinur-plaza.com/images/logo-main.svg",
// };

interface Metadata {
    title: string;
    description: string;
    openGraph: {
        title: string;
        images: string[];
    };
    keywords: string;
    viewport: string;
    icons: string;
}

export function generateMetadata(
    title: string,
    description: string,
    ogTitle: string,
    ogImage: string,
    keywords: string,
    viewport: string,
    icon: string
): Metadata {
    return {
        title: title,
        description: description,
        openGraph: {
            title: ogTitle,
            images: [ogImage],
        },
        keywords: keywords,
        viewport: viewport,
        icons: icon,
    };
}

const metadata = generateMetadata(
    "Kohinur Plaza",
    "Kohinur Hotel is a luxurious four-star hotel in Samarkand, offering comfortable rooms, a restaurant, a spa center and other amenities. Book a room right now!",
    "Kohinur Plaza",
    "https://www.kohinur-plaza.com/images/logo-main.svg",
    "Kohinur, hotel, four stars, Samarkand, Uzbekistan, luxury, restaurant, spa, pool, rooms",
    "width=device-width, initial-scale=1.0",
    "https://www.kohinur-plaza.com/images/favicon.ico"
);

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
