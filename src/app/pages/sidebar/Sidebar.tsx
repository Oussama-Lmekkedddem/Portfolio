"use client";

import "@/app/pages/sidebar/Sidebar.css";
import React, { useState, useEffect } from 'react';
import { SideBarCard } from "@/app/components";
import { useLanguage } from "@/app/context/LanguageContext";
import {LanguageEnum} from "@/app/utils";

export default function Sidebar() {
    const { switchLanguage, constants } = useLanguage();
    const { sidebars } = constants;
    const [activeSection, setActiveSection] = useState<string>(sidebars[0]?.link || '');
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    // Re-calculate activeSection when sidebars change
    useEffect(() => {
        setActiveSection(sidebars[0]?.link || '');
    }, [sidebars]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setIsHeaderVisible(event.clientX >= 0 && event.clientX <= 100);
        };

        const handleScroll = () => {
            let currentSection: string | null = null;
            const sections = document.querySelectorAll<HTMLElement>('main > section');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection || sidebars[0]?.link || '');
        };

        document.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sidebars]);
    const availableLanguages = Object.values(LanguageEnum);

    return (
        <div id="header-parent" className={isHeaderVisible ? 'header-visible' : 'header-hidden'}>
            {isHeaderVisible && (
                <header id="header" className="flex flex-col justify-center h-screen">
                    <div className="mb-4 flex justify-center gap-4">
                        {availableLanguages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => switchLanguage(lang)}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <nav id="navbar" className="navbar nav-menu">
                        <ul className="flex flex-col space-y-0">
                            {sidebars.map((sidebar, index) => (
                                <SideBarCard
                                    key={`sidebar-${index}`}
                                    sidebar={sidebar}
                                    isActive={activeSection === sidebar.link}
                                />
                            ))}
                        </ul>
                    </nav>
                </header>
            )}
        </div>
    );
}
