import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { IoIosCall, IoMdTime } from "react-icons/io";
import SectionThree from "@/components/sectionThree";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionFourth from "@/components/sectionFourth";

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { homePage, button } = await getDictionary(lang);

    return (
        <main>
            <section className="relative h-[750px] max-xl:h-[600px] max-lg:h-[500px] max-md:h-[430px] flex flex-col gap-0 items-center justify-center text-white">
                <Image
                    src={"/images/home_page/first_section_image.webp"}
                    width={500}
                    height={500}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243F4D] absolute top-0 left-0 w-full h-full -z-10 "></div>
                <h1
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl font-cormorant text-center"
                >
                    {homePage.section1.h1}
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-xs font-cormorant"
                >
                    {homePage.section1.p}
                </p>
            </section>
            <section className="relative pt-11 max-lg:pt-5 overflow-hidden">
                <Image
                    src={"/images/home_page/section2_mask_img.webp"}
                    width={400}
                    height={500}
                    alt=""
                    className="absolute -top-32 left-0 w-full h-full bg-contain object-cover bg-center -z-20"
                />
                <div className="m-auto w-fit flex flex-col items-center justify-center">
                    <p
                        data-aos="fade-down"
                        data-aos-delay="100"
                        className="text-[#05243F] text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-sm"
                    >
                        {homePage.section2.span}
                    </p>
                    <Image
                        data-aos="fade-up"
                        src={"/images/home_page/section2_vector.svg"}
                        width={100}
                        height={100}
                        alt=""
                        className="w-[15px] max-lg:w-[10px] max-md:w-[8px]"
                    />
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-anchor-placement="top-bottom"
                        className="text-[#05243F] text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-cormorant text-center max-w-[850px] max-xl:max-w-[530px] max-md:max-w-[320px] font-semibold mt-10 max-lg:mt-5 max-sm:mt-2"
                    >
                        {homePage.section2.title}
                    </h2>
                </div>
                <Container>
                    <div className="w-full flex max-lg:flex-col gap-3 max-lg:gap-20 max-sm:gap-12 mt-20 max-md:mt-10 max-sm:mt-5 h-[600px] max-lg:h-auto">
                        <div className="relative w-full max-lg:h-[550px] max-sm:h-[380px]  max-[420px]:h-[300px]">
                            <Image
                                src={"/images/home_page/section2_img1.webp"}
                                width={500}
                                height={390}
                                alt=""
                                className="w-[530px] max-md:w-[450px] max-sm:w-[350px]  max-[420px]:w-[270px]"
                            />
                            <Image
                                src={"/images/home_page/section2_img2.webp"}
                                width={500}
                                height={390}
                                alt=""
                                className="w-[420px] max-md:w-[370px] max-sm:w-[270px] max-[420px]:w-[200px] absolute bottom-0 right-0"
                            />
                        </div>
                        <div className="text-[#2A3D4D] w-full h-full flex flex-col justify-between max-lg:gap-16 max-md:gap-10 max-sm:gap-6 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                            <p className="max-w-[530px] max-sm:max-w-[260px]">
                                {homePage.section2.p1}
                            </p>
                            <div className="pl-[120px] pb-6">
                                <p>{homePage.section2.p2}</p>
                                <button className="text-black hover:bg-[#00000012] border border-black px-20 py-5 max-sm:px-10 max-sm:py-3 text-xl max-sm:text-xs font-normal mt-10 max-sm:mt-5">
                                    {button}
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <SectionThree data={homePage} />
            <SectionFourth data={homePage?.section4} />
            <section className="mt-28 max-sm:mt-14">
                <div className="w-full flex flex-col items-center justify-center gap-5 max-sm:gap-2">
                    <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F]">
                        {homePage.section5.span}
                    </span>
                    <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-w-[750px] max-lg:max-w-[500px] max-sm:max-w-[280px] font-semibold font-cormorant text-[#05243F] text-center">
                        {homePage.section5.title}
                    </h2>
                </div>
                <Container>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-5 max-sm:gap-3 mt-12 max-md:mt-8 max-sm:mt-6">
                        {homePage.section5.data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-lg h-[420px] max-md:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 max-md:h-14 max-md:w-14 max-sm:h-8 max-sm:w-8 rounded-full bg-[#D9D9D9]"></div>
                                    <p className="text-[#828282] mt-2 max-md:mt-1 max-sm:mt-[2px] max-md:text-sm max-sm:text-[7px]">
                                        {item.name}
                                    </p>
                                </div>

                                <Image
                                    src={"/images/home_page/“”.png"}
                                    width={300}
                                    height={200}
                                    alt=""
                                    className="w-[65px] max-md:w-[50px] max-sm:w-[25px] mt-10 max-md:mt-5 max-sm:mt-3"
                                />
                                <p className="text-xl font-medium text-center max-w-[340px] max-md:max-w-[200px] max-sm:max-w-[130px] mt-8 max-md:mt-4 max-sm:mt-3 max-md:text-base max-sm:text-xs">
                                    {item.p}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-7 max-md:gap-5 max-sm:gap-3 mt-[50px] max-md:mt-[30px] max-sm:mt-[25px]">
                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[530px] max-sm:max-w-[340px] text-center">
                            {homePage.section5.p}
                        </p>
                        <button className="text-white py-4 px-20 max-sm:py-2 max-sm:px-9 bg-[#05243F] text-xl max-sm:text-xs font-medium">
                            {button}
                        </button>
                    </div>
                </Container>
            </section>
            <section className="mt-40 max-lg:mt-20 max-sm:mt-14">
                <Container>
                    <div className="flex max-lg:flex-col max-lg:gap-5 justify-between text-[#05243F]">
                        <h2 className="w-full text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold font-cormorant">
                            {homePage.section6.title}
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {homePage.section6.data.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={`item-${item.id}`}
                                >
                                    <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Container>
            </section>
            <section className="mt-20 max-md:mt-10 max-sm:mt-3 bg-[#05243F] relative">
                <Container>
                    <div className="w-1/2 max-lg:w-full pt-9 pb-16 text-white flex flex-col max-lg:flex-row max-lg:justify-between max-md:flex-col gap-8">
                        <div>
                            <h3 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-bold text-[#F9A52E] font-cormorant">
                                {homePage.section7.title}
                            </h3>
                            <p className="mt-5 max-w-[350px] max-sm:text-xs">
                                {homePage.section7.p}
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 max-sm:gap-3 max-sm:text-xs">
                            <h3 className="font-cormorant text-3xl max-sm:text-lg">
                                {homePage.section7.title2}
                            </h3>
                            <div className="flex flex-col gap-5 max-sm:flex-row max-sm:flex-wrap">
                                <div className="flex items-center gap-4 ">
                                    <IoIosCall
                                        size={25}
                                        color="white"
                                        className="max-sm:w-[18px]"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <Link href={"tel:+998662221234"}>
                                            +998 66 222 12 34
                                        </Link>
                                        <Link href={"tel:+998662221234"}>
                                            +998 66 222 12 34
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrLocation
                                        size={26}
                                        color="white"
                                        className="max-sm:w-[18px]"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span>
                                            {" "}
                                            {homePage.section7.adress1}
                                        </span>
                                        <span>
                                            {" "}
                                            {homePage.section7.adress2}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <IoMdTime
                                        size={25}
                                        color="white"
                                        className="max-sm:w-[18px]"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span>{homePage.section7.day}</span>
                                        <span>08:00 AM- 05:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3A6c92e474d1b2803cf74e1c1b850a9acdd20384e82aed8183bbc181c8b4fb6050&amp;source=constructor"
                    frameBorder="0"
                    className="top-0 right-0 h-full w-full block lg:absolute lg:w-1/2 max-lg:h-[400px] max-md:h-[300px] max-sm:h-[250px]"
                ></iframe>
            </section>
        </main>
    );
}
