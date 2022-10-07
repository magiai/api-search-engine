import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const searchedPhrase:string {
    const phrase = useAppSelector(selectSearch);
    return phrase;
} 