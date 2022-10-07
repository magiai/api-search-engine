import _ from "lodash"
import { useCallback, useMemo } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectSearch } from "../search/searchSlice"

export default function getSearchedPhrase():string {
    useCallback(() => {
        const phrase = useAppSelector(selectSearch)
        console.log('phrase')
        return phrase
    }, [])
    // useMemo(() => {
    // }, [phrase])
} 

// const memoedPhrase = _.memoize(getSearchedPhrase)

// export default memoedPhrase

