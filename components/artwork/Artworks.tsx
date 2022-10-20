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
    hasArtworks,
    children, 
}: IArtworksValidationProps): JSX.Element => {
    let Artwroks;
    const DisplayArtowrks = () => <>{ children }</>
    const ArtworksNotFound = () => <p>No artworks found for this phrase.</p>
    const DisplayError = () => <p>{ statusText }</p>

    switch (status) {
        case 200:
            Artwroks = hasArtworks === true ? DisplayArtowrks : ArtworksNotFound
            break;
    
        default:
            Artwroks = DisplayError
            break;
    }
 
    return (
        <Artwroks/>
    )
} 