import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
// import prepareUrlForInstitution from "./prepareUrlForInstitution";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import { searchedPhrase } from "../search/searchedPhrase";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const ArtInstituteOfChicago = (): JSX.Element => {
    // const [artworks, setArtworks] = useState<any>([]);
    // const searchedPhrase = useAppSelector(selectSearch);
    const urlStart: string = 'https://api.artic.edu/api/v1/artworks/search?q=';
    const urlEnd: string = '&limit=30&fields=id,title,image_id,color,artist_title';
    console.log(' !chicago! ')
    console.log(searchedPhrase)
    // const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    const apiUrl: string = urlStart + searchedPhrase + urlEnd
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.data;
    
    return (
        <Institution 
            isOpen = { false }
            institutionName = 'Art Institute Of Chicago'
        >
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
        </Institution>
    )
}