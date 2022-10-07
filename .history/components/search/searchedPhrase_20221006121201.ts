import _ from "lodash"
import { useAppSelector } from "../../app/hooks"
import { selectSearch } from "../search/searchSlice"

function getSearchedPhrase():string {
    const phrase = useAppSelector(selectSearch)
    return phrase
} 

export const memoedPhrase = _.memoize(getSearchedPhrase)

