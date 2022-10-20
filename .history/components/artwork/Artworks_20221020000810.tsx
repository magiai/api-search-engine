import React from 'react'

interface IArtworksValidationProps {
    children: React.ReactNode,
    hasArtworks: boolean,
}

export const ArtworksValidation = ({ 
    children, 
    hasArtworks
}: IArtworksValidationProps): JSX.Element => {
    const ArtworksNotFound = <p>No artworks found for this phrase.</p>

    return (
        hasArtworks === true ? <>{children}</> : ArtworksNotFound
    )
} 