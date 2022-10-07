import { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export default function getSearchedPhrase():string {
    useMemo(() => {
        console.log('phrase')
        return useAppSelector(selectSearch);
    }, [selectSearch])
    
} 