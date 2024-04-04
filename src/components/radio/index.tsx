import React from 'react';
import { useContext, createContext, cloneElement } from 'react';
import { BoilerplateAppearance, ClassName } from '../../types/appearance';
import './../../style.css'
import { twMerge } from 'tailwind-merge';
import { DisabledStyle } from '../common';



const RadioContext = createContext<{
    index: number, 
    value: any | null,
    set: (index: number, value: any) => void
}>({ index: 0, value: null, set(){} });





export interface BoilerplateRadioProps<T>{
    children?: any,
    className?: string,
    onChanged?: (index: number, value: T) => void,
    label?: null | string,
    value?: T,
    appearance?: {
        label?: BoilerplateAppearance | undefined,
        container?: BoilerplateAppearance,
    } | null
}



export interface BoilerplateRadioOptionProps<T>{
    children?: any,
    className?: string,
    onChanged?: (index: number, value: T) => void,
    index?: number,
    label?: null | string,
    value: T,
    disabled?: boolean,
    appearance?: {
        outerRadio?: BoilerplateAppearance,
        innerRadio?: BoilerplateAppearance,
        label?: BoilerplateAppearance,
    }
}









export function Radio<T>({ children, className, appearance, onChanged, label = null, value } : BoilerplateRadioProps<T>) {
    
    const func = {
        set(index: number, value: any) {
            console.log(index, value);
            onChanged && onChanged(index, value);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {label && <div className={appearance?.label?.className || ''}>{label}</div>}
            <RadioContext.Provider value={{ ...func, index: 0, value }}>
                <div className={twMerge('flex', className || appearance?.container?.className)}>
                    {(() => {
                        if (children == null) return null;

                        if (Array.isArray(children)) {
                            return children.map((c, i) => {
                                if (c.type === RadioOption) {
                                    return cloneElement(c, { index: i, key: i });
                                }
                                throw new Error('Only RadioOption element allow in Radio Element')
                            })
                        }

                        return cloneElement(children, { index: 0, key: 0, });
                    })()}
                </div>
            </RadioContext.Provider>
        </div>
    )
}


export function RadioOption<T>({ label, value, index, disabled = false, appearance, className, children } : BoilerplateRadioOptionProps<T>) {

    const context = useContext(RadioContext);


    const onSelect = (index: number, value: any) => {
        (!disabled && value != context.value) && context.set(index, value || label);
    }
 
    return (
        <div className={`inline-flex items-center gap-2 ${disabled ? DisabledStyle : 'cursor-pointer'}`} onClick={() => onSelect(index!, value)}>
            <div className={twMerge(`rounded-full border-[0.13rem] border-primary p-[0.13rem] w-[1.1rem] h-[1.1rem] flex justify-center items-center`, appearance?.outerRadio?.className)}>
                <div className={twMerge(`rounded-full bg-primary w-full h-full transition-all duration-500 ${value == context.value ? 'scale-100' : 'scale-0'}`, appearance?.innerRadio?.className )}></div>
            </div>
            {
                label ? <div className={twMerge(`font-light text-[0.9rem]`, `${className || appearance?.label}`)}>{label}</div> : children
            }
        </div>
    )
}