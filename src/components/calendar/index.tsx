import '../../style.css'

import React from 'react';
import { Left, DoubleLeft, Right, DoubleRight, CalendarThree } from '@icon-park/react';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import moment from 'moment';
import { Option } from './../select';
import shortid from 'shortid';
import { BoilerplateAppearance } from '../../types/appearance';
import { twMerge } from 'tailwind-merge';

export const CalendarInputTimeFormat = Object.freeze({
    TwentyFourHour: '24',
    TwelveHour: '12'
})
export const CalendarInputModelAlign = Object.freeze({
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
})


export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME12_FORMAT = 'YYYY-MM-DD hh:mm:ss A';
export const DATETIME24_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const FORMATTED_TODAY_DATE = moment().format('YYYY-MM-DD');
export const DEFAULT_MIN_DATE = '1800-01-01';
export const DEFAULT_MAX_DATE = '9999-12-30';





export interface CalendarAppearance {
    day?: BoilerplateAppearance,
    month?: BoilerplateAppearance,
    modal?: BoilerplateAppearance,
    controlButton?: BoilerplateAppearance,
    weekday?: BoilerplateAppearance,
    todayButton?: BoilerplateAppearance,
    currentTimeButton?: BoilerplateAppearance
}

export interface TimeAppearance {
    hour?: BoilerplateAppearance,
    minute?: BoilerplateAppearance,
    second?: BoilerplateAppearance,
    A?: BoilerplateAppearance
}

export interface BolierplateCalenterProps {
    value?: any | null | undefined,
    autoCloseOnSelect?: boolean,
    onChange?: (selected: string, formatted: string) => void
    min?: string,
    max?: string,
    modalAlign?: 'center' | 'left' | 'right',
    includeTime?: boolean,
    timeFormat?: '24' | '12',
    className?: string | null,
    appearance?: {
        calendar?: CalendarAppearance | undefined,
        input?: BoilerplateAppearance | undefined,
        time?: TimeAppearance | undefined
    }
}



export function CalendarInput({ value, autoCloseOnSelect = true, onChange, appearance, min = DEFAULT_MIN_DATE, max = '9999-05-15', modalAlign = CalendarInputModelAlign.LEFT, includeTime = false, timeFormat = CalendarInputTimeFormat.TwelveHour, className = '' }: BolierplateCalenterProps) {

    const ref: React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const inputDiv = useRef<HTMLDivElement | undefined>();
    const id = useRef(shortid());
    const [show, setShow] = useState(false);
    const [modalPosition, setModalPosition] = useState({ scale: 1, top: '0px' });
    const format = includeTime ? timeFormat == CalendarInputTimeFormat.TwelveHour ? DATETIME12_FORMAT : DATETIME24_FORMAT : DATE_FORMAT;


    useEffect(() => {
        if (show) ref?.current?.focus();
        else ref.current = null;
    }, [show])



    return (
        <div className={`relative`}>
            <div ref={inputDiv as React.RefObject<HTMLDivElement>} className={twMerge('rounded-md w-full flex gap-2 cursor-pointer items-center px-3 py-3 border', appearance?.input?.className)} onClick={() => setShow(show => !show)}>
                <CalendarThree theme="outline" size="20" strokeWidth={3} />
                {value instanceof moment ? (value as moment.Moment).format(format) : moment(value, format).format(format)}
            </div>
            <AnimatePresence>
                {
                    show && (
                        () => {

                            let align = '';
                            if (modalAlign == CalendarInputModelAlign.CENTER)
                                align = 'origin-top';
                            if (modalAlign == CalendarInputModelAlign.LEFT)
                                align = 'origin-top-left';
                            if (modalAlign == CalendarInputModelAlign.RIGHT)
                                align = 'origin-top-right right-0';


                            if (ref.current == null)
                                setTimeout(() => {
                                    const modal = ref.current;
                                    const input = inputDiv.current;
                                    const inputBound = input!.getBoundingClientRect();

                                    const height = modal!.offsetHeight;
                                    const width = modal!.offsetWidth;

                                    const isOverflowed = inputBound.top + inputBound.height + height > window.innerHeight;
                                    const overflowedY = window.innerHeight - (inputBound.top + inputBound.height + height);

                                    const top = isOverflowed ? inputBound.top + inputBound.height + overflowedY : inputBound.top + inputBound.height;

                                    setModalPosition({
                                        top: `${top}px`,
                                        scale: 1
                                    })
                                }, 100);

                            return (
                                <>
                                    <motion.div
                                        ref={ref}
                                        key={id.current}
                                        initial={{ scale: 0 }}
                                        animate={modalPosition}
                                        exit={{ scale: 0 }}
                                        transition={{ duration: 0.2, type: 'just' }}
                                        tabIndex={1}
                                        className={`${align} z-[50] w-max h-max fixed outline-none select-none will-change-transform rounded-xl overflow-hidden shadow-black/10 shadow-xl`}
                                    >
                                        <CalendarPickForm id={id.current} appearance={appearance?.calendar} onChange={(selected) => {
                                            if (autoCloseOnSelect) setShow(false);
                                            onChange && onChange(selected, selected.format(format));
                                        }} value={value} min={min} max={max} includeTime={includeTime} timeFormat={timeFormat} />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='bg-black/10 w-full h-full fixed top-0 left-0 z-[5]' onClick={() => setShow(false)}></motion.div>
                                </>
                            )
                        }
                    )()
                }
            </AnimatePresence>
        </div>
    )
}









