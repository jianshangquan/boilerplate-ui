import React, { useEffect, useMemo, useRef } from 'react';
import { BoilerplateAppearance } from '../../types/appearance';
import { twMerge } from 'tailwind-merge';


export interface BoilerplateSliderProp{
    value?: number,
    setValue?: React.Dispatch<React.SetStateAction<number>>,
    steps?: number[],
    animateOnMove?: boolean,
    appearance?: {
        button?: BoilerplateAppearance,
        bar?: BoilerplateAppearance,
        steps?: BoilerplateAppearance
    }
}


export interface Position{
    x: number,
    y: number, 
    top: number,
    left: number,
    width: number, 
    height: number
}

export function Slider({ value = 0, setValue, steps = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], animateOnMove = true, appearance } : BoilerplateSliderProp){

    const sliderEvent = useRef({ activate: false });
    const container = useRef<HTMLDivElement | null>(null);
    const button = useRef<HTMLDivElement | null>(null);
    const preparedSteps = useMemo(() => steps.sort(), [steps]);


    const onMove = (prop : Position) => {
        const x = prop.x / prop.width;
        let position: number = x;
        if(preparedSteps.length > 0){
            const nextStepIndex = preparedSteps.findIndex(step => x < step) || 0;
            const prevStepIndex = nextStepIndex - 1;
            const prevStep = preparedSteps[prevStepIndex];
            const nextStep = preparedSteps[nextStepIndex];
            const gap = nextStep - prevStep;
            const shouldMoveNext = x > (prevStep + (gap / 2));
            position = shouldMoveNext ? nextStep : prevStep;

            if(isNaN(position)) position = preparedSteps[preparedSteps.length - 1]
        }
        setValue && setValue(position);
    }

    return(
        <div className='w-full h-[2rem] flex items-center justify-center relative' 
        onMouseDown={() => sliderEvent.current.activate = true}
        onMouseUp={() => sliderEvent.current.activate = false}
        onMouseLeave={() => sliderEvent.current.activate = false}
        onMouseMove={(event) => {
            if(!sliderEvent.current.activate) return;
            const rect = button.current?.getBoundingClientRect() || { top: 0, left: 0, width: 0, height: 0 };
            const bound = container.current?.getBoundingClientRect() || { top: 0, left: 0, width: 0, height: 0 };
            const x = event.clientX - bound.left;
            const y = event.clientY - bound.top;
            const width = bound.width;
            const height = bound.height;
            onMove({ 
                x: x < 0 ? 0 : x > width ? width : x, 
                y: y < 0 ? 0 : y > width ? height : y, 
                left: rect.left, 
                top: rect.top,
                width,
                height
            });
        }}>
            <div ref={container} style={appearance?.bar?.style} className={`${twMerge('w-full bg-gray-400/20 h-[0.3rem] rounded-full', appearance?.bar?.className)}`}></div>
            {
                steps.map((step, index) => {
                    return <div key={index} style={{ ...appearance?.steps?.style, left: `${step * 100}%` }} className={`${twMerge('absolute top-[50%] translate-y-[-50%] translate-x-[-50%] w-[0.8rem] h-[0.8rem] border-[1px] md:w-[1rem] md:h-[1rem] md:border-[2px] bg-gray-50 dark:bg-primary dark:border-[#a3a3a3] rounded-full', appearance?.steps?.className)}`}></div>
                })
            }
            <div ref={button} style={{ left: `${value * 100}%` }} className={`absolute top-[50%] translate-y-[-50%] translate-x-[-50%] group ${(steps.length > 0 && animateOnMove) ? 'transition-all duration-300' : ''}`}>
                <div style={appearance?.button?.style} className={`${twMerge('cursor-pointer w-[1.2rem] h-[1.2rem] md:w-[1.5rem] md:h-[1.5rem] shadow-lg group-hover:scale-[1.1] transition-all duration-300 bg-white dark:bg-primary border-[2px] dark:border-white border-primary rounded-full', appearance?.button?.className)}`}></div>
            </div>
        </div>
    )
}