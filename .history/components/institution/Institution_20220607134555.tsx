import { renderToHTML } from "next/dist/server/render"
import React from 'react';

interface InstitutionProps {
    children: React.ReactNode,
    institutionName: string,
}

export const Institution ({ children, institutionName }: InstitutionProps) => {
    return (
        <details open={props.isOpen}>
            <summary><h2>{ institutionName }</h2></summary>
            <div className="images__list"> 
                { children }
            </div>
        </details>
    )
} 