
import React, { useContext, createContext, ReactNode } from "react";
import { DefaultBoilerplateAppearance } from '../../types/appearance';




export interface BoilerplateUIProps{
    appearance: typeof DefaultBoilerplateAppearance
}


const DefaultBoilerplateUIConfig = { 
    appearance: DefaultBoilerplateAppearance 
}

const BoilerplateUIContext = createContext<BoilerplateUIProps>(DefaultBoilerplateUIConfig)

export function BoilerplateUI({ children } : { children: ReactNode }){
    return (
        <BoilerplateUIContext.Provider value={DefaultBoilerplateUIConfig}>
            {children}
        </BoilerplateUIContext.Provider>
    )
}