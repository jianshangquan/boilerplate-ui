import React from "react"
import lodash from 'lodash';
import moment from "moment";
import { AnimationProps, motion } from 'framer-motion';


const MONTH_NAME = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


export interface GithubGraphProp {
    startDate?: string,
    onTitle?: (value: { value: number, index: number, date: moment.Moment }) => string,
    data?: number[],
    animation?: {
        block?: AnimationProps,
        month?: AnimationProps
    }
}



export function GithubGraph({ 
    startDate, 
    onTitle =({ value, index, date }) => `${date.format('YYYY-MMM-DD')} value: ${value}`,
    data = [],
    animation
}: GithubGraphProp) {
    return (
        <div className="w-max overflow-x-auto">
            <div className="p-2 rounded-md grid gap-1 grid-flow-col grid-rows-[1rem_repeat(7,_minmax(0,_1fr))]">
                {
                    (() => {
                        const comp: React.ReactNode[] = [];
                        const max = lodash.max(data) || 0;

                        const current = moment(startDate, 'YYYY-M-D');
                        const end = current.clone().add(12, 'months').endOf('month');
                        const days: number = end.diff(current, 'days');
                        const startWeekDays = current.weekday() + 1;


                        let date = current.clone();
                        let lastspans = 0;
                        let week = null;
                        let day = 0;
                        // let isEndMonthisCompleteWeek = false;
                        for (let i = 0; i < days + lastspans; i++) {

                            

                            const x = Math.floor(i / 8);
                            const y = i % 8;
                            const isStartWeek = week == null ? true : week != x;
                            // isEndMonthisCompleteWeek = date.clone().endOf('month').date() == date.date() && y == 7
                            week = x;
                            console.log({x, y}, 'isStartWeek', isStartWeek, 'currentWeek', x);
                            if (isStartWeek) {
                                // if(lastspans >= currentWeek) continue;
                                if (!(x >= lastspans)) continue;
                                const span = getWeeksInMonth(date);
                                console.log('week', span);
                                comp.push(
                                    <Block.month key={i} span={span} month={date.format('MMM')} animation={animation?.month}/>
                                )
                                lastspans = span + lastspans;
                            }else if(startWeekDays > i){
                                comp.push(
                                    <Block.empty key={i}/>
                                )
                                continue;
                            } else {
                                const index = day;
                                const value = data[index] || 0
                                const opacity = !value ? 0 : value / max;
                                comp.push(
                                    <Block key={i} opacity={opacity} title={onTitle({ value, index, date })} animation={{ ...animation?.block, transition: animation?.block?.transition || { delay: i * 0.001, duration: 0.2 } }}/>
                                )
                                date = date.clone().add(1, 'days');
                                day++;
                            }
                        }

                        return comp;
                    })()
                }
            </div>
        </div>
    )
}








export interface BoilerplateGithubCommitHistoryBlockProps {
    title?: string,
    opacity?: number,
    animation?: AnimationProps
}

function Block({ title, opacity = 0, animation }: BoilerplateGithubCommitHistoryBlockProps) {
    const ani: AnimationProps = {
        ...{ 
            initial: { opacity: 0, translateX: `2rem`, scale: 2 },
            animate: { opacity: 1, translateX: '0rem', scale: 1 },
            exit: { opacity: 0, translateX: '0.3rem' },
            transition: { duration: 0.3 }
        },
        ...animation,
    }
    console.log(animation)
    return (
        <motion.div
            initial={ani.initial}
            animate={ani.animate}
            exit={ani.exit}
            transition={ani.transition}
            title={title}
            className={`w-[0.7rem] h-[0.7rem] will-change-transform cursor-pointer rounded-sm bg-black/5`}>
            <div className="w-full h-full bg-primary rounded-sm" style={{ opacity: opacity }}></div>
        </motion.div>
    )
}







export interface BoilerplateGithubCommitHistoryMonthBlockProps {
    span: number, 
    month: string,
    animation?: AnimationProps
}
Block.month = function ({ span, month, animation } : BoilerplateGithubCommitHistoryMonthBlockProps ) {
    const ani: AnimationProps = {
        ...{ 
            initial: { opacity: 0, translateX: `2rem`},
            animate: { opacity: 0.7, translateX: '0rem'},
            exit: { opacity: 0, translateX: '0.3rem' },
            transition: { duration: 0.3 }
        },
        ...animation,
    }
    return (
        <motion.div
            initial={ani.initial}
            animate={ani.animate}
            exit={ani.exit}
            transition={ani.transition}
            className={`will-change-transform text-[0.7rem] font-light cursor-pointer overflow-hidden rounded-sm`}
            style={{ gridColumn: `span ${span} / span 2` }}>
            {month}
        </motion.div>
    )
}





Block.empty = function ({ }) {
    return (
        <div></div>
    )
}



function getWeeksInMonth(date: moment.Moment) {
    const endDate = date?.clone().endOf('month');
    const diff = endDate?.date() - date?.date();
    const week = diff / 7;
    const decimal = week % 1;
    const roundedWeek = decimal > 0 ? Math.round((week + 1) - decimal) : Math.round(week - decimal);
    const isEndMonthisCompleteWeek = endDate.weekday() + 1 == 7;
    // console.log({ diff, decimal, week, roundedWeek, weekday: endDate.weekday(), isEndMonthisCompleteWeek });
    return isEndMonthisCompleteWeek ? roundedWeek : roundedWeek + 1;
}