import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    changePosts: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { changePosts } = postsSlice.actions;

export default postsSlice.reducer;
