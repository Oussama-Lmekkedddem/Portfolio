'use client'

import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils";
import { github } from "@/app/assets";
import { ProjectCardProps } from "@/app/types";
import Image from 'next/image';
import {FaGithub} from "react-icons/fa";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index}) => {
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
        <Tilt className="Project-Card" tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.1} transitionSpeed={200}>
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div className='bg-tertiary p-5 rounded-[20px] sm:w-[360px] w-full'>
                    <div className='relative w-full h-[230px]'>
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
                                    <div className="relative w-1/2 h-1/2">
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

                    <div className='mt-5'>
                        <h3 className='text-[#dfd9ff] font-bold text-[24px]'>{project.name}</h3>
                        <p className='mt-2 text-[#dfd9ff] text-secondary text-[14px]'>{project.description}</p>
                    </div>

                    <div className='mt-4 flex flex-wrap gap-2'>
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

export default ProjectCard;
