"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import dynamic from "next/dynamic";


const Loading = () => <p></p>;

const DynamicProject = dynamic(() => import("@/app/pages/project/Project"), {
    ssr: false,
    loading: Loading,
});
const DynamicProjectV2 = dynamic(() => import("@/app/pages/projectV2/ProjectV2"), {
    ssr: false,
    loading: Loading,
});

export default function ProjectsChooser() {
    const isMobile = useIsMobile();
    return isMobile ? (
        <DynamicProject idName="project" />
    ) : (
        <DynamicProjectV2 idName="project" />
    );
}
