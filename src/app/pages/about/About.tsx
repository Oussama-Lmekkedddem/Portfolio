'use client'

import React from "react";
import { Tech, Title  } from "@/app/components";
import { SectionWrapper } from "@/app/hooks";
import { styles } from "@/app/styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { EducationProps, Title as Til } from "@/app/types";
import { motion } from "framer-motion";
import PatternBg from "@/app/pages/backgrounds/patternBg/PatternBg";
import { fadeIn } from "@/app/utils";
import { useLanguage } from "@/app/context/LanguageContext";

const Tex: React.FC<EducationProps> = ({education}) => {
    return (
        <section className="w-full mt-10">
            <div className="flex -ml-5 mb-14 relative">
                <div className="absolute top-0 left-0 flex w-[50px] items-center justify-center rotate-[90deg] text-[8px] text-[#11998e]">
                    <strong>{education.year}</strong>
                </div>
                <div className="absolute -top-5 left-10 text-white">
                    <strong>{education.school}</strong>
                </div>
                {education.link && (
                    <button
                        onClick={() => window.open(education.link, "_blank")}
                        className="ml-5 -mt-14 text-blue-400 hover:text-blue-600 hover:underline text-[12px]">
                        Link
                    </button>
                )}
            </div>
            <div>
                <p className="text-[15px] text-[#dfd9ff]">
                    {education.description}
                </p>
            </div>
        </section>
    );

}

const About: React.FC = () => {
    const { titles, personnelInfos, educations } = useLanguage().constants;

    const aboutTitle = titles.find(title => title.mainTitle === 'About Me');
    const [currentEducationIndex, setCurrentEducationIndex] = React.useState(0);


    const incrementIndex = () => {
        setCurrentEducationIndex((prevIndex) =>
            prevIndex === educations.length - 2 ? 0 : prevIndex + 1
        );
    };

    const decrementIndex = () => {
        setCurrentEducationIndex((prevIndex) =>
            prevIndex === 0 ? educations.length - 2 : prevIndex - 1
        );
    };


    return (
        <section className={`w-full h-[900px]`}>
            <PatternBg/>
            <div className={`w-full sm:px-12 px-6 sm:py-12 py-16`}>
                <div className={`relative w-full h-full max-w-7xl mx-auto`}>
                    <Title title={aboutTitle as Til}/>
                    <motion.div className="flex flex-col md:flex-row md:flex-wrap w-full gap-2"
                                variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}>
                        <div className="flex-1 h-full">
                            <figure className="bg-transparent rounded-xl p-8 dark:bg-transparent">
                                <div className="pt-3 space-y-4">
                                    <blockquote>
                                        <p className={`${styles.heroSubText} text-lg`}>
                                            {personnelInfos.description}
                                        </p>
                                    </blockquote>
                                    {personnelInfos.resume ? (
                                        <figcaption>
                                            <button
                                                onClick={() => {
                                                    if (typeof window !== 'undefined') {
                                                        window.open(personnelInfos.resume, "_blank")
                                                    }
                                                }}
                                                className={"mt-10 md:w-1/3 sm:w-full py-4 rounded-[5px] border " +
                                                    "text-white border-[var(--font-sub-title-color)] " +
                                                    "flex items-center justify-center shadow-card uppercase " +
                                                    "hover:bg-[var(--hover-sidebar-color)] hover:text-[#161616]"}>
                                                <strong>Resume</strong>
                                            </button>
                                        </figcaption>
                                    ) : null}
                                </div>
                            </figure>
                        </div>
                        <div
                            className="border-r-2 border-b-2 border-[#3F3F3F] rounded-[20px] pt-12 flex-1 h-full min-h-80 flex flex-col sm:flex-row sm:flex-wrap w-full gap-2">
                            <div className="flex-1 h-full">
                                <div className="w-full flex justify-center items-center">
                                    <div
                                        className={`${styles.heroSubText} lg:text-[55px] lg:mb-3 md:mb-1 uppercase`}>Education
                                    </div>
                                </div>
                                <div className="w-full flex mb-4">
                                    <div
                                        className={`text-[#11998e] uppercase lg:text-[15px] sm:text-[12px]  xs:text-[10px] text-[8px] lg:leading-[20px]`}>
                                        studied at
                                    </div>
                                </div>
                                <Tex education={educations[currentEducationIndex]}/>
                            </div>

                            <div className="px-2 pb-2 flex-1 h-full">
                                <div className="w-full flex justify-center items-center mb-4 py-3">
                                    <button
                                        onClick={decrementIndex}
                                        className="bg-transparent hover:bg-[var(--hover-sidebar-color)] text-white font-semibold hover:text-[#161616] p-4 border border-[#3F3F3F] hover:border-transparent rounded-[50%]">
                                        <FaAngleLeft/>
                                    </button>
                                    <div className="w-[20px] h-[2px] bg-[#3F3F3F]"/>
                                    <button
                                        onClick={incrementIndex}
                                        className="bg-transparent hover:bg-[var(--hover-sidebar-color)] text-white font-semibold hover:text-[#161616] p-4 border border-[#3F3F3F] hover:border-transparent rounded-[50%]">
                                        <FaAngleRight/>
                                    </button>
                                </div>
                                <div className="hidden sm:block">
                                    <Tex education={educations[currentEducationIndex + 1]}/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <Tech/>
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(About, "about");


