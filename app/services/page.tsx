import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

interface ServicesPageProps {}

const ServicesPage: React.FunctionComponent<ServicesPageProps> = () => {
    return (
        <div className="mb-28 max-lg:mb-16">
            <section className="relative h-[400px] max-lg:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center text-white">
                <Image
                    src={"/services_image.png"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243F4D] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant text-center">
                    Сервис и услуги
                </h1>
                <p className="mt-3 max-w-xl text-center text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs font-cormorant">
                    With the opening of its doors, the Kohinur Plaza welcomes
                    discerning travelers from all corners
                </p>
            </section>
            <div className="flex flex-col items-center justify-center gap-3 mt-24 max-lg:mt-10">
                <p className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-light">Отдых</p>
                <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant font-semibold">
                    Массаж и СПА
                </h2>
                <p className="text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm text-center max-w-xl font-light">
                    With the opening of its doors, the Kohinur Plaza welcomes
                    discerning travelers from all corners
                </p>
            </div>
            <Container>
                <section className="mt-20 max-lg:mt-16 max-sm:mt-7">
                    <div className="flex max-lg:flex-col-reverse gap-14 max-lg:gap-8 max-sm:gap-5">
                        <div className="w-full">
                            <span className="text-3xl max-lg:text-2xl max-md:text-xl font-light">
                                Services
                            </span>
                            <h3 className="mt-6 max-md:mt-3 text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-cormorant font-bold text-[#05243f]">
                                Spa & Wellness
                            </h3>
                            <p className="text-2xl max-lg:text-lg max-md:text-base max-sm:text-sm text-[#2A3D4D] mt-5 max-md:mt-3 max-sm:mt-2">
                                With the opening of its doors, the Kohinur Plaza
                                welcomes discerning travelers from all corners
                                of the globe to experience the magic of
                                Uzbekistan in unparalleled comfort and style.
                            </p>
                            <p className="mt-20 max-md:mt-14 max-sm:mt-10 text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg text-[#2A3D4D] font-light">
                                Hours of operation
                            </p>
                            <p className="mt-6 max-md:mt-3">
                                Monday – Thursday | 10:00am – 5:00pm
                            </p>
                            <p>Friday – Sunday | 9:00am – 6:00pm</p>
                            <Button className="text-xl max-lg:text-lg max-md:text-base mt-8 max-md:mt-6 text-[#05243F] rounded-none bg-transparent border border-[#05243F] px-20 py-7 hover:bg-transparent hover:shadow-md">
                                Забронировать
                            </Button>
                        </div>
                        <div className="w-full">
                            <Image
                                src={"/services_page_img.png"}
                                width={300}
                                height={400}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </section>
                <p className="text-4xl max-lg:text-3xl max-md:text-2xl font-cormorant font-bold mt-32 max-md:mt-20 max-sm:mt-16 max-w-[800px] m-auto text-center">
                    “The relaxed and sophisticated ambiance allowed me to melt
                    into this treatment of royalty.”
                </p>
                <section className="flex max-lg:flex-col gap-5 mt-36 max-md:mt-20 max-sm:mt-14">
                    <div className="w-full">
                        <Image
                            src={"/services_page_img.png"}
                            width={300}
                            height={300}
                            alt=""
                            className="w-full h-[700px] max-lg:h-auto"
                        />
                    </div>
                    <div className="w-full border-b-2 border-[#445666]">
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
                        <Button className="text-xl max-lg:text-lg max-md:text-base mt-8 text-[#05243F] rounded-none bg-transparent border border-[#05243F] px-20 py-7 max-sm:mt-5 hover:bg-transparent hover:shadow-md max-lg:mb-7 max-lg:bg-[#F9A52E] max-lg:border-none max-sm:w-full">
                            Забронировать
                        </Button>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ServicesPage;
