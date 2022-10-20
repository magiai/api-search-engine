import React from 'react'

interface IArtworksValidationProps {
    status: number,
    statusText: string,
    children: React.ReactNode,
    hasArtworks: boolean,
}

export const ArtworksValidation = ({ 
    status,
    statusText,
    children, 
    hasArtworks
}: IArtworksValidationProps): JSX.Element => {
    let Artwroks;
    const ArtworksNotFound = <p>No artworks found for this phrase.</p>

    switch (status) {
        case 200:
            return hasArtworks === true ? <>{children}</> : ArtworksNotFound
            break;
    
        default:
            return <>statusText</>
            break;
    }
 

    return (
        
    )
} 