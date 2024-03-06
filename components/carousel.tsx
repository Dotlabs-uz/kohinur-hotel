import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import Container from "./ui/container";

const CarauselSection = ({ data, button }: any) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="mx-auto max-w-4xl"
        >
            <CarouselContent className="gap-5 max-lg:gap-0">
                {data.map((item: any) => (
                    <CarouselItem key={item.id} className="">
                        <div data-aos="fade-left" className="">
                            <Image
                                src={
                                    "/images/home_page/first_section_image.webp"
                                }
                                width={400}
                                height={300}
                                alt=""
                                className="w-full h-[500px] max-md:h-[400px] max-sm:h-[280px] object-cover"
                            />

                            <div className="flex flex-col items-center justify-center gap-3 max-lg:gap-1 mt-20 max-md:mt-14">
                                <h3 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold font-cormorant text-[#F9A52E] text-center">
                                    {item.title}
                                </h3>
                                <p className="text-center max-w-xl max-md:max-w-md max-md:text-sm max-sm:w-[90%]">
                                    {item.info}
                                </p>
                                <button className="mt-4 max-sm:mt-2 rounded-none text-white py-4 px-20 max-sm:py-3 max-sm:px-9 bg-[#05243F] text-xl max-sm:text-base font-medium">
                                    {button}
                                </button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-1/2 -translate-x-[120%] max-lg:-translate-x-[130%] translate-y-28 max-md:translate-y-20 max-sm:translate-y-8" />
            <CarouselNext className="left-1/2 max-lg:-translate-x-[%] translate-y-28 max-md:translate-y-20 max-sm:translate-y-8" />
        </Carousel>
    );
};

export default CarauselSection;
