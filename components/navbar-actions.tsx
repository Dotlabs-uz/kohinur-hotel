"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from "./burgerMenu";

interface NavbarActionsProps {}

const NavbarActions: React.FunctionComponent<NavbarActionsProps> = () => {
    const [handleMenu, setHandleMenu] = useState(false);

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
            <div className="flex items-center gap-7 max-lg:gap-5 max-md:gap-1">
                <select
                    title="change lang"
                    className="bg-transparent text-[#D79F25] text-xl max-md:text-sm font-semibold"
                >
                    <option className="bg-[#05243F]" value="value1">
                        RU
                    </option>
                    <option className="bg-[#05243F]" value="value1">
                        EN
                    </option>
                    <option className="bg-[#05243F]" value="value1">
                        UZ
                    </option>
                </select>
                <button className="bg-[#D79F25] text-[#05243F] max-lg:hidden rounded-none hover:bg-[#8c640f] text-xl px-7 py-2">
                    Забронировать
                </button>
                <GiHamburgerMenu
                    onClick={openMenu}
                    size={35}
                    color="white"
                    className="lg:hidden max-md:w-[30px] max-md:h-5 cursor-pointer"
                />
            </div>

            {handleMenu ? (
                <BurgerMenu closeMenu={closeMenu}/>
            ) : null}
        </>
    );
};

export default NavbarActions;
