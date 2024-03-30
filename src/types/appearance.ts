import React, { CSSProperties } from "react";

export type ClassName = string | undefined; 
export interface BoilerplateAppearance{
    className?: ClassName | undefined,
    style?: CSSProperties | undefined
}

export const DefaultBoilerplateAppearance = {
    text: {
        className: '',
        style: {}
    }
}