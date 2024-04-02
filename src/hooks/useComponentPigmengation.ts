import { useMounted } from "./useMounted";
import React, { useEffect, useState, useRef } from "react";



export function useComponentPigmengation(ref: React.MutableRefObject<HTMLElement>, onPigment: () => void, 
{ threshold = 0.99, attatch = true, triggerOnce = true, dependicies = [], autoPauseTriggerWhenNoData = true } : 
{ threshold: number, attatch: boolean, triggerOnce: boolean, dependicies: any[], autoPauseTriggerWhenNoData: boolean }) {

    const mounted = useMounted();
    // const [pause, setPause] = useState(false);
    const pause = useRef<boolean>();
    const [triggered, setTriggered] = useState(false);
    

    const trigger = async () => {
        if(!mounted) return;
        if(pause.current) return;
        if(onPigment){
            pause.current = true;
            const hasData: boolean | any = await onPigment();
            if(hasData == false && autoPauseTriggerWhenNoData) {
                pause.current = true;
            }
        }
        setTriggered(true);
    }

    useEffect(() => {
        if(!attatch) return;
        const compoment = ref.current;
        if(compoment == null) return;
        const onScroll = async (event: Event) => {
            if(pause.current) return;
            

            const scroll = compoment.scrollTop + compoment.offsetHeight;
            const scrollHeight = compoment.scrollHeight;
            if (scroll / scrollHeight >= threshold) {
                if (triggerOnce) {
                    if(!triggered){
                        await trigger();
                        return;
                    }
                    return;
                }

                await trigger();
            }else{
                setTriggered(false);
            }
        };
        compoment.addEventListener('scroll', onScroll);
        return () => {
            compoment.removeEventListener('scroll', onScroll);
        }
    }, [ triggered, attatch, ref.current, ...dependicies]);


    return {
        pause: () => pause.current = true,
        start: () => pause.current = false
    }
    
}