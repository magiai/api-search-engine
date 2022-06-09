import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const searchedPhrase = () => {
    const halko = useAppSelector(selectSearch);
    console.log(halko)
    return { halko };
}