import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    const [institutionUrl, setInstitutionUrl] = <String>('');
    const searchedPhrase = useAppSelector(selectSearch);

    const callMeLater = () => {
        console.log(searchedPhrase);
        urlEnd ? 
        setInstitutionUrl(urlStart + searchedPhrase + urlEnd) :
        setInstitutionUrl(urlStart + searchedPhrase);
    }

    useEffect(() => {
        callMeLater();
    }, []);

    return institutionUrl;
}