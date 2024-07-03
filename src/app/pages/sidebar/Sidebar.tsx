"use client"

import "@/app/pages/sidebar/Sidebar.css";
import React, { useState, useEffect } from 'react';
import { sidebars } from "@/app/utils";
import { SideBarCard } from "@/app/components";

export default function Sidebar() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(sidebars[0].link);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const mouseX = event.clientX;
            if (mouseX >= 0 && mouseX <= 100) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
        };

        const handleScroll = () => {
            let currentSection: string | null = null;
            const sections = document.querySelectorAll<HTMLElement>('main > section');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (typeof window !== 'undefined' && window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection || sidebars[0].link);
        };

        document.addEventListener('mousemove', handleMouseMove);
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (
        <div id="header-parent" className={isHeaderVisible ? 'header-visible' : 'header-hidden'}>
            {isHeaderVisible && (
                <header
                    id="header"
                    className="flex flex-col justify-center h-screen"
                >
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
