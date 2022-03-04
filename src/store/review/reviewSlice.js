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
    increaseLikesNumber(state, action) {
      const initState = [...state.data];

      const dataset = initState.map((el) => {
        if (el.postNumber === action.payload) {
          // eslint-disable-next-line no-return-assign
          return { ...el, like: (el.like += 1), clicked: true };
        }
        return el;
      });
      state.data = dataset;
    },
    decreaseLikesNumber(state, action) {
      const initState = [...state.data];

      const dataset = initState.map((el) => {
        if (el.postNumber === action.payload) {
          // eslint-disable-next-line no-return-assign
          return { ...el, like: (el.like -= 1), clicked: false };
        }
        return el;
      });
      state.data = dataset;
    },
  },
  extraReducers: {},
});

export const {
  initializeForm,
  addComment,
  addRecomment,
  increaseLikesNumber,
  decreaseLikesNumber,
} = reviewSlice.actions;
export default reviewSlice.reducer;
