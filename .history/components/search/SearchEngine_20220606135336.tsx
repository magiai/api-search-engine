import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import {
  setSearchedPhrase,
  selectSearch,
} from './searchSlice';
import styles from '../form/forms.module.css';

const SearchEngine:React.FC = () => {
    const dispatch = useAppDispatch();
    const selectPhrase = useAppSelector(selectSearch);
    const [phraseValue, setSearchValue] = useState<string>('owl');

    const handleSearchValueChange = (event: any) => {
        setSearchValue(event?.target?.value);
        dispatch(setSearchedPhrase(String(phraseValue)));
    }

    return (
      <>
        <h2>
          The current phrase is { selectPhrase }
        </h2>
        <form>
            <label className = { styles.label } htmlFor="search-input">Search Input</label>
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