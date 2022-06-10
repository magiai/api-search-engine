import { useState } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareArtworks from "./prepareArtworks";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const ArtInstituteOfChicago = () => {
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q=';
    const urlEnd: string = '&limit=30&fields=id,title,image_id,color,artist_title';
    //function which returns artworks
    const artworks = prepareArtworks(urlStart, urlEnd, ['data']);
    // const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);

    // const apiResponse: IApiResponse = useApiGet(apiUrl);
    // const artworks = apiResponse?.data?.data;
    // console.log(apiResponse);
    console.log(artworks);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Art Institute Of Chicago'
        >
            { artworks !== undefined ?
                artworks.map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            source = { `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} 
                            title = { artwork.title } 
                            author = { artwork.artist_title } 
                        />
                    )
                }): 'Loading...'
            }
        </Institution>
    )
}