'use client'

import React from "react";
import {
    Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {sidebars} from "@/app/utils";
import style from "@/app/pages/navbar/NavBar.module.css"

const NavList: React.FC = () => {
    return (
        <ul className={"my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"}>
            {sidebars.map((sidebar, index) => (
                <div
                    key={index}
                    color="blue-gray"
                    className={style.navListItem + " p-1 font-medium"}
                >
                    <a href={'#' + sidebar.link} className="flex items-center hover:text-blue-500 transition-colors">
                        {sidebar.title}
                    </a>
                </div>
            ))}
        </ul>
    );
};

const NavBar: React.FC = () =>  {
    const [openNav, setOpenNav] = React.useState(false);
    const [windowHeight, setWindowHeight] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const handleWindowResize = () => {
        if (typeof window !== 'undefined') {
            setOpenNav(window.innerWidth >= 800 ? false : openNav);
        }
    };

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleWindowResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleWindowResize);
            }
        };
    }, [openNav]);

    return (
        <>
            {windowHeight <= 900 && (
                <div className={"py-5 px-20 flex justify-center items-center"}>
                    <div className={style.navBarLink + " w-full max-w-screen-xl px-6 py-3 text-white"}>
                        <div className="flex items-center justify-between">
                            {windowHeight >= 350 && (
                                <a
                                    href="#home"
                                    className="mr-4 cursor-pointer py-1.5"
                                >
                                    Welcome
                                </a>
                            )}

                            <div className="hidden lg:block">
                                <NavList/>
                            </div>

                            <div className={style.iconBtn + " rounded-full"}>
                                <div
                                    className={
                                        "relative ml-auto h-10 w-10 p-2 text-inherit flex contain-content items-center " +
                                        "hover:bg-transparent focus:bg-transparent " +
                                        "active:bg-transparent lg:hidden"}
                                    onClick={() => setOpenNav(!openNav)}
                                >
                                    {openNav ? (
                                        <XMarkIcon className="h-6 w-6 " strokeWidth={2}/>
                                    ) : (
                                        <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
                                    )}
                                </div>
                            </div>

                        </div>
                        <Collapse open={openNav}>
                            <NavList/>
                        </Collapse>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
