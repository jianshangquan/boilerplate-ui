import React, { useState, useEffect } from 'react';
import { CheckSmall } from '@icon-park/react'
import { BoilerplateAppearance } from '../../types/appearance';




export interface BoilerplateCheckboxProps {
    checked: boolean,
    disabled: boolean,
    onChanged: (value: boolean) => void,
    label?: any | null | undefined,
    appearance: {
        checkboxOuter: BoilerplateAppearance,
        checkboxInner: BoilerplateAppearance,
        label: BoilerplateAppearance
    }
}


export function Checkbox({ checked = false, disabled = false, onChanged, label = null, appearance }: BoilerplateCheckboxProps) {
    const [check, setChecked] = useState(checked);


    const toggleCheck = () => {
        if (disabled) return;
        setChecked(c => {
            const flag = !c;
            onChanged && onChanged(flag);
            return flag;
        })
    }

    useEffect(() => {
        if (checked != null)
            setChecked(checked);
    }, [checked])

    if (label) {
        return (
            <div className={`flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-40 !cursor-not-allowed' : 'opacity-100'}`} onClick={() => toggleCheck()}>
                <div className={`${appearance.checkboxOuter.className || 'bg-primary'} min-w-[1.1rem] min-h-[1.1rem] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden bg-gray-200 shadow-inner`}>
                    <div className={`${appearance.checkboxInner.className || 'bg-primary'} transition-all duration-[0.2s] w-full h-full p-2 flex justify-center items-center overflow-hidden absolute ${check ? 'scale-[1.1] rounded-none' : 'scale-0 rounded-full'}`}>
                        <CheckSmall theme="outline" size="15" className="text-white" />
                    </div>
                </div>
                <div className="text-[0.9rem]">{label}</div>
            </div>
        )
    }


    return (
        <div className={`${appearance.checkboxOuter.className || 'bg-primary'} min-w-[1.1rem] min-h-[1.1rem] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden bg-gray-200 shadow-inner`}>
            <div className={`${appearance.checkboxInner.className || 'bg-primary'} transition-all duration-[0.2s] w-full h-full p-2 flex justify-center items-center overflow-hidden absolute ${check ? 'scale-[1.1] rounded-none' : 'scale-0 rounded-full'}`}>
                <CheckSmall theme="outline" size="15" className="text-white" />
            </div>
        </div>
    )
}