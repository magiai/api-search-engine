import { useState, useMemo, Suspense } from 'react'
import { Institution } from "./Institution"
import { Artwork } from "../artwork/Artwork"
import { useApi, IApiResponse } from "../../api/useApiHook"
import getSearchedPhrase  from "../search/searchedPhrase"

export const SmithsonianInstitutionArtDesign = (): JSX.Element => {
    // let artworksArray = []
    // let [artworksWithPictures, setArtworksWithPictures] = useState<any[]>([])
    const urlStart: string = 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q='
    const urlEnd: string = '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=50'
    const apiUrl: string = urlStart + getSearchedPhrase() + urlEnd
    const apiResponse: IApiResponse = useApi(apiUrl)
    const artworks = apiResponse?.data?.response?.rows

    const getImageSrc = imageId => {
        const artwork = artworks.find(art => art.imageId === imageId)
        console.log(imageId)
        if (artwork === null) {
            return 'https://via.placeholder.com/400x400.png?text=Image+not+found'
        } else {
            return imageId?.media[0]?.content
        }
    }

    // const getArtworksPictures = () => {
    //     artworks?.map((artwork) => {
    //         console.log(artwork.content.descriptiveNonRepeating?.online_media)
    //         if (artwork.content.descriptiveNonRepeating.online_media !== undefined) {
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
            isOpen = { false }
            institutionName = 'Smithsonian Institute - Art Design'
        >
            <Suspense fallback={<p>Loading...</p>}>
                { artworks?.map((artwork, key) => {
                        return (
                            <Artwork 
                                key = { artwork.id }
                                priority = { key < 10 ? true : false }
                                source = { getImageSrc(artwork.content.descriptiveNonRepeating?.online_media) } 
                                // source = { artwork.content.descriptiveNonRepeating?.online_media?.media[0]?.content } 
                                title = { artwork.title } 
                                author = { artwork.content.freetext.name ? artwork.content.freetext.name[0].content : undefined } 
                            />
                        )
                    })
                }
            </Suspense>
        </Institution>
    )
}