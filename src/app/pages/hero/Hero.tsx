'use client'

import React from "react";
import {DownArrow} from "@/app/components";
import {SectionWrapper} from "@/app/hooks";
import {RobotCanvas} from "@/app/components/canvas";
import style from "@/app/pages/hero/Hero.module.css";
import Typed from 'typed.js';
import { styles }from "@/app/styles";
import {fadeIn, personnelInfos} from "@/app/utils";
import { motion } from "framer-motion";

const Hero: React.FC = () => {

    React.useEffect(() => {
        const typedElement = document.querySelector('.typed');

        if (typedElement) {
            const typedStrings = typedElement.getAttribute('data-typed-items') || '';
            const typedStringsArray = typedStrings.split(',').map(str => str.trim());

            const typed = new Typed('.typed', {
                strings: typedStringsArray,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);


    return (
        <section className={`${style.bgTimekepper} w-full flex justify-center items-center sm:px-12 px-6 sm:py-12 py-16`}>
            <div className={`relative w-full max-w-7xl mx-auto`}>
                <div className="Home-content flex flex-wrap">
                    <div className="w-1/1.5">
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.thirdColor} w-1/3`}
                                        variants={fadeIn("left", "spring", 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} w-1/5`}
                                        variants={fadeIn("left", "spring", 2 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} ${style.cercleShape}`}
                                        variants={fadeIn("left", "spring", 3 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.thirdColor} w-1/2`}
                                        variants={fadeIn("left", "spring", 2 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.thirdColor} w-1/5`}
                                        variants={fadeIn("left", "spring", 3 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} ${style.squareShape}`}
                                        variants={fadeIn("left", "spring", 4 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} w-1/6`}
                                        variants={fadeIn("left", "spring", 5 * 0.25, 0.75)}/>
                            <motion.div className={`${style.firstColor} w-1/3`}
                                        variants={fadeIn("left", "spring", 6 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.lastColor} w-1/3`}
                                        variants={fadeIn("left", "spring", 3 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} w-1/5`}
                                        variants={fadeIn("left", "spring", 4 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} ${style.cercleShape}`}
                                        variants={fadeIn("left", "spring", 5 * 0.25, 0.75)}/>
                            <motion.div className={`${style.lastColor}  w-1/2`}
                                        variants={fadeIn("left", "spring", 6 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg}`}/>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`w-1/6`}
                                        variants={fadeIn("left", "spring", 4 * 0.25, 0.75)}/>
                            <motion.div className={`${style.firstColor} w-1/5`}
                                        variants={fadeIn("left", "spring", 5 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} ${style.squareShape}`}
                                        variants={fadeIn("left", "spring", 6 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} w-1/6`}
                                        variants={fadeIn("left", "spring", 7 * 0.25, 0.75)}/>
                            <motion.div className={`${style.firstColor} w-1/3`}
                                        variants={fadeIn("left", "spring", 8 * 0.25, 0.75)}/>
                        </div>
                        <motion.div className={"pl-10 mb-2"}
                                    variants={fadeIn("left", "spring", 1, 0.75)}>
                            <h1 className={styles.heroHeadTitle + ' w-1/2'}>{personnelInfos.name}</h1>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className={styles.heroSubText}>I'm <span className={`typed`}
                                                                        data-typed-items={personnelInfos.job.join(', ')}></span>
                            </p>
                        </motion.div>
                        <div className={`${style.gg} flex gap-3 mt-4`}>
                            <motion.div className={`${style.firstColor} w-1/3`}
                                        variants={fadeIn("left", "spring", 5 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} ${style.cercleShape}`}
                                        variants={fadeIn("left", "spring", 6 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.thirdColor} w-1/5`}
                                        variants={fadeIn("left", "spring", 6 * 0.25, 0.75)}/>
                            <motion.div className={`${style.firstColor} w-1/6`}
                                        variants={fadeIn("left", "spring", 7 * 0.25, 0.75)}/>
                            <motion.div className={`${style.thirdColor} w-1/3`}
                                        variants={fadeIn("left", "spring", 8 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg}`}/>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.lastColor} w-1/4`}
                                        variants={fadeIn("left", "spring", 7 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} w-1/6`}
                                        variants={fadeIn("left", "spring", 8 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg} flex `}>
                            <motion.div className={`${style.firstColor} w-1/2`}
                                        variants={fadeIn("left", "spring", 8 * 0.25, 0.75)}/>
                        </div>
                        <div className={`${style.gg} flex gap-3`}>
                            <motion.div className={`${style.lastColor} w-1/6`}
                                        variants={fadeIn("left", "spring", 8 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} ${style.squareShape}`}
                                        variants={fadeIn("left", "spring", 9 * 0.25, 0.75)}/>
                            <motion.div className={`${style.secondColor} w-1/6`}
                                        variants={fadeIn("left", "spring", 10 * 0.25, 0.75)}/>
                            <motion.div className={`${style.lastColor} w-1/5`}
                                        variants={fadeIn("left", "spring", 11 * 0.25, 0.75)}/>
                        </div>
                    </div>
                    <div className="lg:flex-grow lg:-ml-40 hidden md:block ">
                        <motion.div className="w-full h-full flex justify-center items-center"
                                    variants={fadeIn("left", "spring", 3, 0.75)}>
                            <RobotCanvas/>
                        </motion.div>
                    </div>
                </div>
                <DownArrow/>
            </div>
        </section>
    );
};

export default SectionWrapper(Hero, "hero");

