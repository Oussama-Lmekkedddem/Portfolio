import dynamic from "next/dynamic";

const Loading = () => <p>Loading...</p>;

const DynamicHero = dynamic(() => import("@/app/pages/hero/Hero"), {
    ssr: false,
    loading: Loading,
});
const DynamicAbout = dynamic(() => import("@/app/pages/about/About"), {
    ssr: false,
    loading: Loading,
});
const DynamicExperience = dynamic(() => import("@/app/pages/experience/Experience"), {
    ssr: false,
    loading: Loading,
});
const DynamicProject = dynamic(() => import("@/app/pages/project/Project"), {
    ssr: false,
    loading: Loading,
});
const DynamicProjectV2 = dynamic(() => import("@/app/pages/projectV2/ProjectV2"), {
    ssr: false,
    loading: Loading,
});
const DynamicContact = dynamic(() => import("@/app/pages/contact/Contact"), {
    ssr: false,
    loading: Loading,
});
const DynamicSetupUpArrow = dynamic(() => import("@/app/pages/setupUpArrow/SetupUpArrow"), {
    ssr: false,
    loading: Loading,
});

export default function Home() {
    return (
        <main>
            <DynamicHero idName="hero"/>
            <DynamicAbout idName="about"/>
            <div className="w-full h-[220px]"/>
            <DynamicExperience idName="experience"/>
            <div className="w-full h-[240px]"/>
            <DynamicProjectV2 idName="project" />
            {/*<DynamicProject idName="project"/>*/}
            <DynamicContact idName="contact"/>
            <DynamicSetupUpArrow/>
        </main>
    );
}
