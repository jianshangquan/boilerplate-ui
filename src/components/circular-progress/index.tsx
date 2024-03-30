import React, { useState, useEffect } from 'react';


export default function CircularProgress({ size = 20, strokeWidth = 3, pathLength = 100, progress=50, className="stroke-black dark:stroke-white", isProcessing = false }) {
    // https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

    const [percentage, setPercentage] = useState(progress);
    const [isInProcessing, setIsInProcessing] = useState(isProcessing);
    const radius = ((size - (strokeWidth * 2)) / 2);
    const x = ((size + (strokeWidth * 2)) / 2);
    const y = ((size + (strokeWidth * 2)) / 2);

    useEffect(() => {
        setPercentage(progress)
    }, [progress])

    useEffect(() => {
        setIsInProcessing(isProcessing)
    }, [isProcessing])

    return (
        <svg height={size + (strokeWidth * 2)} width={size + (strokeWidth * 2)} className={`${isInProcessing && 'animate-spin'}`} style={{
            transform: `rotate(-90deg)`
        }}>
            <circle
                cx={x}
                cy={y}
                r={radius}
                pathLength={pathLength}
                // stroke="white"
                strokeWidth={strokeWidth}
                fill="transparent"
                className={`${className}`}
                style={{
                    strokeLinecap: 'round',
                    strokeDasharray: isInProcessing ? `25 25 25 25` : `${percentage} ${pathLength}`,
                }}
            />
        </svg>
    )
}