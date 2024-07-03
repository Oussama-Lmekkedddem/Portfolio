import React from "react";
import "@/app/components/titles/Title.css"
import {TitleProps} from "@/app/types";
import { motion } from "framer-motion";
import {fadeIn} from "@/app/utils";

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <motion.div
            variants={fadeIn("up", "", 0.1, 1)}
        >
            <div className="section-title flex-grow relative">
                <div className="row-auto">
                    <div className="w-full">
                        <div className="text-left">
                            <h2 className="text_background relative uppercase">
                                {title.subTitle}
                            </h2>
                            <span className="heading_background absolute uppercase">{title.mainTitle}</span>
                            <p className="m-0">
                                <strong>
                                    {title.description}
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Title;
