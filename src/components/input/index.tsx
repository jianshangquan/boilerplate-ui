import '../../style.css'

import React, { HTMLInputTypeAttribute } from 'react';
import { useEffect, useRef, useState } from "react";
import { PreviewOpen, PreviewCloseOne } from '@icon-park/react';
import { BoilerplateAppearance, ClassName } from '../../types/appearance';
import { twMerge } from 'tailwind-merge'


export interface BoilerplateInputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput'> {
    value?: any,
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    min?: number,
    max?: number,
    maxLength?: number,
    onShowPreview?: ((value: any) => string) | null,
    errorMessage?: string,
    autoFocus?: boolean,
    className?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | any,
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void | any,
    appearance?: BoilerplateInputAppearance | null
}







export interface BoilerplateInputAppearance {
    input?: BoilerplateAppearance,
    placeholder?: BoilerplateAppearance,
    message?: BoilerplateAppearance,
    preview?: BoilerplateAppearance
}




export const DefaultInputAppearance: BoilerplateInputAppearance = {
    input: {
        className: '',
        style: undefined,
    },
    placeholder: {
        className: '',
        style: undefined,
    },
    message: {
        className: 'text-red-600',
        style: undefined,
    },
    preview: {
        className: '',
        style: undefined
    }
}



export function Input({
    value = '',
    onChange,
    type = 'text',
    autoFocus = false,
    placeholder = '',
    className = '',
    min,
    max,
    maxLength,
    onShowPreview,
    errorMessage,
    appearance = DefaultInputAppearance
}: BoilerplateInputProps) {

    const isNotEmpty = value?.length > 0 || value == null;
    const [focused, setFocused] = useState(isNotEmpty ? true : false);
    const input = useRef<HTMLInputElement | null>(null);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
        if (focused) input.current?.focus();
    }, [focused])


    useEffect(() => {
        if(value != null && value.length > 0) setFocused(true)
    }, [value])


    useEffect(() => {
        if (autoFocus)
            input.current?.focus();
    }, [])

    useEffect(() => {
        if (errorMessage != null && errorMessage?.length != 0)
            setFocused(true);
    }, [errorMessage]);
    

    return (
        <div className={`${twMerge('w-full', className)}`}>
            <div className={`relative w-full cursor-text mt-[0.6rem] border rounded-lg outline-none dark:bg-stone-900`} tabIndex={1}
                onBlur={(event) => {
                    event.preventDefault();
                    if (!isNotEmpty)
                        setFocused(false)
                }}
                onFocus={(event) => {
                    event.preventDefault();
                    setFocused(true)
                    input.current?.select();
                }}>
                <div className={twMerge(`absolute ${focused ? 'top-[0] translate-y-[-50%] max-w-[calc(100%-1rem)] left-[0.5rem] px-2 text-[0.8rem]' : 'top-[50%] translate-y-[-50%] max-w-[calc(100%-2rem)] left-[1rem] opacity-50 px-0 text-[0.9rem]'} bg-white dark:bg-stone-900 transition-all duration-200 font-light block text-ellipsis overflow-hidden whitespace-nowrap`, appearance?.placeholder?.className)}>{placeholder}</div>
                <div className="px-2 flex items-center">
                    <input
                        ref={input}
                        min={min}
                        max={max}
                        type={inputType}
                        maxLength={maxLength}
                        value={value}
                        onChange={onChange}
                        className={twMerge(`pb-2 pt-3 outline-none rounded-lg w-full bg-transparent`, appearance?.input?.className)}
                    />
                    {type == 'password' && <div onClick={() => setInputType(t => t == 'password' ? 'text' : type)} className={`cursor-pointer transition-all duration-300 ${focused ? 'opacity-100' : 'opacity-0'}`}>
                        {
                            inputType == 'password' ? <PreviewOpen theme="outline" size="20" strokeWidth={3} /> : <PreviewCloseOne theme="outline" size="20" strokeWidth={3} />
                        }
                    </div>}
                </div>
            </div>
            {!!errorMessage && <div className={twMerge(`text-[0.8rem]`, appearance?.message?.className)}>{errorMessage}</div>}
            <div className={appearance?.preview?.className}>{!!onShowPreview && onShowPreview(value)}</div>
        </div>
    )
}



