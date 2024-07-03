import {Hero, About, Experience, Project, SetupUpArrow, Contact} from "@/app/pages";


export default function Home() {
  return (
    <main>
      <Hero idName="hero"/>
      <About idName="about"/>
      <div className={`w-full h-[220px]`}/>
      <Experience idName="experience"/>
      <div className={`w-full h-[240px]`}/>
      <Project idName="project"/>
      <Contact idName="contact"/>
      <SetupUpArrow/>
    </main>
  );
}
