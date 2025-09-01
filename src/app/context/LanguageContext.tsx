"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { getConstants, changeLanguage, LanguageEnum } from "@/app/utils";

interface LanguageContextProps {
    lang: LanguageEnum;
    switchLanguage: (lang: LanguageEnum) => void;
    constants: ReturnType<typeof getConstants>;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [lang, setLang] = useState<LanguageEnum>(LanguageEnum.EN);

    const switchLanguage = (newLang: LanguageEnum) => {
        changeLanguage(newLang);
        setLang(newLang); // triggers re-render
    };

    const constants = getConstants();

    return (
        <LanguageContext.Provider value={{ lang, switchLanguage, constants }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
