import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const getSearchedPhrase:string {
    const phrase = useAppSelector(selectSearch);
    return phrase;
} 