import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    changePosts: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { changePosts } = postsSlice.actions;

export default postsSlice.reducer;
