'use client'

import React, {useEffect, useState} from "react";
import {Project} from "@/app/types";
import style from "@/app/components/showProject/ShowProject.module.css"
import {motion} from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import {fadeIn} from "@/app/utils";
import {github} from "@/app/assets";
import {FaGithub} from "react-icons/fa";

interface ShowProjectProps {
    project: Project;
    onCardClick: (project: Project) => void;
}

const ShowProject: React.FC<ShowProjectProps> = ({ project, onCardClick }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (project.images.length > 1) {
            intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
        }

        return () => clearInterval(intervalId);
    }, [project.images]);

    return (
            <Tilt className="Project-Card shadow-md h-full max-h-[525px] overflow-y-auto" tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.1} transitionSpeed={200}>
                <motion.div variants={fadeIn("up", "spring", 2 * 0.5, 0.75)} className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                    <div className='bg-tertiary p-2 rounded-[20px] w-full' onClick={() => onCardClick(project)}>
                        <div className='relative w-full h-[350px]'>
                            <div className='w-full h-full object-cover rounded-2xl overflow-hidden' style={{ position: "relative" }}>
                                {project.images.map((image, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={`w-full h-full absolute top-0 left-0 ${idx === currentImageIndex ? 'z-10' : 'z-0'}`}
                                        style={{
                                            opacity: idx === currentImageIndex ? 1 : 0,
                                        }}
                                        initial={{x: 0}}
                                        animate={{x: 0}}
                                        transition={{duration: 2, ease: "easeInOut"}}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={`project_image_${idx}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-2xl"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            {project?.links?.some(link => link.icon === FaGithub) ? (
                                <div className='absolute inset-0 flex justify-end m-3 card-img_hover z-30'>
                                    <div
                                        onClick={() => {
                                            if (typeof window !== 'undefined') {
                                                const githubLink = project.links.find(link => link.label === "GitHub");
                                                if (githubLink?.url) {
                                                    window.open(githubLink.url, "_blank");
                                                }
                                            }
                                        }}
                                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                    >
                                        <div className="relative w-4/5 h-4/5">
                                            <Image
                                                src={github.src}
                                                alt="source code"
                                                layout="fill"
                                                objectFit="contain"
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        <div className='mt-2'>
                            <h3 className='text-[#dfd9ff] font-bold text-[24px]'>
                                {project.name.length > 40 ? project.name.substring(0, 40) + "..." : project.name}
                            </h3>
                            <p className='mt-2 text-[#dfd9ff] text-secondary text-[14px]'>
                                {project.description.length > 150 ? project.description.substring(0, 150) + "..." : project.description}
                            </p>
                        </div>

                        <div className='mt-3 flex flex-wrap gap-2'>
                            {project.tags.slice(0, 3).map((tag) => (
                                <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                                    #{tag.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Tilt>
    );
};


export default ShowProject;