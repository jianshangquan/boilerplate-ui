import CountryCode from 'country-codes-list';
import React from 'react';
import { BoilerplateAppearance } from '../../types/appearance';
import { twMerge } from 'tailwind-merge';

const SortedCodes = CountryCode.all().sort((a, b) => a.countryNameEn.localeCompare(b.countryNameEn));



export interface BoilerplatePhoneValueProps{
    countryCode: string,
    number: string
}
export interface BoilerplatePhoneInputProps{
    value?: BoilerplatePhoneValueProps,
    onChange?: (value: BoilerplatePhoneValueProps) => void,
    appearance?: BoilerplateAppearance
}   

export function PhoneInput({ onChange, value = { countryCode: '95', number: '' }, appearance } : BoilerplatePhoneInputProps) {
    return (
        <div className={twMerge(`w-full flex gap-1 items-center border rounded-lg`, appearance?.className)}>
            <select name="" id="" className='w-[30%] p-2 rounded-xl outline-none' value={value.countryCode} onInput={({ target }: any) => {
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
            <input placeholder="Phone number" min={0} inputMode='numeric' className="p-2 rounded-xl w-[70%] outline-none" max={99999999999999} value={value.number} onChange={({ target } : any) => {
                if (isNaN(Number(target.value))) return;
                onChange && onChange({
                    countryCode: value.countryCode,
                    number: target.value.trim().length > 15 ? value.number : target.value < -1 ? '' : target.value
                })
            }} />
        </div>
    )
}