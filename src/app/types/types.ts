import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import React from "react";


/**
 * Project
 *
 */
interface Tag {
    name: string;
    color: string;
}

export interface ProjectLink {
    url: string;
    label: string;
    icon: React.ElementType;
}


interface Project {
    name: string;
    description: string;
    tags: Tag[];
    images: StaticImageData[];
    links: ProjectLink[];
}

interface ProjectDetailsProps {
    project: Project;
    closeHandler: () => void;
}
interface ProjectCardProps {
    project: Project;
    index: number;
}

interface ShowProjectProps {
    project: Project;
}

interface ProjectListProps {
    projects: Project[];
    allTags: string[];
    activeFilters: string[];
    setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
    onSelect: (project: Project) => void;
    onHover: (project: Project) => void;
    onHoverOut: () => void;
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
    link: string;
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
    link: string;
}
interface EducationProps {
    education: Education;
}


/**
 * Contact
 */

/**
 * alert -> Thank you. I will get back to you as soon as possible.
 * alert -> Something went wrong.
 * alert -> Form reference is not set.
 * Your Name
 * What's your name?
 * Your email
 * What's your email address?
 * Your Message
 * What you want to say?
 * Sending...
 * Send
 */

interface ContactForm {
    successMessage: string;
    errorMessage: string;
    formReferenceError: string;

    nameLabel: string;
    namePlaceholder: string;

    emailLabel: string;
    emailPlaceholder: string;

    messageLabel: string;
    messagePlaceholder: string;

    sendingStatus: string;
    sendButton: string;
}

export type {
    Project,
    ProjectDetailsProps,
    ProjectCardProps,
    ShowProjectProps,
    ProjectListProps,
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



