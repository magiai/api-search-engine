import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    const urlStart: string = 'https://api.vam.ac.uk/v2/objects/search?q=$';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.records;
    console.log(artworks);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Albert And Victoria Museum'
        >
            { artworks !== undefined ?
                artworks.map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/`} 
                            title = { artwork.title } 
                            author = { artwork?._primaryMaker?.name } 
                        />
                    )
                }): 'Loading...'
            }
        </Institution>
    )
}