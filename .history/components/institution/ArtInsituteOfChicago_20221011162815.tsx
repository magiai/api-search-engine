import { useState, useMemo, Suspense } from "react"
import { Institution } from "./Institution"
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase from "../search/searchedPhrase"
import { getImageSize } from "next/dist/server/image-optimizer"

export const ArtInstituteOfChicago = (): JSX.Element => {
    // let artworksArray = []
    // const [artworksWithPictures, setArtworksWithPictures] = useState<any[]>([])
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q='
    const urlEnd: string = '&limit=30&fields=id,title,image_id,color,artist_title'
    const apiUrl: string = urlStart + getSearchedPhrase() + urlEnd
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.data

    const getImageSrc = imageId => {
        const artwork = artworks.find(art => art.imageId === imageId)
        if (artwork === null) {
            return 'https://via.placeholder.com/400x400.png?text=Image+not+found'
        } else {
            return `https://www.artic.edu/iiif/2/${imageId}/full/640,/0/default.jpg`
        }
    }

    // const getArtworksPictures = () => {
    //     artworks?.map((artwork) => {
    //         if (artwork.image_id !== null) {
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
            isOpen = { true }
            institutionName = 'Art Institute Of Chicago'
        >
            <Suspense fallback={<p>Loading...</p>}>
                { artworks?.map((artwork, key) => {
                        return (
                            <Artwork 
                                key = { artwork.id }
                                priority = { key < 10 ? true : false }
                                source = { getImageSrc(artwork.image_id)} 
                                title = { artwork.title } 
                                author = { artwork.artist_title } 
                            />
                        )
                    })
                }
            </Suspense>
        </Institution>
    )
}