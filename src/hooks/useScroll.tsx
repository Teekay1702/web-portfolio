import { useCallback } from "react";

export default function useScroll() {
    return useCallback(
        (
            id: string,
            onComplete?: () => void
        ) => {
            const element = document.getElementById(
                id.toLowerCase()
            );

            if (!element) return;

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            onComplete?.();
        },
        []
    );
}