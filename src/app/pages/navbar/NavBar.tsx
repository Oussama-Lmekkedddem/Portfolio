'use client';

import React from 'react';
import { Collapse } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import style from '@/app/pages/navbar/NavBar.module.css';
import { useLanguage } from '@/app/context/LanguageContext';
import {LanguageEnum} from "@/app/utils";

const NavList: React.FC<{ onItemClick?: () => void }> = ({ onItemClick }) => {
    const { sidebars } = useLanguage().constants;
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {sidebars.map((sidebar, idx) => (
                <div key={idx} className={style.navListItem + ' p-1 font-medium'}>
                    <a
                        href={'#' + sidebar.link}
                        className="flex items-center hover:text-blue-500 transition-colors"
                        onClick={onItemClick}
                    >
                        {sidebar.title}
                    </a>
                </div>
            ))}
        </ul>
    );
};

const NavBar: React.FC = () => {
    const { switchLanguage } = useLanguage();
    const { personnelInfos } = useLanguage().constants;

    const availableLanguages = Object.values(LanguageEnum);
    const [openNav, setOpenNav] = React.useState(false);
    const [windowWidth, setWindowWidth] = React.useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    // track width
    React.useEffect(() => {
        const onResize = () => setWindowWidth(window.innerWidth);
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', onResize);
        }
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // auto-close when desktop
    React.useEffect(() => {
        if (windowWidth >= 1024 && openNav) setOpenNav(false);
    }, [windowWidth, openNav]);

    // close on Escape and on hash navigation; lock scroll while open
    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpenNav(false);
        };
        const onHash = () => setOpenNav(false);

        if (openNav) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';

        window.addEventListener('keydown', onKey);
        window.addEventListener('hashchange', onHash);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('hashchange', onHash);
            document.body.style.overflow = '';
        };
    }, [openNav]);

    return (
        <>
            {/* MOBILE-ONLY CONTAINER (your existing condition) */}
            {windowWidth <= 900 && (
                <>
                    {/* BACKDROP: CLICK OUTSIDE TO CLOSE */}
                    {openNav && (
                        <button
                            aria-label="Close menu backdrop"
                            className="fixed inset-0 z-[99990] bg-black/40"
                            onClick={() => setOpenNav(false)}
                        />
                    )}

                    {/* NAV WRAPPER */}
                    <div className=" fixed z-[99991] left-1/2 -translate-x-1/2 mt-2 w-[92%] max-w-screen-sm">
                        <div className="flex justify-center items-center">
                            <div className={style.navBarLink + ' w-full max-w-screen-xl px-6 py-3 text-white relative'}>
                                <div className="flex items-center justify-between">
                                    {windowWidth >= 350 && (
                                        <a href="#home" className="mr-4 cursor-pointer py-1.5"
                                           onClick={() => setOpenNav(false)}>
                                            {personnelInfos.welcome}
                                        </a>
                                    )}
                                    <div className="flex justify-center items-center gap-2 -mr-20">
                                        {availableLanguages.map((lang, i) => (
                                            <React.Fragment key={lang}>
                                                <button onClick={() => switchLanguage(lang)}>
                                                    {lang.toUpperCase()}
                                                </button>
                                                {i < availableLanguages.length - 1 && (
                                                    <span className="w-px h-4 bg-white self-center"/>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="hidden lg:block">
                                        <NavList onItemClick={() => setOpenNav(false)}/>
                                    </div>

                                    <div className={style.iconBtn + ' rounded-full'}>
                                        <button
                                            className="relative ml-auto h-10 w-10 p-2 flex items-center justify-center lg:hidden"
                                            onClick={() => setOpenNav((v) => !v)}
                                            aria-label="Toggle navigation"
                                        >
                                            {openNav ? <XMarkIcon className="h-6 w-6"/> :
                                                <Bars3Icon className="h-6 w-6"/>}
                                        </button>
                                    </div>
                                </div>

                                {/* MOBILE MENU AREA */}
                                <div className="lg:hidden">
                                    {/* The Collapse stays inside the pill; you can also move it to be full-width if you prefer */}
                                    <Collapse open={openNav}>
                                        <div className="pt-3">
                                        <NavList onItemClick={() => setOpenNav(false)}/> {/* CLOSE ON ITEM CLICK */}
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default NavBar;


// 'use client'
//
// import React from "react";
// import {
//     Collapse,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import style from "@/app/pages/navbar/NavBar.module.css"
// import {useLanguage} from "@/app/context/LanguageContext";
//
// const NavList: React.FC = () => {
//     const { sidebars } = useLanguage().constants;
//     return (
//         <ul className={"my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"}>
//             {sidebars.map((sidebar, index) => (
//                 <div
//                     key={index}
//                     color="blue-gray"
//                     className={style.navListItem + " p-1 font-medium"}
//                 >
//                     <a href={'#' + sidebar.link} className="flex items-center hover:text-blue-500 transition-colors">
//                         {sidebar.title}
//                     </a>
//                 </div>
//             ))}
//         </ul>
//     );
// };
//
// const NavBar: React.FC = () =>  {
//     const { personnelInfos } = useLanguage().constants;
//     const [openNav, setOpenNav] = React.useState(false);
//     const [windowHeight, setWindowHeight] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);
//
//     React.useEffect(() => {
//         const handleResize = () => {
//             setWindowHeight(window.innerWidth);
//         };
//
//         if (typeof window !== 'undefined') {
//             window.addEventListener('resize', handleResize);
//         }
//
//         return () => {
//             if (typeof window !== 'undefined') {
//                 window.removeEventListener('resize', handleResize);
//             }
//         };
//     }, []);
//
//     const handleWindowResize = () => {
//         if (typeof window !== 'undefined') {
//             setOpenNav(window.innerWidth >= 800 ? false : openNav);
//         }
//     };
//
//     React.useEffect(() => {
//         if (typeof window !== 'undefined') {
//             window.addEventListener('resize', handleWindowResize);
//         }
//
//         return () => {
//             if (typeof window !== 'undefined') {
//                 window.removeEventListener('resize', handleWindowResize);
//             }
//         };
//     }, [openNav]);
//
//     return (
//         <>
//             {windowHeight <= 900 && (
//                 <div className="
//               fixed z-[99991]
//               left-1/2 -translate-x-1/2
//               mt-2
//               w-[92%] max-w-screen-sm
//             ">
//                 <div className={"flex justify-center items-center"}>
//                     <div className={style.navBarLink + " w-full max-w-screen-xl px-6 py-3 text-white"}>
//                         <div className="flex items-center justify-between">
//                             {windowHeight >= 350 && (
//                                 <a
//                                     href="#home"
//                                     className="mr-4 cursor-pointer py-1.5"
//                                 >
//                                     {personnelInfos.welcome}
//                                 </a>
//                             )}
//
//                             <div className="hidden lg:block">
//                                 <NavList/>
//                             </div>
//
//                             <div className={style.iconBtn + " rounded-full"}>
//                                 <div
//                                     className={
//                                         "relative ml-auto h-10 w-10 p-2 text-inherit flex contain-content items-center " +
//                                         "hover:bg-transparent focus:bg-transparent " +
//                                         "active:bg-transparent lg:hidden"}
//                                     onClick={() => setOpenNav(!openNav)}
//                                 >
//                                     {openNav ? (
//                                         <XMarkIcon className="h-6 w-6 " strokeWidth={2}/>
//                                     ) : (
//                                         <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
//                                     )}
//                                 </div>
//                             </div>
//
//                         </div>
//                         <Collapse open={openNav}>
//                             <NavList/>
//                         </Collapse>
//                     </div>
//                 </div>
//                 </div>
//             )}
//         </>
//     );
// }
//
// export default NavBar;
