"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtomCarousel } from "./slider";
import Container from "./ui/container";

const SectionFourth = ({ data }: any) => {
    const [categoryTitle, setCategoryTitle] = useState(data.filterButtons[0]);
    const [filteredArr, setFilteredArr] = useState([]);

    useEffect(() => {
        let arr: any = [];

        data.section4_filter.filter((item: any) => {
            if (item.category === categoryTitle) {
                arr.push(item);
            }
        });

        setFilteredArr(arr);
    }, [categoryTitle]);

    return (
        <section className="mt-28 max-sm:mt-14">
            <div className="flex flex-col items-center justify-center gap-5 max-sm:gap-3">
                <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F]">
                    {data.span}
                </span>
                <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-w-[950px] max-lg:max-w-[600px] max-sm:max-w-[300px] font-semibold font-cormorant text-[#05243F] text-center">
                    {data.title}
                </h2>
                <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[750px] max-sm:max-w-[340px] text-center">
                    {data.p}
                </p>
            </div>
            <div className="max-w-[1010px] max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-[90%] m-auto overflow-hidden mt-20 max-lg:mt-12 max-sm:mt-5">
                <div className="flex items-center justify-between text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-medium">
                    <ButtomCarousel
                        data={data.filterButtons}
                        categoryTitle={categoryTitle}
                        setCategoryTitle={setCategoryTitle}
                    />
                </div>
            </div>
            <Container>
                <div className="overflow-hidden grid grid-cols-3 max-lg:grid-cols-2 gap-x-4 gap-y-10 max-sm:gap-y-5 mt-12 max-md:mt-8 max-sm:mt-6">
                    {filteredArr.map((item:any) => (
                        <div 
                        data-aos="fade-left"  
                        key={item}>
                            <Image
                                src={item.img}
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
            </Container>
        </section>
    );
};

export default SectionFourth;
