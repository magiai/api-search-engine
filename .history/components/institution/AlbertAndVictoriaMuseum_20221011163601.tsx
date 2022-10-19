import { useState, useMemo, Suspense } from 'react'
import { Institution } from "./Institution"
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    // let artworksArray = []
    // const [artworksWithPictures, setArtworksWithPictures] = useState<any[]>([])
    const urlStart = 'https://api.vam.ac.uk/v2/objects/search?q=$'
    const apiUrl: string = urlStart + getSearchedPhrase()
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.records

    const getImageSrc = imageId => {
        const artwork = artworks.find(art => art.imageId === imageId)
        console.log(imageId)
        if (artwork === null) {
            return 'https://via.placeholder.com/400x400.png?text=Image+not+found'
        } else {
            return `https://framemark.vam.ac.uk/collections/${imageId}/full/500,/0/default.jpg`
        }
    }

    // const getArtworksPictures = () => {
    //     artworks?.map((artwork) => {
    //         if (artwork._primaryImageId !== null) {
    //             artworksArray.push(artwork)
    //         } 
    //     });

    //     setArtworksWithPictures(artworksArray)
    // }

    // useMemo(() => {
    //     return getArtworksPictures()
    // }, [artworks])

    return (
        <Institution 
            institutionName = 'Albert And Victoria Museum'
        >
            <Suspense fallback={<p>Loading...</p>}>
                { artworks?.map((artwork, key) => {
                        return (
                            <Artwork 
                                key = { artwork.systemNumber }
                                priority = { key < 10 ? true : false }
                                source = { getImageSrc(artwork._primaryImageId) } 
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