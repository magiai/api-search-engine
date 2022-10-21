import { useMemo, useDeferredValue, Suspense } from 'react'
import { Institution } from "./Institution"
import { ArtworksValidation } from '../artwork/Artworks'
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    // let artworksWithPictureArray: Array<any> = []
    const urlStart: string = 'https://api.vam.ac.uk/v2/objects/search?q=$'
    const apiUrl: string = urlStart + getSearchedPhrase()
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.records
    const deferredArtworks = useDeferredValue(artworks)

    const artworksWithPictures = useMemo(() => {
        const validArtworks = deferredArtworks?.filter(artwork => artwork._primaryImageId !== null)
        return validArtworks
    }, [deferredArtworks])

    // const getArtworksPictures = useMemo(() => {
    //     artworks?.map((artwork) => {
    //         if (artwork._primaryImageId !== null) {
    //             artworksWithPictureArray.push(artwork)
    //         } 
    //     })
    //     return artworksWithPictureArray
    // }, [artworks])

    return (
        <Institution institutionName = 'Albert And Victoria Museum'>
            <Suspense fallback={<p>Loading...</p>}>
                <ArtworksValidation 
                    status = {apiResponse.status} 
                    statusText = {apiResponse.statusText} 
                    hasArtworks = {artworksWithPictures?.length > 0}
                >
                    { artworksWithPictures.map((artwork, key) => 
                        <Artwork 
                            key = { artwork.systemNumber }
                            priority = { key < 10 ? true : false }
                            source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/500,/0/default.jpg`} 
                            title = { artwork?.title } 
                            author = { artwork?._primaryMaker?.name } 
                        />
                        )
                    }
                </ArtworksValidation>
            </Suspense>
        </Institution>
    )
}