import React, { useState, useEffect } from 'react';
import { ProjectDetailsProps } from '@/app/types';
import style from '@/app/components/projectDetailsCard/ProjectDetailsCard.module.css';
import { github } from '@/app/assets';
import { FaFilePdf } from 'react-icons/fa';
import { ImageModal } from '@/app/components';

const ProjectDetailsCard: React.FC<ProjectDetailsProps> = ({ project, closeHandler }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeGroupIndex, setActiveGroupIndex] = useState(0);

    const styleImg = [
        " w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full",
        " hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32",
        " hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
    ];

    const groupImages = (images: { src: string }[], groupSize: number): { src: string }[][] => {
        let result: { src: string }[][] = [];
        for (let i = 0; i < images.length; i += groupSize) {
            result.push(images.slice(i, i + groupSize));
        }
        return result;
    };



    const groups = groupImages(project.images, 3);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isModalOpen) {
                if (event.key === 'ArrowLeft') {
                    handlePrevProject();
                } else if (event.key === 'ArrowRight') {
                    handleNextProject();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeGroupIndex, isModalOpen, project]);

    const handlePrevProject = () => {
        const newIndex = activeGroupIndex > 0 ? activeGroupIndex - 1 : groups.length - 1;
        setActiveGroupIndex(newIndex);
    };

    const handleNextProject = () => {
        const newIndex = activeGroupIndex < groups.length - 1 ? activeGroupIndex + 1 : 0;
        setActiveGroupIndex(newIndex);
    };

    return (
        <>
            <div className={style.projectDetail + " fixed inset-0 m-5 " +
                "green-pink-gradient p-[1px] rounded-[20px] shadow-card"}>
                <div className="flex flex-col bg-tertiary w-full h-full rounded-[20px]">
                    <div className="flex justify-between items-center p-3 text-gray-300">
                        <h5 className="text-lg text-gray-300 font-medium"></h5>
                        <button
                            type="button"
                            className="text-right text-gray-300 hover:text-gray-300 mr-3 text-[30px] z-20"
                            aria-label="Close"
                            onClick={closeHandler}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={"w-full h-full flex-grow items-center content-center"}>
                        <div className="py-3 px-2 sm:p-6 md:py-10 md:px-8">
                            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                                <div
                                    className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                                        {project.name}
                                    </h1>

                                </div>
                                <div
                                    className="grid gap-4 col-start-1 col-end-5 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                                    {groups[activeGroupIndex].map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.src}
                                            alt=""
                                            className={style.prjImg + " " + styleImg[index % 3]}
                                            loading="lazy"
                                            onClick={() => openModal(activeGroupIndex * 3 + index)}
                                        />
                                    ))}
                                    {isModalOpen && (
                                        <ImageModal
                                            images={project.images}
                                            currentIndex={currentImageIndex}
                                            onClose={closeModal}
                                        />
                                    )}
                                    <div
                                        className={"w-full h-5 sm:col-span-4 lg:col-span-full gap-1 flex justify-center items-center"}>
                                        {groups.map((_, index) => (
                                            <div
                                                key={index}
                                                className={index === activeGroupIndex ? style.swiperPaginationActive : style.swiperPagination}
                                                onClick={() => setActiveGroupIndex(index)}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <dl className={"mt-4 text-xs font-medium flex flex-wrap items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2 gap-2"}>
                                    {project.tags.map((tag) => (
                                        <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                                            #{tag.name}
                                        </p>
                                    ))}
                                </dl>
                                <div
                                    className="mt-4 flex flex-wrap col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 gap-4">
                                    {project.source_code_link ? (
                                        <button
                                            type="button"
                                            onClick={() =>    {if (typeof window !== 'undefined') {window.open(project.source_code_link, "_blank")}}}
                                            className={style.prjBtn + " flex flex-auto text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg max-w-60"}>
                                            <div className="w-10 h-10">
                                                <img src={github.src} alt='source code' className='object-contain'/>
                                            </div>
                                            <div className={"h-10 flex-grow flex justify-center items-center"}>
                                                GitHub
                                            </div>
                                        </button>
                                    ) : null}
                                    {project.report_link ? (
                                        <button type="button"
                                                onClick={() =>    {if (typeof window !== 'undefined') {window.open(project.report_link, "_blank")}}}
                                                className={style.prjBtn + " flex flex-auto text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg max-w-60"}>
                                            <div className="w-10 h-10 flex justify-center items-center p-1">
                                                <FaFilePdf className='h-full w-full object-contain'/>
                                            </div>
                                            <div className={"h-10 flex-grow flex justify-center items-center"}>
                                                Rapport
                                            </div>
                                        </button>
                                    ) : null}

                                </div>
                                <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsCard;

