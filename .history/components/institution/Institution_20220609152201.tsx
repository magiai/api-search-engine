import React from 'react';
import institutionStyles from './institution.module.css';

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
        <details open = { isOpen } className = { institutionStyles.details }>
            <summary><h2>{ institutionName }</h2></summary>
            <div className = { institutionStyles['images__list'] }> 
                { children }
            </div>
        </details>
    )
} 