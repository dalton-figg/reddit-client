import { configureStore } from '@reduxjs/toolkit';
// Import slice reducers
import postsSliceReducer from '../features/postsSlice';
import searchFilterReducer from '../features/searchFilterSlice';
import selectionFilterReducer from '../features/selectionFilterSlice';

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    searchFilter: searchFilterReducer,
    selectionFilter: selectionFilterReducer
  },
});
