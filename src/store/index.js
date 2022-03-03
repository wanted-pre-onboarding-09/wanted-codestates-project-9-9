import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data/dataSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
