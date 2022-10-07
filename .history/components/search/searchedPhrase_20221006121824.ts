import _ from "lodash"
import { useMemo } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectSearch } from "../search/searchSlice"

export default function getSearchedPhrase():string {
    const phrase = useAppSelector(selectSearch)
    useMemo(() => {
        return phrase
    }, [phrase])
} 

// const memoedPhrase = _.memoize(getSearchedPhrase)

// export default memoedPhrase

