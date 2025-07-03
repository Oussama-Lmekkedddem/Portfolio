import { Html, useProgress } from "@react-three/drei";
import styles from '@/app/components/loader/Loader.module.css';
import React, {useEffect, useState} from "react";
import {useLanguage} from "@/app/context/LanguageContext";


const PreLoader: React.FC = () => {
    const { personnelInfos } = useLanguage().constants;

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.preloader}>
            <div className={styles.preloaderText}>{personnelInfos.name.split(' ')[1]}</div>
        </div>
    );
};

const CanvasLoader = () => {
    const {progress} = useProgress();
    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export { CanvasLoader, PreLoader };
