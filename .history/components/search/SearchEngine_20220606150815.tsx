import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSearchedPhrase } from './searchSlice';
import styles from '../form/forms.module.css';

const SearchEngine:React.FC = () => {
    const dispatch = useAppDispatch();
    const [phraseValue, setSearchValue] = useState<string>('owl');

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value);
        dispatch(setSearchedPhrase(String(phraseValue)));
    }

    return (
      <>
        <form className = { styles['form--search--artwork'] }>
            <label className = { styles.label } htmlFor="search-input">Type subject to find artworks: </label>
            <input 
                id="search-input" 
                className = { styles.input }
                type="search" 
                value = { phraseValue }
                onChange = { handleSearchValueChange }
                inputMode='search'
            />
        </form>
      </>
    );
  };
  
  export default SearchEngine;