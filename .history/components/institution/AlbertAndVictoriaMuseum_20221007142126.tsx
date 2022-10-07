import { useState, useMemo, Suspense } from 'react';
import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import { useApi, IApiResponse } from "../../api/useApiHook";
import getSearchedPhrase  from "../search/searchedPhrase";

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    let artworksArray = [];
    let [artworksWithPictures, setArtworksWithPictures] = useState<Array>([]);
    const urlStart = 'https://api.vam.ac.uk/v2/objects/search?q=$';
    console.log(' !albert! ')
    const apiUrl: string = urlStart + getSearchedPhrase();
    const apiResponse: IApiResponse = useApi(apiUrl);
    const artworks = apiResponse?.data?.records;

    const getArtworksPictures = () => {
        artworks?.map((artwork) => {
            if (artwork._primaryImageId !== null) {
                artworksArray.push(artwork)
            } 
        });

        setArtworksWithPictures(artworksArray); 
    }

    useMemo(() => {
        return getArtworksPictures();
    }, [artworks]);

    return (
        <Institution 
            institutionName = 'Albert And Victoria Museum'
        >
            <Suspense>
                { artworksWithPictures !== undefined ?
                    artworksWithPictures.map((artwork, key) => {
                        return (
                            <Artwork 
                                key = { artwork.systemNumber }
                                priority = { key < 10 ? true : false }
                                source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/600,/0/default.jpg`} 
                                title = { artwork?.title } 
                                author = { artwork?._primaryMaker?.name } 
                            />
                        )
                    }): 'Loading...'
                }
            </Suspense>
        </Institution>
    )
}