import { useState, useEffect } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const MetropolitanMuseumOfArt = (): JSX.Element => {
    const [artworks, setData] = useState<any>();
    const urlStart: string = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&artistOrCulture=true&q=';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const objectIdsArray = apiResponse?.data?.objectIDs;
    console.log(objectIdsArray)
    console.log(artworks)

    const getApiData = async () => {

        try {
            const urlWithId = await Promise?.all(objectIdsArray?.map(async (artworkId) => {
                const artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`;
                const apiArtworkResponse = await fetch(artworkUrl);
                const json = await apiArtworkResponse.json();
                setData(json);
            }));
        } 
        catch (error) {
            // setError(error);
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
            { artworks !== undefined ?
                artworks.map((artwork, key) => {
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