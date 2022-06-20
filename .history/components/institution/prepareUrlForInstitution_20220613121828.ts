import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    let institutionUrl: string = ''
    const searchedPhrase = useAppSelector(selectSearch);

    const callMeLater = () => {
        console.log(searchedPhrase);
        urlEnd ? 
            institutionUrl = urlStart + searchedPhrase + urlEnd :
            institutionUrl = urlStart + searchedPhrase;
    }

    useEffect(() => {
        callMeLater();
    }, []);

    return institutionUrl;
}