'use client'

import React, { useState, useEffect } from "react";

const UpArrow: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Guard against accessing window during SSR
            if (typeof window !== 'undefined') {
                const scrollTop = window.pageYOffset;

                if (scrollTop > 100) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        // Add scroll event listener only in the browser environment
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            // Clean up: remove event listener
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const handleClick = () => {
        // Smooth scroll to top
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };


    return (
        <div className={`fixed bottom-10 right-10 z-10 ${isVisible ? "block" : "hidden"}`}>
            <a href='#home' onClick={handleClick}>
                <div
                    className='w-[35px] h-[35px] rounded-[8px] green-pink-gradient p-[1px] shadow-card'>
                    <div className='h-full rounded-[8px] bg-tertiary flex justify-center items-start'>
                        <i className="bx bx-up-arrow text-2xl mt-[5px] blue-text-gradient"></i>
                    </div>

                </div>
            </a>
        </div>
    );
};

export default UpArrow;

