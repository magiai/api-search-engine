import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function searchedPhrase():string {
    const phrase = useAppSelector(selectSearch);
    return phrase;
} 