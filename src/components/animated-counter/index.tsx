import React, { useEffect, useRef, useState } from "react";
import { ClassName } from "../../types/appearance";




export interface BoilerplateAnimatedCounterProps{
    value: number,
    updateTimes?: number,
    onRenderValue?: (value: number) => string,
    duration?: number,
    className?: ClassName
}

export function AnimatedCounter({ 
    value, 
    updateTimes = 10, 
    onRenderValue = (value) => value.toFixed(0).toLocaleString(), 
    duration = 300, className = "" 
}: BoilerplateAnimatedCounterProps) {
    
    const interval = useRef<any>();
    const [count, setCount] = useState(value);

    useEffect(() => {
        if (value != count) {
            clean()
            if (value > count) {
                const step = (value - count) / updateTimes;
                interval.current = setInterval(() => {
                    setCount(count => {
                        const newVal = count + step;
                        if (newVal >= value) {
                            clean();
                            return value;
                        }
                        return newVal;
                    });
                }, duration / updateTimes);
            } else {
                const step = (count - value) / updateTimes;
                interval.current = setInterval(() => {
                    setCount(count => {
                        const newVal = count - step;
                        if (newVal <= value) {
                            clean();
                            return value;
                        }
                        return newVal;
                    });
                }, duration / updateTimes);
            }
        }
    }, [value]);


    useEffect(() => () => clean(), []);

    const clean = () => {
        clearInterval(interval.current)
    }


    return (
        <div className={className}>{onRenderValue(count)}</div>
    )
}