import { useState, useEffect, useMemo } from 'react';
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const SmithsonianInstitutionArtDesign = (): JSX.Element => {
    let artworksArray = [];
    const searchedPhrase = useAppSelector(selectSearch);
    // let [artworks, setArtworks] = useState<any>();
    let [artworksWithPictures, setArtworksWithPictures] = useState<Array>([]);
    const urlStart: string = 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=';
    const urlEnd: string = '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=100';
    const apiUrl: string = useMemo(() => {
        return prepareUrlForInstitution(urlStart, urlEnd);
    }, [searchedPhrase]);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.response?.rows;

    const getArtworksPictures = () => {
        artworks?.map((artwork) => {
            if (artwork.content.descriptiveNonRepeating.online_media !== undefined) {
                artworksArray.push(artwork)
            } 
        });

        setArtworksWithPictures(artworksArray); 
    }

    useEffect(() => {
        getArtworksPictures();
    }, [artworks]);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Smithsonian Institute - Art Design'
        >
            { artworksWithPictures !== undefined ?
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
            }
        </Institution>
    )
}