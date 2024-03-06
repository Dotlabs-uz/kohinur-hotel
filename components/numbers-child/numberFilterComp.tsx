"use client";

import { useEffect, useState } from "react";
import { ButtomCarousel } from "../slider";
import Container from "../ui/container";
import FilterChild from "./numberFilterChild";

const NumberFilterComp = ({ data, buttonText }: any) => {
    const [categoryTitle, setCategoryTitle] = useState("Standart");
    const [filteredArr, setFilteredArr] = useState([]);


    useEffect(() => {
        let arr: any = [];

        data.section2_filter.filter((item: any) => {
            if (item.title === categoryTitle) {
                arr.push(item);
            }
        });

        setFilteredArr(arr);
    }, [categoryTitle]);

    return (
        <section className="my-14 max-lg:my-10 max-sm:my-8 overflow-hidden">
            <Container>
                <div className="max-w-3xl m-auto">
                    <ButtomCarousel
                        data={data.filterButtons}
                        categoryTitle={categoryTitle}
                        setCategoryTitle={setCategoryTitle}
                    />
                </div>
                {filteredArr.map((item: any) => (
                    <FilterChild key={item.id} item={item} buttonText={buttonText}/>
                ))}
            </Container>
        </section>
    );
};

export default NumberFilterComp;
