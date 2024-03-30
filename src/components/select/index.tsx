import '../../style.css'
import React from 'react';

interface BoilerplateSelectProps extends React.HTMLAttributes<HTMLSelectElement>{
    value: any
}


interface BoilerplateOptionProps extends React.HTMLAttributes<HTMLSelectElement>{
    value: any
}


export function Select({ children, value, onChange, className = '' } : BoilerplateSelectProps){
    return (
        <select value={value} onChange={onChange} className={`border rounded-lg outline-none p-3 dark:bg-stone-900 ${className}`}>
            {children}
        </select>
    )
}




export function Option({ children, value } : BoilerplateOptionProps){
    return (
        <option value={value}>{children}</option>
    )
}