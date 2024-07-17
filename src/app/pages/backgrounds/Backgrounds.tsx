'use client'

import React from 'react';
import style from "@/app/pages/backgrounds/Backgrounds.module.css"
import { StarsCanvas } from "@/app/components/canvas";
import {CustomCursor, PreLoader} from "@/app/components";
import PatternBg from "@/app/pages/backgrounds/patternBg/PatternBg";

const Backgrounds: React.FC = () => {
    return (
        <>
            <CustomCursor/>
            <PreLoader/>
            <div className={`${style.bgBack} top-0 left-0 w-full h-full`}/>
            {/**
            <div className={`absolute w-full h-screen`}>
                <div className={`${style.bgBack} top-0 left-0 w-full h-full`}/>
                <div className={'absolute top-0 left-0 w-full h-full'}>
                    <div className={`${style.bgTimekepper} w-full h-full`}/>
                    <PatternBg/>
                    <div className={`w-full h-[40%]`}/>
                    <div className={`${style.bgGrad1} w-full h-[200%]`}/>
                    <div className={`w-full h-[40%]`}/>
                    <div className={`${style.bgGrad2} w-full h-[100%]`}/>
                    <StarsCanvas/>
                </div>
            </div>
            */}
        </>
    );
};

export default Backgrounds;
