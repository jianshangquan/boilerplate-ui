import '../../style.css'
import React from 'react';
import { BoilerplateAppearance, ClassName } from '../../types/appearance';

interface BoilerplateSelectProps extends Omit<React.HTMLAttributes<HTMLSelectElement>, 'className'>{
    value: any,
    className?: ClassName,
    appearance?: BoilerplateAppearance | undefined
}




interface BoilerplateOptionProps extends Omit<React.HTMLAttributes<HTMLOptionElement>, 'className'>{
    value: any,
    appearance?: BoilerplateAppearance | undefined,
    className?: ClassName | undefined
}


export function Select({ children, value, onChange, className = '', appearance } : BoilerplateSelectProps){
    return (
        <select value={value} onChange={onChange} className={`border rounded-lg outline-none p-3 dark:bg-stone-900 ${className || appearance?.className}`}>
            {children}
        </select>
    )
}




export function Option({ children, value, appearance, className } : BoilerplateOptionProps){
    return (
        <option value={value} className={`${className || appearance?.className}`} style={appearance?.style}>{children}</option>
    )
}