export interface Metadata {
    title: string;
    description: string;
    openGraph: {
        title: string;
        description: string;
        url: string;
        type: string;
        images: {
            url: string;
            alt?: string;
        }[];
    };
    keywords: string;
    viewport: string;
    icons: string;
}

export function generateMetadataEn(): Metadata {
    return {
        title: "Kohinur Plaza - Luxurious Hotel in Samarkand",
        description: "Experience luxury at Kohinur Plaza, a four-star hotel in Samarkand, Uzbekistan. Enjoy comfortable rooms, exquisite dining, and rejuvenating spa facilities.",
        openGraph: {
            title: "Kohinur Plaza - Luxurious Hotel in Samarkand",
            description: "Experience luxury at Kohinur Plaza, a four-star hotel in Samarkand, Uzbekistan. Enjoy comfortable rooms, exquisite dining, and rejuvenating spa facilities.",
            url: "https://www.kohinur-plaza.com",
            type: "website",
            images: [
                {
                    url: "https://www.kohinur-plaza.com/images/logo-main.svg",
                    alt: "Kohinur Plaza - Luxurious Hotel in Samarkand"
                }
            ]
        },
        keywords: "Kohinur, hotel, four stars, Samarkand, Uzbekistan, luxury, restaurant, spa, pool, rooms",
        viewport: "width=device-width, initial-scale=1.0",
        icons: "https://www.kohinur-plaza.com/images/logo-main.svg"
    };
}