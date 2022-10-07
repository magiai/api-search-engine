import { useState, useEffect } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const MetropolitanMuseumOfArt = (): JSX.Element => {
    const [artworksArray, setArtworks] = useState<Array>([]);
    const urlStart: string = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&artistOrCulture=true&q=';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const objectIdsArray = apiResponse?.data?.objectIDs;

    const getApiData = async () => {

        try {
            const urlWithId = await Promise?.all(objectIdsArray?.map(async (artworkId) => {
                const artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`;
                const apiArtworkResponse = await fetch(artworkUrl);
                const json = await apiArtworkResponse.json();
                setArtworks(json);
            }));
        } 
        catch (error) {
            // setError(error);
        }

        // return artworksArray;
        console.log(artworksArray);

    };

    useEffect(() => {
        getApiData();
    }, [apiUrl]);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Metropolitan Museum Of Art'
        >
            { artworksArray.length !== 0 ?
                artworksArray?.map((artwork, key) => {
                    console.log(artwork)
                    return (
                        <Artwork 
                            priority = { key < 7 ? true : false }
                            key = { key }
                            source = { artwork.primaryImage } 
                            title = { artwork.title } 
                            author = { artwork.artistDisplayName } 
                        />
                    )
                })
                : 'Loading...'
            }
        </Institution>
    )
}