import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    searchedPhrase: string,
    urlEnd?: string,
): string {
    const [institutionUrl, setInstitutionUrl] = useState<string>('');
    // const searchedPhrase = useAppSelector(selectSearch);
    console.log(searchedPhrase);

    const getInstitutionUrl = () => {
        urlEnd ? 
        setInstitutionUrl(urlStart + searchedPhrase + urlEnd) :
        setInstitutionUrl(urlStart + searchedPhrase);
    console.log(institutionUrl)

    }

    useEffect(() => {
        getInstitutionUrl();
    }, [institutionUrl]);

    return institutionUrl;
}