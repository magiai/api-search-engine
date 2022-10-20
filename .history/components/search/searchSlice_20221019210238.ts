import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../app/store';

  export type SearchEngineState = {
    value: string;
  };
  
  export const initialState: SearchEngineState = {
    value: 'owl',
  };

  export const searchEngineSlice = createSlice({
    name: 'searchEngine',
    initialState,

    reducers: {
      setSearchedPhrase: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      },
    },
  });

  export const {
    setSearchedPhrase,
  } = searchEngineSlice.actions;
  
  export const selectSearch = (state: RootState) => state.searchEngine.value;
  
  export default searchEngineSlice.reducer;