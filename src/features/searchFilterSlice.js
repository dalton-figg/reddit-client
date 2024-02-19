import { createSlice } from '@reduxjs/toolkit';

export const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState: '',

  reducers: {
    changeSearch: (state, action) => {
      return action.payload !== undefined ? action.payload : state;
    },
  },
});

export const { changeSearch } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
