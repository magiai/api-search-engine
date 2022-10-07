import { useMemo } from 'react';
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function getSearchedPhrase():string {
    useMemo(() => {
        const phrase = useAppSelector(selectSearch);
        console.log(phrase)
        return phrase;
    }, [useAppSelector(selectSearch)]);
} 