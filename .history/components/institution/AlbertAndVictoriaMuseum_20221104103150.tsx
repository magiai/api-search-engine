import { useMemo, useDeferredValue, Suspense } from 'react'
import { Institution } from "./Institution"
import { ArtworksValidation } from '../artwork/Artworks'
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    const urlStart: string = 'https://api.vam.ac.uk/v2/objects/search?q=$'
    const apiUrl: string = urlStart + getSearchedPhrase()
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.records
    const deferredArtworks = useDeferredValue(artworks)

    const artworksWithPictures = useMemo(() => {
        const validArtworks = deferredArtworks?.filter(artwork => artwork._primaryImageId !== null)
        return validArtworks
    }, [deferredArtworks])

    return (
        <Institution institutionName = 'Albert And Victoria Museum'>
            <Suspense fallback={<p>Loading...</p>}>
                <ArtworksValidation 
                    status = {apiResponse.status} 
                    statusText = {apiResponse.statusText} 
                    hasArtworks = {artworksWithPictures?.length > 0}
                >
                    { artworksWithPictures?.map((artwork, key) => 
                    console.log(artwork)
                        <Artwork 
                            key = { artwork.systemNumber }
                            priority = { key < 10 ? true : false }
                            source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/640,/0/default.jpg`} 
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