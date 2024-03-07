import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Container from "./ui/container";

interface BurgerMenuProps {
    closeMenu: () => void;
}

const BurgerMenu: React.FunctionComponent<BurgerMenuProps> = ({
    closeMenu,
}) => {
    const router = useRouter();

    const rederection = (link: string) => {
        router.push(link);
        closeMenu();
    };

    return (
        <div
            // data-aos="fade-down"
            // data-aos-duration="1500"
            className="bg-[#E7E7E7] w-full h-screen fixed top-0 left-0 z-10 animate-burger-animate"
        >
            <Container>
                <div className="py-3 flex items-center justify-between border-b border-[#05243F]">
                    <Image
                        src={"/images/footer-logo.png"}
                        width={300}
                        height={300}
                        alt=""
                        className="invert-[100%] w-[200px]"
                    />
                    <MdClose color="#05243F" size={25} onClick={closeMenu} />
                </div>
                <div className="w-fit">
                    <h3 className="mt-3 text-lg font-bold">Контакты:</h3>
                    <div className="flex flex-col mt-1 font-medium">
                        <Link href={"tel:+998662221234"}>
                            +998 66 222 12 34
                        </Link>
                        <Link href={"tel:+998662221234"}>
                            +998 66 222 12 34
                        </Link>
                    </div>
                </div>
                <div className="w-fit">
                    <h3 className="mt-3 text-lg font-bold">Навигация:</h3>
                    <div className="flex flex-col mt-1 font-medium">
                        <p
                            className="cursor-pointer"
                            onClick={() => rederection("/")}
                        >
                            Главная
                        </p>
                        <p
                            className="cursor-pointer"
                            onClick={() => rederection("/numbers")}
                        >
                            Номера
                        </p>
                        <p
                            className="cursor-pointer"
                            onClick={() => rederection("/services")}
                        >
                            Сервис и услуги
                        </p>
                        <p
                            className="cursor-pointer"
                            onClick={() => rederection("/restaurant")}
                        >
                            Питание
                        </p>
                        <p
                            className="cursor-pointer"
                            onClick={() => rederection("/reviews")}
                        >
                            Отзывы
                        </p>
                    </div>
                </div>
                <div className="w-fit">
                    <h3 className="mt-3 text-lg font-bold">Адресс:</h3>

                    <p className="font-medium">
                        Samarkand, st. Mirzo-Ulugbek 52
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="mt-3 text-lg font-bold">
                        Социональные сети:
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                        <Link href={"/"}>
                            <FaTelegramPlane size={25} />
                        </Link>
                        <Link href={"/"}>
                            <FaInstagram size={25} />
                        </Link>
                        <Link href={"/"}>
                            <FaFacebookF size={25} />
                        </Link>
                    </div>
                </div>
                <button className="bg-[#D79F25] text-[#05243F] rounded-none hover:bg-[#8c640f] text-base px-7 py-2 font-semibold mt-5">
                    Забронировать
                </button>
            </Container>
        </div>
    );
};

export default BurgerMenu;
