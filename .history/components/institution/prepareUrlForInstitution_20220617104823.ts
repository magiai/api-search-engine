import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    searchedPhrase: string,
    urlEnd?: string,
): string {
    let institutionUrl = '';
    // const [institutionUrl, setInstitutionUrl] = useState<string>('');
    // const searchedPhrase = useAppSelector(selectSearch);
    console.log(searchedPhrase);

    // const getInstitutionUrl = () => {
        urlEnd ? 
        institutionUrl = urlStart + searchedPhrase + urlEnd :
        institutionUrl = urlStart + searchedPhrase;
    console.log(institutionUrl)
// 
    // }

    // useEffect(() => {
    //     // getInstitutionUrl();
    // }, [institutionUrl]);

    return institutionUrl;
}