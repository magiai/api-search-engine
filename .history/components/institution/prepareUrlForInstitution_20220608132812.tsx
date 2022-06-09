import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

interface prepareUrlForInstitutionProps {
    urlStart: string;
    urlEnd: string;
}

export const prepareUrlForInstitution = ({ urlStart, urlEnd }: prepareUrlForInstitutionProps) => {
    console.log(urlStart);
    console.log(urlEnd);
    const searchedPhrase = useAppSelector(selectSearch);
    let url = urlStart + searchedPhrase + urlEnd;


    return url
}