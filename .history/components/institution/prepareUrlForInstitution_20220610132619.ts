import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    const searchedPhrase = useAppSelector(selectSearch);
    let institutionUrl: string = ''
    urlEnd ? 
        institutionUrl = urlStart + searchedPhrase + urlEnd :
        institutionUrl = urlStart + searchedPhrase;

    return institutionUrl;
}