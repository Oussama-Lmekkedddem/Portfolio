import React from 'react';
import { SideBarCardProps } from "@/app/types";
import "@/app/components/sidebarCard/SideBarCard.css"

const SideBarCard: React.FC<SideBarCardProps> = ({ sidebar, isActive }) => {

    return (
        <li className="nav-link">
            <a
                href={'#' + sidebar.link}
                className={`flex items-center space-x-2 ${isActive ? 'active' : ''}`}
            >
                <sidebar.icon className="text-xl"/>
                <span>{sidebar.title}</span>
            </a>
        </li>
    );
};

export default SideBarCard;

