import React from 'react'

interface IArtworksProps {
    children: React.ReactNode,
    artworks: Array<any>,
}

export const Artworks = ({ 
    children, 
    artworks
}: IArtworksProps): JSX.Element => {
    const ArtworksNotFound = <p>No artworks found for this phrase.</p>

    return (
        artworks.length > 0 ? <>{children}</> : ArtworksNotFound
    )
} 