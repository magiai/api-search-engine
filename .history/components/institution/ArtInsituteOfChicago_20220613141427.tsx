import { useEffect, useState } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const ArtInstituteOfChicago = (): JSX.Element => {
    const [apiUrl, setApiUrl] = useState<string>('');
    const [artworks, setArtworks] = useState<any>([]);
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q=';
    const urlEnd: string = '&limit=30&fields=id,title,image_id,color,artist_title';
    
    setApiUrl(prepareUrlForInstitution(urlStart, urlEnd));
    
    const getArtworks = async () => {

        try {
            const apiResponse: IApiResponse = await useApiGet(apiUrl);
            const apiResults = await apiResponse?.data?.data;
            setArtworks(apiResults);
            console.log(artworks);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArtworks();
    }, [apiUrl]);
    // const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
   
    // console.log(apiUrl)
    console.log(artworks);

    return (
        <Institution 
            isOpen = { false }
            institutionName = 'Art Institute Of Chicago'
        >
            { artworks !== undefined ?
                artworks?.map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            priority = { key < 10 ? true : false }
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