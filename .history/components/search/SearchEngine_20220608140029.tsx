import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSearchedPhrase } from './searchSlice';
import formStyles from '../form/forms.module.css';
import searchStyles from './search.module.css';

export const SearchEngine:React.FC = () => {
    const dispatch = useAppDispatch();
    const [phraseValue, setSearchValue] = useState<string>('owl');

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value);
        dispatch(setSearchedPhrase(String(phraseValue)));
    }

    return (
        <form className = { searchStyles['form--search--artworks'] }>
            <label className = { formStyles.label } htmlFor="search-input">Type subject to find artworks: </label>
            <input 
                type="search" 
                inputMode='search'
                id="search-input" 
                className = { formStyles.input }
                value = { phraseValue }
                onChange = { handleSearchValueChange }
            />
        </form>
    );
  };
  