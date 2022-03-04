import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import formSlice from './form/formSlice';
import reviewSlice from './review/reviewSlice';
import detailPageDataSlice from './detailPageData';
import modalValueSlice from './modalValue';

const reducers = combineReducers({
  review: reviewSlice,
  form: formSlice,
  detailData: detailPageDataSlice,
  isOpenModal: modalValueSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  serializableCheck: false,
});

export default store;
