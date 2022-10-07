import _ from "lodash"
import { useAppSelector } from "../../app/hooks"
import { selectSearch } from "../search/searchSlice"

function getSearchedPhrase():string {
    return useAppSelector(selectSearch)
} 

export const memoedPhrase = _.memoize(getSearchedPhrase)

