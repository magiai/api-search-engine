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

   const tryThis = (event: any) => useEffect(() => {
        handleSearchValueChange(event);
    }, [phraseValue]);

    const handleSearchValueSubmit = (event: any) => {
        event.preventDefault();
        dispatch(setSearchedPhrase(String(phraseValue)));
    }

    return (
        <form 
            className = { searchStyles['form--search--artworks'] }
            onSubmit = { handleSearchValueSubmit }    
        >
            <label className = { formStyles.label } htmlFor="search-input">Type subject to find artworks: </label>
            <input 
                type="search" 
                inputMode='search'
                id="search-input" 
                className = { formStyles.input }
                value = { phraseValue }
                onChange = { tryThis }
                
            />
            <button className = { formStyles.input } type='submit' name="submit-search" id="submit-search">Search</button>
        </form>
    );
  };
  