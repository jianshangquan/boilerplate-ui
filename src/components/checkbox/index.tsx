import React, { useState, useEffect, ReactNode } from 'react';
import { CheckSmall } from '@icon-park/react'
import { BoilerplateAppearance } from '../../types/appearance';
import './../../style.css'




export interface BoilerplateCheckboxProps {
    checked?: boolean,
    disabled?: boolean,
    onChanged?: (value: boolean) => void,
    label?: any | null | undefined,
    children?: ReactNode,
    appearance?: {
        checkboxOuter: BoilerplateAppearance,
        checkboxInner: BoilerplateAppearance,
        label: BoilerplateAppearance
    }
}


export function Checkbox({ checked = false, disabled = false, children, onChanged, label = null, appearance }: BoilerplateCheckboxProps) {


    if (label || children) {
        return (
            <div className={`flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-40 !cursor-not-allowed' : 'opacity-100'}`} onClick={() => onChanged?.(!checked)}>
                <div className={`${appearance?.checkboxOuter.className || 'bg-primary/10'} rounded-sm min-w-[1.1rem] min-h-[1.1rem] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden bg-gray-200 shadow-inner`}>
                    <div className={`${appearance?.checkboxInner.className || 'bg-primary'} transition-all duration-[0.2s] w-full h-full p-2 flex justify-center items-center overflow-hidden absolute ${checked ? 'scale-[1.1] rounded-none' : 'scale-0 rounded-full'}`}>
                        <CheckSmall theme="outline" size="15" className="text-white"/>
                    </div>
                </div>
                <div className="text-[0.9rem]">{label || children}</div>
            </div>
        )
    }


    return (
        <div className={`${appearance?.checkboxOuter.className || 'bg-primary'} min-w-[1.1rem] min-h-[1.1rem] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden bg-gray-200 shadow-inner`} onClick={() => onChanged?.(!checked)}>
            <div className={`${appearance?.checkboxInner.className || 'bg-primary'} rounded-sm transition-all duration-[0.2s] w-full h-full p-2 flex justify-center items-center overflow-hidden absolute ${checked ? 'scale-[1.1] rounded-none' : 'scale-0 rounded-full'}`}>
                <CheckSmall theme="outline" size="15" className="text-white" />
            </div>
        </div>
    )
}