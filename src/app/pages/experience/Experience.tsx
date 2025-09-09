'use client'

import React, { useEffect } from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import {fadeIn} from "@/app/utils";
import {ExperienceCard, Title} from "@/app/components";
import {SectionWrapper} from "@/app/hooks";
import {Experience as Expert, Title as Til} from "@/app/types";
import "@/app/pages/experience/Experience.css"
import {useLanguage} from "@/app/context/LanguageContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";



const Experience: React.FC = () => {
    const { titles, experiences } = useLanguage().constants;
    useEffect(() => {
        const removeHiddenClass = () => {
            const hiddenElements = document.querySelectorAll('.is-hidden');
            hiddenElements.forEach(element => {
                element.classList.remove('is-hidden');
            });
        };
        removeHiddenClass();
    }, []);

    const experienceTitle = titles.find(title => title.id === 'resume');



    const Divider = () => {
        const isMobile = useIsMobile(); // true if < 640px
        if (isMobile) return null;
        return (
            <div className="h-[68%] w-[3px] bg-white absolute top-[16%] left-[50%]" />
        );
    };

    return (
        <section className={`bgGrad1 w-full px-4 md:px-8 py-10 sm:py-12`}>
            <div className={`relative w-full max-w-7xl mx-auto`}>
                <Title title={experienceTitle as Til} />
                <div className='mt-10 md:mt-16 flex flex-col'>
                    <motion.div
                        variants={fadeIn("up", "", 0.1, 1)}>
                        <Divider/>
                        <VerticalTimeline>
                            {experiences.map((experience, index) => (
                                <ExperienceCard
                                    key={`experience-${index}`}
                                    experience={experience as Expert}
                                />
                            ))}
                        </VerticalTimeline>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(Experience, "resume");
