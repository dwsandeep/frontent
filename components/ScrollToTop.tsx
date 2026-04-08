'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const pathname = usePathname();

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname]);

    return null;
}

export default ScrollToTop;