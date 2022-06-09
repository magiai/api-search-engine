import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const searchedPhrase = () => {
    return const halko = useAppSelector(selectSearch);
}