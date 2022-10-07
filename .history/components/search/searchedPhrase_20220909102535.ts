import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const searchedPhrase = ():string => {
    return useAppSelector(selectSearch);
} 