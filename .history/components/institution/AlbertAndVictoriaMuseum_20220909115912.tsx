import { useState, useEffect, useMemo } from 'react';
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import getSearchedPhrase  from "../search/searchedPhrase";

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    let artworksArray = [];
    // let [artworksWithPictures, setArtworksWithPictures] = useState<Array>([]);
    const urlStart = 'https://api.vam.ac.uk/v2/objects/search?q=$';
    const apiUrl: string = urlStart + getSearchedPhrase();
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.records;
    
    console.log(' !albert! ')
    const getArtworksPictures = () => {
        artworks?.map((artwork) => {
            if (artwork._primaryImageId !== null) {
                artworksArray.push(artwork)
            } 
        });

        return artworksArray; 
    }

    // useEffect(() => {
    //     getArtworksPictures();
    // }, [artworks]);

    return (
        <Institution 
            institutionName = 'Albert And Victoria Museum'
        >
            { artworks !== undefined ?
                getArtworksPictures().map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            priority = { key < 7 ? true : false }
                            source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/843,/0/default.jpg`} 
                            title = { artwork?.title } 
                            author = { artwork?._primaryMaker?.name } 
                        />
                    )
                }): 'Loading...'
            }
        </Institution>
    )
}