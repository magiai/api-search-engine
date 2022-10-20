import React from 'react'

interface IArtworksProps {
    children: React.ReactNode,
    hasArtworks: boolean,
}

export const Artworks = ({ 
    children, 
    hasArtworks
}: IArtworksProps): JSX.Element => {
    const ArtworksNotFound = <p>No artworks found for this phrase.</p>

    return (
        hasArtworks === true ? <>{children}</> : ArtworksNotFound
    )
} 