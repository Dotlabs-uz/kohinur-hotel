"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

export function ButtomCarousel({ data, categoryTitle, setCategoryTitle }:any) {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
                {data.map((item: string, idx: number) => (
                    <div
                        key={idx}
                        onClick={()=> setCategoryTitle(item)}
                        className="flex flex-grow flex-shrink-0 min-w-0"
                    >
                        <button
                            className={cn(
                                "ml-5 text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base hover:text-[#F9A52E] hover:border-b-2 hover:border-[#F9A52E] ease-linear duration-100",
                                item === categoryTitle
                                    ? "text-[#F9A52E] border-b-2 border-[#F9A52E]"
                                    : "text-[#686868]"
                            )}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
