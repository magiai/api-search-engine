import { useState, useEffect, useCallback } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    let institutionUrl = '';
    // const [institutionUrl, setInstitutionUrl] = useState<string>('');
    const searchedPhrase = useAppSelector(selectSearch);

    const getInstitutionUrl = useCallback(() => {
        urlEnd ? 
        institutionUrl = urlStart + searchedPhrase + urlEnd :
        institutionUrl = urlStart + searchedPhrase;
    }, [searchedPhrase]);

    useEffect(() => {
        getInstitutionUrl();
    }, [searchedPhrase]);

    // console.log(institutionUrl)

    return institutionUrl;
}