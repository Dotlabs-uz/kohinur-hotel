"use client";

import { cn } from "@/lib/utils";
import { Links } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    data: Links[];
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: route.href,
        label: route.label,
        active: pathname === route.href,
    }));

    return (
        <div className="max-lg:hidden">
            <nav className="mx-6 flex items-center space-x-2">
                {routes.map((route) => (
                    <Link
                        href={route.href}
                        key={route.href}
                        className={"text-sm text-white font-medium group transition-colors p-[10px]"}
                    >
                        {route.label}
                        <hr className={cn("border-2 -rotate-3 bg-white transition group-hover:opacity-100 group-hover:w-full duration-200", route.active? "opacity-100 w-fu": "opacity-0")}/>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
