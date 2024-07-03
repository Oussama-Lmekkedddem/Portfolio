import { StaticImageData } from "next/image";
import { IconType } from "react-icons";


/**
 * Project
 *
 */
interface Tag {
    name: string;
    color: string;
}

interface Project {
    name: string;
    description: string;
    tags: Tag[];
    images: StaticImageData[];
    source_code_link: string;
    report_link: string;
}

interface ProjectDetailsProps {
    project: Project;
    closeHandler: () => void;
}
interface ProjectCardProps {
    project: Project;
    index: number;
}


interface Props {
    groupedProjects: Project[][];
    handleCardClick: (project: Project) => void;
}


/**
 * Experience Page
 *
 */

interface Experience {
    date: string;
    iconBg: string;
    icon: StaticImageData;
    company_name: string;
    title: string;
    points: string[];
}

interface ExperienceCardProps {
    experience: Experience;
}


/**
 * SideBar
 *
 */

interface SideBar {
    title: string;
    icon: IconType;
    link: string;
}
interface SideBarCardProps {
    sidebar: SideBar;
    isActive: boolean;
}

/**
 * Canvas
 */

interface BallProps {
    imgUrl: StaticImageData;
}

interface BallCanvasProps {
    icon: StaticImageData;
}


interface ImageModalProps {
    images: { src: string }[];
    currentIndex: number;
    onClose: () => void;
}

interface SectionWrapperProps {
    idName: string;
}


/**
 *  svg image
 */

interface TransformMatrix {
    scaleX: number;
    scaleY: number;
    rotateX: number;
    rotateY: number;
    translateX: number;
    translateY: number;
}

interface CircleParams {
    numCircles: number;
    circleSize: number;
    gap: number;
    color: string;
}

interface RectangleParams {
    translateX?: number;
    translateY?: number;
    rotate?: number;
    width: number;
    height: number;
    rx?: number;
    color: string;
    strokeWidth?: number;
}

/**
 * Social Media
 */

export interface SocialLinkCardProps {
    href: string;
    icon: IconType;
    name: string;
    hoverColor?: string;
}


/**
 * Title
 */

interface Title {
    mainTitle: string;
    subTitle: string;
    description: string;
}

export interface TitleProps {
    title: Title;
}


/**
 * About
 */

interface Education {
    school: string;
    year: string;
    description: string;
}
interface EducationProps {
    education: Education;
}


export type {
    Project,
    ProjectDetailsProps,
    ProjectCardProps,
    ExperienceCardProps,
    SideBarCardProps,
    BallProps,
    BallCanvasProps,
    EducationProps,
    Experience,
    Title,
    Props,
    ImageModalProps,
    SectionWrapperProps,
    TransformMatrix,
    CircleParams,
    RectangleParams,
}



