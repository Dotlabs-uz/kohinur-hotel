import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

interface CaroucelNumberPageProps {}

const CaroucelNumberPage: React.FunctionComponent<
    CaroucelNumberPageProps
> = () => {
    return (
        <Carousel className="w-full h-full">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="h-full">
                            <Image
                                src={"/images/home_page/first_section_image.webp"}
                                width={300}
                                height={500}
                                alt=""
                                className="w-full h-[450px] max-lg:h-[300px] max-sm:h-[200px] object-cover bg-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
        </Carousel>
    );
};

export default CaroucelNumberPage;
