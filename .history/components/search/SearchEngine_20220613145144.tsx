import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSearchedPhrase } from './searchSlice';
import formStyles from '../form/forms.module.css';
import searchStyles from './search.module.css';

export const SearchEngine = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [phraseValue, setSearchValue] = useState<string>('owl');

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value);
    }

    const handleSearchValueSubmit = (event: any) => {
        event.preventDefault();
        // dispatch(setSearchedPhrase(String(phraseValue)));
    }

    useEffect(() => {
        dispatch(setSearchedPhrase(String(phraseValue)));
        // handleSearchValueChange;
        console.log('How many times?');
    }, [handleSearchValueSubmit]);

    return (
        <form 
            className = { searchStyles['form--search--artworks'] }
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
  