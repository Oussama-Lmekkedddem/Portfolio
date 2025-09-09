import { useState, useEffect } from "react";

export function useIsMobile(maxWidth = 640) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < maxWidth);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [maxWidth]);

    return isMobile;
}
