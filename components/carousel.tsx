import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

const CarauselSection = ({ data }: any) => {

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-[150%] max-lg:w-[100%] -translate-x-[19%] max-lg:translate-x-0"
        >
            <CarouselContent className="gap-5 max-lg:gap-0">
                <CarouselItem className="lg:basis-1/3 max-lg:hidden"></CarouselItem>
                {data.map((item: any) => (
                    <CarouselItem data-aos="fade-left" key={item.id} className="lg:basis-1/3">
                        <div className="">
                            <Image
                                src={"/images/home_page/first_section_image.webp"}
                                width={400}
                                height={300}
                                alt=""
                                className="w-full h-[500px] max-md:h-[400px] max-sm:h-[280px] object-cover"
                            />

                            <div className="flex flex-col items-center justify-center gap-3 max-lg:gap-1 mt-20 max-md:mt-14 max-sm:mt-10">
                                <h3 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold font-cormorant text-[#F9A52E] text-center">
                                    {item.title}
                                </h3>
                                <p className="text-center max-w-xl max-md:max-w-md max-md:text-sm max-sm:text-xs max-sm:w-[90%]">
                                {item.info}
                                </p>
                                <button className="mt-4 max-sm:mt-2 rounded-none text-white py-4 px-20 max-sm:py-2 max-sm:px-9 bg-[#05243F] text-xl max-sm:text-xs font-medium">
                                    Забронировать
                                </button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
                <CarouselItem className="basis-0 lg:basis-1/3"></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-1/2 -translate-x-[120%] max-lg:-translate-x-[125%] translate-y-28 max-md:translate-y-20 max-sm:translate-y-12" />
            <CarouselNext className="left-1/2 max-lg:-translate-x-[25%] translate-y-28 max-md:translate-y-20 max-sm:translate-y-12" />
        </Carousel>
    );
};

export default CarauselSection;
