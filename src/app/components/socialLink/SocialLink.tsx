

import React from 'react';

import {SocialLinkCardProps} from "@/app/types";
import "@/app/components/socialLink/SocialLink.css";
import {socialLinks} from "@/app/utils";
import { IconType } from 'react-icons';




const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ href, icon: Icon, name, hoverColor }) => {
    const IconComponent: IconType = Icon;

    return (
        <a
            className="st-social-btn flex text-[#dfd9ff] items-center"
            onClick={() => {if (typeof window !== 'undefined') {window.open(href, '_blank');}}}

            style={{ '--hover-social-link-color': hoverColor } as React.CSSProperties}
        >
            <span className="st-social-icon flex items-center justify-center text-center">
                <IconComponent />
            </span>
            <span className="st-icon-name">{name}</span>
        </a>
    );
};

const SocialLink: React.FC = () => {
    return (
        <div className="h-auto w-full flex items-center justify-center">
            <div className="st-social-group flex items-center justify-center p-3">
                <div className="st-social-link flex flex-wrap gap-5">
                    {socialLinks.map((link, index) => (
                        <SocialLinkCard
                            key={index}
                            href={link.href}
                            icon={link.icon}
                            name={link.name}
                            hoverColor={link.hoverColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialLink;
