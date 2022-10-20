import { Suspense } from "react"
import { Institution } from "./Institution"
import { ArtworksValidation } from "../artwork/Artworks"
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase from "../search/searchedPhrase"

export const ArtInstituteOfChicago = (): JSX.Element => {
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q='
    const urlEnd: string = '&limit=30&fields=id,title,image_id,color,artist_title'
    const apiUrl: string = urlStart + getSearchedPhrase() + urlEnd
    const apiResponse: IApiResponse = useApi(apiUrl)
    const { data, status, statusText } = apiResponse

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Art Institute Of Chicago'
        >
            <Suspense fallback={<p>Loading...</p>}>
                <ArtworksValidation 
                    status = {status} 
                    statusText = {statusText} 
                    hasArtworks = {data?.length > 0}
                >
                    { data?.map((artwork, key) => {
                            return (
                                <Artwork 
                                    key = { artwork.id }
                                    priority = { key < 10 ? true : false }
                                    source = { `https://www.artic.edu/iiif/2/${artwork.image_id}/full/640,/0/default.jpg`} 
                                    title = { artwork.title } 
                                    author = { artwork.artist_title } 
                                />
                            )
                        })
                    }
                </ArtworksValidation>
            </Suspense>
        </Institution>
    )
}