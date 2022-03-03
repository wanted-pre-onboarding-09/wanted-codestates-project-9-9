import { createSlice } from '@reduxjs/toolkit';
import mockData from '../../data.json';
import { Review } from '../../lib/register/generateReview';

const initialState = {
  data: mockData,
  totalCnt: 150261,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview(state, action) {
      state.totalCnt += 1;
      const { image, rating, content } = action.payload;
      const newReview = new Review(image, rating, content, state.totalCnt);

      state.data = [...state.data, newReview];
    },
  },
  extraReducers: {},
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
