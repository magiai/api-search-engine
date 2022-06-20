import { useState, useEffect, useCallback } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    // searchedPhrase: string,
    urlEnd?: string
): string {
    const [institutionUrl, setInstitutionUrl] = useState<string>('');
    const searchedPhrase = useAppSelector(selectSearch);

    const getInstitutionUrl = () => {
        urlEnd ? 
        setInstitutionUrl(urlStart + searchedPhrase + urlEnd) :
        setInstitutionUrl(urlStart + searchedPhrase);
    }

    useEffect(() => {

        getInstitutionUrl();
        // console.log(institutionUrl);

    }, [searchedPhrase]);

    // console.log(institutionUrl)
    return institutionUrl;
}