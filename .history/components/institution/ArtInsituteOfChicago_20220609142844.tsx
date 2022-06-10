import { useState } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import { useArtworskGet } from "../artwork/getArtworks";

export const ArtInstituteOfChicago = () => {
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q=';
    const urlEnd: string = '&limit=70&fields=id,title,image_id,color,artist_title';
    const keyWordForData = 'data';
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = useArtworskGet(apiResponse, keyWordForData);
   
    console.log(artworks);    

    if (!apiResponse.loading) {
        // const artworks = getArtworks(apiResponse, keyWordForData);
        // let data = apiResponse.data;
        
    }

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Art Institute Of Chicago'
        >
             <Artwork 
                source='https://www.artic.edu/iiif/2/276252ca-b499-5539-ea43-a7e58c8ea973/full/843,/0/default.jpg' 
                title='Halko' 
                author='Dominika' /> 
        </Institution>
    )
}