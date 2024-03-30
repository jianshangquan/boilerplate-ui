import '../../style.css'


import { useEffect, useRef, useState } from "react";
import { PreviewOpen, PreviewCloseOne } from '@icon-park/react';


export interface BoilerplateInputProp extends React.HTMLAttributes<HTMLInputElement>{
  value: any,
  type: 'text' | 'number' | 'password',
  placeholder: string,
  min: number | undefined,
  max: number | undefined,
  maxLength: number | undefined,
  onShowPreview: ((value: any) => string) | null,
  errorMessage: string | null
}


export function Input({
    value = '',
    onChange,
    type = 'text',
    autoFocus = false,
    placeholder = '',
    className = '',
    min = undefined,
    max = undefined,
    maxLength = undefined,
    onShowPreview = null,
    errorMessage = null
} : BoilerplateInputProp) {

    const isNotEmpty = value?.length != 0 || value == null;
    const [focused, setFocused] = useState(isNotEmpty ? true : false);
    const input = useRef<HTMLInputElement | null>(null);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
        if (focused) input.current?.focus();
    }, [focused])


    useEffect(() => {
        if (autoFocus)
            input.current?.focus();
    }, [])

    useEffect(() => {
        if (errorMessage != null && errorMessage?.length != 0)
            setFocused(true);
    }, [errorMessage])

    return (
        <div className="w-full">
            <div className={`relative w-full cursor-text mt-[0.6rem] border rounded-lg outline-none dark:bg-stone-900 ${className}`} tabIndex={1}
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
                <div className={`absolute ${focused ? 'top-[0] translate-y-[-50%] max-w-[calc(100%-1rem)] left-[0.5rem] px-2 text-[0.8rem]' : 'top-[50%] translate-y-[-50%] max-w-[calc(100%-2rem)] left-[1rem] opacity-50 px-0 text-[0.9rem]'} bg-white dark:bg-stone-900 transition-all duration-200 font-light block text-ellipsis overflow-hidden whitespace-nowrap`}>{placeholder}</div>
                <div className="px-2 flex items-center">
                    <input
                        ref={input}
                        min={min}
                        max={max}
                        type={inputType}
                        maxLength={maxLength}
                        value={value}
                        onChange={onChange}
                        className="pb-2 pt-3 outline-none rounded-lg w-full bg-transparent"
                    />
                    {type == 'password' && <div onClick={() => setInputType(t => t == 'password' ? 'text' : type)} className={`cursor-pointer transition-all duration-300 ${focused ? 'opacity-100' : 'opacity-0'}`}>
                        {
                            inputType == 'password' ? <PreviewOpen theme="outline" size="20" strokeWidth={3}/> : <PreviewCloseOne theme="outline" size="20" strokeWidth={3}/>
                        }
                    </div>}
                </div>
            </div>
            {!!errorMessage && <div className="text-[0.8rem] text-red-600">{errorMessage}</div>}
            <div>{!!onShowPreview && onShowPreview(value)}</div>
        </div>
    )
}