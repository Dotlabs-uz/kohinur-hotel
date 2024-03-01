"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

export function ButtomCarousel({ data }: { data: any }) {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
                {data.map((item: string, idx: number) => (
                    <div
                        key={idx}
                        className="flex flex-grow flex-shrink-0 min-w-0"
                    >
                        <button
                            className={cn(
                                "ml-5 text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base",
                                idx === 0
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
