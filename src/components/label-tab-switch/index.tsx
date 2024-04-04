import { LayoutGroup, motion } from 'framer-motion';
import shortid from 'shortid';
import React, { useState, useEffect, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { DisabledStyle } from '../common';



export interface BoilerplateLabelTabSwitchProps<T extends LabelTabSwitchItems>{
    items?: T[],
    uid?: string,
    onChange?: (index: number, item: T) => void,
    index?: number,
    className?: string
}


export declare type LabelTabSwitchItems = {
    label: ReactNode,
    disabled?: boolean
}


export function LabelTabSwitch<T extends LabelTabSwitchItems>({ items = [], uid = shortid(), onChange, index = 0, className = "px-2 py-1" } : BoilerplateLabelTabSwitchProps<T>) {


    return (
        <LayoutGroup id={uid}>
            <div className="flex gap-2 w-max bg-gray-100 dark:bg-stone-600 rounded-lg p-1 shadow-inner">
                {
                    items.map((item: LabelTabSwitchItems, i: number) => {
                        return (
                            <div key={i} onClick={() => !item.disabled && onChange?.(i, items[i])} className={twMerge(`relative flex justify-center items-center cursor-pointer transition-all duration-300 ${ index == i ? 'text-primary font-bold' : 'font-normal text-black/50 dark:text-white/50' }`, item.disabled ? DisabledStyle : '', className)}>
                                {index == i && <motion.div layout layoutId={`label-tab-switch`} className="w-full h-full bg-white dark:bg-stone-200 absolute z-[0] shadow rounded-lg"></motion.div>}
                                <div className="z-[1]">{item.label}</div>
                            </div>
                        )
                    })
                }
            </div>
        </LayoutGroup>
    )
}