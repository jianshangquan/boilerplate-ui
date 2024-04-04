import CountryCode from 'country-codes-list';
import React from 'react';
import { BoilerplateAppearance } from '../../types/appearance';
import { twMerge } from 'tailwind-merge';
import { DisabledStyle } from '../common';

const SortedCodes = CountryCode.all().sort((a, b) => a.countryNameEn.localeCompare(b.countryNameEn));



export interface BoilerplatePhoneValueProps{
    countryCode: string,
    number: string
}
export interface BoilerplatePhoneInputProps{
    value?: BoilerplatePhoneValueProps,
    disabled?: boolean,
    onChange?: (value: BoilerplatePhoneValueProps) => void,
    appearance?: BoilerplateAppearance
}   

export function PhoneInput({ onChange, disabled = false, value = { countryCode: '95', number: '' }, appearance } : BoilerplatePhoneInputProps) {
    return (
        <div className={twMerge(`w-full flex gap-1 items-center border rounded-lg`, disabled ? DisabledStyle : '', appearance?.className)}>
            <select disabled={disabled} name="" id="" className='w-[30%] p-2 rounded-xl outline-none' value={value.countryCode} onInput={({ target }: any) => {
                onChange && onChange({ countryCode: target.value, number: value.number })
            }}>
                {
                    SortedCodes.map((code, index) => {
                        return (
                            <option key={index} value={code.countryCallingCode}>{`+${code.countryCallingCode}-${code.countryNameEn}`}</option>
                        )
                    })
                }
            </select>
            <input disabled={disabled} placeholder="Phone number" min={0} inputMode='numeric' className="p-2 rounded-xl w-[70%] outline-none" max={99999999999999} value={value.number} onChange={({ target } : any) => {
                if (isNaN(Number(target.value))) return;
                onChange && onChange({
                    countryCode: value.countryCode,
                    number: target.value.trim().length > 15 ? value.number : target.value < -1 ? '' : target.value
                })
            }} />
        </div>
    )
}