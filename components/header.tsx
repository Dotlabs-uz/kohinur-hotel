import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Navbar from "./navbar";
import NavbarActions from "./navbar-actions";

// const links:Links[] = [
//     {
//         id:1,
//         href: "",
//         label:"Главная"
//     },
//     {
//         id:2,
//         href: "/numbers",
//         label:"Номера"
//     },
//     {
//         id:3,
//         href: "/services",
//         label:"Сервис и услуги"
//     },
//     {
//         id:4,
//         href: "/restaurant",
//         label:"Питание"
//     },
//     {
//         id:5,
//         href: "/reviews",
//         label:"Отзывы"
//     }
// ]

const Header = ({links, buttonText}:any) => {    

    return (
        <header className="bg-[#05243F] py-3">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo-main.svg"}
                            width={200}
                            height={50}
                            alt=""
                            className="max-md:w-[160px]"
                        />
                    </Link>
                    <Navbar data={links}/>
                    <NavbarActions buttonText={buttonText}/>
                </div>
            </Container>
        </header>
    );
};

export default Header;
