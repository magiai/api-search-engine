import React from 'react';

interface IInstitutionProps {
    children: React.ReactNode,
    institutionName: string,
    isOpen?: boolean,
}

export const Institution = ({ 
    children, 
    institutionName, 
    isOpen 
}: IInstitutionProps): JSX.Element => {
    return (
        <details open = { isOpen }>
            <summary><h2>{ institutionName }</h2></summary>
            <div className="images__list"> 
                { children }
            </div>
        </details>
    )
} 