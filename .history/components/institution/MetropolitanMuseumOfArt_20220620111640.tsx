import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const MetropolitanMuseumOfArt = (): JSX.Element => {
    const urlStart: string = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    // console.log(apiUrl)
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    // console.log(apiResponse)
    const objectIdsArray = apiResponse?.data?.objectIDs;
    // let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/207247';
    // console.log(url['primaryImage']);
    const mappedUrl = () => {
        objectIdsArray.map((artworkId) => {
            const artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`;
            const apiArtworksresponse: IApiResponse = useApiGet(artworkUrl);
            console.log(apiArtworksresponse)
        });
    }

    mappedUrl();


    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Metropolitan Museum Of Art'
        >
            {/* { artworks !== undefined ?
                artworks.map((artwork, key) => {
                    return (
                        <Artwork 
                            priority = { key < 7 ? true : false }
                            key = { key }
                            source = { artwork.content.descriptiveNonRepeating?.online_media?.media[0]?.content } 
                            title = { artwork.title } 
                            author = { artwork.content.freetext.name ? artwork.content.freetext.name[0].content : undefined } 
                        />
                    )
                }): 'Loading...'
            } */}
        </Institution>
    )
}