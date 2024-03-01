import Image from "next/image";

interface ReviewsPageProps {}

const ReviewsPage: React.FunctionComponent<ReviewsPageProps> = () => {
    return (
        <div>
            <section className="relative h-[400px] max-lg:h-[300px] max-sm:h-[200px] flex flex-col items-center justify-center text-white">
                <Image
                    src={"/Слой 2.png"}
                    fill
                    alt=""
                    className="absolute top-0 left-0 w-full h-full bg-contain bg-center -z-20 object-cover"
                />
                <div className="bg-[#05243ff6] absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-cormorant text-center max-w-[730px] max-lg:max-w-[630px] max-sm:max-w-[330px]">
                    Отзывы наших гостей
                </h1>
                <p className="mt-3 max-w-xl max-md:max-w-xs max-sm:max-w-[280px] text-center text-base max-md:text-sm max-sm:text-xs">
                    Средний рейтинг по 522 отзывам
                </p>
            </section>
            <section className="max-w-4xl max-xl:max-w-3xl max-lg:max-w-2xl max-md:max-w-xl max-sm:w-[80%] m-auto">
                {[1, 2].map((item) => (
                    <div key={item} className="mt-10 max-sm:mt-5 pb-11 border-b-2 border-[#686868]">
                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs">Another amazing visit</p>
                        <div className="flex items-center gap-2 mt-10 max-sm:mt-4">
                            <Image
                                src={"/icons/stars-Icon.svg"}
                                width={200}
                                height={200}
                                alt=""
                                className="w-[120px] max-sm:w-[60px]"
                            />
                            <p className="text-xl max-lg:text-lg max-md:text-base max-sm:text-xs font-medium">4.7 Звезд(-ы)</p>
                        </div>
                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs mt-3 max-sm:mt-2">
                            Excellent experience. Hotel is in excellent
                            condition, the rooms are very well appointed; the
                            staff is professional, gracious and attentive; and
                            the restaurants are top quality. There are not
                            additional 5-start hotels in Tashkent but I continue
                            to show Hyatt Regency over all the other options,
                            and will stay there again on my next trip.
                        </p>
                        <p className="mt-4 max-sm:mt-3 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs">
                            {" "}
                            <span className="font-bold">tmercier2023</span>,
                            February 2024 г.
                        </p>
                        <div className="mt-6 px-16 py-10 max-md:px-12 max-md:py-7 max-sm:px-8 max-sm:py-5 bg-[#D9D9D9]">
                            <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs">
                                Excellent experience. Hotel is in excellent
                                condition, the rooms are very well appointed;
                                the staff is professional, gracious and
                                attentive; and the restaurants are top quality.
                                There are not additional 5-start hotels in
                                Tashkent but I continue to show Hyatt Regency
                                over all the other options, and will stay there
                                again on my next trip.
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ReviewsPage;
