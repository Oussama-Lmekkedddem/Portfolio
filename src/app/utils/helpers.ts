type TransitionType = {
    type: string;
    duration?: number;
    delay?: number;
    ease?: string;
};


type VariantType = {
    hidden: {
        y?: number | string;
        x?: number | string;
        opacity?: number;
        scale?: number;
    };
    show: {
        y?: number | string;
        x?: number | string;
        opacity?: number;
        scale?: number;
        transition: TransitionType;
    };
};


export const textVariant = (delay: number = 1000): VariantType => {
    return {
        hidden: {
            x: 100,
            y: -100,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                delay: delay,
            },
        },
    };
};

export const fadeIn = (
    direction: "left" | "right" | "up" | "down",
    type: string,
    delay: number,
    duration: number
): VariantType => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay: number, duration: number): VariantType => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const slideIn = (
    direction: "left" | "right" | "up" | "down",
    type: string,
    delay: number,
    duration: number
): VariantType => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

type StaggerContainerType = {
    hidden: {};
    show: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
};


export const staggerContainer = (
    staggerChildren: number = 0.1,
    delayChildren: number = 0
): StaggerContainerType => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
};