'use client';


import React, { createContext, ReactNode } from "react";
import { DefaultBoilerplateAppearance } from '../../types/appearance';
import { AnimatedCounter } from "../animated-counter";




export interface BoilerplateUIProps{
    appearance: typeof DefaultBoilerplateAppearance
}


const DefaultBoilerplateUIConfig = { 
    appearance: DefaultBoilerplateAppearance,
    input: {
        appearance: DefaultBoilerplateAppearance
    },
    labelTabSwitch: {
        appearance: DefaultBoilerplateAppearance,
    },
    animatedCounter: {
        appearance: DefaultBoilerplateAppearance,
    },
    button: {
        appearance: DefaultBoilerplateAppearance,
    },
    calendar: {
        appearance: DefaultBoilerplateAppearance,
    },
    checkbox: {
        appearance: DefaultBoilerplateAppearance,
    },
    circularProgress: {
        appearance: DefaultBoilerplateAppearance,
    },
    divider: {
        appearance: DefaultBoilerplateAppearance,
    },
    githubCommitHistory: {
        appearance: DefaultBoilerplateAppearance,
    },
    myanmarNRCInput: {
        appearance: DefaultBoilerplateAppearance,
    },
    optionSelect: {
        appearance: DefaultBoilerplateAppearance,
    },
    phoneInput: {
        appearance: DefaultBoilerplateAppearance,
    },
    radio: {
        appearance: DefaultBoilerplateAppearance,
    },
    select: {
        appearance: DefaultBoilerplateAppearance,
    },
    slider: {
        appearance: DefaultBoilerplateAppearance,
    },
    switch: {
        appearance: DefaultBoilerplateAppearance,
    },
    textarea: {
        appearance: DefaultBoilerplateAppearance,
    },
    textButton: {
        appearance: DefaultBoilerplateAppearance,
    },
}

const BoilerplateUIContext = createContext<BoilerplateUIProps>(DefaultBoilerplateUIConfig)

export function BoilerplateUI({ children } : { children: ReactNode }){
    return (
        <BoilerplateUIContext.Provider value={DefaultBoilerplateUIConfig}>
            {children}
        </BoilerplateUIContext.Provider>
    )
}