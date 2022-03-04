import { createSlice } from '@reduxjs/toolkit';
import mockData from '../../data.json';
import { Review } from '../../lib/register/generateReview';

const initialState = {
  data: mockData,
  totalCnt: 150261,
  form: {
    content: '',
  },
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview(state, action) {
      state.totalCnt += 1;
      const { image, rating, content } = action.payload;
      const newReview = new Review(image, rating, content, state.totalCnt);

      state.data = [newReview, ...state.data];
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
    initializeForm(state) {
      state.form.content = initialState.form.content;
    },
    latestOrder(state) {
      state.data = [...initialState.data].sort(
        (a, b) => b.postNumber - a.postNumber,
      );
    },
    reviewOrder(state) {
      state.data = [...initialState.data].sort(
        (a, b) => b.comments.length - a.comments.length,
      );
    },
    randomOrder(state) {
      state.data = [...initialState.data].sort(
        () => Math.random() - Math.random(),
      );
    },
    extraReducers: {},
  },
});

export const {
  initializeForm,
  addReview,
  addComment,
  addRecomment,
  increaseLikesNumber,
  decreaseLikesNumber,
  latestOrder,
  reviewOrder,
  randomOrder,
} = reviewSlice.actions;

export default reviewSlice.reducer;
