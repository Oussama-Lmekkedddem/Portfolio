'use client'

import React, {useState} from "react"
import {ProjectDetailsCard, Title} from "@/app/components"
import {Project as ProjectType, Title as Til} from "@/app/types"
import SectionWrapper from "@/app/hooks/SectionWrapper"
import style from "@/app/pages/project/Project.module.css"
import ShowProject from "@/app/components/showProject/ShowProject";
import ProjectList from "@/app/components/projectList/ProjectList";
import {useLanguage} from "@/app/context/LanguageContext";

const ProjectV2: React.FC = () => {
    const { projects, titles } = useLanguage().constants;

    const projectTitle = titles.find(title => title.mainTitle === 'Portfolio');
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(projects[0] || null);
    const [hoverProject, setHoverProject] = useState<ProjectType | null>(null);
    const [filterTags, setFilterTags] = useState<string[]>([]);
    const [projectToOpen, setProjectToOpen] = useState<ProjectType | null>(null);

    const filteredProjects = projects.filter(project =>
        filterTags.length === 0 || project.tags.some(tag => filterTags.includes(tag.name))
    );

    const handleCardClick = (project: ProjectType) => {
        setProjectToOpen(project);
    };

    const handleCloseDetails = () => {
        setProjectToOpen(null);
    };

    return (
        <section className={`${style.bgGrad2} w-full h-[800px] sm:px-12 px-6 sm:py-12 py-16`}>
            <div className="relative w-full h-full max-w-7xl mx-auto">
                <Title title={projectTitle as Til} />

                <div className="relative w-full h-full max-w-7xl mx-auto flex mt-4">

                    {/* Project List */}
                    <div className="w-[40%] max-h-[495px] overflow-y-auto pr-4">
                        <ProjectList
                            projects={filteredProjects}
                            allTags={Array.from(new Set(projects.flatMap(p => p.tags.map(t => t.name))))}
                            activeFilters={filterTags}
                            setFilterTags={setFilterTags}
                            onSelect={setSelectedProject}
                            onHover={setHoverProject}
                            onHoverOut={() => setHoverProject(null)}
                        />
                    </div>

                    {/* ShowProject */}
                    <div className="flex-1 max-h-[520px] pr-4">
                        {filteredProjects.length > 0 ? (
                            <>
                                <ShowProject
                                    project={hoverProject || selectedProject || filteredProjects[0]}
                                    onCardClick={handleCardClick}
                                />
                                {projectToOpen && (
                                    <ProjectDetailsCard
                                        project={projectToOpen}
                                        closeHandler={handleCloseDetails}
                                    />
                                )}
                            </>
                        ) : (
                            <div className="p-4">No projects found for selected filters.</div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(ProjectV2, "portfolio");

