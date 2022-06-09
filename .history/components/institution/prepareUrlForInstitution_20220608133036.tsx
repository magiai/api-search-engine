import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

interface prepareUrlForInstitutionProps {
    urlStart: string;
    urlEnd: string;
}

export default function prepareUrlForInstitution(props: prepareUrlForInstitutionProps) {
    console.log(props.urlStart);
    console.log(props.urlEnd);
    const searchedPhrase = useAppSelector(selectSearch);
    let url = props.urlStart + searchedPhrase + props.urlEnd;


    return url
}