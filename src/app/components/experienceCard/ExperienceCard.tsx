import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceCardProps } from "@/app/types";


const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#101624",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon.src}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[16px] md:text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[14px] font-semibold'
                    style={{ margin: 0 }}>
                    {experience.company_name}
                    <span>
                        {experience.link && (
                            <button
                                onClick={() => window.open(experience.link, "_blank")}
                                className="ml-4 text-blue-400 hover:text-blue-600 hover:underline text-[16px]">
                                Link
                            </button>
                        )}</span>
                </p>
            </div>

            <ul className='mt-3 md:mt-5 list-disc ml-3 md:ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[10px] md:text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
