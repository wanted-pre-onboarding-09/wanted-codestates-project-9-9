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
    addComment: (state, action) => {
      const currentReview = state.data.filter(
        (review) => review.postNumber === action.payload.postNumber,
      );

      currentReview[0].comments.push(action.payload.newComment);
    },
    addRecomment: (state, action) => {
      const currentReview = state.data.filter(
        (review) => review.postNumber === action.payload.postNumber,
      );
      const currentComment = currentReview[0].comments.filter(
        (comment) => comment.id === action.payload.commentId,
      );

      currentComment[0].recomment.push(action.payload.newRecomment);
    },
  },
  extraReducers: {},
});

export const { addReview, addComment, addRecomment } = reviewSlice.actions;
export default reviewSlice.reducer;
