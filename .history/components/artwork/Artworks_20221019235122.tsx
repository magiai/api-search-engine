import React from 'react'

interface IArtworksProps {
    children: React.ReactNode,
    artworks: Array<any>,
}

export const Artworks = ({ 
    children, 
    artworks
}: IArtworksProps): JSX.Element => {
    const ImagesNotFound = <p>No results found for this phrase.</p>

    return (
        artworks.length > 0 ? <> {children} </> : ImagesNotFound
    )
} 