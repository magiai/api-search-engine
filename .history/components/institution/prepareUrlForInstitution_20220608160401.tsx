import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";


export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd: string
): string {
    console.log(urlStart);
    console.log(urlEnd);
    const searchedPhrase = useAppSelector(selectSearch);
    let institutionUrl = urlStart + searchedPhrase + urlEnd;

    return institutionUrl;
}