import Container from "@/components/ui/container";
import { Links } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import NavbarActions from "./navbar-actions";

interface HeaderProps {}

const links:Links[] = [
    {
        id:1,
        href: "/",
        label:"Главная"
    },
    {
        id:2,
        href: "/1",
        label:"Номера"
    },
    {
        id:3,
        href: "/2",
        label:"Сервис и услуги"
    },
    {
        id:4,
        href: "/3",
        label:"Отзывы"
    },
    {
        id:5,
        href: "/4",
        label:"Контакты"
    },
]

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className="bg-[#05243F] py-3">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <Image
                            src={"/logo-main.svg"}
                            width={200}
                            height={50}
                            alt=""
                            className="max-md:w-[125px] max-md:h-[32px]"
                        />
                    </Link>
                    <Navbar data={links}/>
                    <NavbarActions />
                </div>
            </Container>
        </header>
    );
};

export default Header;
