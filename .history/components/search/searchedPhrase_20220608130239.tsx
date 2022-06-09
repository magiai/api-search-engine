import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const searchedPhrase = () => {
    return useAppSelector(selectSearch);
}