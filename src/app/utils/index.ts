import * as en from './constants-en';
import * as fr from './constants-fr';
import { fadeIn, textVariant, zoomIn, slideIn, staggerContainer } from './helpers';

export enum LanguageEnum {
    EN = 'en',
    FR = 'fr',
}

const languageMap = {
    [LanguageEnum.EN]: en,
    [LanguageEnum.FR]: fr,
};

let currentLanguage: LanguageEnum = LanguageEnum.EN;

export const changeLanguage = (lang: LanguageEnum) => {
    console.warn(`new lang is "${lang}"`);
    if (languageMap[lang]) {
        currentLanguage = lang;
    } else {
        console.warn(`Language "${lang}" not found. Using default.`);
    }
};

export const getConstants = () => languageMap[currentLanguage];

export {
    fadeIn,
    textVariant,
    zoomIn,
    slideIn,
    staggerContainer,
};


// import {
//     services,
//     technologies,
//     experiences,
//     projects,
//     sidebars,
//     socialLinks,
//     titles,
//     personnelInfos,
//     educations,
// } from "./constants";
//
// import {
//     textVariant,
//     fadeIn,
//     zoomIn,
//     slideIn,
//     staggerContainer,
//
// } from "./helpers";
//
//
// export {
//     services,
//     technologies,
//     experiences,
//     projects,
//     sidebars,
//     socialLinks,
//     titles,
//     personnelInfos,
//     educations,
//     textVariant,
//     fadeIn,
//     zoomIn,
//     slideIn,
//     staggerContainer,
// }