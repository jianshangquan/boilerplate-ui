import '../../style.css'

import React, { HTMLInputTypeAttribute } from 'react';
import { useEffect, useRef, useState } from "react";
import { PreviewOpen, PreviewCloseOne } from '@icon-park/react';
import { BoilerplateAppearance, ClassName } from '../../types/appearance';
import { twMerge } from 'tailwind-merge'
import { DisabledStyle } from '../common';



export interface BoilerplateTextareaProps extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onInput'>{
    value?: any,
    placeholder?: string,
    maxLength?: number,
    errorMessage?: string,
    autoFocus?: boolean,
    className?: string,
    disabled?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | any,
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void | any,
    appearance?: BoilerplateTextareaAppearance | null
}





export interface BoilerplateTextareaAppearance {
    textarea?: BoilerplateAppearance,
    placeholder?: BoilerplateAppearance,
    message?: BoilerplateAppearance,
    preview?: BoilerplateAppearance
}




export const DefaultTextareaAppearance: BoilerplateTextareaAppearance = {
    textarea: {
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



export function Textarea({
    value = '',
    onChange,
    autoFocus = false,
    placeholder = '',
    className = '',
    maxLength,
    errorMessage,
    disabled = false,
    appearance = DefaultTextareaAppearance
}: BoilerplateTextareaProps) {

    const isNotEmpty = value?.length != 0 || value == null;
    const [focused, setFocused] = useState(isNotEmpty || disabled ? true : false);
    const input = useRef<HTMLTextAreaElement | null>(null);


    useEffect(() => {
        if (focused) input.current?.focus();
    }, [focused, value])


    useEffect(() => {
        if (value != null && value.length > 0) setFocused(true)
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
        <div className={`${twMerge(`w-full ${disabled && DisabledStyle}`, className)}`}>
            <div className={`relative w-full ${disabled ? '!cursor-not-allowed' : 'cursor-text'} mt-[0.6rem] border rounded-lg outline-none dark:bg-stone-900`} tabIndex={1}
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
                <div className={twMerge(`absolute ${focused ? 'top-[0] translate-y-[-50%] max-w-[calc(100%-1rem)] left-[0.5rem] px-2 text-[0.8rem]' : 'top-[0.5rem] max-w-[calc(100%-2rem)] left-[1rem] opacity-50 px-0 text-[0.9rem]'} bg-white dark:bg-stone-900 transition-all duration-200 font-light block text-ellipsis overflow-hidden whitespace-nowrap`, appearance?.placeholder?.className)}>{placeholder}</div>
                <div className="px-2 flex items-center">
                    <textarea
                        ref={input}
                        maxLength={maxLength}
                        value={value}
                        disabled={disabled}
                        onChange={(event) => !disabled && (onChange as any)(event)}
                        className={twMerge('pb-2 pt-3 outline-none rounded-lg w-full bg-transparent disabled:!cursor-not-allowed ', appearance?.textarea?.className)}
                    ></textarea>
                </div>
            </div>
            {!!errorMessage && <div className={twMerge('text-[0.8rem]', appearance?.message?.className)}>{errorMessage}</div>}
        </div>
    )
}



