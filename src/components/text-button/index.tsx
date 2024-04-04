import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DisabledStyle } from '../common';

interface BoilerplateButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  disabled?: boolean,
  loading?: boolean
}

export function TextButton({ children, onClick, className = '', style, disabled = false, loading = false } : BoilerplateButtonProps){
  return (
      <button disabled={disabled || loading} style={style} onClick={onClick} className={twMerge(`${disabled ? DisabledStyle : 'cursor-pointer'} px-2 py-1 transition-all duration-300 flex items-center justify-center gap-2`, className)}>
          {children}
          { loading && <div className="w-[1rem] h-[1rem] rounded-full border-2 dark:border-r-transparent border-r-transparent animate-spin"></div> }
      </button>
  )
}