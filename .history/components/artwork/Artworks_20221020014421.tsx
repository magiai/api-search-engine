import React from 'react'

interface IArtworksValidationProps {
    status: Number,
    statusText: String,
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
    const ArtworksNotFound = () => <p>No artworks found for this phrase.</p>
    const DisplayError = () => <p>{ statusText }</p>

    switch (status) {
        case 200:
            Artwroks = hasArtworks === true ? {children} : ArtworksNotFound
            break;
    
        default:
            Artwroks = DisplayError
            break;
    }
 
    return (
        <Artwroks/>
    )
} 