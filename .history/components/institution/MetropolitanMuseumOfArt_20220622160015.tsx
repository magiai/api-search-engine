import { useState, useEffect } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const MetropolitanMuseumOfArt = (): JSX.Element => {
    let artworksArray = [];
    const [artworksWithImage, setArtworksWithImage] = useState<Array>([]);
    const urlStart: string = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const objectIdsArray = apiResponse?.data?.objectIDs;

    const getApiData = async () => {

        try {
            const urlWithId = await Promise?.all(objectIdsArray?.map(
                async (artworkId) => {
                    const artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`;
                    const apiArtworkResponse = await fetch(artworkUrl);

                    if (apiArtworkResponse.status === 200) {
                        const json = await apiArtworkResponse?.json();

                        //Array.from zmienia obiekt na tablicę
                        if (json['primaryImage'] !== '') {
                            artworksArray.push(json);
                        }
                    }
                }
            ));
            setArtworksWithImage(artworksArray);
            // urlWithId.then(setArtworksWithImage(artworksArray));
        } 
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, [apiUrl]);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Metropolitan Museum Of Art'
        >
            { artworksWithImage !== undefined ?
                artworksWithImage.map((artwork, key) => {

                    console.log(artwork.primaryImageSmall)
                    // if (key < 100) {
                        return (
                            <img 
                                key = { key }
                                height = '400'
                                width = '400'
                                src = { artwork?.primaryImageSmall }/>
                            // <Artwork 
                            //     priority = { key < 7 ? true : false }
                            //     key = { key }
                            //     source = { artwork?.primaryImageSmall } 
                            //     title = { artwork.title } 
                            //     author = { artwork.artistDisplayName } 
                            // />
                        )
                    // }
                }) : 'Loading...'
            }
        </Institution>
    )
}