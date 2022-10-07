import { useState, useEffect } from "react";
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const MetropolitanMuseumOfArt = (): JSX.Element => {
    let artworksArray = [];
    const [artworkss, setArtworkss] = useState<Array>([]);
    const urlStart: string = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const objectIdsArray = apiResponse?.data?.objectIDs;

    const getApiData = async () => {

        try {
            const urlWithId = await Promise?.all(objectIdsArray?.map(async (artworkId) => {
                const artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`;
                const apiArtworkResponse = await fetch(artworkUrl);
                const json = await apiArtworkResponse.json();
                
                if (json['primaryImage'] !== '') {
                    artworksArray.push(json);
                }
            }));
        } 
        catch (error) {
            // setError(error);
        }
        setArtworkss(artworksArray);

        // console.log(artworksArray)
    };

    useEffect(() => {
        getApiData();
    }, [apiUrl]);

    // const artworksWithPictures = () => {
    //     artworks.map((artwork) => {
    //         if (artwork.content.descriptiveNonRepeating.online_media !== undefined) {
    //             artworksArray.push(artwork)
    //         } 
    //     });
    //     return artworksArray; 
    // }

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Metropolitan Museum Of Art'
        >
            { artworkss !== undefined ?
                artworkss.map((artwork, key) => {
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
                })
                : 'Loading...'
            }
        </Institution>
    )
}