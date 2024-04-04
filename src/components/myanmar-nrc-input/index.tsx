import React from 'react';
import { getStates, getNRCTownshipByState, MyanmarCitizenShortType } from 'check-mm-nrc';
import { twMerge } from 'tailwind-merge';
import { DisabledStyle } from '../common';


const states = getStates();



export interface BoilerplateMyanmarNRCInputValueProps {
    state?: string,
    township?: string,
    type?: string,
    number?: string
}

export interface BoilerplateMyanmarNRCInputProps {
    value?: BoilerplateMyanmarNRCInputValueProps,
    disabled?: boolean,
    onChange?: (value: BoilerplateMyanmarNRCInputValueProps) => void,
    onPreview?: (value: BoilerplateMyanmarNRCInputValueProps) => string
}




export function MyanmarNRCInput({ value, disabled = false, onChange, onPreview }: BoilerplateMyanmarNRCInputProps) {
    return (
        <div className={twMerge('flex flex-col gap-1', disabled ? DisabledStyle : '')}>
            <div className='flex gap-1 items-center border rounded-lg'>
                <select disabled={disabled} value={value?.state} className="p-2 rounded-xl w-[5rem] " onChange={({ target }) => {
                    // setBooking(booking => ({
                    //     ...booking,
                    //     citizenCard: `${target.value}/${booking.mmNRC.township}(${booking.mmNRC.type})${booking.mmNRC.number}`,
                    //     mmNRC: {
                    //         ...booking.mmNRC,
                    //         state: target.value
                    //     }
                    // }))

                    onChange && onChange({ ...value, state: target.value });
                }}>
                    {
                        states.map((state: any, index: number) => {
                            return <option key={index} value={state}>{state}</option>
                        })
                    }
                </select>
                <span>{'/'}</span>
                <select disabled={disabled} value={value?.township} className="p-2 rounded-xl w-[15rem] " onChange={({ target }) => {
                    // setBooking(booking => ({
                    //     ...booking,
                    //     citizenCard: `${booking.mmNRC.state}/${target.value}(${booking.mmNRC.type})${booking.mmNRC.number}`,
                    //     mmNRC: {
                    //         ...booking.mmNRC,
                    //         township: target.value
                    //     }
                    // }))
                    onChange && onChange({ ...value, township: target.value });
                }}>
                    {
                        getNRCTownshipByState(value?.state || '').map((state: any, index: number) => {
                            return <option key={index} value={state.name_en}>{state.name_en}</option>
                        })
                    }
                </select>
                <span>{'('}</span>
                <select disabled={disabled} value={value?.type} className="p-2 rounded-xl w-[5rem] " onChange={({ target }) => {
                    // setBooking(booking => ({
                    //     ...booking,
                    //     citizenCard: `${booking.mmNRC.state}/${booking.mmNRC.township}(${target.value})${booking.mmNRC.number}`,
                    //     mmNRC: {
                    //         ...booking.mmNRC,
                    //         type: target.value
                    //     }
                    // }))
                    onChange && onChange({ ...value, type: target.value });
                }}>
                    {
                        MyanmarCitizenShortType.map((type: string, index: number) => {
                            return <option key={index} value={type}>{type}</option>
                        })
                    }
                </select>
                <span>{')'}</span>
                <input disabled={disabled} value={value?.number} placeholder={'123456'} type='text' inputMode='numeric' className="p-2 rounded-xl w-full " onChange={({ target }: any) => {
                    if (target.value < 0 || target.value.trim().length > 6 || isNaN(Number(target.value))) return;
                    // setBooking(booking => ({
                    //     ...booking,
                    //     citizenCard: `${booking.mmNRC.state}/${booking.mmNRC.township}(${booking.mmNRC.type})${target.value}`,
                    //     mmNRC: {
                    //         ...booking.mmNRC,
                    //         number: target.value
                    //     }
                    // }))
                    onChange && onChange({ ...value, number: target.value });
                }} />
            </div>
            {(onPreview && value) && <div>{onPreview(value!)}</div>}
        </div>
    )
}