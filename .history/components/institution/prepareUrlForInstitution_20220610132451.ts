import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function prepareUrlForInstitution(
    urlStart: string, 
    urlEnd?: string
): string {
    const searchedPhrase = useAppSelector(selectSearch);
    const institutionUrl = urlStart + searchedPhrase + urlEnd;

    return institutionUrl;
}