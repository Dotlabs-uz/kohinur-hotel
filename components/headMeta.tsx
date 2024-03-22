import { Metadata } from "@/locales/metadata_en";
import Head from "next/head";

interface HeadMetaProps {
    metadata:Metadata
}

const HeadMeta: React.FunctionComponent<HeadMetaProps> = ({metadata}) => {
    return (
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />

            {/* Open Graph метаданные */}
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta
                property="og:description"
                content={metadata.openGraph.description}
            />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:type" content={metadata.openGraph.type} />
            {metadata.openGraph.images.map((image, index) => (
                <meta property="og:image" key={index} content={image.url} />
            ))}

            {/* Дополнительные метаданные */}
            <meta name="keywords" content={metadata.keywords} />
            <meta name="viewport" content={metadata.viewport} />
            <link rel="icon" href={metadata.icons} />
        </Head>
    );
};

export default HeadMeta;
