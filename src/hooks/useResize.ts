import React, { useState, useEffect } from 'react';

export function useResize(ref: React.MutableRefObject<HTMLElement>){
    const [size, setSize] = useState({
        width: 0,
        height: 0
    })
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            setSize(entry.contentRect);
            setEntry(entry as any);
        });

        ref?.current && observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    }, [])

    return [size, entry];
}