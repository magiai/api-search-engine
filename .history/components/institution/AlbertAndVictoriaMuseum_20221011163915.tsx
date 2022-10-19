import { useState, useMemo, Suspense } from 'react'
import { Institution } from "./Institution"
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    let artworksArray = []
    const [artworksWithPictures, setArtworksWithPictures] = useState<any[]>([])
    const urlStart = 'https://api.vam.ac.uk/v2/objects/search?q=$'
    const apiUrl: string = urlStart + getSearchedPhrase()
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.records

    const getArtworksPictures = () => {
        artworks?.map((artwork) => {
            if (artwork._primaryImageId !== null) {
                artworksArray.push(artwork)
            } 
        });

        setArtworksWithPictures(artworksArray)
    }

    useMemo(() => {
        return getArtworksPictures()
    }, [artworks])

    return (
        <Institution 
            institutionName = 'Albert And Victoria Museum'
        >
            <Suspense fallback={<p>Loading...</p>}>
                { artworksWithPictures?.map((artwork, key) => {
                        return (
                            <Artwork 
                                key = { artwork.systemNumber }
                                priority = { key < 10 ? true : false }
                                source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/500,/0/default.jpg`} 
                                title = { artwork?.title } 
                                author = { artwork?._primaryMaker?.name } 
                            />
                        )
                    })
                }
            </Suspense>
        </Institution>
    )
}