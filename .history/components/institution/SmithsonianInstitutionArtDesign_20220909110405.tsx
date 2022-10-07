import { useState, useEffect, useMemo } from 'react';
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import getSearchedPhrase  from "../search/searchedPhrase";

export const SmithsonianInstitutionArtDesign = (): JSX.Element => {
    let artworksArray = [];
    let [artworksWithPictures, setArtworksWithPictures] = useState<Array>([]);
    const urlStart: string = 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=';
    const urlEnd: string = '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=100';
    console.log(' !smith! ')
    const apiUrl: string = urlStart + getSearchedPhrase() + urlEnd;
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    // const artworks = apiResponse?.data?.response?.rows;

    // const getArtworksPictures = () => {
    //     artworks?.map((artwork) => {
    //         if (artwork.content.descriptiveNonRepeating.online_media !== undefined) {
    //             artworksArray.push(artwork)
    //         } 
    //     });

    //     setArtworksWithPictures(artworksArray); 
    // }

    // useMemo(() => {
    //     getArtworksPictures();
    // }, [artworks]);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Smithsonian Institute - Art Design'
        >
            {/* { artworksWithPictures !== undefined ?
                artworksWithPictures.map((artwork, key) => {
                    return (
                        <Artwork 
                            priority = { key < 7 ? true : false }
                            key = { key }
                            source = { artwork.content.descriptiveNonRepeating?.online_media?.media[0]?.content } 
                            title = { artwork.title } 
                            author = { artwork.content.freetext.name ? artwork.content.freetext.name[0].content : undefined } 
                        />
                    )
                }): 'Loading...'
            } */}
        </Institution>
    )
}