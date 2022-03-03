import { createSlice } from '@reduxjs/toolkit';
import mockData from '../../data.json';

const initialState = {
  data: mockData,
  form: {
    content: '',
  },
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    initializeForm(state) {
      state.form.content = initialState.form.content;
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

export const { initializeForm, addComment, addRecomment } = reviewSlice.actions;
export default reviewSlice.reducer;
