import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const SmithsonianInstitutionArtDesign = (): JSX.Element => {
    let artworksArray = [];
    const urlStart: string = 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=';
    const urlEnd: string = '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=100';
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.response?.rows;

    const artworksWithPictures = () => {
        artworks.map((artwork) => {
            if (artwork.content.descriptiveNonRepeating.online_media !== undefined) {
                artworksArray.push(artwork)
            } 
        });
        return artworksArray; 
    }

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Smithsonian Institute - Art Design'
        >
            { artworks !== undefined ?
                artworksWithPictures().map((artwork, key) => {
                    return (
                        <Artwork 
                            loading = { key < 8 ? 'eager' : '' }
                            key = { key }
                            source = { artwork.content.descriptiveNonRepeating?.online_media?.media[0]?.content } 
                            title = { artwork.title } 
                            author = { artwork.content.freetext.name ? artwork.content.freetext.name[0].content : undefined } 
                        />
                    )
                }): 'Loading...'
            }
        </Institution>
    )
}