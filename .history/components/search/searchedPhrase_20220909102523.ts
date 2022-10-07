import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const SearchedPhrase = ():string => {
    return useAppSelector(selectSearch);
} 