
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NumberFilterComp from "@/components/numbers-child/numberFilterComp";


const NumbersPage =async ({
    params: { lang },
}: {
    params: { lang: Locale };
}) => {

    const { numberPage , button} = await getDictionary(lang);
    
    return (
        <div>
            <section className="relative h-[350px] max-xl:h-[600px] max-lg:h-[500px] max-md:h-[430px] max-sm:h-[200px] flex flex-col gap-0 items-center justify-center text-white">
                <Image
                    src={"/images/home_page/first_section_image.webp"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243F4D] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-7xl max-md:text-6xl max-sm:text-4xl leading-[68px] max-xl:text-[130px] max-xl:leading-[100px] max-lg:text-[110px] max-md:text-[80px] max-sm:text-[46px] max-sm:leading-[40px] font-cormorant text-center">
                {numberPage.section1.h1}
                </h1>
                <p className="mt-3 max-w-xl text-center text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-xs font-cormorant">
                {numberPage.section1.p}

                </p>
            </section>
            <NumberFilterComp data={numberPage} buttonText={button}/>
        </div>
    );
};

export default NumbersPage;
