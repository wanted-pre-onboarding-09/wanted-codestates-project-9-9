import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reviewSlice from './review/reviewSlice';
import modalValueSlice from './modalValue';

const reducers = combineReducers({
  review: reviewSlice,
  isOpenModal: modalValueSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  serializableCheck: false,
});

export default store;