export interface BoilerplateCalendarPickFormProps {
    value: any,
    id: string,
    onChange: (data: any) => void,
    min: string,
    max: string,
    includeTime: boolean,
    timeFormat: '24' | '12',
    appearance: CalendarAppearance | undefined
}






function CalendarPickForm({ value, id, onChange, min, max, includeTime, appearance, timeFormat }: BoilerplateCalendarPickFormProps) {



    const format = includeTime ? timeFormat == CalendarInputTimeFormat.TwelveHour ? DATETIME12_FORMAT : DATETIME24_FORMAT : DATE_FORMAT;
    const valueInMoment = moment(value, format);
    const isTwelveHour = timeFormat == CalendarInputTimeFormat.TwelveHour;
    const [view, setView] = useState<string | moment.Moment>(valueInMoment);
    const [time, setTime] = useState<{ hour: number | string, minute: number | string, second: number | string, a: 'AM' | 'PM' | string }>((() => {
        const hour = valueInMoment.hour();
        return {
            hour: timeFormat == CalendarInputTimeFormat.TwelveHour ? hour < 12 ? hour + 12 : hour - 12 : hour,
            minute: valueInMoment.minute(),
            second: valueInMoment.second(),
            a: valueInMoment.hour() > 12 ? 'PM' : 'AM'
        };
    })());






    const calculatedData = useMemo(() => {

        const currentDate = moment(view, format);
        const prevMonth = currentDate.clone().add(-1, 'months');
        const nextMonth = currentDate.clone().add(1, 'months');

        const prevMonthDays = prevMonth.daysInMonth();
        const currentMonthDays = currentDate.daysInMonth();
        const nextMonthDays = nextMonth.daysInMonth();

        const startDay = currentDate.clone().add(-currentDate.date() + 1, 'days').weekday();


        const prevCount = startDay;
        const nextCount = 42 - (prevCount + currentMonthDays);

        const maxDate = moment(max);
        const minDate = moment(min);

        const maxYear = maxDate.year();
        const minYear = minDate.year();


        const isValid = currentDate.isValid();


        return {
            isValid,
            prev: {
                days: prevMonthDays,
                count: prevCount,
                month: prevMonth.month(),
                year: prevMonth.year(),
                prevMonth,
            },
            current: {
                days: currentMonthDays,
                count: currentMonthDays,
                month: currentDate.month(),
                year: currentDate.year(),
                currentDate,
            },
            next: {
                days: nextMonthDays,
                count: nextCount,
                month: nextMonth.month(),
                year: nextMonth.year(),
                nextMonth
            },
            maxDate,
            minDate,
            maxYear,
            minYear,
            canPrevYear: minYear < currentDate.year(),
            canNextYear: maxYear > currentDate.year(),
            canPrev: prevMonth.clone().add(1, 'month').isSameOrAfter(minDate),
            canNext: moment(`${nextMonth.year()}-${nextMonth.month() + 1}-${nextCount}`, 'YYYY-M-D').isSameOrBefore(maxDate),
            startDay,
        }
    }, [view, min, max]);




    const nextMonth = () => {
        setView(val => moment(val, format).add(1, 'month').format(DATE_FORMAT));
    }

    const prevMonth = () => {
        setView(val => moment(val, format).add(-1, 'month').format(DATE_FORMAT));
    }

    const nextYear = () => {
        setView(val => moment(val, format).add(1, 'year').format(DATE_FORMAT));
    }

    const prevYear = () => {
        setView(val => moment(val, format).add(-1, 'year').format(DATE_FORMAT));
    }



    const toToday = () => {
        const today = moment();
        setView(today.format(DATE_FORMAT));
        today.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        setTime({ hour: 12, minute: 0, second: 0, a: 'AM' })
        onChange(today)
    }

    const toCurrent = () => {
        const today = moment();
        const hour = today.hour();

        const isTwelveHour = timeFormat == CalendarInputTimeFormat.TwelveHour;

        setView(today.format(DATE_FORMAT));
        setTime({ hour: isTwelveHour && hour > 12 ? hour - 12 : hour, minute: today.minute(), second: today.second(), a: hour > 12 ? 'PM' : 'AM' })
        onChange(today)
    }

    const isToday = (date: string) => {
        return FORMATTED_TODAY_DATE == date;
    }

    const isSelected = (date: string) => {
        return moment(value, format).format(DATE_FORMAT) == date;
    }

    const onPick = (date: moment.Moment) => {
        // console.log(date);
        if (includeTime) {
            date.set({
                hour: valueInMoment.hour(),
                minute: valueInMoment.minute(),
                second: valueInMoment.second(),
                millisecond: valueInMoment.millisecond()
            });
        }
        onChange && onChange(date);
    }





    return (
        <LayoutGroup key={id}>
            <div key={'calendar-page'} className={`aspect-square w-[20rem] flex flex-col gap-3 p-3 z-50 ${appearance?.modal?.className}`}>
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-2'>
                        <div className="font-bold text-[1.4rem]">{calculatedData.current.currentDate.format('MMM').toUpperCase()}</div>
                        <div className='font-bold text-[1.4rem]'>{calculatedData.current.year}</div>
                    </div>
                    <div className='flex gap-2'>
                        <button className={`${appearance?.controlButton?.className || 'border-black dark:border-white'} border rounded-full p-1 aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 disabled:opacity-10 disabled:cursor-not-allowed`} disabled={!calculatedData.canPrevYear} onClick={prevYear}><DoubleLeft theme="outline" size="20" /></button>
                        <button className={`${appearance?.controlButton?.className || 'border-black dark:border-white'} border rounded-full p-1 aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 disabled:opacity-10 disabled:cursor-not-allowed`} disabled={!calculatedData.canPrev} onClick={prevMonth}><Left theme="outline" size="20" /></button>
                        <button className={`${appearance?.controlButton?.className || 'border-black dark:border-white'} border rounded-full p-1 aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 disabled:opacity-10 disabled:cursor-not-allowed`} disabled={!calculatedData.canNext} onClick={nextMonth}><Right theme="outline" size="20" /></button>
                        <button className={`${appearance?.controlButton?.className || 'border-black dark:border-white'} border rounded-full p-1 aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 disabled:opacity-10 disabled:cursor-not-allowed`} disabled={!calculatedData.canNextYear} onClick={nextYear}><DoubleRight theme="outline" size="20" /></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full gap-1">
                    {
                        ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'].map((day, index) => {
                            return (
                                <div key={day} className={`${appearance?.weekday?.className} font-bold text-[0.8rem] flex items-center justify-center ${day == 'SAT' || day == 'SUN' ? 'text-red-500' : ''}`}>{day}</div>
                            )
                        })
                    }
                    {
                        (() => {
                            const days = [];
                            for (let i = 1; i <= calculatedData.prev.count; i++) {
                                const day = calculatedData.prev.days - (calculatedData.prev.count - i);
                                const date = moment(`${calculatedData.prev.year}-${calculatedData.prev.month + 1}-${day}`, 'YYYY-M-D');
                                const formattedDate = date.format(DATE_FORMAT);
                                const isTodayDate = isToday(formattedDate);
                                const isSelectedDate = isSelected(formattedDate);
                                const isBetweenDate = date.isSameOrAfter(calculatedData.minDate) && date.isSameOrBefore(calculatedData.maxDate);

                                days.push(
                                    <button key={`${i}-${calculatedData.prev.month}-${calculatedData.prev.year}`} disabled={!isBetweenDate} className={`${appearance?.day?.className} cursor-pointer relative flex items-center justify-center w-full opacity-40 disabled:opacity-10 disabled:cursor-not-allowed aspect-square hover:border rounded-full ${isTodayDate && 'bg-red-500 text-white'}`} onClick={() => onPick(date)}>
                                        {day}
                                        {isSelectedDate && <motion.div key={formattedDate} layoutId='calendar-circle' className='absolute w-full h-full'><div className='w-full h-full border-[2px] border-black dark:border-white rounded-full scale-[1.2]'></div></motion.div>}
                                    </button>
                                )
                            }

                            for (let i = 1; i <= calculatedData.current.count; i++) {
                                const date = moment(`${calculatedData.current.year}-${calculatedData.current.month + 1}-${i}`, 'YYYY-M-D');
                                const formattedDate = date.format(DATE_FORMAT);
                                const isTodayDate = isToday(formattedDate);
                                const isSelectedDate = isSelected(formattedDate);
                                const isBetweenDate = date.isSameOrAfter(calculatedData.minDate) && date.isSameOrBefore(calculatedData.maxDate);
                                days.push(
                                    <button key={`${i}-${calculatedData.current.month}-${calculatedData.current.year}`} disabled={!isBetweenDate} className={`${appearance?.day?.className} cursor-pointer relative flex items-center justify-center w-full disabled:opacity-10 disabled:cursor-not-allowed aspect-square hover:border rounded-full ${isTodayDate && 'bg-red-500 text-white'}`} onClick={() => onPick(date)}>
                                        {i}
                                        {isSelectedDate && <motion.div key={formattedDate} layoutId='calendar-circle' className='absolute w-full h-full'><div className='w-full h-full border-[2px] border-black dark:border-white rounded-full scale-[1.2]'></div></motion.div>}
                                    </button>
                                )
                            }


                            for (let i = 1; i <= calculatedData.next.count; i++) {
                                const date = moment(`${calculatedData.next.year}-${calculatedData.next.month + 1}-${i}`, 'YYYY-M-D');
                                const formattedDate = date.format('YYYY-MM-DD');
                                const isTodayDate = isToday(formattedDate);
                                const isSelectedDate = isSelected(formattedDate);
                                const isBetweenDate = date.isSameOrAfter(calculatedData.minDate) && date.isSameOrBefore(calculatedData.maxDate);

                                days.push(
                                    <button key={`${i}-${calculatedData.next.month}-${calculatedData.next.year}`} disabled={!isBetweenDate} className={`${appearance?.day?.className} cursor-pointer relative flex items-center justify-center w-full opacity-40 disabled:opacity-10 disabled:cursor-not-allowed aspect-square hover:border rounded-full ${isTodayDate && 'bg-red-500 text-white'}`} onClick={() => onPick(date)}>
                                        {i}
                                        {isSelectedDate && <motion.div key={formattedDate} layoutId='calendar-circle' className='absolute w-full h-full'><div className='w-full h-full border-[2px] border-black dark:border-white rounded-full scale-[1.2]'></div></motion.div>}
                                    </button>
                                )
                            }
                            return days;
                        })()
                    }
                </div>
                <div className='flex items-center justify-between w-full overflow-hidden'>
                    <div className='flex gap-2'>
                        <div onClick={toToday} className={`${appearance?.todayButton?.className || 'text-white bg-red-600'} bg-primary w-max px-2 py-1 rounded-full cursor-pointer text-[0.8rem]`}>Today</div>
                        {includeTime && <div onClick={toCurrent} className={`${appearance?.todayButton?.className || 'text-white bg-red-600'} bg-primary w-max px-2 py-1 rounded-full cursor-pointer text-[0.8rem]`}>Current</div>}
                        <div onClick={() => setView(value)} className="border w-max px-2 py-1 rounded-full cursor-pointer text-[0.8rem]">Selected date</div>
                    </div>
                </div>
                {
                    includeTime && (
                        (() => {

                            return (
                                <div>
                                    <div className='font-bold'>Time</div>
                                    <div className='flex gap-2 w-full overflow-hidden'>
                                        <div className='w-full'>
                                            <span className='text-[0.7rem] font-light'>Hour</span>
                                            <input type="number" onChange={({ target }) => {
                                                const hour = Number(target.value);
                                                const isTwelveHour = timeFormat == CalendarInputTimeFormat.TwelveHour;
                                                const m = valueInMoment.clone();
                                                m.set({ hour: isTwelveHour? time.a == 'PM' ? hour + 12 : hour : hour  });
                                                setTime(t => ({ ...t, hour: target.value, a: m.format('A') }));
                                                onChange(m)
                                            }} value={time.hour} min={isTwelveHour ? 1 : 0} max={isTwelveHour ? 12 : 23}
                                                className='text-[1.2rem] px-2 w-full border rounded-md font-bold dark:bg-transparent' />
                                        </div>
                                        <div className='w-full'>
                                            <span className='text-[0.7rem] font-light'>Minute</span>
                                            <input type="number" onChange={({ target }) => {
                                                const minute = Number(target.value);
                                                const m = valueInMoment.clone();
                                                m.set({ minute });
                                                setTime(t => ({ ...t, minute, a: m.format('A') }));
                                                onChange(m)
                                            }} value={time.minute} min={0} max={59}
                                                className='text-[1.2rem] px-2 w-full border rounded-md font-bold dark:bg-transparent' />
                                        </div>
                                        <div className='w-full'>
                                            <span className='text-[0.7rem] font-light'>Second</span>
                                            <input type="number" onChange={({ target }) => {
                                                const second = Number(target.value);
                                                const m = valueInMoment.clone();
                                                m.set({ second });
                                                setTime(t => ({ ...t, second, a: m.format('A') }));
                                                onChange(m)
                                            }} value={time.second} min={0} max={59}
                                                className='text-[1.2rem] px-2 w-full border rounded-md font-bold dark:bg-transparent' />
                                        </div>
                                        {isTwelveHour &&
                                            <div className='w-full'>
                                                <span className='text-[0.7rem] font-light'>{'AM/PM'}</span>
                                                <select value={time.a} className='font-bold border rounded-lg outline-none p-1 w-full dark:bg-transparent' onChange={({ target }) => {
                                                    const isTwelveHour = timeFormat == CalendarInputTimeFormat.TwelveHour;
                                                    const m = valueInMoment.clone();
                                                    const hour = m.hour();
                                                    m.set({ hour: isTwelveHour && hour < 12 ? hour + 12 : hour - 12 });
                                                    setTime(t => ({ ...t, a: target.value }));
                                                    onChange(m);
                                                }}>
                                                    <Option value={'AM'}>AM</Option>
                                                    <Option value={'PM'}>PM</Option>
                                                </select>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })()
                    )
                }
            </div>
        </LayoutGroup>
    )
}


