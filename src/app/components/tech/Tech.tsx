'use client'

import React from "react";
import { BallCanvas } from "@/app/components/canvas";
import {styles} from "@/app/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils";
import { StaticImageData } from "next/image";
import {useLanguage} from "@/app/context/LanguageContext";
import {useIsMobile} from "@/app/hooks";

const Tech = () => {
    const { technologies } = useLanguage().constants;
    const isMobile = useIsMobile();
  return (
      <motion.div className="mb-20"
                  variants={fadeIn("up", "spring", 3 * 0.5, 0.75)}>
          <div className="mb-6">
              <div className={`${styles.heroSubText} lg:text-[55px] lg:mb-3 md:mb-1 uppercase`}>Skills</div>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-4 md:gap-10 relative'>
              {(isMobile ? technologies.slice(0, 6) : technologies).map((technology) => (
                  <div className="w-16 h-16 md:w-28 md:h-28" key={technology.name}>
                      <BallCanvas icon={technology.icon as StaticImageData} />
                  </div>
              ))}
          </div>
      </motion.div>
  );
};

export default Tech;
