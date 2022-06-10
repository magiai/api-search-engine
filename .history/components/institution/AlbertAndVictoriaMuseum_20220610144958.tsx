import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";

export const AlbertAndVictoriaMuseum = (): JSX.Element => {
    const urlStart: string = 'https://api.vam.ac.uk/v2/objects/search?q=$';
    const apiUrl: string = prepareUrlForInstitution(urlStart);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.records;
    let artworksArray = [];
    console.log(artworks);
    const artworksWithPictures = () => {
        artworks.map((artwork, key) => {
            if (artwork._primaryImageId !== null) {
                artworksArray.push(artwork)
            } 
        });
        return artworksArray; 
    }

    return (
        <Institution 
            institutionName = 'Albert And Victoria Museum'
        >
            { artworks !== undefined ?
                artworksWithPictures().map((artwork, key) => {
                    return (
                        <Artwork 
                            key = { key }
                            source = { `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/843,/0/default.jpg`} 
                            title = { artwork?.title } 
                            author = { artwork?._primaryMaker?.name } 
                        />
                    )
                }): 'Loading...'
            }
        </Institution>
    )
}