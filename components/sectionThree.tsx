"use client";

import { useEffect, useState } from "react";
import CarauselSection from "./carousel";
import { ButtomCarousel } from "./slider";

interface SectionThreeProps {
    data: any;
    buttonText: string;
}

const SectionThree: React.FunctionComponent<SectionThreeProps> = ({
    data,
    buttonText,
}) => {
    const [categoryTitle, setCategoryTitle] = useState("Standart");
    const [filteredArr, setFilteredArr] = useState([]);

    useEffect(() => {
        let arr: any = [];

        data.section3_filter.filter((item: any) => {
            if (item.title === categoryTitle) {
                arr.push(item);
            }
        });

        setFilteredArr(arr);
    }, [categoryTitle]);

    return (
        <section className="mt-28 max-sm:mt-14">
            <div className="flex flex-col items-center justify-center gap-5 max-sm:gap-3">
                <span className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-extralight text-[#05243F] text-center">
                    {data.section3.span}
                </span>
                <h2 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-semibold font-cormorant text-[#05243F]">
                    {data.section3.title}
                </h2>
                <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs text-[#2A3D4D] max-w-[750px] max-sm:max-w-[340px] text-center">
                    {data.section3.p}
                </p>
            </div>
            <div className="max-w-[1010px] max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-[90%] m-auto overflow-hidden mt-20 max-lg:mt-12 max-sm:mt-5">
                <div className="flex items-center justify-between text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-medium">
                    <ButtomCarousel
                        data={data.section3.filterButtons}
                        categoryTitle={categoryTitle}
                        setCategoryTitle={setCategoryTitle}
                    />
                </div>
            </div>
            <div className="w-full m-auto overflow-hidden relative mt-14 max-sm:mt-6">
                <CarauselSection data={filteredArr} button={buttonText}/>
            </div>
        </section>
    );
};

export default SectionThree;
