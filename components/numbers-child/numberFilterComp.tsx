"use client"

import { useEffect, useState } from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { ButtomCarousel } from "../slider";
import Container from "../ui/container";
import CaroucelNumberPage from "./carousel";

 
const NumberFilterComp= ({data, buttonText}:any) => {

    const [categoryTitle, setCategoryTitle] = useState("Standart")
    const [filteredArr, setFilteredArr] = useState([])

    useEffect(() => {

        let arr:any = []

        data.section2_filter.filter((item:any) => {
            if(item.title === categoryTitle){
                arr.push(item)
            }
        })

        setFilteredArr(arr)
        
        
    }, [categoryTitle])

    return (
        <section className="my-14 max-lg:my-10 max-sm:my-8">
                <Container>
                    <div className="max-w-3xl m-auto">
                        <ButtomCarousel
                            data={data.filterButtons}
                            categoryTitle={categoryTitle}
                            setCategoryTitle={setCategoryTitle}
                        />
                    </div>
                    {filteredArr.map((item:any) => (
                        <div
                            key={item}
                            className="w-full justify-between border-t border-[#C6CACD] mt-14 max-lg:mt-10 max-sm:mt-5 pt-9"
                        >
                            <div className="flex max-lg:flex-col-reverse gap-14 max-lg:gap-8 max-sm:gap-5">
                                <div className="w-full">
                                    <h3 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-cormorant font-bold text-[#05243f]">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-12 max-lg:mt-8 max-sm:mt-5 max-md:text-sm max-sm:text-[8px]">
                                        <div className="flex items-center gap-2">
                                            <GoPerson
                                                size={24}
                                                color="#05243F"
                                                className="max-sm:w-4 max-sm:h-4"
                                            />
                                            <p>{item.quantityPeople} People</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaArrowsLeftRight
                                                size={24}
                                                color="#05243F"
                                                className="max-sm:w-4 max-sm:h-4"
                                            />
                                            <p>{item.size}</p>
                                        </div>
                                    </div>
                                    <p className="text-2xl max-lg:text-lg max-md:text-base max-sm:text-sm text-[#2A3D4D] mt-5 max-md:mt-3 max-sm:mt-2">
                                    {item.info}
                                    </p>
                                    <p className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg text-[#2A3D4D] mt-6 max-md:mt-3 font-medium">
                                        Price: {item.price}
                                    </p>
                                    <button className="text-xl max-lg:text-lg max-md:text-base mt-8 text-[#05243F] border border-[#05243F] px-20 py-6 hover:shadow-md max-lg:bg-[#F9A52E] max-lg:border-none max-lg:w-full max-md:mt-5 ">
                                        {buttonText}
                                    </button>
                                </div>
                                <div className="w-full">
                                    <CaroucelNumberPage />
                                </div>
                            </div>

                            <div className="flex max-lg:flex-col-reverse max-lg:gap-6 gap-14 justify-between mt-14">
                                <div className="w-full">
                                    <h3 className="text-4xl font-bold font-cormorant">
                                        Услуги
                                    </h3>
                                    <ul className="mt-3">
                                        <li>Беслпатный Wi-Fi</li>
                                        <li>Room-service</li>
                                        <li>Личный сервис</li>
                                        <li>Завтрак и ужин</li>
                                        <li>Экслюзивный Спа-доступ</li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-4xl font-bold font-cormorant">
                                        Удобства в номере
                                    </h3>
                                    <div className="w-full flex max-sm:flex-col justify-between mt-3 gap-16 max-sm:gap-5">
                                        <ul className="w-full">
                                            <li>
                                                Доступ в клубный лаундж Regency
                                                Club
                                            </li>
                                            <li>Большой письменный стол</li>
                                            <li>
                                                Душевая кабина с тропическим
                                                душем и отдельная ванна
                                            </li>
                                            <li>
                                                Душевая кабина с тропическим
                                                душем и отдельная ванна
                                            </li>
                                            <li>
                                                55-дюймовый телевизор с плоским
                                                экраном
                                            </li>
                                            <li>Мягкий халат и тапочки</li>
                                            <li>Сейф в номере</li>
                                            <li>Утренняя газета</li>
                                        </ul>
                                        <ul className="w-full">
                                            <li>
                                                Детская кроватка (по запросу)
                                            </li>
                                            <li>
                                                Раскладная кровать (по запросу)
                                            </li>
                                            <li>Телевизор в ванной</li>
                                            <li>Затемняющие шторы</li>
                                            <li>Выбор подушек</li>
                                            <li>Фен</li>
                                            <li>Мини-бар</li>
                                            <li>Кофемашина для эспрессо</li>
                                            <li>Кофеварка и чайник</li>
                                            <li>Утюг и гладильная доска</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Container>
            </section>
    );
}
 
export default NumberFilterComp;