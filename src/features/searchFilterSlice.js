import { createSlice } from '@reduxjs/toolkit';

export const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState: '',

  reducers: {
    changeSearch: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeSearch } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
