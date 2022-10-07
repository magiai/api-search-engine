import { Suspense, useMemo } from "react"
import { Institution } from "./Institution"
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const ArtInstituteOfChicago = (): JSX.Element => {
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q='
    const urlEnd: string = '&limit=30&fields=id,title,image_id,color,artist_title'
    // const phrase = getSearchedPhrase();
    const apiUrl: string = useMemo(() => {
        return urlStart + getSearchedPhrase() + urlEnd
    }, [getSearchedPhrase()])
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.data
    // console.log(' !chicago! ')
    
    return (
        <Institution 
            isOpen = { false }
            institutionName = 'Art Institute Of Chicago'
        >
            <Suspense>
            { artworks !== undefined ?
                artworks.map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            priority = { key < 10 ? true : false }
                            source = { `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} 
                            title = { artwork.title } 
                            author = { artwork.artist_title } 
                        />
                    )
                }): 'Loading...'
            }
            </Suspense>
        </Institution>
    )
}