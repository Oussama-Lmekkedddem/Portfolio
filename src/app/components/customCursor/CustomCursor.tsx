'use client'

import React, { useEffect } from 'react';
import styles from '@/app/components/customCursor/CustomCursor.module.css';

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const ball = document.getElementById('ball');
        const cursor = document.getElementById('magic-cursor');

        if (ball && cursor) {
            const handleMouseMove = (event: MouseEvent) => {
                const { clientX, clientY } = event;
                ball.style.transform = `translate(${clientX}px, ${clientY}px)`;
                cursor.style.opacity = '1';
            };

            const handleMouseEnter = () => {
                cursor.style.opacity = '1';
            };

            const handleMouseLeave = () => {
                cursor.style.opacity = '0';
            };

            const handleMouseOver = (event: MouseEvent) => {
                if ((event.target as HTMLElement).closest('a, button, input, textarea, .Project-Card')) {
                    ball.classList.add(styles.ballClick);
                }
            };

            const handleMouseOut = (event: MouseEvent) => {
                if ((event.target as HTMLElement).closest('a, button, input, textarea, .Project-Card')) {
                    ball.classList.remove(styles.ballClick);
                }
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.body.addEventListener('mouseenter', handleMouseEnter);
            document.body.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('mouseover', handleMouseOver);
            document.addEventListener('mouseout', handleMouseOut);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.body.removeEventListener('mouseenter', handleMouseEnter);
                document.body.removeEventListener('mouseleave', handleMouseLeave);
                document.removeEventListener('mouseover', handleMouseOver);
                document.removeEventListener('mouseout', handleMouseOut);
            };

        }
    }, []);

    return (
        <div className={styles.magicCursor} id="magic-cursor">
            <div className={styles.ball} id="ball"></div>
        </div>
    );
};

export default CustomCursor;
