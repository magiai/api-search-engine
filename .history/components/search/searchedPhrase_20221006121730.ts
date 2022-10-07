import _ from "lodash"
import { useMemo } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectSearch } from "../search/searchSlice"

const phrase = useAppSelector(selectSearch)
export default function getSearchedPhrase():string {
    useMemo(() => {
        return phrase
    }, [phrase])
} 

// const memoedPhrase = _.memoize(getSearchedPhrase)

// export default memoedPhrase

