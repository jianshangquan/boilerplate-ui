
import { useEffect, useState } from 'react';

// https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto


const sm = 640;
const md = 768;
const lg = 1024;
const xl = 1280;
const xl2 = 1536;

export const DefaultScreenBreakPoints = {sm, md, lg, xl, xl2};

export function useMediaQuery(ob = {sm, md, lg, xl, xl2}){

    const [dimension, setDimension] = useState({width: 0, height: 0});

    const handleWindowSizeChanged = () => {
        setDimension(ob => ({width: window.innerWidth, height: window.innerHeight}));
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChanged);
        setDimension({width: window.innerWidth, height: window.innerHeight});
        return () => {
            window.removeEventListener('resize', handleWindowSizeChanged); 
        }
    }, []);

    const query = {
        sm: dimension.width <= sm,
        md: dimension.width > sm && dimension.width <= md,
        lg: dimension.width > md && dimension.width <= lg,
        xl: dimension.width > lg && dimension.width <= xl,
        xl2: dimension.width >= xl && dimension.width <= xl2,
        graterThen: {
            sm: dimension.width >= sm,
            md: dimension.width >= md,
            lg: dimension.width >= lg,
            xl: dimension.width >= xl,
            xl2: dimension.width >= xl2
        },
        lessThen: {
            sm: dimension.width <= sm,
            md: dimension.width <= md,
            lg: dimension.width <= lg,
            xl: dimension.width <= xl,
            xl2: dimension.width <= xl2
        },
        dimension,
    };

    return query;
}


