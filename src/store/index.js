import { configureStore } from '@reduxjs/toolkit';

import formSlice from './form/formSlice';
import reviewSlice from './review/reviewSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    review: reviewSlice,
  },
});

export default store;
