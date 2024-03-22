interface Metadata {
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

export function generateMetadataRu(): Metadata {
    return {
        title: "Kohinoor Plaza - Роскошный отель в Самарканде",
        description: "Насладитесь роскошью в четырехзвездочном отеле Kohinoor Plaza в Самарканде, Узбекистан. Насладитесь комфортабельными номерами, изысканной кухней и омолаживающими спа-услугами.",
        openGraph: {
            title: "Kohinoor Plaza - Роскошный отель в Самарканде",
            description: "Насладитесь роскошью в четырехзвездочном отеле Kohinoor Plaza в Самарканде, Узбекистан. Насладитесь комфортабельными номерами, изысканной кухней и омолаживающими спа-услугами.",
            url: "https://www.kohinur-plaza.com",
            type: "website",
            images: [
                {
                    url: "https://www.kohinur-plaza.com/images/logo-main.svg",
                    alt: "Kohinoor Plaza - Роскошный отель в Самарканде"
                }
            ]
        },
        keywords: "Kohinur, отель, четыре звезды, Самарканд, Узбекистан, роскошь, ресторан, спа, бассейн, номера",
        viewport: "width=device-width, initial-scale=1.0",
        icons: "https://www.kohinur-plaza.com/images/logo-main.svg"
    };
}