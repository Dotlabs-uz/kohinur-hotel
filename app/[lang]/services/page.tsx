import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

const ServicesPage = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}) => {
    const { servicesPage, button } = await getDictionary(lang);

    return (
        <div className="mb-28 max-lg:mb-16">
            <section className="relative h-[400px] max-lg:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center text-white">
                <Image
                    src={"/images/services_image.png"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243f7a] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1
                    data-aos="zoom-in"
                    className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant text-center"
                >
                    {servicesPage.section1.h1}
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="mt-3 max-w-xl text-center text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs font-cormorant"
                >
                    {servicesPage.section1.p}
                </p>
            </section>
            <div className="flex flex-col items-center justify-center gap-3 mt-24 max-lg:mt-10">
                <p className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-light">
                    {servicesPage.section2.span}
                </p>
                <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant font-semibold">
                    {servicesPage.section2.h1}
                </h2>
                <p className="text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm text-center max-w-xl font-light">
                    {servicesPage.section2.p}
                </p>
            </div>
            <Container>
                <section className="mt-20 max-lg:mt-16 max-sm:mt-7">
                    <div className="flex max-lg:flex-col-reverse gap-14 max-lg:gap-8 max-sm:gap-5">
                        <div className="w-full">
                            <span
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="text-3xl max-lg:text-2xl max-md:text-xl font-light"
                            >
                                {servicesPage.section2.block.span}
                            </span>
                            <h3
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="mt-6 max-md:mt-3 text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-cormorant font-bold text-[#05243f]"
                            >
                                {servicesPage.section2.block.titel}
                            </h3>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="text-2xl max-lg:text-lg max-md:text-base max-sm:text-sm text-[#2A3D4D] mt-5 max-md:mt-3 max-sm:mt-2"
                            >
                                {servicesPage.section2.block.info}
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="mt-20 max-md:mt-14 max-sm:mt-10 text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg text-[#2A3D4D] font-light"
                            >
                                {servicesPage.section2.block.workTime}
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="mt-6 max-md:mt-3"
                            >
                                {servicesPage.section2.block.first} | 10:00am –
                                5:00pm
                            </p>
                            <p data-aos="fade-right" data-aos-delay="500">
                                {servicesPage.section2.block.first}| 9:00am –
                                6:00pm
                            </p>
                            <button
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="text-xl max-lg:text-lg max-md:text-base mt-8 max-md:mt-6 text-[#05243F] rounded-none bg-transparent border border-[#05243F] px-20 py-7 hover:bg-transparent hover:shadow-md"
                            >
                                {button}
                            </button>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="500"
                            className="w-full"
                        >
                            <Image
                                src={"/images/services_page_img.png"}
                                width={300}
                                height={400}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </section>
                <p className="text-4xl max-lg:text-3xl max-md:text-2xl font-cormorant font-bold mt-32 max-md:mt-20 max-sm:mt-16 max-w-[800px] m-auto text-center">
                    {servicesPage.section2.p}
                </p>
                <section className="flex max-lg:flex-col gap-5 mt-36 max-md:mt-20 max-sm:mt-14">
                    <div className="w-full">
                        <Image
                            src={"/images/services_page_img.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-[700px] max-lg:h-auto"
                        />
                    </div>
                    <div className="w-full border-b-2 border-[#445666]">
                        <Accordion type="single" collapsible className="w-full">
                            {servicesPage.section3.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={`item-${item.id}`}
                                    className="border-b border-[#445666]"
                                >
                                    <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <button className="text-xl max-lg:text-lg max-md:text-base mt-8 text-[#05243F] rounded-none bg-transparent border border-[#05243F] px-20 py-7 max-sm:mt-5 hover:bg-transparent hover:shadow-md max-lg:mb-7 max-lg:bg-[#F9A52E] max-lg:border-none max-sm:w-full">
                            {button}
                        </button>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ServicesPage;
