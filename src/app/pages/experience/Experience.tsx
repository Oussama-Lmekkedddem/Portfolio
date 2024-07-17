'use client'

import React, { useEffect } from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import {experiences, fadeIn, titles} from "@/app/utils";
import {ExperienceCard, Title} from "@/app/components";
import {SectionWrapper} from "@/app/hooks";
import {Experience as Expert, Title as Til} from "@/app/types";
import "@/app/pages/experience/Experience.css"
const Experience: React.FC = () => {
    useEffect(() => {
        const removeHiddenClass = () => {
            const hiddenElements = document.querySelectorAll('.is-hidden');
            hiddenElements.forEach(element => {
                element.classList.remove('is-hidden');
            });
        };
        removeHiddenClass();
    }, []);

    const experienceTitle = titles.find(title => title.mainTitle === 'Resume')
    return (
        <section className={`bgGrad1 w-full sm:px-12 px-6 sm:py-12 py-16`}>
            <div className={`relative w-full max-w-7xl mx-auto`}>
                <Title title={experienceTitle as Til} />
                <div className='mt-20 flex flex-col'>
                    <motion.div
                        variants={fadeIn("up", "", 0.1, 1)}>
                        <div className="h-[53%] w-[3px] bg-white absolute top-[22%] left-[50%] hidden lg:block"/>
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
