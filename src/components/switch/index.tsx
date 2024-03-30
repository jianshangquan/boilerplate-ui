import React, { useState, useEffect } from 'react';
import { BoilerplateAppearance } from '../../types/appearance';




export interface BoilerplateSwitchProps {
    value: boolean,
    disabled: boolean,
    onChanged?: (value: boolean) => void,
    label: string | null | undefined,
    appearance: {
        label: BoilerplateAppearance,
        background: {
            checked: BoilerplateAppearance,
            unChecked: BoilerplateAppearance
        },
        roundedButton: BoilerplateAppearance
    }
}


export function Swtich({ value = false, disabled = false, appearance, onChanged, label = null }: BoilerplateSwitchProps) {


    if (label) {
        return (
            <div onClick={() => onChanged?.(!value)} className="flex gap-2 items-center text-[0.9rem] w-full justify-between">
                <div className={`${appearance.label.className} cursor-pointer`}>{label}</div>
                <div className={`w-[2.2rem] h-[1.2rem] px-1 rounded-full relative transition-all duration-[0.4s] cursor-pointer ${value ? appearance.background.checked.className || 'bg-primary' : appearance.background.unChecked.className || 'bg-gray-200 dark:bg-stone-500 shadow-inner'}`}>
                    <div className={`${appearance.roundedButton.className} bg-white drop-shadow w-[1rem] h-[1rem] absolute rounded-full top-[50%] transition-all duration-[0.4s] ${value ? 'left-[100%] translate-x-[calc(-100%_-_0.1rem)]' : 'left-[0.1rem] translate-x-[0%]'} translate-y-[-50%]`}></div>
                </div>
            </div>
        )
    }

    return (
        <div className={`w-[2.2rem] h-[1.2rem] px-1 rounded-full relative transition-all duration-[0.4s] cursor-pointer ${value ? appearance.background.checked.className || 'bg-primary' : appearance.background.unChecked.className || 'bg-gray-200 dark:bg-stone-500 shadow-inner'}`}>
            <div className={`${appearance.roundedButton.className} bg-white drop-shadow w-[1rem] h-[1rem] absolute rounded-full top-[50%] transition-all duration-[0.4s] ${value ? 'left-[100%] translate-x-[calc(-100%_-_0.1rem)]' : 'left-[0.1rem] translate-x-[0%]'} translate-y-[-50%]`}></div>
        </div>
    )
}