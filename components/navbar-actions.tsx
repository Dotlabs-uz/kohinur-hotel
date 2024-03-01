"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";

interface NavbarActionsProps {}

const NavbarActions: React.FunctionComponent<NavbarActionsProps> = () => {
    const [handleMenu, setHandleMenu] = useState(false);

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
                <Button className="bg-[#D79F25] text-[#05243F] max-lg:hidden rounded-none">
                    Забронировать
                </Button>
                <GiHamburgerMenu
                    onClick={()=> setHandleMenu(true)}
                    size={35}
                    color="white"
                    className="lg:hidden max-md:w-[30px] max-md:h-5"
                />
            </div>

            {/* {handleMenu ? (
                <div className="bg-white w-full h-screen absolute top-0 left-0"></div>
            ) : null} */}
        </>
    );
};

export default NavbarActions;
