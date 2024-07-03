'use client'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import React, {useEffect, useRef, useState} from "react";
import {ProjectCard} from "@/app/components";
import { Props } from "@/app/types";


const CarouselComponent: React.FC<Props> = ({ groupedProjects, handleCardClick }) => {
    const [activeItem, setActiveItem] = useState(1);
    const totalItems = groupedProjects.length;
    const carouselRef = useRef<HTMLDivElement>();


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItem((prev) => (prev === totalItems ? 1 : prev + 1));
        }, 10000); // Change interval as needed

        return () => clearInterval(interval);
    }, [totalItems]);


    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
            setActiveItem((prev) => (prev === 1 ? totalItems : prev - 1));
        } else if (event.key === 'ArrowRight') {
            setActiveItem((prev) => (prev === totalItems ? 1 : prev + 1));
        }
    };

    return (
        <div className="mt-4" onKeyDown={handleKeyPress} tabIndex={0}>
            <TECarousel ref={carouselRef}>
                {groupedProjects.map((group, index) => (
                    <TECarouselItem
                        key={`carousel-item-${index}`}
                        itemID={index + 1} // Assuming itemID starts from 1
                        className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out mt-8 ${
                            activeItem === index + 1 ? "block" : "hidden"
                        }`}
                    >
                        <div className="flex flex-wrap justify-center items-center gap-10">
                            {group.map((project, i) => (
                                <div
                                    key={`project-${index * 3 + i}`}
                                    onClick={() => handleCardClick(project)}
                                    style={{cursor: 'pointer'}}
                                >
                                    <ProjectCard index={index * 3 + i} project={project}/>
                                </div>
                            ))}
                        </div>
                    </TECarouselItem>
                ))}
            </TECarousel>

            <div className="absolute top-1/7 left-1/2 transform -translate-x-1/2 flex gap-2 mb-3">
                {groupedProjects.map((group, index) => (
                    <span
                        key={index}
                        className={`block h-1 w-8 cursor-pointer rounded-2xl transition-all ${
                            activeItem === index + 1 ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setActiveItem(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
};


export default CarouselComponent;