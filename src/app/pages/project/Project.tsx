'use client'

import React, {useState} from "react"
import {projects, titles} from "@/app/utils"
import {CarouselComponent, ProjectDetailsCard, Title} from "@/app/components"
import {Project as ProjectType, Title as Til} from "@/app/types"
import SectionWrapper from "@/app/hooks/SectionWrapper"
import style from "@/app/pages/project/Project.module.css"

const Project: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const projectTitle = titles.find(title => title.mainTitle === 'Portfolio')
    const groupedProjects: ProjectType[][] = [];

    const handleCardClick = (project: ProjectType) => {
        setSelectedProject(project);
    };

    const handleCloseDetails = () => {
        setSelectedProject(null);
    };

    for (let i = 0; i < projects.length; i += 3) {
        groupedProjects.push(projects.slice(i, i + 3));
    }

    return (
        <section className={`${style.bgGrad2} w-full h-[800px] sm:px-12 px-6 sm:py-12 py-16`}>
            <div className={`relative w-full h-full max-w-7xl mx-auto`}>
                <Title title={projectTitle as Til}/>
                <CarouselComponent groupedProjects={groupedProjects} handleCardClick={handleCardClick}/>
                {selectedProject && (
                    <ProjectDetailsCard project={selectedProject} closeHandler={handleCloseDetails}/>
                )}
            </div>
        </section>
);
};

export default SectionWrapper(Project, "portfolio");

