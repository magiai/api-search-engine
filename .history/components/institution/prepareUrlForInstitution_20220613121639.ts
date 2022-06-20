import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    let institutionUrl: string = ''

    const callMeLater = () => {
        const searchedPhrase = useAppSelector(selectSearch);
        console.log(searchedPhrase);
        urlEnd ? 
            institutionUrl = urlStart + searchedPhrase + urlEnd :
            institutionUrl = urlStart + searchedPhrase;
    }

    useEffect(() => {
        callMeLater();
    }, [searchedPhrase]);

    return institutionUrl;
}