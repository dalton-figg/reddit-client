import { createSlice } from '@reduxjs/toolkit';

export const selectionFilterSlice = createSlice({
  name: 'selectionFilter',
  initialState: 'JavaScript',
  reducers: {
    changeSelection: (state, action) => {
      return action.payload !== undefined ? action.payload : state;
    },
  },
});

export const { changeSelection } = selectionFilterSlice.actions;

export default selectionFilterSlice.reducer;
