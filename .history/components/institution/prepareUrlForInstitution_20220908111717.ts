import { useState, useEffect, useCallback } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    const [institutionUrl, setInstitutionUrl] = useState<string>('');
    const searchedPhrase = useAppSelector(selectSearch);

    const getInstitutionUrl = useCallback(() => {
        urlEnd ? 
        setInstitutionUrl(urlStart + searchedPhrase + urlEnd) :
        setInstitutionUrl(urlStart + searchedPhrase);
    }, [searchedPhrase]);

    useEffect(() => {
        getInstitutionUrl();
        console.log(getInstitutionUrl())
    }, [searchedPhrase]);

    return institutionUrl;
}