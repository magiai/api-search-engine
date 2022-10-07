import { useMemo } from 'react';
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function getSearchedPhrase():string {
    useMemo(() => {
        const phrase = useAppSelector(selectSearch);
        return phrase;
    }, [phrase]);
    console.log(phrase)
} 