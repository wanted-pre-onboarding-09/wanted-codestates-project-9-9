import { createSlice } from '@reduxjs/toolkit';
import mockData from '../data.json';

const initialState = {
  data: mockData,
};

const detailPageDataSlice = createSlice({
  name: 'detailPageData',
  initialState,
  reducers: {
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
});

export const { increaseLikesNumber, decreaseLikesNumber } =
  detailPageDataSlice.actions;
export default detailPageDataSlice.reducer;
