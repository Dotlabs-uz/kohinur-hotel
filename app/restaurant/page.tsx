import CarauselSection from "@/components/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import Image from "next/image";

interface RestaurantPageProps {}

const RestaurantPage: React.FunctionComponent<RestaurantPageProps> = () => {
    return (
        <div className="mb-28 max-lg:mb-16">
            <section className="relative h-[400px] max-lg:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center text-white">
                <Image
                    src={"/restaround_image.png"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243F4D] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant text-center">
                    Ресторан и питание
                </h1>
                <p className="mt-3 max-w-xl max-md:max-w-xs max-sm:max-w-[280px] text-center text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs font-cormorant">
                    With the opening of its doors, the Kohinur Plaza welcomes
                    discerning travelers from all corners
                </p>
            </section>
            <div className="flex flex-col items-center justify-center gap-3 mt-24 max-lg:mt-10 max-sm:w-[90%] max-sm:m-auto max-sm:mt-10">
                <p className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-light">
                    Питание
                </p>
                <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant font-semibold text-center">
                    Ресторан европейской кухни
                </h2>
                <p className="text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm text-center max-w-xl font-light">
                    В нашем ресторане гости всегда могут попробовать
                    национальные и европейские кулинарные шедевры от мастеров
                    кухни высокого класса, также доступна услуга room service
                </p>
            </div>
            <div className="w-full m-auto overflow-hidden relative mt-14 max-sm:mt-6">
                <CarauselSection />
            </div>
            <Container>
                <section className="grid grid-cols-3 max-lg:grid-cols-2 gap-5 max-sm:gap-3 auto-rows-[350px] max-xl:auto-rows-[300px] max-md:auto-rows-[250px] max-sm:auto-rows-[160px] mt-40 max-lg:mt-20 max-sm:mt-8">
                    <div className="">
                        <Image
                            src={"/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-start-2 col-end-4 pt-8 px-14 max-md:pt-4 max-md:pl-5 bg-[#05243F] text-white max-lg:col-start-1  max-lg:col-end-3 max-lg:row-start-2 max-lg:row-end-3">
                        <h3 className="text-5xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl font-bold font-cormorant">
                            Ресторан “Kohinur”
                        </h3>
                        <p className="text-[#CBDFF1] text-2xl max-md:text-xl max-sm:text-xs max-w-[640px] mt-3 max-sm:mt-1">
                            This massage will relieve tension in focus areas
                            including the lower back, feet, and legs are is
                            designed to uplift the mother-to-be. It is typically
                            enjoyed in the second and third trimesters.
                        </p>
                    </div>
                    <div className="">
                        <Image
                            src={"/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={"/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={"/restaround_image.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>
                <section className="flex max-lg:flex-col gap-5 mt-32 max-md:mt-16 max-sm:mt-8">
                    <div className="w-full">
                        <h3 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-cormorant font-bold">
                            Специальные предложения
                        </h3>
                        <p className="text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm max-w-sm mt-4">
                            With the opening of its doors, the Kohinur Plaza
                            welcomes discerning travelers from all corners
                        </p>
                    </div>
                    <div className="w-full border-b-2 border-[#445666] pb-10">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem
                                value="item-1"
                                className="border-b border-[#445666]"
                            >
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Закрытый бассейн
                                </AccordionTrigger>
                                <AccordionContent className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-2"
                                className="border-b border-[#445666]"
                            >
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Финская сауна
                                </AccordionTrigger>
                                <AccordionContent className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                                    Yes. It comes with default styles that
                                    matches the other components&apos;
                                    aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-3"
                                className="border-b border-[#445666]"
                            >
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Турецкий хаммам
                                </AccordionTrigger>
                                <AccordionContent className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                                    Yes. It&apos;s animated by default, but you
                                    can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-4"
                                className="border-b border-[#445666]"
                            >
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Массажные кабинеты
                                </AccordionTrigger>
                                <AccordionContent className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                                    “Kohinur Plaza” Hotel & Spa расположен в
                                    старой части древнего города Самарканд в
                                    шаговой доступности от Сиабского базара и
                                    Соборной мечети Биби-Ханым.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-5"
                                className="border-b border-[#445666]"
                            >
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Турецкий хаммам
                                </AccordionTrigger>
                                <AccordionContent className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                                    This massage will relieve tension in focus
                                    areas including the lower back, feet, and
                                    legs are is designed to uplift the
                                    mother-to-be. It is typically enjoyed in the
                                    second and third trimesters.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <button className="text-xl max-lg:text-lg max-md:text-base mt-8 text-[#05243F] rounded-none bg-transparent border border-[#05243F] px-20 py-7 max-sm:mt-5 hover:bg-transparent hover:shadow-md max-lg:mb-7 max-lg:bg-[#F9A52E] max-lg:border-none max-sm:w-full">
                            Забронировать
                        </button>
                    </div>
                </section>
                <section className="mt-28 max-sm:mt-14">
                    <div className="flex flex-col items-center justify-center gap-5 max-sm:gap-3">
                        <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F]">
                            Наши услуги
                        </span>
                        <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-w-[950px] max-lg:max-w-[600px] max-sm:max-w-[300px] font-semibold font-cormorant text-[#05243F] text-center">
                            Наслаждайтесь каждым моментом
                        </h2>
                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[750px] max-sm:max-w-[340px] text-center">
                            With the opening of its doors, the Kohinur Plaza
                            welcomes discerning travelers from all corners
                        </p>
                    </div>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-x-4 gap-y-10 max-sm:gap-y-5 mt-12 max-md:mt-8 max-sm:mt-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item}>
                                <Image
                                    src={"/home_page/section4_img.png"}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-full"
                                />
                                <h4 className="text-5xl max-lg:text-4xl max-md:2xl max-sm:text-base font-bold font-cormorant mt-8 max-md:mt-6 max-sm:mt-3">
                                    Market
                                </h4>
                                <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs mt-3 max-md:mt-2 max-sm:mt-1">
                                    With the opening of its doors, the Kohinur
                                    Plaza welcomes discerning travelers from all
                                    corners
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
