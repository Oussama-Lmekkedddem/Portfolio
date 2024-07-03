'use client'

import React from "react";
import { BallCanvas } from "@/app/components/canvas";
import { technologies } from "@/app/utils";
import {styles} from "@/app/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils";
import { StaticImageData } from "next/image";

const Tech = () => {
  return (
      <motion.div className="mb-20"
                  variants={fadeIn("up", "spring", 3 * 0.5, 0.75)}>
          <div className="mb-6">
              <div className={`${styles.heroSubText} lg:text-[55px] lg:mb-3 md:mb-1 uppercase`}>Skills</div>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-10 relative'>
              {technologies.map((technology) => (
                  <div className='w-28 h-28' key={technology.name}>
                  <BallCanvas icon={technology.icon as StaticImageData}/>
                  </div>
              ))}
          </div>
      </motion.div>
  );
};

export default Tech;
