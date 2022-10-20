import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setSearchedPhrase, initialState } from './searchSlice'
import formStyles from '../form/forms.module.css'
import searchStyles from './search.module.css'

export const SearchEngine = (): JSX.Element => {
    const dispatch = useAppDispatch()
    console.log(initialState.value)
    const [phraseValue, setSearchValue] = useState<string>('owl')

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value)
    }

    const handleSearchValueSubmit = (event: any) => {
        event.preventDefault()
        dispatch(setSearchedPhrase(String(phraseValue)))
    }

    return (
        <form 
            className = { searchStyles['form--search'] }
            onSubmit = { handleSearchValueSubmit }    
        >
            <label className = { formStyles.label } htmlFor="search-input">Type a phrase to find artworks: </label>
            <input 
                type="search" 
                inputMode='search'
                id="search-input" 
                className = { formStyles.input }
                value = { phraseValue }
                onChange = { handleSearchValueChange }
            />
            <button 
                className = { formStyles.input } 
                type='submit' 
                name="submit-search" 
                id="submit-search">Search
            </button>
        </form>
    );
  };
  