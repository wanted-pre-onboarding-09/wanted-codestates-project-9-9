import { configureStore } from '@reduxjs/toolkit';
import reviewSlice from './review/reviewSlice';

const store = configureStore({
  reducer: {
    review: reviewSlice,
  },
});

export default store;
