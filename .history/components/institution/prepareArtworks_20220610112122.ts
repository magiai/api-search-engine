
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import prepareUrlForInstitution from "./prepareUrlForInstitution";

export default function prepareArtworks(urlStart, urlEnd, keyWordForData) {
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    const artworks = apiResponse?.data?.keyWordForData;

    return artworks;
}
