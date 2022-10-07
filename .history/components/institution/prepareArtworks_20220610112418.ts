
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import prepareUrlForInstitution from "./prepareUrlForInstitution";

export default function prepareArtworks(
    urlStart: string, 
    urlEnd: string, 
    keyWordForData: string,
):object {
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    console.log(apiUrl)
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.keyWordForData;

    return artworks;
}
