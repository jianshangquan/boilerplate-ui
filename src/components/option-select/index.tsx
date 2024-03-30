import '../../style.css'

import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Check } from '@icon-park/react';
import shortid from 'shortid';
import { BoilerplateAppearance, ClassName } from '../../types/appearance';


export const OptionModelAlign = Object.freeze({
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
})




export interface BoilerplateOptionSelectProps {
    items: {label: any, value: any, disabled?: boolean}[],
    selectedItem: any[] | any,
    setSelectedItem: (value: any) => void,
    showAllTypes?: boolean,
    multiples?: boolean,
    autoCloseOnSelect?: boolean,
    autoCloseOnSelectAllType?: boolean,
    className?: ClassName,
    modalAlign?: 'center' | 'left' | 'right',
    placeholder?: string,
    apperance?: {
        outerContainer: BoilerplateAppearance,
        modal: BoilerplateAppearance,
        inputContainer: BoilerplateAppearance,
        label: BoilerplateAppearance,
        placeholder: BoilerplateAppearance
    }
}









export function OptionSelect({
    items = [],
    selectedItem = [],
    setSelectedItem,
    showAllTypes = true,
    multiples = true,
    autoCloseOnSelect = false,
    autoCloseOnSelectAllType = true,
    className,
    modalAlign = OptionModelAlign.CENTER,
    placeholder = ' ',
    apperance
} : BoilerplateOptionSelectProps) {

    const id = useRef<string>(shortid());
    const ref = useRef<HTMLInputElement | undefined>();
    const inputDiv = useRef<HTMLDivElement | undefined>();
    const [bound, setBound] = useState<any>();
    const [show, setShow] = useState(false);



    useEffect(() => {
        if (show) ref?.current?.focus();
        setBound(inputDiv.current?.getBoundingClientRect())
    }, [show]);



    return (
        <div className={`relative ${apperance?.outerContainer.className || className}`}>
            <AnimatePresence>
                { show && <motion.div onClick={() => setShow(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`${apperance?.placeholder.className} w-full h-full fixed top-0 left-0 z-50`}></motion.div>}
            </AnimatePresence>
            <div ref={inputDiv as React.RefObject<HTMLDivElement>} onClick={() => setShow(sh => !sh)} className={`${apperance?.inputContainer.className} border rounded-md max-h-[10rem] cursor-pointer p-1`}>
                <LayoutGroup id={id.current}>
                    <AnimatePresence>
                        {
                            (selectedItem?.length == 0 || selectedItem == null) && (
                                <div className='py-[0.25rem] px-2 bg-primary/40 opacity-50 text-[0.8rem] rounded-md mx-1 my-1 inline-block'>{placeholder}</div>
                            )
                        }
                        {
                            multiples ? (items.filter(item => selectedItem.includes(item.value))).map((item, index) => {
                                return (
                                    <motion.span layoutId={item.value} key={item.value} className={`py-[0.1rem] px-2 ${apperance?.label.className || ' bg-primary/20 bg-gray-100 dark:bg-stone-700'} rounded-md mx-1 my-1 inline-block`}>{item.label}</motion.span>
                                )
                            }) : selectedItem != null ? 
                                (() => {
                                    const item = items.find(i => i.value == selectedItem);
                                    return <motion.span key={item?.value} initial={{ translateX: '1rem' }} animate={{ translateX: '0rem' }} className={`py-[0.1rem] px-2 ${apperance?.label.className || 'bg-primary/20 bg-gray-100 dark:bg-stone-700'} rounded-md mx-1 my-1 inline-block`}>{item?.label}</motion.span>
                                })() :
                                null
                        }
                    </AnimatePresence>
                </LayoutGroup>
            </div>
            <AnimatePresence>
                {
                    show && (
                        <motion.div
                            ref={ref as React.RefObject<HTMLDivElement>}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2, type: 'just' }}
                            style={(() => {
                                const input = inputDiv.current;
                                const bottomMaxHeight = window.innerHeight - bound.top - bound.height;
                                const topMaxHeight = window.innerHeight - (window.innerHeight -  bound.top);
                                const isOverHalf = bound.top > window.innerHeight / 2;
                                return {
                                    top: `${isOverHalf ? topMaxHeight : bound.top + bound.height}px`,
                                    left: `${bound.left}px`,
                                    width: `${input?.offsetWidth || 0}px`,
                                    translateY: isOverHalf ? '-100%' : '0%',
                                    maxHeight: `${isOverHalf ? topMaxHeight : bottomMaxHeight}px`
                                }
                            })()}
                            className={`${apperance?.modal.className || 'bg-white dark:bg-stone-600'} fixed ${(() => {;
                                const isOverHalf = bound.top > window.innerHeight / 2;
                                if(modalAlign == OptionModelAlign.CENTER)
                                    return isOverHalf ? 'origin-bottom' : 'origin-top';
                                if(modalAlign == OptionModelAlign.LEFT)
                                    return isOverHalf ? 'origin-bottom-left' : 'origin-top-left';
                                if(modalAlign == OptionModelAlign.RIGHT)
                                    return  isOverHalf ? 'origin-bottom-right' : 'origin-top-right'
                            })()} p-2 w-full select-none rounded-md shadow-xl shadow-black/10 outline-none z-50 overflow-y-auto overscroll-contain`}
                            tabIndex={1}>
                            {
                                (showAllTypes && multiples) && (
                                    <div className='flex gap-2 items-center hover:bg-primary/10 dark:hover:bg-primary/20 justify-between rounded-lg py-1 px-1 cursor-pointer' onClick={() => {
                                        if(selectedItem.length == items.filter(i => i.disabled != true).length){
                                            setSelectedItem([]);
                                        }else{
                                            setSelectedItem(items.filter(i => i.disabled != true).map(i => i.value))
                                        }
                                        if(autoCloseOnSelect && autoCloseOnSelectAllType){
                                            setShow(false)
                                        }
                                    }}>
                                        <div className='font-bold'>All type</div>
                                        {selectedItem.length == items.length && <Check size={20} strokeWidth={6} className='text-green-500' />}
                                    </div>
                                )
                            }
                            {
                                items.map((item, index) => {
                                    const disabled = item.disabled;
                                    const isExist = multiples ? (selectedItem as any[]).filter(i => i == item.value).length != 0 : item.value == selectedItem;
                                    
                                    return (
                                        <div key={item.value} className={`flex gap-2 items-center transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg justify-between py-1 px-2  ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => {
                                            if(disabled) return;
                                            if (multiples) {
                                                if(selectedItem.includes(item.value)){
                                                    setSelectedItem((selectedItem as any[]).filter(i => i != item.value))
                                                }else{
                                                    setSelectedItem([...selectedItem, item.value])
                                                }
                                            }else{
                                                setSelectedItem(item.value)
                                            }
                                            if(autoCloseOnSelect) setShow(false)
                                        }}>
                                            <div>{item.label}</div>
                                            {isExist && <Check size={20} className='text-green-500' />}
                                        </div>
                                    )
                                })
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}
