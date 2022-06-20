import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    const searchedPhrase = useAppSelector(selectSearch);
    let institutionUrl: string = ''
    console.log(searchedPhrase);
    useEffect(() => {
        urlEnd ? 
        institutionUrl = urlStart + searchedPhrase + urlEnd :
        institutionUrl = urlStart + searchedPhrase;
        // handleSearchValueChange;
        console.log('How many times?');
    }, [searchedPhrase]);
   

    return institutionUrl;
}