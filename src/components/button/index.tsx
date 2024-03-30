import '../../style.css'
import React from 'react';

interface BoilerplateButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  disabled: boolean,
  loading: boolean
}

export function Button({ children, onClick, className = '', disabled = false, loading = false } : BoilerplateButtonProps){
  return (
      <button disabled={disabled || loading} onClick={onClick} className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className} disabled:opacity-55 disabled:cursor-not-allowed border rounded-xl p-2 bg-black text-white hover:bg-gray-950 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2`}>
          {children}
          { loading && <div className="w-[1rem] h-[1rem] rounded-full dark:border-black border-white border-2 dark:border-r-transparent border-r-transparent animate-spin"></div> }
      </button>
  )
}