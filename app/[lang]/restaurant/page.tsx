import CarauselSection from "@/components/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Nutrition",
    description: "Four star hotel in Samarkand",
    keywords:"Kohinur, отель, четыре звезды, Самарканд, Узбекистан, роскошь, ресторан, спа, бассейн, номера",
    viewport: "width=device-width, initial-scale=1.0",
};

const RestaurantPage = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}) => {
    const { restaurantPage, button } = await getDictionary(lang);

    return (
        <div className="mb-28 max-lg:mb-16 overflow-hidden">
            <section className="relative h-[400px] max-lg:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center text-white">
                <Image
                    src={"/images/restaround_image.png"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243F4D] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1
                    data-aos="zoom-in"
                    className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant text-center"
                >
                    {restaurantPage.section1.h1}
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="mt-3 max-w-xl max-md:max-w-xs max-sm:max-w-[280px] text-center text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs font-cormorant"
                >
                    {restaurantPage.section1.p}
                </p>
            </section>
            <div className="flex flex-col items-center justify-center gap-3 mt-24 max-lg:mt-10 max-sm:w-[90%] max-sm:m-auto max-sm:mt-10">
                <p className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-light">
                    {restaurantPage.section2.span}
                </p>
                <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant font-semibold text-center">
                    {restaurantPage.section2.h1}
                </h2>
                <p className="text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm text-center max-w-xl font-light">
                    {restaurantPage.section2.p}
                </p>
            </div>
            <div className="w-full m-auto overflow-hidden relative mt-14 max-sm:mt-6">
                <CarauselSection data={restaurantPage.section2.foods} button={button}/>
            </div>
            <Container>
                <section className="grid grid-cols-3 max-lg:grid-cols-2 gap-5 max-sm:gap-3 auto-rows-[350px] max-xl:auto-rows-[300px] max-md:auto-rows-[250px] max-sm:auto-rows-[160px] mt-40 max-lg:mt-20 max-sm:mt-8">
                    <div data-aos="fade-right">
                        <Image
                            src={"/images/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-left" className="col-start-2 col-end-4 pt-8 px-14 max-md:pt-4 max-md:pl-5 bg-[#05243F] text-white max-lg:col-start-1  max-lg:col-end-3 max-lg:row-start-2 max-lg:row-end-3">
                        <h3 className="text-5xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl font-bold font-cormorant">
                            {restaurantPage.section3.title}
                        </h3>
                        <p className="text-[#CBDFF1] text-2xl max-md:text-xl max-sm:text-xs max-w-[640px] mt-3 max-sm:mt-1">
                            {restaurantPage.section3.text}
                        </p>
                    </div>
                    <div data-aos="fade-right">
                        <Image
                            src={"/images/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <Image
                            src={"/images/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <Image
                            src={"/images/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>
                <section className="flex max-lg:flex-col gap-5 mt-32 max-md:mt-16 max-sm:mt-8">
                    <div className="w-full">
                        <h3 data-aos="fade-right" className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-cormorant font-bold">
                            {restaurantPage.section4.title}
                        </h3>
                        <p data-aos="fade-right" className="text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm max-w-sm mt-4">
                            {restaurantPage.section4.p}
                        </p>
                    </div>
                    <div className="w-full border-b-2 border-[#445666] pb-10">
                        <Accordion type="single" collapsible className="w-full">
                            {restaurantPage.section4.data.map((item) => (
                                <AccordionItem
                                data-aos="fade-left"
                                data-aos-delay={`${item.id + "00"}`}
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
                        <button data-aos="fade-left"
                                data-aos-delay="1000" className="text-xl max-lg:text-lg max-md:text-base mt-8 text-[#05243F] rounded-none bg-transparent border border-[#05243F] px-20 py-7 max-sm:mt-5 hover:bg-transparent hover:shadow-md max-lg:mb-7 max-lg:bg-[#F9A52E] max-lg:border-none max-sm:w-full">
                            {button}
                        </button>
                    </div>
                </section>
                <section className="mt-28 max-sm:mt-14">
                    <div className="flex flex-col items-center justify-center gap-5 max-sm:gap-3">
                        <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F]">
                            {restaurantPage.section5.span}
                        </span>
                        <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-w-[950px] max-lg:max-w-[600px] max-sm:max-w-[300px] font-semibold font-cormorant text-[#05243F] text-center">
                            {restaurantPage.section5.title}
                        </h2>
                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[750px] max-sm:max-w-[340px] text-center">
                            {restaurantPage.section5.p}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-x-4 gap-y-10 max-sm:gap-y-5 mt-12 max-md:mt-8 max-sm:mt-6">
                        {restaurantPage.section5.data.map((item) => (
                            <div key={item.id}>
                                <Image
                                    src={item.image}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-full"
                                />
                                <h4 className="text-5xl max-lg:text-4xl max-md:2xl max-sm:text-base font-bold font-cormorant mt-8 max-md:mt-6 max-sm:mt-3">
                                    {item.title}
                                </h4>
                                <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs mt-3 max-md:mt-2 max-sm:mt-1">
                                    {item.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default RestaurantPage;
