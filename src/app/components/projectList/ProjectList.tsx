'use client'

import React from "react";
import {ProjectListProps} from "@/app/types/types";
import style from "@/app/components/projectList/ProjectList.module.css"
import {FiRefreshCcw} from "react-icons/fi";

const ProjectList: React.FC<ProjectListProps> = ({
                                                     projects,
                                                     onSelect,
                                                     onHover,
                                                     onHoverOut,
                                                     setFilterTags,
                                                     activeFilters
                                                 }) => {

    const allTags = Array.from(new Set(projects.flatMap(p => p.tags.map(t => t.name))));

    return (
        <section className="bg-transparent h-full max-w-screen-2xl flex flex-col">
            <div className="relative overflow-hidden sm:rounded-lg flex flex-col h-full">

                {/* Filter Bar */}
                <div className="flex items-center relative h-12 py-4">

                    {/* Tag List */}
                    <div className={`${style.scrollbarHide} flex-1 overflow-x-auto flex gap-2 pr-12 py-2`}>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                className={`h-8 px-4 text-xs rounded-full border flex items-center justify-center transition-all whitespace-nowrap shadow-sm hover:shadow-md
                        ${activeFilters.includes(tag)
                                    ? `${style.activeBtn}`
                                    : `${style.prjBtn}`
                                }`}
                                onClick={() =>
                                    setFilterTags(prev =>
                                        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                                    )
                                }
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Reset Button */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <button
                            onClick={() => setFilterTags([])}
                            className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 bg-white
                    hover:bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 transition"
                            title="Reset Filters"
                        >
                            <FiRefreshCcw className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className={"flex flex-col flex-grow mt-4"}>
                    <div
                        className={`${style.scrollbarHide} overflow-y-auto bg-transparent rounded-2xl border border-gray-600 max-h-[430px]`}>
                        <table className="w-full text-sm text-left">
                            <tbody>
                            {projects.map(project => (
                                <tr
                                    key={project.name}
                                    className="bg-[#101624FF] hover:bg-gray-700 cursor-pointer transition-colors"
                                    onClick={() => onSelect(project)}
                                    onMouseEnter={() => onHover(project)}
                                    onMouseLeave={onHoverOut}
                                >
                                    <td colSpan={2} className="px-4 py-2 font-medium whitespace-nowrap">
                                        <div className="flex justify-between items-center w-full">

                                            {/* Nom du projet */}
                                            <span>{project.name}</span>

                                            {/* Les icônes d'action */}
                                            <div className="flex items-center gap-2">
                                                {project?.links?.map((linkItem, index) => {
                                                    const Icon = linkItem.icon;

                                                    return (
                                                        <div key={index}>
                                                            {linkItem.url ? (
                                                                <div
                                                                    className="hover:scale-110 transition-transform cursor-pointer inline-block"
                                                                    onClick={() => window.open(linkItem.url, "_blank")}
                                                                    title={linkItem.label}
                                                                >
                                                                    <Icon className="w-5 h-5 hover:text-gray-950"/>
                                                                </div>
                                                            ) : (
                                                                <span className="text-gray-500 text-xs"></span>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProjectList;
