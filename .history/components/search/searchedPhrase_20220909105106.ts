import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function getSearchedPhrase():string {
    const phrase = useAppSelector(selectSearch);
    return phrase;
} 