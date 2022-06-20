import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    const [institutionUrl, setInstitutionUrl] = useState<string>('');
    const searchedPhrase = useAppSelector(selectSearch);

    useEffect(() => {
        const getInstitutionUrl = () => {
            urlEnd ? 
            setInstitutionUrl(urlStart + searchedPhrase + urlEnd) :
            setInstitutionUrl(urlStart + searchedPhrase);
        }

        getInstitutionUrl();
        // console.log(institutionUrl);

    }, [searchedPhrase, institutionUrl]);

    // console.log(institutionUrl)
    return institutionUrl;
}