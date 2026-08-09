import { useCallback } from 'react';

export function useScroll() {
    return useCallback((target: string) => {
        document.getElementById(target.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }, []);
}
