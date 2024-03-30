import { LayoutGroup, motion } from 'framer-motion';
import shortid from 'shortid';
import React, { useState, useEffect } from 'react';



export interface BoilerplateLabelTabSwitchProps<T>{
    items?: T[],
    uid?: string,
    onChange?: (index: number, item: T) => void,
    index?: number,
    className?: string
}


export function LabelTabSwitch<T>({ items = [], uid = shortid(), onChange, index = 0, className = "px-2 py-1" } : BoilerplateLabelTabSwitchProps<T>) {


    return (
        <LayoutGroup id={uid}>
            <div className="flex gap-2 w-max bg-gray-100 dark:bg-stone-600 rounded-lg p-1 shadow-inner">
                {
                    items.map((item: any, i: number) => {
                        return (
                            <div key={i} onClick={() => onChange?.(i, items[i])} className={`${className} relative flex justify-center items-center cursor-pointer transition-all duration-300 ${ index == i ? 'text-primary font-bold' : 'font-normal text-black/50 dark:text-white/50' }`}>
                                {index == i && <motion.div layout layoutId={`label-tab-switch`} className="w-full h-full bg-white dark:bg-stone-200 absolute z-[0] shadow rounded-lg"></motion.div>}
                                <div className="z-[1]">{item}</div>
                            </div>
                        )
                    })
                }
            </div>
        </LayoutGroup>
    )
}