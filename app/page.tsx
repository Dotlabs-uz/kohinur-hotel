import CarauselSection from "@/components/carousel";
import { ButtomCarousel } from "@/components/slider";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { IoIosCall, IoMdTime } from "react-icons/io";

export default function Home() {
    return (
        <main>
            <section className="relative h-[860px] max-xl:h-[600px] max-lg:h-[500px] max-md:h-[430px] flex flex-col gap-0 items-center justify-center text-white">
                <Image
                    src={"/home_page/first_section_image.jpg"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243F4D] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-[187px] leading-[150px] max-xl:text-[130px] max-xl:leading-[100px] max-lg:text-[110px] max-md:text-[80px] max-sm:text-[47px] max-sm:leading-[40px] font-cormorant">
                    A JOURNEY OF
                </h1>
                <p className="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-xs font-cormorant">
                    COMFORT - CULTURE - EXPERIENCES
                </p>
            </section>
            <section className="relative pt-11 max-lg:pt-5 overflow-hidden">
                <Image
                    src={"/home_page/section2_mask_img.png"}
                    width={400}
                    height={500}
                    alt=""
                    className="absolute -top-32 left-0 w-full h-full bg-contain object-cover bg-center -z-20"
                />
                <div className="m-auto w-fit flex flex-col items-center justify-center">
                    <p className="text-[#05243F] text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-sm">
                        О нас
                    </p>
                    <Image
                        src={"/home_page/section2_vector.svg"}
                        width={100}
                        height={100}
                        alt=""
                        className="w-[15px] max-lg:w-[10px] max-md:w-[8px]"
                    />
                    <h2 className="text-[#05243F] text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-cormorant text-center max-w-[850px] max-xl:max-w-[530px] max-md:max-w-[320px] font-semibold mt-10 max-lg:mt-5 max-sm:mt-2">
                        Добро пожаловать в оазис роскоши и спокойствия
                    </h2>
                </div>
                <Container>
                    <div className="w-full flex max-lg:flex-col gap-3 max-lg:gap-20 max-sm:gap-12 mt-20 max-md:mt-10 max-sm:mt-5 h-[600px] max-lg:h-auto">
                        <div className="relative w-full max-lg:h-[550px] max-sm:h-[380px]  max-[420px]:h-[300px]">
                            <Image
                                src={"/home_page/section2_img1.jpg"}
                                width={500}
                                height={390}
                                alt=""
                                className="w-[530px] max-md:w-[450px] max-sm:w-[350px]  max-[420px]:w-[270px]"
                            />
                            <Image
                                src={"/home_page/section2_img2.png"}
                                width={500}
                                height={390}
                                alt=""
                                className="w-[420px] max-md:w-[370px] max-sm:w-[270px] max-[420px]:w-[200px] absolute bottom-0 right-0"
                            />
                        </div>
                        <div className="text-[#2A3D4D] w-full h-full flex flex-col justify-between max-lg:gap-16 max-md:gap-10 max-sm:gap-6 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                            <p className="max-w-[530px] max-sm:max-w-[260px]">
                                “Kohinur Plaza” Hotel & Spa расположен в старой
                                части древнего города Самарканд в шаговой
                                доступности от Сиабского базара и Соборной
                                мечети Биби-Ханым.
                            </p>
                            <div className="pl-[120px] pb-6">
                                <p>
                                    Интерьер отеля гармонично совемещает в себе
                                    европейский стиль с элементами национального
                                    колорита. Благодаря настенным росписям
                                    ручной работы, Вы заглянете в прошлое города
                                    Самарканд
                                </p>
                                <Button className="rounded-none bg-transparent text-black hover:bg-[#00000012] border border-black px-20 py-5 max-sm:px-10 max-sm:py-3 text-xl max-sm:text-xs font-normal mt-10 max-sm:mt-5">
                                    Забронировать
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="mt-28 max-sm:mt-14">
                <div className="flex flex-col items-center justify-center gap-5 max-sm:gap-3">
                    <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F]">
                        Номерной фонд
                    </span>
                    <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-semibold font-cormorant text-[#05243F]">
                        Проживание
                    </h2>
                    <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[750px] max-sm:max-w-[340px] text-center">
                        Наслаждайтесь превосходным комфортом в наших номерах,
                        где каждая деталь заботливо продумана для вашего
                        удобства.
                    </p>
                </div>
                <div className="max-w-[1010px] max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-[90%] m-auto overflow-hidden mt-20 max-lg:mt-12 max-sm:mt-5">
                    <div className="flex items-center justify-between text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-medium">
                        {/* <button className="text-[#F9A52E] border-b-2 border-[#F9A52E]">
                            Standart
                        </button>
                        <button>Deluxe</button>
                        <button>Junior suite</button>
                        <button>Senior suite</button> */}
                        <ButtomCarousel
                            data={[
                                "Standart",
                                "Deluxe",
                                "Junior suite",
                                "Senior suite",
                            ]}
                        />
                    </div>
                </div>
                <div className="w-full m-auto overflow-hidden relative mt-14 max-sm:mt-6">
                    <CarauselSection />
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
                <div className="max-w-[1010px] max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-[90%] m-auto overflow-hidden mt-20 max-lg:mt-12 max-sm:mt-5">
                    <div className="flex items-center justify-between text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-medium">
                        {/* <button className="text-[#F9A52E] border-b-2 border-[#F9A52E]">
                            Услуги и развлечения
                        </button>
                        <button>Мероприятия</button>
                        <button>Ресторан и бар</button>
                        <button>SPA</button> */}
                        <ButtomCarousel
                            data={[
                                "Услуги и развлечения",
                                "Мероприятия",
                                "Ресторан и бар",
                                "SPA",
                            ]}
                        />
                    </div>
                </div>
                <Container>
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
                </Container>
            </section>
            <section className="mt-28 max-sm:mt-14">
                <div className="w-full flex flex-col items-center justify-center gap-5 max-sm:gap-2">
                    <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F]">
                        Отзывы
                    </span>
                    <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-w-[750px] max-lg:max-w-[500px] max-sm:max-w-[280px] font-semibold font-cormorant text-[#05243F] text-center">
                        Что говорят о нас наши гости
                    </h2>
                </div>
                <Container>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-5 max-sm:gap-3 mt-12 max-md:mt-8 max-sm:mt-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white shadow-lg h-[420px] max-md:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 max-md:h-14 max-md:w-14 max-sm:h-8 max-sm:w-8 rounded-full bg-[#D9D9D9]"></div>
                                    <p className="text-[#828282] mt-2 max-md:mt-1 max-sm:mt-[2px] max-md:text-sm max-sm:text-[7px]">
                                        Donquixote Doflamingo
                                    </p>
                                </div>

                                <Image
                                    src={"/home_page/“”.png"}
                                    width={300}
                                    height={200}
                                    alt=""
                                    className="w-[65px] max-md:w-[50px] max-sm:w-[25px] mt-10 max-md:mt-5 max-sm:mt-3"
                                />
                                <p className="text-xl font-medium text-center max-w-[340px] max-md:max-w-[200px] max-sm:max-w-[130px] mt-8 max-md:mt-4 max-sm:mt-3 max-md:text-base max-sm:text-xs">
                                    With the opening of its doors, the Kohinur
                                    Plaza welcomes discerning travelers from all
                                    corners
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-7 max-md:gap-5 max-sm:gap-3 mt-[50px] max-md:mt-[30px] max-sm:mt-[25px]">
                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[530px] max-sm:max-w-[340px] text-center">
                            With the opening of its doors, the Kohinur Plaza
                            welcomes discerning travelers from all corners
                        </p>
                        <Button className="rounded-none text-white py-4 px-20 max-sm:py-2 max-sm:px-9 bg-[#05243F] text-xl max-sm:text-xs font-medium ">
                            Забронировать
                        </Button>
                    </div>
                </Container>
            </section>
            <section className="mt-40 max-lg:mt-20 max-sm:mt-14">
                <Container>
                    <div className="flex max-lg:flex-col max-lg:gap-5 justify-between text-[#05243F]">
                        <h2 className="w-full text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold font-cormorant">
                            Остались ещё вопросы?
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Как забронировать номер?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Is it styled?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that
                                    matches the other components&apos;
                                    aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Is it animated?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you
                                    can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-4xl max-lg:text-2xl max-md:text-xl font-cormorant max-sm:text-lg font-bold">
                                    Что находится рядом с отелем?
                                </AccordionTrigger>
                                <AccordionContent>
                                    “Kohinur Plaza” Hotel & Spa расположен в
                                    старой части древнего города Самарканд в
                                    шаговой доступности от Сиабского базара и
                                    Соборной мечети Биби-Ханым.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </section>
            <section className="mt-20 max-md:mt-10 max-sm:mt-3 bg-[#05243F] relative">
                <Container>
                    <div className="w-1/2 max-lg:w-full pt-9 pb-16 text-white flex flex-col max-lg:flex-row max-lg:justify-between max-md:flex-col gap-8">
                        <div>
                            <h3 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-bold text-[#F9A52E] font-cormorant">
                                Контакты и локация
                            </h3>
                            <p className="mt-5 max-w-[350px] max-sm:text-xs">
                                “Kohinur Plaza” Hotel & Spa расположен в старой
                                части древнего города Самарканд в шаговой
                                доступности от Сиабского базара и Соборной
                                мечети Биби-Ханым.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 max-sm:gap-3 max-sm:text-xs">
                            <h3 className="font-cormorant text-3xl max-sm:text-lg">
                                Сontact us
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
                                        <span>Samarkand</span>
                                        <span>st. Mirzo-Ulugbek 52</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <IoMdTime
                                        size={25}
                                        color="white"
                                        className="max-sm:w-[18px]"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span>Понедельник-Воскресенье</span>
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
