import { useMemo, useDeferredValue, Suspense } from 'react'
import { Institution } from "./Institution"
import { ArtworksValidation } from '../artwork/Artworks'
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const SmithsonianInstitutionArtDesign = (): JSX.Element => {
    const urlStart: string = 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q='
    const urlEnd: string = '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=50'
    const apiUrl: string = urlStart + getSearchedPhrase() + urlEnd
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.response?.rows
    const deferredArtworks = useDeferredValue(artworks)

    const artworksWithPictures = useMemo(() => {
        const validArtworks = deferredArtworks?.filter(artwork => artwork.content.descriptiveNonRepeating.online_media !== undefined)
        return validArtworks
    }, [deferredArtworks])

    return (
        <Institution 
            isOpen = { false }
            institutionName = 'Smithsonian Institute - Art&Design'
        >
            <Suspense fallback={<p>Loading...</p>}>
                <ArtworksValidation 
                    status = {apiResponse.status} 
                    statusText = {apiResponse.statusText} 
                    hasArtworks = {artworksWithPictures?.length > 0}
                >
                    { artworksWithPictures?.map((artwork, key) => {
                            return (
                                <Artwork 
                                    key = { artwork.id }
                                    priority = { key < 10 ? true : false }
                                    source = { artwork.content.descriptiveNonRepeating?.online_media?.media[0]?.content } 
                                    title = { artwork.title } 
                                    author = { artwork.content.freetext.name ? artwork.content.freetext.name[0].content : undefined } 
                                />
                            )
                        })
                    }
                </ArtworksValidation>
            </Suspense>
        </Institution>
    )
}