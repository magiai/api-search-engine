
import { useState } from "react";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import prepareUrlForInstitution from "./prepareUrlForInstitution";

export default function prepareArtworks(
    urlStart: string, 
    urlEnd: string, 
    keyWordForData: string,
):object {
    const [apiResponse, setApiResponse] = useState<IApiResponse>();
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    console.log(apiUrl);
    setApiResponse(useApiGet(apiUrl));
    console.log(apiResponse)
    const artworks = apiResponse?.data?.data;

    return artworks;
}
