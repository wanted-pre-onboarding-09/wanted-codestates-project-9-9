import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image: null,
  rating: '',
  content: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeField(state, { payload: { key, value } }) {
      state[key] = value;
    },
    initializeForm(state) {
      state.image = initialState.image;
      state.rating = initialState.rating;
      state.content = initialState.content;
    },
  },
});

export const { changeField, initializeForm } = formSlice.actions;
export default formSlice.reducer;
