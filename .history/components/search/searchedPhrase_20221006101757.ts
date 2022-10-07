import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function getSearchedPhrase():string {
    console.log('phrase')
    return useAppSelector(selectSearch);
} 