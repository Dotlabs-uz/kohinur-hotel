import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall, IoMdTime } from "react-icons/io";
import Container from "./ui/container";
import { GrLocation } from "react-icons/gr";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <footer className="bg-[#05243F] border-t border-white w-full pt-10 text-white">
            <Container>
                <div className="w-full flex gap-32 max-xl:gap-16 max-sm:gap-4 items-start justify-between">
                    <div className="w-full flex max-lg:flex-col gap-5 max-lg:gap-28 max-sm:gap-10 justify-between max-sm:text-xs">
                        <div className="flex flex-col gap-4 max-sm:gap-2">
                            <Link href={"/"}>
                                <Image
                                    src="/footer-logo.png"
                                    width={300}
                                    height={500}
                                    alt=""
                                    className="w-[217px] h-[57px] max-sm:w-[160px] max-sm:h-[40px]"
                                />
                            </Link>
                            <p className=" font-light max-w-[250px] max-sm:max-w-[200px] max-sm:text-xs">
                                Отель для истинных любителей роскоши и комфорта
                            </p>
                            <div className="flex items-center gap-4">
                                <Link href={"/"}>
                                    <FaTelegramPlane size={25} color="white" className="max-sm:w-4"/>
                                </Link>
                                <Link href={"/"}>
                                    <FaInstagram size={25} color="white" className="max-sm:w-4" />
                                </Link>
                                <Link href={"/"}>
                                    <FaFacebookF size={25} color="white" className="max-sm:w-4 max-sm:h-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 max-sm:gap-3">
                            <h3 className="font-cormorant text-3xl max-sm:text-lg">Hotel</h3>
                            <nav className="flex flex-col gap-3 max-sm:gap-2 max-sm:text-xs">
                                <Link href={"/"}>Главная</Link>
                                <Link href={"/"}>Об Отеле</Link>
                                <Link href={"/"}>Каталог номеров</Link>
                                <Link href={"/"}>Сервис</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="w-full flex max-lg:flex-col-reverse gap-5 max-lg:gap-10 max-sm:gap-4 justify-between max-sm:text-xs">
                        <div className="flex flex-col gap-5 max-sm:gap-3">
                            <h3 className="font-cormorant text-3xl max-sm:text-lg">Help</h3>
                            <nav className="flex flex-col gap-3 max-sm:gap-2">
                                <Link href={"/"}>Консультация</Link>
                                <Link href={"/"}>Правила для гостей</Link>
                                <Link href={"/"} className="max-w-[160px]">
                                    Политика конфиденцальности
                                </Link>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-5 max-sm:gap-3">
                            <h3 className="font-cormorant text-3xl max-sm:text-lg">
                                Сontact us
                            </h3>
                            <div className="flex items-center gap-4">
                                <IoIosCall size={25} color="white" className="max-sm:w-[18px]"/>
                                <div className="flex flex-col gap-1">
                                    <Link href={"tel:+998662221234"}>
                                        +998 66 222 12 34
                                    </Link>
                                    <Link href={"tel:+998662221234"}>
                                        +998 66 222 12 34
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <GrLocation size={26} color="white" className="max-sm:w-[18px]"/>
                                <div className="flex flex-col gap-1">
                                    <span>Samarkand</span>
                                    <span>st. Mirzo-Ulugbek 52</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <IoMdTime size={25} color="white" className="max-sm:w-[18px]" />
                                <div className="flex flex-col gap-1">
                                    <span>Понедельник-Воскресенье</span>
                                    <span>08:00 AM- 05:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="mt-20 max-sm:mt-10 border-t border-white py-9 flex items-center justify-center max-sm:text-sm max-sm:py-5">
                <span>KOHINUR PLAZA 2024</span>
            </div>
        </footer>
    );
};

export default Footer;
