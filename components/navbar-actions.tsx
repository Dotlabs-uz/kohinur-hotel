"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from "./burgerMenu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

interface NavbarActionsProps {
    buttonText: string;
}

const NavbarActions: React.FunctionComponent<NavbarActionsProps> = ({
    buttonText,
}) => {
    const [handleMenu, setHandleMenu] = useState(false);
    const pathname = usePathname();

    const router = useRouter();

    function changeVal(e: any) {
        router.push(`/${e}/${pathname.slice(3)}`);
    }

    const openMenu = () => {
        document.body.style.position = "fixed";
        setHandleMenu(true);
    };

    const closeMenu = () => {
        document.body.style.position = "";
        setHandleMenu(false);
    };

    return (
        <>
            <div className="flex items-center gap-7 max-lg:gap-5 max-md:gap-3">
                <Select onValueChange={changeVal}>
                    <SelectTrigger className="text-[#F9A52E] bg-transparent border-none outline-none text-xl max-lg:text-base">
                        <SelectValue placeholder={pathname.slice(1,3).toUpperCase()} />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectItem value="ru">RU</SelectItem>
                        <SelectItem value="en">EN</SelectItem>
                    </SelectContent>
                </Select>
                <button className="bg-[#D79F25] text-[#05243F] max-lg:hidden rounded-none hover:bg-[#8c640f] text-xl px-7 py-2">
                    {buttonText}
                </button>
                <GiHamburgerMenu
                    onClick={openMenu}
                    size={35}
                    color="white"
                    className="lg:hidden max-md:w-[30px] max-md:h-8 cursor-pointer"
                />
            </div>

            {handleMenu ? <BurgerMenu closeMenu={closeMenu} /> : null}
        </>
    );
};

export default NavbarActions;
