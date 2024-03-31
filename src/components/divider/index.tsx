
import React from "react";

export interface BoilerplateDividerProps{
    color?: string,
    opacity?: number,
    horizontal?: boolean,
    vertical?: boolean,
    rounded?: any,
    gap?: string,
    boldSize?: string,
    className?: string
}

export function Divider({color = 'black', opacity = 0.25, horizontal = true, vertical, rounded, gap = '0rem', boldSize = '1px', className=""} : BoilerplateDividerProps){
    let width = `calc(100%-(${gap}*2))`,
        height = boldSize;
    if(horizontal){
        width = `calc(100% - (${gap} * 2))`;
        height = boldSize;
    }
    if(vertical){
        width = boldSize;
        height = `calc(100% - (${gap} * 2))`;
    }


    return (
        <div style={{
            backgroundColor: color, 
            width: width, 
            height: height, 
            opacity: opacity, 
            marginLeft: horizontal ? gap : '0px', 
            marginRight: horizontal ? gap : '0px',
            marginTop: vertical ? gap : '0px',
            marginBottom: vertical ? gap : '0px',
            borderRadius: '999999px'
        }} className={className}></div>
    );
}