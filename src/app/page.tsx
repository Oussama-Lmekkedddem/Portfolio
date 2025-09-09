import dynamic from "next/dynamic";

const Loading = () => <p></p>;

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
            <div className="w-full h-[300px] md:h-[220px]"/>
            <DynamicExperience idName="experience"/>
            <div className="w-full h-[240px]"/>
            <div className="block sm:hidden">
                <DynamicProject idName="project"/>
            </div>
            <div className="hidden sm:block">
                <DynamicProjectV2 idName="project"/>
            </div>
            <DynamicContact idName="contact"/>
            <DynamicSetupUpArrow/>
        </main>
    );
}
