import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reviewSlice from './review/reviewSlice';
import detailPageDataSlice from './detailPageData';
import modalValueSlice from './modalValue';

const reducers = combineReducers({
  review: reviewSlice,
  detailData: detailPageDataSlice,
  isOpenModal: modalValueSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  serializableCheck: false,
});

export default store;
