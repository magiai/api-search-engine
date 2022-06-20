import { useState } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import { useArtworksGet } from "../artwork/getArtworks";

export const ArtInstituteOfChicago = () => {
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q=';
    const urlEnd: string = '&limit=70&fields=id,title,image_id,color,artist_title';
    const keyWordForData = 'data';
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    // const [artworks, setArtworks] = useState<Object>({});
    // const artworks = useArtworksGet(apiResponse, keyWordForData);
   
    
    // if (!apiResponse.loading) {
        // const artworks = getArtworks(apiResponse, keyWordForData);
    const data = apiResponse?.data?.data;

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Art Institute Of Chicago'
        >
           { data !== undefined ?
             <Artwork 
                source='https://www.artic.edu/iiif/2/276252ca-b499-5539-ea43-a7e58c8ea973/full/843,/0/default.jpg' 
                title='Halko' 
                author='Dominika' 
            /> : 'Loading'
           }
        </Institution>
    )
}