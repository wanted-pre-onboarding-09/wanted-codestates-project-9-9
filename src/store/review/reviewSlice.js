import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
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
  },
  extraReducers: {},
});

export const { initializeForm } = reviewSlice.actions;
export default reviewSlice.reducer;
