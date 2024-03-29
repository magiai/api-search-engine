import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const SmithsonianInstitutionHistoryAndCulture = (): JSX.Element => {
    const urlStart: string = 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=';
    const urlEnd: string = '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=100';
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.response?.rows;

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Smithsonian Institutio nHistory And Culture'
        >
            { artworks !== undefined ?
                artworks.map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            source = { `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} 
                            title = { artwork.title } 
                            author = { artwork.artist_title } 
                        />
                    )
                }): 'Loading...'
            }
        </Institution>
    )
}