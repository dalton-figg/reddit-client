import { createSlice } from '@reduxjs/toolkit';

export const selectionFilterSlice = createSlice({
  name: 'selectionFilter',
  initialState: '',
  reducers: {
    changeSelection: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeSelection } = selectionFilterSlice.actions;

export default selectionFilterSlice.reducer;
