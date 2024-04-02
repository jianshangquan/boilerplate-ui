import React, { useState, useEffect }  from 'react';

export function useInView(ref: React.MutableRefObject<HTMLElement>, option: { threshold: number } = { threshold: 1 }) {

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting,)
            },
            option
        )
        ref.current && observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return isIntersecting
}