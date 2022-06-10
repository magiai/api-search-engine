
import { useState } from "react";
import { useApiGet, IApiResponse } from "../../api/useApiHook";
import prepareUrlForInstitution from "./prepareUrlForInstitution";

export default function prepareArtworks(
    urlStart: string, 
    urlEnd: string, 
    keyWordForData: string,
):object {
    // const 
    const apiUrl: string = prepareUrlForInstitution(urlStart, urlEnd);
    console.log(apiUrl);
    const apiResponse: IApiResponse = useApiGet(apiUrl);
    console.log(apiResponse)
    const artworks = apiResponse?.data?.data;

    return artworks;
}
