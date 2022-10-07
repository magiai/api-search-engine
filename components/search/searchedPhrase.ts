import _ from "lodash"
import { useAppSelector } from "../../app/hooks"
import { selectSearch } from "../search/searchSlice"

export default function getSearchedPhrase():string {
    return useAppSelector(selectSearch)
} 

