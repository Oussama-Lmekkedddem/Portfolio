import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { staggerContainer } from '@/app/utils';
import { SectionWrapperProps } from '@/app/types'

const SectionWrapper = (Component: React.FC, idName: string): React.FC<SectionWrapperProps> =>
    function HOC() {
        return (
            <motion.section
                id={idName}
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;

